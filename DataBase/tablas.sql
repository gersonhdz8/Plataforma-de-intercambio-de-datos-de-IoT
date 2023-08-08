CREATE DATABASE hogares_iot;

USE hogares_iot;

-- Crear tabla "info_propietario"
CREATE TABLE info_propietario (
    ID_propietario INT PRIMARY KEY AUTO_INCREMENT,
    Nombre TEXT NOT NULL,
    Apellido TEXT NOT NULL,
    Numero_Contacto VARCHAR(20),
    DNI VARCHAR(20)
);
-- Crear tabla "hogares"
CREATE TABLE hogares (
    ID_hogar INT PRIMARY KEY AUTO_INCREMENT,
    Nombre_hogar TEXT NOT NULL,
    Direccion TEXT NOT NULL,
    Ciudad VARCHAR(100) NOT NULL,
    Pais VARCHAR(100) NOT NULL,
    ID_propietario INT,
    FOREIGN KEY (ID_propietario) REFERENCES info_propietario(ID_propietario)
);

-- Crear tabla "tipos_dispositivos"
CREATE TABLE tipos_dispositivos (
    ID_tipo_dispositivo INT PRIMARY KEY AUTO_INCREMENT,
    Nombre_tipo TEXT NOT NULL,
    Descripcion TEXT
);
-- Crear tabla "ubicacion"
CREATE TABLE ubicacion (
    ID_ubicacion INT PRIMARY KEY AUTO_INCREMENT,
    Nombre_ubicacion TEXT NOT NULL
);

-- Crear tabla "dispositivos"
CREATE TABLE dispositivos (
    ID_dispositivo INT PRIMARY KEY AUTO_INCREMENT,
    ID_hogar INT NOT NULL,
    ID_tipo_dispositivo INT NOT NULL,
    Nombre_dispositivo TEXT NOT NULL,
    Estado VARCHAR(50) NOT NULL,
    ID_ubicacion INT,
    FOREIGN KEY (ID_hogar) REFERENCES hogares(ID_hogar),
    FOREIGN KEY (ID_tipo_dispositivo) REFERENCES tipos_dispositivos(ID_tipo_dispositivo),
    FOREIGN KEY (ID_ubicacion) REFERENCES ubicacion(ID_ubicacion)
);

-- Crear tabla "eventos_dispositivos"
CREATE TABLE eventos_dispositivos (
    ID_evento_dispositivo INT PRIMARY KEY AUTO_INCREMENT,
    ID_dispositivo INT NOT NULL,
    Tipo_evento TEXT NOT NULL,
    Descripcion TEXT NOT NULL,
    Fecha_hora DATETIME NOT NULL,
    FOREIGN KEY (ID_dispositivo) REFERENCES dispositivos(ID_dispositivo)
);

-- Crear tabla "proveedores"
CREATE TABLE proveedores (
    ID_proveedor INT PRIMARY KEY AUTO_INCREMENT,
    Nombre_proveedor TEXT NOT NULL,
    Direccion_proveedor TEXT NOT NULL,
    Numero_Contacto VARCHAR(20)
);

-- Crear tabla "dispositivos_proveedores"
CREATE TABLE dispositivos_proveedores (
    ID_dispositivo_proveedor INT PRIMARY KEY AUTO_INCREMENT,
    ID_dispositivo INT NOT NULL,
    ID_proveedor INT NOT NULL,
    Precio DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (ID_dispositivo) REFERENCES dispositivos(ID_dispositivo),
    FOREIGN KEY (ID_proveedor) REFERENCES proveedores(ID_proveedor)
);



