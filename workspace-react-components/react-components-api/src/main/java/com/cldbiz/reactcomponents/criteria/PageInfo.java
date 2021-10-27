package com.cldbiz.reactcomponents.criteria;

public class PageInfo {
	private Integer page;
	
	private Integer pageSz;
	
	private String orderBy;
	
	private String orderDir;

	public PageInfo() {}
	
	public PageInfo(Integer page, Integer pageSz, String orderBy, String orderDir) {
		this.page = page;
		this.pageSz = pageSz;
		this.orderBy = orderBy;
		this.orderDir = orderDir;
	}
	
	public Integer getPage() {
		return page;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public Integer getPageSz() {
		return pageSz;
	}

	public void setPageSz(Integer pageSz) {
		this.pageSz = pageSz;
	}

	public String getOrderBy() {
		return orderBy;
	}

	public void setOrderBy(String orderBy) {
		this.orderBy = orderBy;
	}

	public String getOrderDir() {
		return orderDir;
	}

	public void setOrderDir(String orderDir) {
		this.orderDir = orderDir;
	}
}
