package com.cldbiz.security.hibernate.ddl;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.persistence.Entity;
import javax.persistence.MappedSuperclass;

import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.boot.registry.internal.StandardServiceRegistryImpl;
import org.hibernate.boot.spi.MetadataImplementor;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.tool.hbm2ddl.SchemaExport;
import org.hibernate.tool.schema.TargetType;
import org.reflections.Reflections;
import org.springframework.stereotype.Component;

@Component
public class SchemaGenerator {
	
	private static Properties props = new Properties();
	
    private String[] entityPackages;
    private String entity;
 
    public SchemaGenerator entities(String... entityPackages) {
        this.entityPackages = entityPackages;
        return this;
    }
 
    public SchemaGenerator schemaExport(String fileName, String targetDirectory) throws Exception {
        if (entityPackages == null && entityPackages.length == 0) {
            System.out.println("Not packages selected");
            System.exit(0);
        }
        File exportFile = createExportFileAndMakeDirectory(fileName, targetDirectory);
 
        Map<String, String> settings = new HashMap<>();
        settings.put("hibernate.dialect", props.getProperty("spring.jpa.properties.hibernate.dialect"));
        settings.put("hibernate.temp.use_jdbc_metadata_defaults", props.getProperty("hibernate.temp.use_jdbc_metadata_defaults"));
        
        ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
        		.applySettings(settings)
                .build();
 
        MetadataSources sources = mapAnnotatedClasses(serviceRegistry);
        MetadataImplementor metadata = (MetadataImplementor) sources.buildMetadata();
        EnumSet<TargetType> targetTypes = EnumSet.of(TargetType.SCRIPT);
        SchemaExport schemaExport = new SchemaExport();
        
        schemaExport.setOutputFile(exportFile.getAbsolutePath());
        schemaExport.setDelimiter(";");
        schemaExport.setFormat(true);
        schemaExport.createOnly(targetTypes, metadata);
        
        ((StandardServiceRegistryImpl) serviceRegistry).destroy();
 
        System.out.println(exportFile.getAbsolutePath());
 
        return this;
 
    }
 
    private File createExportFileAndMakeDirectory(String fileName, String targetDirectory) {
        File exportFile;
        if (targetDirectory != null) {
            final File directory = new File(targetDirectory);
            directory.mkdirs();
            exportFile = new File(directory, fileName);
        } else {
            exportFile = new File(fileName);
        }
        
        if (exportFile.exists()) {
        	exportFile.delete();
        }
        
        return exportFile;
    }
 
    private MetadataSources mapAnnotatedClasses(ServiceRegistry serviceRegistry) {
        MetadataSources sources = new MetadataSources(serviceRegistry);
 
        final Reflections reflections = new Reflections((Object) entityPackages);
        for (final Class<?> mappedSuperClass : reflections.getTypesAnnotatedWith(MappedSuperclass.class)) {
        	if (entity == null || mappedSuperClass.getName().endsWith(entity)) {
	            sources.addAnnotatedClass(mappedSuperClass);
	            System.out.println("Mapped = " + mappedSuperClass.getName());
        	}
        }
        for (final Class<?> entityClasses : reflections.getTypesAnnotatedWith(Entity.class)) {
        	if (entity == null || entityClasses.getName().endsWith(entity)) {
	            sources.addAnnotatedClass(entityClasses);
	            System.out.println("Mapped = " + entityClasses.getName());
        	}
        }
        
        return sources;
    }
 
    private static void setProperties() {
    	try {
    		InputStream input = SchemaGenerator.class.getClassLoader().getResourceAsStream("application.properties");
    		props.load(input);
    		input.close();
    		
    		String activeProfiles = (String) props.get("spring.profiles.active");
    		List<String> profiles = Arrays.asList(activeProfiles.split("\\s*,\\s*"));
    		for(String profile: profiles) {
    			input = SchemaGenerator.class.getClassLoader().getResourceAsStream("application-" + profile + ".properties");
    			props.load(input);
        		input.close();
    		}
    	} catch (IOException ex) {
    		ex.printStackTrace();
        } 
    }

    public static SchemaGenerator instance() {
        return new SchemaGenerator();
    }
    
    public static void main(String[] args) throws Exception {
    	setProperties();
    	
    	String entityPackage = props.getProperty("hibernate.gen.entitiy_package");
    	String sqlDir = props.getProperty("hibernate.gen.sql_dir");
        String sqlFn = props.getProperty("hibernate.gen.sql_fn");
        

    	SchemaGenerator exporter = SchemaGenerator.instance();
    	if (args.length > 0) {
    		exporter.entity = args[0];
    	}
    	
    	exporter.entities(entityPackage).schemaExport(sqlFn, sqlDir);
    }
}