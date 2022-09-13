package com.cldbiz.react.util;

import java.security.MessageDigest;
import java.util.Base64;
import java.util.List;
import java.util.StringJoiner;

public class HashGeneratorUtil {

	public static String generateHash(List<String> values) throws Exception {
		MessageDigest digester = MessageDigest.getInstance("SHA-256");
		
		StringJoiner sj = new StringJoiner("|");
		values.stream().forEach(sj::add);
		String valueStr = sj.toString();
		byte[] data = valueStr.getBytes();

		digester.update(data);
		byte[] digestedData = digester.digest();
		return Base64.getEncoder().encodeToString(digestedData);
	}
}
