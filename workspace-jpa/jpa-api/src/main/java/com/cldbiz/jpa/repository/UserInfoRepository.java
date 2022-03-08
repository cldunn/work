package com.cldbiz.jpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cldbiz.jpa.domain.UserInfo;

@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo, Long>, JpaSpecificationExecutor<UserInfo> {
	@Query("SELECT u FROM UserInfo u WHERE state = ?1 OR province = ?1")
	List<UserInfo> findByLocation(String location);
	
	List<UserInfo> findByFirstNameAndLastName(String firstName, String lastName);
	
	void deleteByIdIn(List<Long> ids);
}
