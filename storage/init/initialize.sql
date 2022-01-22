drop database if exists mydb;
create database mydb;

use mydb;

drop table if exists mydata;
create table if not exists mydata (
	id serial,
    data text not null,
    created_at datetime DEFAULT NULL,
    updated_at datetime DEFAULT NULL,
    primary key(id)
);

grant all privileges on mydb.* to `mysql`@'%';
flush privileges;

