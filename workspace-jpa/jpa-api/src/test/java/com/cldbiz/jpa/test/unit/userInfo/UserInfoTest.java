package com.cldbiz.jpa.test.unit.userInfo;


import static org.junit.Assert.assertEquals;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import com.cldbiz.jpa.JpaApiApplication;
import com.cldbiz.jpa.domain.UserInfo;
import com.cldbiz.jpa.dto.UserProfileDto;
import com.cldbiz.jpa.repository.UserInfoRepository;
import com.cldbiz.jpa.repository.specification.UserInfoSpecification;
import com.cldbiz.jpa.test.BaseTest;

@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest(classes = JpaApiApplication.class)
public class UserInfoTest extends BaseTest {

	
	@Autowired
	UserInfoRepository userInfoRepository;
	
	public UserInfoTest() {
		super("InitUserInfoDataSet.xml");
	}
	
	@Test
	public void testFirstPageUsers() throws Exception {
		UserProfileDto userProfileDto = new UserProfileDto();
		userProfileDto.setPgOffset(0);
		userProfileDto.setPgSize(5);
		
		Specification<UserInfo> userInfoSpecification = new UserInfoSpecification(userProfileDto);
		Page<UserInfo> page = userInfoRepository.findAll(userInfoSpecification, userProfileDto.getPageable());

		assertEquals(5, page.getSize());
	}
	
}
