
    create table APP_CODE (
       APP_GROUP varchar(255) not null,
        VALUE varchar(255) not null,
        CREATED_BY varchar(255) not null,
        CREATED_DATE datetime2 not null,
        MAINTAINED_BY varchar(255),
        MAINTAINED_DATE datetime2,
        VERSION bigint default 0,
        LABEL varchar(255) not null,
        primary key (APP_GROUP, VALUE)
    );

    create table GRANTED_AUTHORITY (
       ID bigint identity not null,
        CREATED_BY varchar(255) not null,
        CREATED_DATE datetime2 not null,
        MAINTAINED_BY varchar(255),
        MAINTAINED_DATE datetime2,
        VERSION bigint default 0,
        AUTHORITY varchar(255) not null,
        primary key (ID)
    );

    create table USER_AUTHORITIES (
       SECURE_USER_ID bigint not null,
        GRANTED_AUTHORITY_ID bigint not null
    );

    create table USER_SECURITY (
       ID bigint identity not null,
        CREATED_BY varchar(255) not null,
        CREATED_DATE datetime2 not null,
        MAINTAINED_BY varchar(255),
        MAINTAINED_DATE datetime2,
        VERSION bigint default 0,
        IS_ACCOUNT_NON_EXPIRED bit not null constraint DF_USER_SECURITY_IS_ACCOUNT_NON_EXPIRED default 1,
        IS_ACCOUNT_NON_LOCKED bit not null constraint DF_USER_SECURITY_IS_ACCOUNT_NON_LOCKED default 1,
        IS_CREDENTIAL_NON_EXPIRED bit not null constraint DF_USER_SECURITY_IS_CREDENTIAL_NON_EXPIRED default 1,
        IS_ENABLED bit not null constraint DF_USER_SECURITY_IS_ENABLED default 1,
        PASSWORD varchar(255),
        USER_NAME varchar(255),
        primary key (ID)
    );

	create index IDX_APP_CODE_GROUP on APP_CODE (APP_GROUP asc);

    alter table USER_SECURITY 
       add constraint UK_USER_NAME unique (USER_NAME);

    alter table USER_AUTHORITIES 
       add constraint FK_GRANTED_AUTHORITY_ID 
       foreign key (GRANTED_AUTHORITY_ID) 
       references GRANTED_AUTHORITY;

    alter table USER_AUTHORITIES 
       add constraint FK_SECURE_USER_ID 
       foreign key (SECURE_USER_ID) 
       references USER_SECURITY;
