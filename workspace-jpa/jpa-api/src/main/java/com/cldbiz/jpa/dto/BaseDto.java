package com.cldbiz.jpa.dto;

import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.cldbiz.jpa.domain.BaseDomain;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class BaseDto {
	public static enum Direction {ASC, DESC};
	
	private Long id;

	private Integer pgOffset = 0;
	
	private Integer pgSize = 100;
	
	private String sortBy;
	
	private Direction direction;
	
	protected BaseDto() {}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getPgOffset() {
		return pgOffset;
	}

	public void setPgOffset(Integer pgOffset) {
		this.pgOffset = pgOffset;
	}

	public Integer getPgSize() {
		return pgSize;
	}

	public void setPgSize(Integer pgSize) {
		this.pgSize = pgSize;
	}

	public String getSortBy() {
		return sortBy;
	}

	public void setSortBy(String sortBy) {
		this.sortBy = sortBy;
	}

	public Direction getDirection() {
		return direction;
	}

	public void setDirection(Direction direction) {
		this.direction = direction;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BaseDto other = (BaseDto) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@JsonIgnore
	public Pageable getPageable() {
		Pageable pageable = null;
		if (sortBy != null) {
			// TODO: mulitple column/direction sorting?
			String sortColumns[] = sortBy.split(",");
			
			Sort.Direction sortDirection = Sort.Direction.ASC;
			if (direction != null && direction.equals(Direction.DESC)) {
				sortDirection = Sort.Direction.DESC;
			}
			
			Sort sort = Sort.by(sortDirection, sortColumns);
			
			pageable = PageRequest.of(pgOffset, pgSize, sort);
		}
		else {
			pageable = PageRequest.of(pgOffset, pgSize);
		}
		
		return pageable;
	}
	
	@JsonIgnore
	public RowBounds getRowBounds() {
		return new RowBounds(pgOffset, pgSize);
	}
}
