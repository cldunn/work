package com.cldbiz.reactcomponents.service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

import com.cldbiz.reactcomponents.criteria.ItemCriteria;
import com.cldbiz.reactcomponents.criteria.PageInfo;
import com.cldbiz.reactcomponents.dto.ItemDto;


@Service
public class ReactComponentsService {
	public List<ItemDto> searchItems(ItemCriteria itemCriteria) {
		List<ItemDto> itemDtos = new ArrayList<ItemDto>();

		for(int i=10; i<=75; i++) {
			BigDecimal randDec = new BigDecimal(  Math.random() * 20 ).setScale(2, RoundingMode.HALF_UP);
			Long randLong = Math.round(randDec.doubleValue());
			
			String itemId = "Part-" + i + "-" + randomString() + "-" + randLong;
			String description = randomString() + "-" + randLong; 
			Integer quantity = randLong.intValue(); 
			BigDecimal price = randDec; 
			ZonedDateTime fulfillmentDttm = ZonedDateTime.now().plusDays(randLong);
			Boolean inStock = (randLong % 2) == 0 ? true : false;
			
			itemDtos.add(new ItemDto((long) i, itemId, description, quantity, price, fulfillmentDttm, inStock));
		}
		 
		return itemDtos;
	}
	
	private String randomString() {
		int leftLimit = 48; // numeral '0'
	    int rightLimit = 122; // letter 'z'
	    int targetStringLength = 10;
	    Random random = new Random();
	
		String generatedString = random.ints(leftLimit, rightLimit + 1)
	    .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
	    .limit(targetStringLength)
	    .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
	    .toString();
		
		return generatedString;
	}
}
