package com.cldbiz.security.filter.support;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ReadListener;
import javax.servlet.ServletInputStream;

import org.apache.tomcat.util.http.fileupload.IOUtils;

public class BufferedInputServletStream extends ServletInputStream {

    private byte[] myBytes;
    private int readLimit = -1;
    private int markedPosition = -1;
	private int lastIndexRetrieved = -1;
    private ReadListener readListener = null;

    public BufferedInputServletStream(ByteArrayOutputStream cachedBytes) {
		myBytes = cachedBytes.toByteArray();
	}
	
	@Override
	public boolean isFinished() {
		return (lastIndexRetrieved == myBytes.length-1);
	}

	@Override
	public boolean isReady() {
		return isFinished();
	}

	@Override
    public int available() throws IOException {
        return (myBytes.length-lastIndexRetrieved-1);
    }

	@Override
	public void setReadListener(ReadListener listener) {
		this.readListener = readListener;
        if (!isFinished()) {
            try {
                readListener.onDataAvailable();
            } catch (IOException e) {
                readListener.onError(e);
            }
        } else {
            try {
                readListener.onAllDataRead();
            } catch (IOException e) {
                readListener.onError(e);
            }
        }
	}

	@Override
	public int read() throws IOException {
		int i;
        if (!isFinished()) {
            i = myBytes[lastIndexRetrieved+1];
            lastIndexRetrieved++;
            if (isFinished() && (readListener != null)) {
                try {
                    readListener.onAllDataRead();
                } catch (IOException ex) {
                    readListener.onError(ex);
                    throw ex;
                }
                readLimit = -1;
            }
            if (readLimit != -1) {
                if ((lastIndexRetrieved - markedPosition) > readLimit) {
                    markedPosition = -1;
                    readLimit = -1;
                }
            }
            return i;
        } else {
            return -1;
        }
	}
	
    @Override
    public void close() throws IOException {
        lastIndexRetrieved = myBytes.length-1;
    }
    
    @Override
    public boolean markSupported() {
        return true;
    }

    @Override
    public synchronized void mark(int readLimit) {
        this.readLimit = readLimit;
        this.markedPosition = lastIndexRetrieved;
    }

    @Override
    public synchronized void reset() throws IOException {
        if (markedPosition == -1) {
            throw new IOException("No mark found");
        } else {
            lastIndexRetrieved = markedPosition;
            readLimit = -1;
        }
    }
}
