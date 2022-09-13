package com.cldbiz.security.exception;

public class EncryptionException extends RuntimeException {

	public EncryptionException(String msg, Throwable ex) {
		super(msg, ex);
	}
}
