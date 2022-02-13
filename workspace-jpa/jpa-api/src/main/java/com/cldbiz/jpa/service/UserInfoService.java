package com.cldbiz.jpa.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.cldbiz.jpa.domain.UserInfo;
import com.cldbiz.jpa.dto.PageDto;
import com.cldbiz.jpa.dto.UserProfileDto;
import com.cldbiz.jpa.repository.UserInfoRepository;
import com.cldbiz.jpa.repository.specification.UserInfoSpecification;

@Service
@Transactional
public class UserInfoService {
	
	@Autowired
	private UserInfoRepository userInfoRepo;
	
	public PageDto<UserProfileDto> findUserInfoPage(UserProfileDto userProfileDto) {
		Specification<UserInfo> userInfoSpecification = new UserInfoSpecification(userProfileDto);
		Page<UserInfo> page = userInfoRepo.findAll(userInfoSpecification, userProfileDto.getPageable());
		
		List<UserProfileDto> userProfileDtos = page.getContent().stream()
			.map(userInfo -> { return new UserProfileDto(userInfo); })
			.collect(Collectors.toList());
		
		return new PageDto<UserProfileDto>(page.getTotalElements(), userProfileDtos);
	}

	public List<UserProfileDto> findUserInfoList(UserProfileDto userProfileDto) {
		Specification<UserInfo> userInfoSpecification = new UserInfoSpecification(userProfileDto);
		// todo: incorporate sorting
		List<UserInfo> userInfos = userInfoRepo.findAll(userInfoSpecification);
		
		List<UserProfileDto> userProfileDtos = userInfos.stream()
			.map(userInfo -> { return new UserProfileDto(userInfo); })
			.collect(Collectors.toList());
		
		return userProfileDtos;
	}

	public UserProfileDto saveUserInfo(UserProfileDto userProfileDto) {
		UserInfo userInfo = new UserInfo(userProfileDto);
		userInfo = userInfoRepo.save(userInfo);
		
		return new UserProfileDto(userInfo);
	}
	
	public void deleteUserInfoByIds(List<Long> ids) {
		userInfoRepo.deleteByIdIn(ids);
	}
}
