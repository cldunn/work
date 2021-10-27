package com.cldbiz.reactcomponents.domain;

import java.math.BigDecimal;
import java.time.ZonedDateTime;

import com.cldbiz.reactcomponents.dto.ItemDto;

public class Item extends BaseDomain {
	private Long id;
	
	private String itemId;
	
	private String description;
	
	private Integer quantity;
	
	private BigDecimal price;
	
	private ZonedDateTime fulfillmentDttm;
	
	private Boolean inStock;

	public Item() {}
	
	public Item(ItemDto itemDto) {
		this.id = itemDto.getId();
		this.itemId = itemDto.getItemId(); 
		this.description = itemDto.getDescription();  
		this.quantity = itemDto.getQuantity(); 
		this.price = itemDto.getPrice(); 
		this.fulfillmentDttm = itemDto.getFulfillmentDttm();  
		this.inStock = itemDto.getInStock(); 
	}

	public Item(
		Long id,
		String itemId, 
		String description, 
		Integer quantity, 
		BigDecimal price, 
		ZonedDateTime fulfillmentDttm, 
		Boolean inStock) {

		this.id = id;
		this.itemId = itemId; 
		this.description = description;  
		this.quantity = quantity; 
		this.price = price; 
		this.fulfillmentDttm = fulfillmentDttm;  
		this.inStock = inStock; 
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getItemId() {
		return itemId;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public ZonedDateTime getFulfillmentDttm() {
		return fulfillmentDttm;
	}

	public void setFulfillmentDttm(ZonedDateTime fulfillmentDttm) {
		this.fulfillmentDttm = fulfillmentDttm;
	}

	public Boolean getInStock() {
		return inStock;
	}

	public void setInStock(Boolean inStock) {
		this.inStock = inStock;
	}
}
