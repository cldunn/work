package com.cldbiz.reactcomponents.criteria;

import java.math.BigDecimal;
import java.time.ZonedDateTime;

public class ItemCriteria extends PageInfo {
	private Long id;
	
	private String itemId;
	
	private String description;
	
	private Integer quantity;
	
	private BigDecimal price;
	
	private ZonedDateTime fulfillmentDttm;
	
	private Boolean inStock;

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
