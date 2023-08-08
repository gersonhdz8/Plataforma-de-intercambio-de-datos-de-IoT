-- Datos para la tabla "info_propietarios"
INSERT INTO info_propietario (ID_propietario, Nombre, Apellido, Numero_Contacto, DNI)
VALUES
(1, 'John', 'Doe', '+1234567890', '123456789'),
(2, 'Jane', 'Smith', '+9876543210', '987654321'),
(3, 'Michael', 'Johnson', '+1357924680', '456789123'),
(4, 'Laura', 'Williams', '+0246813579', '789123456'),
(5, 'Robert', 'Brown', '+4567891230', '357924681'),
(6, 'Lisa', 'Jones', '+7891234560', '123789456'),
(7, 'David', 'Miller', '+0123456789', '789456123'),
(8, 'Maria', 'Garcia', '+9876543210', '654123789'),
(9, 'Daniel', 'Martinez', '+1234567890', '321654987'),
(10, 'Sofia', 'Lopez', '+9876543210', '987321654');

INSERT INTO hogares (ID_hogar, Nombre_hogar, Direccion, Ciudad, Pais, ID_propietario)
VALUES
(1, 'Casa Principal', 'Calle 123', 'Ciudad A', 'País A', 1),
(2, 'Casa de Playa', 'Avenida XYZ', 'Ciudad B', 'País B', 2),
(3, 'Apartamento Centro', 'Carrera 456', 'Ciudad A', 'País A', 3),
(4, 'Chalet Montaña', 'Calle 789', 'Ciudad C', 'País C', 4),
(5, 'Casa del Lago', 'Avenida ABC', 'Ciudad D', 'País D', 5),
(6, 'Apartamento Playa', 'Carrera 123', 'Ciudad B', 'País B', 6),
(7, 'Casa Rural', 'Calle 456', 'Ciudad E', 'País E', 7),
(8, 'Chalet Bosque', 'Avenida XYZ', 'Ciudad C', 'País C', 8),
(9, 'Apartamento Montaña', 'Carrera 789', 'Ciudad F', 'País F', 9),
(10, 'Casa de Campo', 'Calle 123', 'Ciudad G', 'País G', 10);
INSERT INTO tipos_dispositivos (ID_tipo_dispositivo, Nombre_tipo, Descripcion)
VALUES
(1, 'Sensor de Temperatura', 'Mide la temperatura del ambiente'),
(2, 'Sensor de Humedad', 'Mide el nivel de humedad del ambiente'),
(3, 'Sensor de Movimiento', 'Detecta movimientos en el área'),
(4, 'Actuador de Luces', 'Controla el encendido y apagado de luces'),
(5, 'Actuador de Cerradura', 'Controla el bloqueo y desbloqueo de cerraduras'),
(6, 'Cámara de Seguridad', 'Captura imágenes y videos de seguridad'),
(7, 'Sensor de Gas', 'Detecta la presencia de gases peligrosos'),
(8, 'Actuador de Riego', 'Controla el riego de plantas y jardines'),
(9, 'Sensor de Puertas/Ventanas', 'Detecta la apertura y cierre de puertas/ventanas'),
(10, 'Actuador de Cortinas', 'Controla la apertura y cierre de cortinas');

-- Datos para la tabla "ubicacion"
INSERT INTO ubicacion (ID_ubicacion, Nombre_ubicacion)
VALUES
(1, 'Sala'),
(2, 'Cocina'),
(3, 'Patio'),
(4, 'Sala'),
(5, 'Entrada'),
(6, 'Entrada'),
(7, 'Cocina'),
(8, 'Jardín'),
(9, 'Entrada'),
(10, 'Habitación');
-- Datos para la tabla "dispositivos"
INSERT INTO dispositivos (ID_dispositivo, ID_hogar, ID_tipo_dispositivo, Nombre_dispositivo, Estado, ID_ubicacion)
VALUES
(1, 1, 1, 'Sensor Temperatura Sala', 'Activo', 1),
(2, 1, 2, 'Sensor Humedad Cocina', 'Activo', 2),
(3, 2, 3, 'Sensor Movimiento Patio', 'Activo', 3),
(4, 3, 4, 'Actuador Luces Sala', 'Inactivo', 4),
(5, 4, 5, 'Actuador Cerradura Principal', 'Activo', 5),
(6, 5, 6, 'Cámara Seguridad Entrada', 'Activo', 6),
(7, 6, 7, 'Sensor Gas Cocina', 'Inactivo', 7),
(8, 7, 8, 'Actuador Riego Jardín', 'Activo', 8),
(9, 8, 9, 'Sensor Puerta Principal', 'Activo', 9),
(10, 9, 10, 'Actuador Cortinas Habitación', 'Inactivo', 10);



