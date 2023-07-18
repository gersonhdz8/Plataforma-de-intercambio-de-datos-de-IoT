CREATE DATABASE Hogares_IoT;

USE Hogares_IoT;
-- Creación de la tabla "Hogares"
CREATE TABLE Hogares (
    ID_hogar INT PRIMARY KEY,
    Nombre_hogar VARCHAR(50),
    Direccion VARCHAR(100),
    Ciudad VARCHAR(50),
    Pais VARCHAR(50)
);

-- Creación de la tabla "Tipos_Dispositivos"
CREATE TABLE Tipos_Dispositivos (
    ID_tipo_dispositivo INT PRIMARY KEY,
    Nombre_tipo VARCHAR(50),
    Descripcion VARCHAR(200)
);

-- Creación de la tabla "Dispositivos"
CREATE TABLE Dispositivos (
    ID_dispositivo INT PRIMARY KEY,
    ID_hogar INT,
    ID_tipo_dispositivo INT,
    Nombre_dispositivo VARCHAR(100),
    Estado VARCHAR(10),
    Ubicacion VARCHAR(100),
    FOREIGN KEY (ID_hogar) REFERENCES Hogares(ID_hogar),
    FOREIGN KEY (ID_tipo_dispositivo) REFERENCES Tipos_Dispositivos(ID_tipo_dispositivo)
);

-- Creación de la tabla "Eventos_Dispositivos"
CREATE TABLE Eventos_Dispositivos (
    ID_evento_dispositivo INT PRIMARY KEY,
    ID_dispositivo INT,
    Tipo_evento VARCHAR(50),
    Descripcion VARCHAR(200),
    Fecha_hora TIMESTAMP,
    FOREIGN KEY (ID_dispositivo) REFERENCES Dispositivos(ID_dispositivo)
);

-- Creación de la tabla "Proveedores"
CREATE TABLE Proveedores (
    ID_proveedor INT PRIMARY KEY,
    Nombre_proveedor VARCHAR(100),
    Direccion_proveedor VARCHAR(200)
);

-- Creación de la tabla "Dispositivos_Proveedores"
CREATE TABLE Dispositivos_Proveedores (
    ID_dispositivo_proveedor INT PRIMARY KEY,
    ID_tipo_dispositivo INT,
    ID_proveedor INT,
    Precio_dispositivo DECIMAL(10, 2),
    FOREIGN KEY (ID_tipo_dispositivo) REFERENCES Tipos_Dispositivos(ID_tipo_dispositivo),
    FOREIGN KEY (ID_proveedor) REFERENCES Proveedores(ID_proveedor)
);
