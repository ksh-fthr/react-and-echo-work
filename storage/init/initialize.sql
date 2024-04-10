drop database if exists mydb;
create database mydb;

use mydb;

drop table if exists Contents;
create table if not exists Contents (
    id serial,
    title varchar(255) not null,
    author varchar(255),
    summary text,
    deleted boolean not null,
    created_at datetime DEFAULT NULL,
    updated_at datetime DEFAULT NULL,

    primary key(id)
);

drop table if exists Articles;
create table if not exists Articles (
    id serial,
    content_id bigint unsigned not null,
    subtitle varchar(10245) not null,
    body text not null,
    remarks text,
    deleted boolean not null,
    created_at datetime DEFAULT NULL,
    updated_at datetime DEFAULT NULL,

    primary key(id),
    foreign key (content_id) references Contents(id)
);

grant all privileges on mydb.* to `mysql`@'%';
flush privileges;

