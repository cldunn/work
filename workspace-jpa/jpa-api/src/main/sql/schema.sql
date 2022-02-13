
    create table ROLE (
       ID bigint identity not null,
        CREATED_BY varchar(255) not null,
        CREATED_DATE datetime2 not null,
        MAINTAINED_BY varchar(255),
        MAINTAINED_DATE datetime2,
        VERSION bigint,
        DESCRIPTION varchar(255) not null,
        NAME varchar(255) not null,
        primary key (ID)
    );

    create table TEST (
       ID bigint identity not null,
        CREATED_BY varchar(255) not null,
        CREATED_DATE datetime2 not null,
        MAINTAINED_BY varchar(255),
        MAINTAINED_DATE datetime2,
        VERSION bigint,
        NAME varchar(255) not null,
        primary key (ID)
    );

    create table USER_INFO (
       ID bigint identity not null,
        CREATED_BY varchar(255) not null,
        CREATED_DATE datetime2 not null,
        MAINTAINED_BY varchar(255),
        MAINTAINED_DATE datetime2,
        VERSION bigint,
        ADDRESS varchar(255),
        CITY varchar(255),
        COUNTRY varchar(255),
        EMAIL_ADDRESS varchar(255) not null,
        FIRST_NAME varchar(255),
        IS_LOCKED bit,
        LAST_LOGIN_DATE datetime2,
        LAST_NAME varchar(255),
        LOGIN varchar(255) not null,
        LOGIN_ATTEMPTS int,
        PASSWORD varchar(255) not null,
        PASSWORD_EXPIRE_DATE datetime2,
        PASSWORD_MODIFIED_DATE datetime2,
        PRIMARY_PHONE varchar(255),
        PROVINCE varchar(255),
        SECONDARY_PHONE varchar(255),
        STATE varchar(255),
        ZIP varchar(255),
        primary key (ID)
    );

    create table USER_INFO_ROLE (
       USER_INFO_ID bigint not null,
        ROLE_ID bigint not null
    );

    alter table USER_INFO 
       add constraint UK_EMAIL_ADDRESS unique (EMAIL_ADDRESS);

    alter table USER_INFO 
       add constraint UK_LOGIN unique (LOGIN);

    alter table USER_INFO_ROLE 
       add constraint FK_ROLE_ID 
       foreign key (ROLE_ID) 
       references ROLE;

    alter table USER_INFO_ROLE 
       add constraint FK_USER_INFO_ID 
       foreign key (USER_INFO_ID) 
       references USER_INFO;
