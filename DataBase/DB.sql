CREATE DATABASE Dispositivos_IoT;
USE Dispositivos_IoT;
CREATE TABLE Dispositivos (
    ID_dispositivo INT PRIMARY KEY,
    Nombre_dispositivo VARCHAR(100),
    Ubicacion VARCHAR(200),
    Tipo_dispositivo VARCHAR(50),
    Fecha_registro DATE,
    Estado VARCHAR(20)
);
CREATE TABLE Datos_Sensores (
    ID_dato INT PRIMARY KEY,
    ID_dispositivo INT,
    Tipo_sensor VARCHAR(50),
    Valor NUMERIC(10, 2),
    Fecha_hora DATETIME,
    FOREIGN KEY (ID_dispositivo) REFERENCES Dispositivos (ID_dispositivo)
);
CREATE TABLE Datos_Actuadores (
    ID_dato INT PRIMARY KEY,
    ID_dispositivo INT,
    Tipo_actuador VARCHAR(50),
    Estado VARCHAR(20),
    Fecha_hora DATETIME,
    FOREIGN KEY (ID_dispositivo) REFERENCES Dispositivos (ID_dispositivo)
);
CREATE TABLE Datos_Motores (
    ID_dato INT PRIMARY KEY,
    ID_dispositivo INT,
    Tipo_motor VARCHAR(50),
    RPM INT,
    Fecha_hora DATETIME,
    FOREIGN KEY (ID_dispositivo) REFERENCES Dispositivos (ID_dispositivo)
);
CREATE TABLE Datos_Robots (
    ID_dato INT PRIMARY KEY,
    ID_dispositivo INT,
    Tipo_robot VARCHAR(50),
    Estado VARCHAR(20),
    Fecha_hora DATETIME,
    FOREIGN KEY (ID_dispositivo) REFERENCES Dispositivos (ID_dispositivo)
);
CREATE TABLE Datos_Bandas (
    ID_dato INT PRIMARY KEY,
    ID_dispositivo INT,
    Tipo_banda VARCHAR(50),
    Velocidad NUMERIC(10, 2),
    Fecha_hora DATETIME,
    FOREIGN KEY (ID_dispositivo) REFERENCES Dispositivos (ID_dispositivo)
);
CREATE TABLE Eventos (
    ID_evento INT PRIMARY KEY,
    ID_dispositivo INT,
    Tipo_evento VARCHAR(50),
    Descripcion VARCHAR(200),
    Fecha_hora DATETIME,
    FOREIGN KEY (ID_dispositivo) REFERENCES Dispositivos (ID_dispositivo)
);
CREATE TABLE Usuarios (
    ID_usuario INT PRIMARY KEY,
    Nombre_usuario VARCHAR(50),
    Correo_electronico VARCHAR(100),
    Contrasena VARCHAR(100),
    Rol VARCHAR(20)
);
