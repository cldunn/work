package com.cldbiz.jpa.test.unit.userInfo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.test.context.TestPropertySource;

import com.cldbiz.jpa.JpaApiApplication;
import com.cldbiz.jpa.domain.UserInfo;
import com.cldbiz.jpa.dto.PageDto;
import com.cldbiz.jpa.dto.UserProfileDto;
import com.cldbiz.jpa.repository.UserInfoRepository;
import com.cldbiz.jpa.repository.specification.UserInfoSpecification;
import com.cldbiz.jpa.service.UserInfoService;
import com.cldbiz.jpa.test.BaseTest;

@Transactional
@SpringBootTest(classes = JpaApiApplication.class)
@TestPropertySource("classpath:application-test.properties")
public class UserInfoServiceTest extends BaseTest {
	@InjectMocks
    private UserInfoService userInfoService;
 
    @Mock
    private UserInfoRepository userInfoRepository;
    
    public UserInfoServiceTest() {
    	super("InitUserInfoDataSet.xml");
    	MockitoAnnotations.openMocks(this);
    }
    
	@BeforeEach
	public void initMocks() {
		Pageable pageable = PageRequest.of(0, 5);
		Page<UserInfo> page = createUserInfoPage(pageable, 12L);
		
		Mockito.when(userInfoRepository.findAll(any(Specification.class), any(Pageable.class))).thenReturn(page);
		
	}
	
    
	@Test
    public void testWhenFindPage_thenReturnPageDto() {
		Page<UserInfo> expectedPage = createUserInfoPage(PageRequest.of(0, 5), 12L);
		List<UserProfileDto> expectedUsers = expectedPage.getContent().stream().map(userInfo -> new UserProfileDto(userInfo)).collect(Collectors.toList());

		PageDto<UserProfileDto> pageDto = userInfoService.findUserInfoPage(new UserProfileDto());

		assertEquals(12L, pageDto.getTotal().longValue());
		assertEquals(expectedUsers, pageDto.getRows());
    }
	
	private Page<UserInfo> createUserInfoPage(Pageable pageable, Long total) {
		List<UserInfo> content = new ArrayList<UserInfo>();
		content.add(createUserInfo(10001L, "cliffdunntx1@yahoo.com", "cdunn1", "T1stM1"));
		content.add(createUserInfo(10002L, "cliffdunntx2@yahoo.com", "cdunn2", "T2stM2"));
		content.add(createUserInfo(10003L, "cliffdunntx3@yahoo.com", "cdunn3", "T3stM3"));
		content.add(createUserInfo(10004L, "cliffdunntx4@yahoo.com", "cdunn4", "T4stM4"));
		content.add(createUserInfo(10005L, "cliffdunntx5@yahoo.com", "cdunn5", "T5stM5"));
		
		return new PageImpl<UserInfo>(content, pageable, total);
	}
	
	private UserInfo createUserInfo(Long id, String email, String login, String password) {
		UserInfo userInfo = new UserInfo();
		
		userInfo.setId(id);
		userInfo.setEmailAddress(email);
		userInfo.setLogin(login);
		userInfo.setPassword(password);
		userInfo.setCreatedBy("sysGen");
		userInfo.setCreatedDate(ZonedDateTime.now());
		
		return userInfo;
	}

}
