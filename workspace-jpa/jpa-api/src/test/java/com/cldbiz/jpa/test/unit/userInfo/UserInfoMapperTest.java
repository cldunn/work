package com.cldbiz.jpa.test.unit.userInfo;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import com.cldbiz.jpa.JpaApiApplication;
import com.cldbiz.jpa.common.AppConstants;
import com.cldbiz.jpa.domain.USUserInfo;
import com.cldbiz.jpa.domain.UserInfo;
import com.cldbiz.jpa.dto.UserProfileDto;
import com.cldbiz.jpa.mapper.USUserInfoMapper;
import com.cldbiz.jpa.mapper.UserInfoMapper;
import com.cldbiz.jpa.repository.UserInfoRepository;
import com.cldbiz.jpa.test.BaseTest;

@Transactional
@SpringBootTest(classes = JpaApiApplication.class)
@TestPropertySource("classpath:application-test.properties")
public class UserInfoMapperTest extends BaseTest {
	
	@Autowired
	UserInfoMapper userInfoMapper;

	@Autowired
	USUserInfoMapper usUserInfoMapper;

	public UserInfoMapperTest() {
		super("InitUserInfoDataSet.xml");
	}

	@Test
	public void testUsersByStatus() throws Exception {
		Integer expectedNbrOfActiveUsers = Integer.valueOf(2);
		List<UserInfo> users = userInfoMapper.selectUserInfoByStatus(AppConstants.USER_STATUS_ACTIVE);
		
		assertTrue(expectedNbrOfActiveUsers == users.size());
	}

	@Test
	public void testUsersInfoByUserProfileDto() throws Exception {
		UserProfileDto userProfileDto = new UserProfileDto();
		
		// Use case one
		userProfileDto.setEmailAddress("yahoo.com");
		userProfileDto.getUserAuthenticationDto().setLogin("cdunn");
		List<UserInfo> users = userInfoMapper.selectUserInfoByUserProfileDto(userProfileDto);
		
		Integer expectedNbrOfActiveUsers = Integer.valueOf(12);
		assertTrue(expectedNbrOfActiveUsers == users.size());
		
		// Use case two
		userProfileDto.getUserAuthenticationDto().setLogin("cdunn2");
		users = userInfoMapper.selectUserInfoByUserProfileDto(userProfileDto);
		
		expectedNbrOfActiveUsers = Integer.valueOf(1);
		assertTrue(expectedNbrOfActiveUsers == users.size());
	}
	
	@Test
	public void testAllUSUserInfo() throws Exception {
		List<USUserInfo> users = usUserInfoMapper.selectAllUSUserInfo();
		assertTrue(users.size() > 0);
	}
}
