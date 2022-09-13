package com.cldbiz.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cldbiz.security.domain.AppCode;

public interface AppCodeRepository extends JpaRepository<AppCode, Long> {
	@Query("SELECT ac FROM AppCode ac WHERE appCodeKey.appGroup = ?1")
	List<AppCode> appCodes(String appGroup);
}
