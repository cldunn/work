package com.cldbiz.jpa.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import com.cldbiz.jpa.domain.USUserInfo;

@Component
@Mapper
public interface USUserInfoMapper {
	List<USUserInfo> selectAllUSUserInfo();
}
