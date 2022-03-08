package com.cldbiz.jpa.test;

import java.io.File;

import org.dbunit.IDatabaseTester;
import org.dbunit.JdbcDatabaseTester;
import org.dbunit.dataset.IDataSet;
import org.dbunit.dataset.xml.FlatXmlDataSetBuilder;
import org.dbunit.operation.DatabaseOperation;
import org.junit.jupiter.api.BeforeEach;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

public abstract class BaseTest {
	private static final Logger LOGGER = LoggerFactory.getLogger(BaseTest.class);
	
	@Value("${spring.datasource.url}")
	private String jdbcUrl;
	
	@Value("${spring.datasource.driver-class.name}")
	private String jdbcDriver;

	@Value("${spring.datasource.username}")
	private String user;

	@Value("${spring.datasource.password}")
	private String password;

	private String dataSetFilePath;
	
	protected static IDatabaseTester databaseTester;

	public BaseTest(String dataSetFilePath) {
		this.dataSetFilePath = dataSetFilePath;
	}
	
	@BeforeEach
	public void setUp() throws Exception {
		if (databaseTester == null) {
			try {
				databaseTester = new JdbcDatabaseTester(jdbcDriver, jdbcUrl, user, password);
			}
			catch (Exception ex) {
				LOGGER.error("Unable to create JdbcDatabaseTester!");
				assert(false);
			}
		}
		
		cleanInsert(readDataSet());
	}
	
	
	private IDataSet readDataSet() throws Exception {
		ClassLoader classLoader = getClass().getClassLoader();
		String file = classLoader.getResource(dataSetFilePath).getFile();
		return new FlatXmlDataSetBuilder().setColumnSensing(true).build(new File(file));
	}
	
	private void cleanInsert(IDataSet dataSet) throws Exception {
		databaseTester.setSetUpOperation(DatabaseOperation.CLEAN_INSERT);
		databaseTester.setDataSet(dataSet);
		databaseTester.onSetup();
	}

}
