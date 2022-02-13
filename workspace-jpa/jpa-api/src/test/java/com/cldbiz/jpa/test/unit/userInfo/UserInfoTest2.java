package com.cldbiz.jpa.test.unit.userInfo;

import static org.junit.Assert.assertEquals;

import java.io.File;

import org.dbunit.IDatabaseTester;
import org.dbunit.JdbcDatabaseTester;
import org.dbunit.dataset.IDataSet;
import org.dbunit.dataset.xml.FlatXmlDataSetBuilder;
import org.dbunit.operation.DatabaseOperation;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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

@RunWith(SpringRunner.class)
@SpringBootTest(classes = JpaApiApplication.class)
@TestPropertySource("classpath:application-test.properties")
public class UserInfoTest2 {
	private static final Logger LOGGER = LoggerFactory.getLogger(BaseTest.class);
	
	private static final String JDBC_DRIVER = com.microsoft.sqlserver.jdbc.SQLServerDriver.class.getName();
	private static final String JDBC_URL = "jdbc:sqlserver://localhost:1433;DatabaseName=Practice;selectMethod=cursor;sendTimeAsDateTime=false";
	private static final String USER = "cdunn";
	private static final String PASSWORD = "number1";

	protected static IDatabaseTester databaseTester;

	@Autowired
	UserInfoRepository userInfoRepository;

	@BeforeAll
	public static void init(){
		try {
			databaseTester = new JdbcDatabaseTester(JDBC_DRIVER, JDBC_URL, USER, PASSWORD);
		}
		catch (Exception ex) {
			LOGGER.error("Unable to create JdbcDatabaseTester!");
			assert(false);
		}
	}

	@BeforeEach
	public void setUp() throws Exception {
		cleanInsert(readDataSet());
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

	private IDataSet readDataSet() throws Exception {
		ClassLoader classLoader = getClass().getClassLoader();
		String file = classLoader.getResource("InitUserInfoDataSet.xml").getFile();
		return new FlatXmlDataSetBuilder().build(new File(file));
	}
	
	private void cleanInsert(IDataSet dataSet) throws Exception {
		databaseTester.setSetUpOperation(DatabaseOperation.CLEAN_INSERT);
		databaseTester.setDataSet(dataSet);
		databaseTester.onSetup();
	}

}
