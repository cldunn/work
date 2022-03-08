package com.cldbiz.jpa.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import com.cldbiz.jpa.domain.UserInfo;
import com.cldbiz.jpa.dto.UserProfileDto;

@Component
@Mapper
public interface UserInfoMapper {

	List<UserInfo> selectUserInfoByStatus(String status);
	
	List<UserInfo> selectUserInfoByUserProfileDto(UserProfileDto userProfileDto);
	
}
