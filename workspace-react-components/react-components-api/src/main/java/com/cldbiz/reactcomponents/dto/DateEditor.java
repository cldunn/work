package com.cldbiz.reactcomponents.dto;

import java.beans.PropertyEditorSupport;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateEditor extends PropertyEditorSupport {
	 SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

	@Override
    public String getAsText() {
		 Date date = (Date) getValue();
		 return formatter.format(date);
    }
    
    @Override
    public void setAsText(String text) throws IllegalArgumentException {
    	try {
    		setValue(formatter.parse(text));
    	}
    	catch (ParseException ex) {
    		setValue(null);
    	}
    }
}
