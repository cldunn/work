package com.cldbiz.reactcomponents.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.cldbiz.reactcomponents.annotations.AsForeignCurrency;

public class RecordDto {
	private Long id;

	private String name;
	
	private String password;
	
	private String email;
	
	private String gender;
	
	// @JsonFormat(pattern="yyyy-MM-dd")
	private Date date;
	
	@AsForeignCurrency(sep=",")
	private Double currency;
	
	public RecordDto() {}
	
	public RecordDto(Long id, String name, String password,	String email,
					 String gender,	Date date, Double currency) {
		this.setId(id);
		this.setName(name);
		this.setPassword(password);
		this.setEmail(email);
		this.setGender(gender);
		this.setDate(date);
		this.setCurrency(currency);
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getGender() {
		return gender;
	}
	
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public Date getDate() {
		return date;
	}
	
	public void setDate(Date date) {
		this.date = date;
	}
	
	public Double getCurrency() {
		return currency;
	}
	
	public void setCurrency(Double currency) {
		this.currency = currency;
	}
}
