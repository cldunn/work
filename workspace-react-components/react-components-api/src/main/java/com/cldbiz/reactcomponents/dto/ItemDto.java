package com.cldbiz.reactcomponents.dto;

import java.math.BigDecimal;
import java.time.ZonedDateTime;

import com.cldbiz.reactcomponents.domain.BaseDomain;
import com.cldbiz.reactcomponents.domain.Item;

public class ItemDto {
	private Long id;
	
	private String itemId;
	
	private String description;
	
	private Integer quantity;
	
	private BigDecimal price;
	
	private ZonedDateTime fulfillmentDttm;
	
	private Boolean inStock;

	public ItemDto() {}

	public ItemDto(Item item) {
		this.id = item.getId();
		this.itemId = item.getItemId(); 
		this.description = item.getDescription();  
		this.quantity = item.getQuantity(); 
		this.price = item.getPrice(); 
		this.fulfillmentDttm = item.getFulfillmentDttm();  
		this.inStock = item.getInStock(); 
	}
	
	public ItemDto(
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
