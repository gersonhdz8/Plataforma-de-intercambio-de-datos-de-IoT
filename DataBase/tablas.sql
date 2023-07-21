CREATE DATABASE Hogares_IoT;

USE Hogares_IoT;
-- Crear tabla "Hogares"
CREATE TABLE Hogares (
    ID_hogar INT PRIMARY KEY,
    Nombre_hogar TEXT NOT NULL,
    Direccion TEXT NOT NULL,
    Ciudad VARCHAR(100) NOT NULL,
    Pais VARCHAR(100) NOT NULL,
    ID_propietario INT,
    FOREIGN KEY (ID_propietario) REFERENCES Info_Propietario(ID_propietario)
);

-- Crear tabla "Tipos_Dispositivos"
CREATE TABLE Tipos_Dispositivos (
    ID_tipo_dispositivo INT PRIMARY KEY,
    Nombre_tipo TEXT NOT NULL,
    Descripcion TEXT
);

-- Crear tabla "Dispositivos"
CREATE TABLE Dispositivos (
    ID_dispositivo INT PRIMARY KEY,
    ID_hogar INT NOT NULL,
    ID_tipo_dispositivo INT NOT NULL,
    Nombre_dispositivo TEXT NOT NULL,
    Estado VARCHAR(50) NOT NULL,
    ID_ubicacion INT,
    FOREIGN KEY (ID_hogar) REFERENCES Hogares(ID_hogar),
    FOREIGN KEY (ID_tipo_dispositivo) REFERENCES Tipos_Dispositivos(ID_tipo_dispositivo),
    FOREIGN KEY (ID_ubicacion) REFERENCES Ubicacion(ID_ubicacion)
);

-- Crear tabla "Ubicacion"
CREATE TABLE Ubicacion (
    ID_ubicacion INT PRIMARY KEY,
    Nombre_ubicacion TEXT NOT NULL
);

-- Crear tabla "Eventos_Dispositivos"
CREATE TABLE Eventos_Dispositivos (
    ID_evento_dispositivo INT PRIMARY KEY,
    ID_dispositivo INT NOT NULL,
    Tipo_evento TEXT NOT NULL,
    Descripcion TEXT NOT NULL,
    Fecha_hora DATETIME NOT NULL,
    FOREIGN KEY (ID_dispositivo) REFERENCES Dispositivos(ID_dispositivo)
);

-- Crear tabla "Proveedores"
CREATE TABLE Proveedores (
    ID_proveedor INT PRIMARY KEY,
    Nombre_proveedor TEXT NOT NULL,
    Direccion_proveedor TEXT NOT NULL,
    Numero_Contacto VARCHAR(20)
);

-- Crear tabla "Info_Propietario"
CREATE TABLE Info_Propietario (
    ID_propietario INT PRIMARY KEY,
    Nombre TEXT NOT NULL,
    Apellido TEXT NOT NULL,
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



