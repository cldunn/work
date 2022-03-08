package com.cldbiz.jpa.test.unit.userInfo;

import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;

import com.cldbiz.jpa.JpaApiApplication;
import com.cldbiz.jpa.dto.PageDto;
import com.cldbiz.jpa.dto.UserProfileDto;
import com.cldbiz.jpa.service.UserInfoService;
import com.cldbiz.jpa.test.BaseTest;

@Transactional
@AutoConfigureMockMvc
@SpringBootTest(classes = JpaApiApplication.class)
@TestPropertySource("classpath:application-test.properties")
public class UserInfoControllerTest extends BaseTest {
	@Autowired
	private MockMvc mockMvc;
    
	@MockBean
    private UserInfoService userInfoService;

	// @InjectMocks
    // private UserInfoController userInfoController;
    
    public UserInfoControllerTest() {
    	super("InitUserInfoDataSet.xml");
    	// MockitoAnnotations.openMocks(this);
    }

	@BeforeEach
	public void initMocks() {
    	PageDto<UserProfileDto> page = createUserProfileDtoPage(12L);
		
		Mockito.when(userInfoService.findUserInfoPage(any(UserProfileDto.class))).thenReturn(page);
	}

	@Test
    public void testWhenFindPage_thenReturnPageDto() throws Exception {
		PageDto<UserProfileDto> expectedPage = createUserProfileDtoPage(12L);
		
		UserProfileDto userProfileDto = new UserProfileDto();
		userProfileDto.setPgSize(5);
		
		this.mockMvc.perform(get("/v1/usersPage", new UserProfileDto())
	    		.contentType(MediaType.APPLICATION_JSON))
	    		.andExpect(status().isOk())
	    		.andExpect(jsonPath("$.data.pageDto.total").value(12))
	    		.andExpect(jsonPath("$.data.pageDto.rows[*].id", containsInAnyOrder(10001, 10002, 10003, 10004, 10005))); 
    }

	private PageDto<UserProfileDto> createUserProfileDtoPage(Long total) {
		List<UserProfileDto> content = new ArrayList<UserProfileDto>();
		content.add(createUserProfileDto(10001L, "cliffdunntx1@yahoo.com", "cdunn1", "T1stM1"));
		content.add(createUserProfileDto(10002L, "cliffdunntx2@yahoo.com", "cdunn2", "T2stM2"));
		content.add(createUserProfileDto(10003L, "cliffdunntx3@yahoo.com", "cdunn3", "T3stM3"));
		content.add(createUserProfileDto(10004L, "cliffdunntx4@yahoo.com", "cdunn4", "T4stM4"));
		content.add(createUserProfileDto(10005L, "cliffdunntx5@yahoo.com", "cdunn5", "T5stM5"));
		
		return new PageDto<UserProfileDto>(total, content);
	}
	
	private UserProfileDto createUserProfileDto(Long id, String email, String login, String password) {
		UserProfileDto userProfileDto = new UserProfileDto();
		
		userProfileDto.setId(id);
		userProfileDto.setEmailAddress(email);
		userProfileDto.getUserAuthenticationDto().setLogin(login);
		userProfileDto.getUserAuthenticationDto().setPassword(password);
		
		return userProfileDto;
	}

}
