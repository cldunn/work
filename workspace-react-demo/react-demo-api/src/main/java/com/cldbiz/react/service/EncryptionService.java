package com.cldbiz.react.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.security.KeyStore;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.cert.Certificate;
import java.util.Base64;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.crypto.Cipher;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.util.ResourceUtils;

import com.cldbiz.react.exception.EncryptionException;


@Configuration
public class EncryptionService {
	private static final Logger logger = Logger.getLogger(EncryptionService.class.getName());
	
	public static final String LINE_SEPARATOR = System.getProperty("line.separator");
	public static final String X509_PEM_HEADER = "-----BEGIN PUBLIC KEY-----";
	public static final String X509_PEM_FOOTER = "-----END PUBLIC KEY-----";
	
	private PublicKey publicKey = null;
	private PrivateKey privateKey = null;
	
	@Autowired
	Environment env;
	
	@Autowired
	ResourceLoader resourceLoader;
	
	private PublicKey initPublicKey(String certFileName, String storePass, String certAlias) throws Exception {
		FileInputStream file = null;
		try {
			KeyStore store = KeyStore.getInstance(KeyStore.getDefaultType());
			Resource resource = resourceLoader.getResource(certFileName);
			store.load(resource.getInputStream(), storePass.toCharArray());
			
			Certificate cert = store.getCertificate(certAlias);
			PublicKey pubKey = cert.getPublicKey();
			
			return pubKey;
		}
		finally {
			if (file != null) file.close();
		}
	}
	
	private Key initPrivateKey(String certFileName, String storePass, String certAlias) throws Exception {
		FileInputStream file = null;
		try {
			KeyStore store = KeyStore.getInstance(KeyStore.getDefaultType());
			Resource resource = resourceLoader.getResource(certFileName);
			store.load(resource.getInputStream(), storePass.toCharArray());
			
			Key key = store.getKey(certAlias, storePass.toCharArray());
			
			return key;
		}
		finally {
			if (file != null) file.close();
		}
	}
	
	// keytool -genkeypair -keystore cldbiz.p12 -keyalg RSA -storetype PKCS12 -storepass cldStorePass -alias cldCert -keypass cldKeyPass -keysize 2048 -validity 3650
	@PostConstruct
	public void initilizeKeys() {
		try {
			// String certFileName = env.getProperty("cert.filepath");
			// String storePass = env.getProperty("cert.storepass");
			// String certAlias = env.getProperty("cert.alias");
			
			String certFileName = env.getProperty("server.ssl.key-store");
			String storePass = env.getProperty("server.ssl.key-store-password");
			String certAlias = env.getProperty("server.ssl.key-alias");

			publicKey = initPublicKey(certFileName, storePass, certAlias);
			privateKey = (PrivateKey) initPrivateKey(certFileName, storePass, certAlias);
		}
		catch (Exception ex) {
			logger.log(Level.SEVERE, ex.getMessage());
		}
	}
	
	public String decrypt(String encryptedStr) throws Exception {
		String decryptedString = null;
		try {
			Cipher cipher = Cipher.getInstance("RSA/ECB/OAEPWithSHA-256AndMGF1Padding");
			cipher.init(Cipher.DECRYPT_MODE, privateKey);
			
			byte[] decryptedBytes = cipher.doFinal(Base64.getDecoder().decode(encryptedStr.getBytes()));
			decryptedString = new String(decryptedBytes, StandardCharsets.UTF_8);
		}
		catch (Exception ex) {
			logger.log(Level.SEVERE, "Decryption Failed");
			throw new EncryptionException(ex.getMessage(), ex);
		}
		
		return decryptedString;
	}

	public String encrypt(String plainText) throws Exception {
		String encryptedString = null;
		try {
			Cipher cipher = Cipher.getInstance("RSA/ECB/OAEPWithSHA-256AndMGF1Padding");
			cipher.init(Cipher.ENCRYPT_MODE, publicKey);
			
			byte[] encryptedBytes = cipher.doFinal(plainText.getBytes());
			encryptedString = Base64.getEncoder().encodeToString(encryptedBytes);
		}
		catch (Exception ex) {
			logger.log(Level.SEVERE, "Encryption Failed");
			throw new EncryptionException(ex.getMessage(), ex);
		}
		
		return encryptedString;
	}
	
	public String getPublicKey() {
		String base64PublicKey = Base64.getEncoder().encodeToString(publicKey.getEncoded());
		byte[] encodedPublicKey = Base64.getDecoder().decode(base64PublicKey);
		
		Base64.Encoder encoder = Base64.getMimeEncoder(64, LINE_SEPARATOR.getBytes());
		String encodedPublicKeyStr = new String(encoder.encode(encodedPublicKey));
		
		String pk =  X509_PEM_HEADER + LINE_SEPARATOR + encodedPublicKeyStr + LINE_SEPARATOR + X509_PEM_FOOTER;
		
		return pk;
	}
}
