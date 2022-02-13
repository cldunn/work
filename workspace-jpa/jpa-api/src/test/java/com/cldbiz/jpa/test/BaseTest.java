package com.cldbiz.jpa.test;

import java.io.File;

import org.dbunit.IDatabaseTester;
import org.dbunit.JdbcDatabaseTester;
import org.dbunit.dataset.IDataSet;
import org.dbunit.dataset.xml.FlatXmlDataSetBuilder;
import org.dbunit.operation.DatabaseOperation;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.test.context.TestPropertySource;

@TestPropertySource("classpath:application-test.properties")
public abstract class BaseTest {
	private static final Logger LOGGER = LoggerFactory.getLogger(BaseTest.class);
	
	
	private static final String JDBC_DRIVER = com.microsoft.sqlserver.jdbc.SQLServerDriver.class.getName();
	private static final String JDBC_URL = "jdbc:sqlserver://localhost:1433;DatabaseName=Practice;selectMethod=cursor;sendTimeAsDateTime=false";
	private static final String USER = "cdunn";
	private static final String PASSWORD = "number1";
	
	private String dataSetFilePath;
	
	protected static IDatabaseTester databaseTester;

	public BaseTest(String dataSetFilePath) {
		this.dataSetFilePath = dataSetFilePath;
	}
	
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
	
	
	private IDataSet readDataSet() throws Exception {
		ClassLoader classLoader = getClass().getClassLoader();
		String file = classLoader.getResource(dataSetFilePath).getFile();
		return new FlatXmlDataSetBuilder().build(new File(file));
	}
	
	private void cleanInsert(IDataSet dataSet) throws Exception {
		// databaseTester = new JdbcDatabaseTester(JDBC_DRIVER, JDBC_URL, USER, PASSWORD);
		databaseTester.setSetUpOperation(DatabaseOperation.CLEAN_INSERT);
		databaseTester.setDataSet(dataSet);
		databaseTester.onSetup();
	}

}