-- Datos para la tabla "eventos_dispositivo"
INSERT INTO eventos_dispositivos (ID_evento_dispositivo, ID_dispositivo, Tipo_evento, Descripcion, Fecha_hora)
VALUES
(1, 1, 'Alerta_temperatura_alta', 'Temperatura en la sala muy alta', '2023-07-15 08:30:00'),
(2, 1, 'Alerta_humedad_baja', 'Humedad en la cocina muy baja', '2023-07-15 12:45:00'),
(3, 2, 'Alerta_movimiento_detectado', 'Movimiento detectado en la cocina', '2023-07-16 10:15:00'),
(4, 3, 'Luces_sala_encendidas', 'Luces de la sala encendidas', '2023-07-17 20:00:00'),
(5, 4, 'Luces_sala_apagadas', 'Luces de la sala apagadas', '2023-07-18 22:30:00'),
(6, 5, 'Cerradura_principal_desbloqueada', 'Cerradura principal desbloqueada', '2023-07-19 11:00:00'),
(7, 6, 'Alerta_movimiento_detectado', 'Movimiento detectado en la entrada', '2023-07-20 15:45:00'),
(8, 7, 'Alerta_gas_detectado', 'Presencia de gas detectado en la cocina', '2023-07-21 09:20:00'),
(9, 8, 'Riego_jardín_iniciado', 'Riego del jardín iniciado', '2023-07-22 07:00:00'),
(10, 9, 'Puerta_principal_abierta', 'Puerta principal abierta', '2023-07-23 18:10:00');

-- Datos para la tabla "proveedores"
INSERT INTO proveedores (ID_proveedor, Nombre_proveedor, Direccion_proveedor, Numero_Contacto)
VALUES
(1, 'Proveedor IoT X', 'Calle 123, Ciudad A', '+1234567890'),
(2, 'Proveedor IoT Y', 'Avenida XYZ, Ciudad B', '+9876543210'),
(3, 'Proveedor IoT Z', 'Carrera 789, Ciudad C', '+2468135790'),
(4, 'Proveedor IoT W', 'Camino ABC, Ciudad D', '+1357924680'),
(5, 'Proveedor IoT V', 'Carretera 456, Ciudad E', '+0123456789'),
(6, 'Proveedor IoT U', 'Calle XYZ, Ciudad F', '+9876543210'),
(7, 'Proveedor IoT T', 'Avenida 789, Ciudad G', '+1234567890'),
(8, 'Proveedor IoT S', 'Carrera 456, Ciudad H', '+9876543210'),
(9, 'Proveedor IoT R', 'Camino ABC, Ciudad I', '+1234567890'),
(10, 'Proveedor IoT Q', 'Carretera 789, Ciudad J', '+9876543210');

-- Datos para la tabla "dispositivos_propietarios"
INSERT INTO dispositivos_proveedores (ID_dispositivo_proveedor, ID_dispositivo, ID_proveedor, Precio)
VALUES
(1, 1, 1, 500000),
(2, 2, 2, 250000),
(3, 3, 3, 300000),
(4, 4, 4, 180000),
(5, 5, 5, 120000),
(6, 6, 6, 400000),
(7, 7, 7, 220000),
(8, 8, 8, 350000),
(9, 9, 9, 180000),
(10, 10, 10, 280000);