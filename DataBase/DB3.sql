CREATE DATABASE Hogares_IoT;

USE Hogares_IoT;
-- Crear tabla "Hogares"
CREATE TABLE Hogares (
    ID_hogar INT PRIMARY KEY,
    Nombre_hogar VARCHAR(100) NOT NULL,
    Direccion VARCHAR(200) NOT NULL,
    Ciudad VARCHAR(100) NOT NULL,
    Pais VARCHAR(100) NOT NULL,
    ID_propietario INT,
    FOREIGN KEY (ID_propietario) REFERENCES Info_Propietario(ID_propietario)
);

-- Crear tabla "Tipos_Dispositivos"
CREATE TABLE Tipos_Dispositivos (
    ID_tipo_dispositivo INT PRIMARY KEY,
    Nombre_tipo VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(200)
);

-- Crear tabla "Dispositivos"
CREATE TABLE Dispositivos (
    ID_dispositivo INT PRIMARY KEY,
    ID_hogar INT NOT NULL,
    ID_tipo_dispositivo INT NOT NULL,
    Nombre_dispositivo VARCHAR(100) NOT NULL,
    Estado VARCHAR(50) NOT NULL,
    ID_ubicacion INT,
    FOREIGN KEY (ID_hogar) REFERENCES Hogares(ID_hogar),
    FOREIGN KEY (ID_tipo_dispositivo) REFERENCES Tipos_Dispositivos(ID_tipo_dispositivo),
    FOREIGN KEY (ID_ubicacion) REFERENCES Ubicacion(ID_ubicacion)
);

-- Crear tabla "Ubicacion"
CREATE TABLE Ubicacion (
    ID_ubicacion INT PRIMARY KEY,
    Nombre_ubicacion VARCHAR(100) NOT NULL
);

-- Crear tabla "Eventos_Dispositivos"
CREATE TABLE Eventos_Dispositivos (
    ID_evento_dispositivo INT PRIMARY KEY,
    ID_dispositivo INT NOT NULL,
    Tipo_evento VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(200) NOT NULL,
    Fecha_hora DATETIME NOT NULL,
    FOREIGN KEY (ID_dispositivo) REFERENCES Dispositivos(ID_dispositivo)
);

-- Crear tabla "Proveedores"
CREATE TABLE Proveedores (
    ID_proveedor INT PRIMARY KEY,
    Nombre_proveedor VARCHAR(100) NOT NULL,
    Direccion_proveedor VARCHAR(200) NOT NULL,
    Numero_Contacto VARCHAR(20)
);

-- Crear tabla "Info_Propietario"
CREATE TABLE Info_Propietario (
    ID_propietario INT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Numero_Contacto VARCHAR(20),
    DNI VARCHAR(20)
);

-- Crear tabla "Dispositivos_Proveedores"
CREATE TABLE Dispositivos_Proveedores (
    ID_dispositivo_proveedor INT PRIMARY KEY,
    ID_dispositivo INT NOT NULL,
    ID_proveedor INT NOT NULL,
    Precio DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (ID_dispositivo) REFERENCES Dispositivos(ID_dispositivo),
    FOREIGN KEY (ID_proveedor) REFERENCES Proveedores(ID_proveedor)
);

-- Asegurarse de que un dispositivo no esté en más de una ubicación a la vez
ALTER TABLE Dispositivos ADD CONSTRAINT UQ_Dispositivos_IDUbicacion UNIQUE (ID_ubicacion);
