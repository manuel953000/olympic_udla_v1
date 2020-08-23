-- Creando la base de datos

CREATE DATABASE olympic_bd;

--utilizando la base de datos
use olympic_bd;

--Creando tablas
--tabla de competencias
CREATE TABLE competencia (
    id_competencia INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name_competencia VARCHAR(50) NOT NULL,
    desc_competencia VARCHAR(150) NOT NULL
);

--tabla de preguntas
CREATE TABLE questions (
    qid INT(250) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    question VARCHAR(250),
    ans_id int(250)
);

--tabla de respuestas
CREATE TABLE answers (
    aid INT(250) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    answer VARCHAR(250),
    ans_id int(250)
);


--tabla de usuario (este usuario es de prueba)
CREATE TABLE user (
    uid INT(250) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR(250),
    totalques int(250),
    answerscorrect int(250)
);


--Mostrar las tablas creadas
SHOW TABLES;

--Describir una tabla
describe competencia;