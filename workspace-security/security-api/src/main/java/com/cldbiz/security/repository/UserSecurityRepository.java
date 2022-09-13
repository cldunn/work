package com.cldbiz.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.cldbiz.security.domain.UserSecurity;

@Repository
public interface UserSecurityRepository extends JpaRepository<UserSecurity, Long>, JpaSpecificationExecutor<UserSecurity> {
	UserSecurity findOneByUserName(String username);
}
