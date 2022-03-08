package com.cldbiz.jpa.dto;

import java.util.ArrayList;
import java.util.List;

public class PageDto<T> {
	private Long total;
	private List<T> rows = new ArrayList<T>();
	
	public PageDto(Long total, List<T> rows) {
		this.total = total;
		this.rows.clear();
		this.rows.addAll(rows);
	}
	
	public Long getTotal() {
		return total;
	}
	
	public void setTotal(Long total) {
		this.total = total;
	}
	
	public List<T> getRows() {
		return rows;
	}
	
	public void setRows(List<T> rows) {
		this.rows.clear();
		this.rows = rows;
	}
}
