
	delete from dbo.user_authorities
	delete from dbo.user_security
	delete from dbo.granted_authority
	delete from dbo.app_code

	insert into dbo.GRANTED_AUTHORITY (authority, created_by, created_date, maintained_by, maintained_date, version)
	values ('view', 'sysGen', getDate(), null, null, 0)

	insert into dbo.GRANTED_AUTHORITY (authority, created_by, created_date, maintained_by, maintained_date, version)
	values ('create', 'sysGen', getDate(), null, null, 0)

	insert into dbo.GRANTED_AUTHORITY (authority, created_by, created_date, maintained_by, maintained_date, version)
	values ('update', 'sysGen', getDate(), null, null, 0)

	insert into dbo.GRANTED_AUTHORITY (authority, created_by, created_date, maintained_by, maintained_date, version)
	values ('delete', 'sysGen', getDate(), null, null, 0)

	-- number1 $2a$07$1ksIBaBA6kxdNnt35PWwIegZL4F.c3ynrMtQszKZoUuwWdavrl5Oi
	insert into dbo.USER_SECURITY (user_name, password, 
								   is_account_non_expired, is_account_non_locked, is_credential_non_expired, is_enabled, 
								   created_by, created_date, maintained_by, maintained_date, version)
	values ('cldunn', '{argon2}$argon2i$v=19$m=16,t=2,p=1$MTIzNDU2Nzg$rGo9AoPOkA1P3ydPXvdoCg', 1, 1, 1, 1, 'sysGen', getDate(), null, null, 0)

	--  number2 $e0801$p4me5z5xshJArJUvA3QTuN4DLX5HCrWdl3PFuNPEgZcxbq8wFwt1psa3WGlWH05zoXrIgS1bC6mav40fkM2Upg==$iEHuRx59NC1P4kyfEp0F0YW5cnZUNO7jUcpRLeby02o=
	insert into dbo.USER_SECURITY (user_name, password, 
								   is_account_non_expired, is_account_non_locked, is_credential_non_expired, is_enabled, 
								   created_by, created_date, maintained_by, maintained_date, version)
	values ('smdunn', '{scrypt}$e0801$p4me5z5xshJArJUvA3QTuN4DLX5HCrWdl3PFuNPEgZcxbq8wFwt1psa3WGlWH05zoXrIgS1bC6mav40fkM2Upg==$iEHuRx59NC1P4kyfEp0F0YW5cnZUNO7jUcpRLeby02o=', 
	        1, 1, 1, 1, 'sysGen', getDate(), null, null, 0)

	insert into dbo.USER_AUTHORITIES (SECURE_USER_ID, GRANTED_AUTHORITY_ID) 
	values ((select id from user_security where user_name = 'cldunn'), 9)
	insert into dbo.USER_AUTHORITIES (SECURE_USER_ID, GRANTED_AUTHORITY_ID) 
	values ((select id from user_security where user_name = 'cldunn'), 10)
	insert into dbo.USER_AUTHORITIES (SECURE_USER_ID, GRANTED_AUTHORITY_ID) 
	values ((select id from user_security where user_name = 'cldunn'), 11)
	insert into dbo.USER_AUTHORITIES (SECURE_USER_ID, GRANTED_AUTHORITY_ID) 
	values ((select id from user_security where user_name = 'cldunn'), 12)
	insert into dbo.USER_AUTHORITIES (SECURE_USER_ID, GRANTED_AUTHORITY_ID) 
	values ((select id from user_security where user_name = 'smdunn'), 9)

	insert into dbo.APP_CODE (APP_GROUP, VALUE, LABEL, CREATED_BY, CREATED_DATE, MAINTAINED_BY, MAINTAINED_DATE, VERSION)
	 values('GENDER', 'M', 'Male', 'sysGen', getDate(), null, null, 0)

	insert into dbo.APP_CODE (APP_GROUP, VALUE, LABEL, CREATED_BY, CREATED_DATE, MAINTAINED_BY, MAINTAINED_DATE, VERSION)
	 values('GENDER', 'F', 'Female', 'sysGen', getDate(), null, null, 0)

	select * from granted_authority
	select * from user_security
	select * from user_authorities
	select * from app_code
