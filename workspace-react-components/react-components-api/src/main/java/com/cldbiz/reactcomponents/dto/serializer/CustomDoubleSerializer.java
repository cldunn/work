package com.cldbiz.reactcomponents.dto.serializer;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.NumberFormat;
import java.util.Locale;

import org.springframework.util.StringUtils;

import com.cldbiz.reactcomponents.annotations.AsForeignCurrency;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.BeanProperty;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.ContextualSerializer;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;


public class CustomDoubleSerializer extends StdSerializer<Double> implements ContextualSerializer {
	
	private AsForeignCurrency annotation;
	
	public CustomDoubleSerializer() {
        super(Double.class, true);
    }

	@Override
	public JsonSerializer<?> createContextual(SerializerProvider prov, BeanProperty property)
			throws JsonMappingException {
		annotation = property.getAnnotation(AsForeignCurrency.class);

        return this;
	}

	
	@Override
	public void serialize(Double value, JsonGenerator gen, SerializerProvider provider) throws IOException {
		if (annotation != null) { 
			if (StringUtils.hasLength(annotation.loc())) {
				Locale locale = Locale.forLanguageTag(annotation.loc());
				gen.writeString(getCurrencyString(locale, value));
			}
			else {
				gen.writeString(getCurrencyString(annotation, value));
			}
		}
		else {
			gen.writeNumber(value);
		}
	}

	private String getCurrencyString(Locale locale, Double value) {
		DecimalFormat df = new DecimalFormat();
		df.setMinimumFractionDigits(annotation.pre());
		df.setMaximumFractionDigits(annotation.pre());
		df.setRoundingMode(RoundingMode.HALF_UP);

		return df.getCurrencyInstance(locale).format(value);
	}
	
	private String getCurrencyString(AsForeignCurrency annotation, Double value) {
		DecimalFormat df = new DecimalFormat();
		DecimalFormatSymbols symbols = new DecimalFormatSymbols();
		
		if (StringUtils.hasLength(annotation.grp())) {
			symbols.setGroupingSeparator(annotation.grp().charAt(0)); 
		}
		else {
			df.setGroupingUsed(false);
			df.setDecimalSeparatorAlwaysShown(false);
		}
		symbols.setDecimalSeparator(annotation.sep().charAt(0)); 

		df.setMinimumFractionDigits(annotation.pre());
		df.setMaximumFractionDigits(annotation.pre());
		df.setRoundingMode(RoundingMode.HALF_UP);
		df.setDecimalFormatSymbols(symbols);

		String strVal = df.format(value);
		if (StringUtils.hasLength(annotation.sym())) {
			strVal = annotation.sym() + strVal;
		}
		
		return strVal;
	}

}
