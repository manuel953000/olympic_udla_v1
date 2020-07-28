-- Creando la base de datos

CREATE DATABASE olympic_bd;

--utilizando la base de datos
use olympic_bd;

--Creando tablas
CREATE TABLE competencia (
    id_competencia INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name_competencia VARCHAR(50) NOT NULL,
    desc_competencia VARCHAR(150) NOT NULL
);

--Mostrar las tablas creadas
SHOW TABLES;

--Describir una tabla
describe competencia;