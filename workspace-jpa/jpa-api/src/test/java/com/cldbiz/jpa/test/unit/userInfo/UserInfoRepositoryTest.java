package com.cldbiz.jpa.test.unit.userInfo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.test.context.TestPropertySource;

import com.cldbiz.jpa.JpaApiApplication;
import com.cldbiz.jpa.common.AppConstants;
import com.cldbiz.jpa.domain.UserInfo;
import com.cldbiz.jpa.dto.UserProfileDto;
import com.cldbiz.jpa.repository.UserInfoRepository;
import com.cldbiz.jpa.repository.specification.UserInfoSpecification;
import com.cldbiz.jpa.test.BaseTest;


@Transactional
@SpringBootTest(classes = JpaApiApplication.class)
@TestPropertySource("classpath:application-test.properties")
public class UserInfoRepositoryTest extends BaseTest {
	
	@Autowired
	UserInfoRepository userInfoRepository;
	
	public UserInfoRepositoryTest() {
		super("InitUserInfoDataSet.xml");
	}
	
	@Test
	public void testSaveUserInfo() {
		Long usersCount = userInfoRepository.count();
		
		UserInfo userInfo = new UserInfo();
		userInfo.setEmailAddress("sabinedunntx@yahoo.com");
		userInfo.setLogin("sabinedunntx");
		userInfo.setPassword("T2stM3");
		userInfo.setState(AppConstants.USER_STATUS_ACTIVE);
		
		userInfoRepository.save(userInfo);
		List<UserInfo> users = userInfoRepository.findAll();
		
		assertEquals(usersCount + 1, users.size());
	}

	@Test
	public void testDeleteUserInfos() {
		List<UserInfo> users = userInfoRepository.findAll();
		
		List<Long> userIds = users.stream().map(user -> user.getId()).collect(Collectors.toList());
		userInfoRepository.deleteByIdIn(userIds);
		
		users = userInfoRepository.findAll();
		
		assertEquals(0, users.size());
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
	
	@Test
	public void testSecondPageUsers() throws Exception {
		UserProfileDto userProfileDto = new UserProfileDto();
		userProfileDto.setPgOffset(5);
		userProfileDto.setPgSize(5);
		
		Specification<UserInfo> userInfoSpecification = new UserInfoSpecification(userProfileDto);
		Page<UserInfo> page = userInfoRepository.findAll(userInfoSpecification, userProfileDto.getPageable());

		assertEquals(5, page.getSize());
	}

	@Test
	public void testFindByLocation() throws Exception {
		List<UserInfo> users = userInfoRepository.findByLocation("Texas");
		
		assertEquals(1, users.size());
		assertEquals("Texas", users.get(0).getState());
	}

	@Test
	public void testFindByFirstNameAndLastName() throws Exception {
		List<UserInfo> users = userInfoRepository.findByFirstNameAndLastName("1", "1");
		
		assertEquals(1, users.size());
		assertEquals("Cliff1", users.get(0).getFirstName());

		users = userInfoRepository.findByFirstNameAndLastName("Cliff", "Dunn");
		
		assertTrue(users.size() > 1);
	}
}
