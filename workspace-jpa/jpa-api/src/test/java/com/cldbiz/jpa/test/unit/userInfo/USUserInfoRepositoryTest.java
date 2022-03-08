package com.cldbiz.jpa.test.unit.userInfo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import com.cldbiz.jpa.JpaApiApplication;
import com.cldbiz.jpa.domain.USUserInfo;
import com.cldbiz.jpa.repository.USUserInfoRepository;
import com.cldbiz.jpa.test.BaseTest;

@Transactional
@SpringBootTest(classes = JpaApiApplication.class)
@TestPropertySource("classpath:application-test.properties")
public class USUserInfoRepositoryTest extends BaseTest {
	@Autowired
	USUserInfoRepository usUserInfoRepository;

	public USUserInfoRepositoryTest() {
		super("InitUserInfoDataSet.xml");
	}


	@Test
	public void testFindAllUSUserInfo() throws Exception {
		List<USUserInfo> users = usUserInfoRepository.findAll();
		
		assertEquals(1, users.size());
	}
}
