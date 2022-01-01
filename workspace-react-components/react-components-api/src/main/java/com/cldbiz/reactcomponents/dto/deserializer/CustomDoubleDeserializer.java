package com.cldbiz.reactcomponents.dto.deserializer;

import java.io.IOException;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.NumberFormat;
import java.util.Locale;

import org.springframework.util.StringUtils;

import com.cldbiz.reactcomponents.annotations.AsForeignCurrency;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.BeanProperty;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.deser.ContextualDeserializer;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.ser.ContextualSerializer;

public class CustomDoubleDeserializer extends StdDeserializer<Double> implements ContextualDeserializer {

	private AsForeignCurrency annotation;
	
	public CustomDoubleDeserializer() {
        super(Double.class);
    }
	
	@Override
	public JsonDeserializer<?> createContextual(DeserializationContext ctxt, BeanProperty property)
			throws JsonMappingException {
		annotation = property.getAnnotation(AsForeignCurrency.class);
		
		return this;
	}

	@Override
	public Double deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
		String value = p.getValueAsString();
		if (annotation != null) { 
			if (StringUtils.hasLength(annotation.loc())) {
				Locale locale = Locale.forLanguageTag(annotation.loc());
				value = getCurrencyString(locale, value);
			}
			else {
				value = getCurrencyString(annotation, value);
			}
		}

		return Double.parseDouble(value);
	}

	private String getCurrencyString(Locale locale, String value) {
		DecimalFormat nf = (DecimalFormat) NumberFormat.getInstance(locale);
		DecimalFormatSymbols symbols = nf.getDecimalFormatSymbols();
		
		value = value.replace(nf.getCurrency().getSymbol(), "");
		value = value.replace(String.valueOf(symbols.getGroupingSeparator()), "");
		value = value.replace(String.valueOf(symbols.getDecimalSeparator()), ".");
		
		return value;
	}
	
	private String getCurrencyString(AsForeignCurrency annotation, String value) {
		if (StringUtils.hasLength(annotation.sym())) {
			value = value.replace(annotation.sym(), "");
		}

		if (StringUtils.hasLength(annotation.grp())) {
			value = value.replace(annotation.grp(), "");
		}
		
		if (StringUtils.hasLength(annotation.sep())) {
			value = value.replace(annotation.sep(), ".");
		}

		return value;
	}

}
