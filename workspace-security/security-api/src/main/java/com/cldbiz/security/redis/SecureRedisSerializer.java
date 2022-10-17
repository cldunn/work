package com.cldbiz.security.redis;

import java.io.ByteArrayInputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.io.serialization.ValidatingObjectInputStream;
import org.springframework.core.convert.converter.Converter;
import org.springframework.core.serializer.support.SerializingConverter;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.SerializationException;
import org.springframework.lang.Nullable;
import org.springframework.util.Assert;

/*************************************************************************************/
/* Unused example of secure serializer,  limits data types that can be deserialized, */
/* uses org.apache.commons.io.serialization.ValidatingObjectInputStream              */
/*************************************************************************************/
public class SecureRedisSerializer implements RedisSerializer<Object> {
	private final Converter<Object, byte[]> serializer;
	static final byte[] EMPTY_ARRAY = new byte[0];
	
	public SecureRedisSerializer() {
		this(new SerializingConverter());
	}

	public SecureRedisSerializer(Converter<Object, byte[]> serializer) {
		Assert.notNull(serializer, "Serializer must not be null");
		this.serializer = serializer;
	}
	
	boolean isEmpty(@Nullable byte[] data) {
		return data == null || data.length == 0;
	}
	
	public Object deserialize(@Nullable byte[] bytes) {
		if (isEmpty(bytes)) {
			return null;
		}
		else {
			List<String> allowedClasses = 
				new ArrayList<String>(
					Arrays.asList(
						"com.cldbiz.security.domain.*", 
						"org.hibernate.*",
						"java.lang.*", 
						"java.time.*", 
						"java.math.*", 
						"java.util.*", 
						"[B"
					)
				);
			
			try (final ValidatingObjectInputStream vois = new ValidatingObjectInputStream(new ByteArrayInputStream(bytes))) {
				for (String clazz: allowedClasses) {
					vois.accept(clazz);
				}
				
				return vois.readObject();
			}
			catch (Exception e) {
				throw new SerializationException(e.getMessage(), e);
			}
		}
	}
	
	public byte[] serialize(@Nullable Object object) {
		if (object == null) {
			return EMPTY_ARRAY;
		}
		else {
			try {
				return (byte[]) this.serializer.convert(object);
			}
			catch (Exception exp) {
				throw new SerializationException("Cannot serialize", exp);
			}
		}
	}
}
