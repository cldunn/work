package com.cldbiz.reactcomponents.common;

import java.util.ArrayList;
import java.util.List;

public class SearchResult<T> {
	private Integer total;
	private List<T> dtos = new ArrayList<T>();

	public SearchResult(Integer total, List<T> dtos) {
		this.total = total;
		this.dtos.addAll(dtos);
	}
	
	public Integer getTotal() {
		return total;
	}
	
	public void setTotal(Integer total) {
		this.total = total;
	}
	
	public List<T> getDtos() {
		return dtos;
	}
	
	public void setDtos(List<T> dtos) {
		this.dtos = dtos;
	}
}
