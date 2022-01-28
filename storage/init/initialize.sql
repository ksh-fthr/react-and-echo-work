drop database if exists mydb;
create database mydb;

use mydb;

drop table if exists contents;
create table if not exists contents (
	id serial,
    title varchar(255) not null,
    contents text not null,
    remarks varchar(1024) not null,
    created_at datetime DEFAULT NULL,
    updated_at datetime DEFAULT NULL,
    primary key(id)
);

grant all privileges on mydb.* to `mysql`@'%';
flush privileges;

