drop database if exists mydb;
create database mydb;

use mydb;

drop table if exists Contents;
create table if not exists contents (
    id serial primary key,
    title varchar(255) not null,
    author varchar(255),
    summary text,
    deleted boolean not null,
    created_at datetime DEFAULT NULL,
    updated_at datetime DEFAULT NULL,
);

drop table if exists Article;
create table if not exists Article (
    id serial primary key,
    content_id int not null,
    subtitle varchar(10245) not null,
    body text not null,
    remarks text,
    deleted boolean not null,
    created_at datetime DEFAULT NULL,
    updated_at datetime DEFAULT NULL,

    foreign key (content_id) references contents(id)
);

grant all privileges on mydb.* to `mysql`@'%';
flush privileges;

