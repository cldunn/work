package com.cldbiz.jpa.repository.specification;

import java.sql.Date;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.stream.Collectors;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.persistence.criteria.Subquery;

import org.springframework.data.jpa.domain.Specification;

import com.cldbiz.jpa.domain.Role;
import com.cldbiz.jpa.domain.UserInfo;
import com.cldbiz.jpa.domain.UserInfo_;
import com.cldbiz.jpa.dto.UserProfileDto;

public class UserInfoSpecification implements Specification<UserInfo> {
	private UserProfileDto userProfileDto;
	
	public UserInfoSpecification() {
		super();
	}
	
	public UserInfoSpecification(UserProfileDto userProfileDto) {
		super();
		this.userProfileDto = userProfileDto;
	}
	
	@Override
	public Predicate toPredicate(Root<UserInfo> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
		Predicate p = cb.conjunction();
		
		if (userProfileDto.getEmailAddress() != null) {
			p.getExpressions().add(cb.like(root.get("emailAddress"), "%" + userProfileDto.getEmailAddress() + "%"));
		}
		
		if (userProfileDto.getState() != null) {
			p.getExpressions().add(cb.equal(root.get("state"), userProfileDto.getState()));
		}

		if (userProfileDto.getZip() != null) {
			p.getExpressions().add(cb.equal(root.get("zip"), userProfileDto.getZip()));
		}

		if (userProfileDto.getRoleIds().size() > 0) {
            Subquery<UserInfo> sq = query.subquery(UserInfo.class);
            Root<Role> role = sq.from(Role.class);
            Join<Role, UserInfo> sqUser = role.join("userInfos");
            sq.select(sqUser).where(role.get("id").in(userProfileDto.getRoleIds()));
            
            p.getExpressions().add(cb.in(root).value(sq));
		}
		
		Predicate dp = cb.disjunction();
		dp.getExpressions().add(cb.isNull(root.get(UserInfo_.passwordExpireDate).as(java.sql.Date.class)));
		dp.getExpressions().add(cb.greaterThan(root.get(UserInfo_.passwordExpireDate).as(java.sql.Date.class), cb.currentDate()));
		
		return cb.and(p, dp);
	}

}
