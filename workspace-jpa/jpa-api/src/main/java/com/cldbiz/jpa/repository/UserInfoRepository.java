package com.cldbiz.jpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.cldbiz.jpa.domain.UserInfo;

@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo, Long>, JpaSpecificationExecutor<UserInfo> {
	void deleteByIdIn(List<Long> ids);
}
