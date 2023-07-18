-- Insertar datos en la tabla "Hogares"
INSERT INTO Hogares (ID_hogar, Nombre_hogar, Direccion, Ciudad, Pais)
VALUES
    (1, 'Casa Principal', 'Calle 123, Ciudad A', 'Ciudad A', 'País A'),
    (2, 'Casa de Playa', 'Avenida XYZ, Ciudad B', 'Ciudad B', 'País B'),
    (3, 'Apartamento 1', 'Calle 456, Ciudad C', 'Ciudad C', 'País C'),
    (4, 'Casa de Campo', 'Avenida ABC, Ciudad D', 'Ciudad D', 'País D'),
    (5, 'Casa de Montaña', 'Calle 789, Ciudad E', 'Ciudad E', 'País E'),
    (6, 'Departamento 2', 'Avenida DEF, Ciudad F', 'Ciudad F', 'País F'),
    (7, 'Casa Moderna', 'Calle GHI, Ciudad G', 'Ciudad G', 'País G'),
    (8, 'Casa Clásica', 'Avenida JKL, Ciudad H', 'Ciudad H', 'País H'),
    (9, 'Apartamento 3', 'Calle MNO, Ciudad I', 'Ciudad I', 'País I'),
    (10, 'Casa de Campo 2', 'Avenida PQR, Ciudad J', 'Ciudad J', 'País J'),
    (11, 'Casa Urbana', 'Calle STU, Ciudad K', 'Ciudad K', 'País K'),
    (12, 'Departamento 4', 'Avenida VWX, Ciudad L', 'Ciudad L', 'País L'),
    (13, 'Casa de Lujo', 'Calle YZA, Ciudad M', 'Ciudad M', 'País M'),
    (14, 'Casa Pequeña', 'Avenida BCD, Ciudad N', 'Ciudad N', 'País N'),
    (15, 'Casa de Montaña 2', 'Calle EFG, Ciudad O', 'Ciudad O', 'País O');

-- Insertar datos en la tabla "Tipos_Dispositivos"
INSERT INTO Tipos_Dispositivos (ID_tipo_dispositivo, Nombre_tipo, Descripcion)
VALUES
    (1, 'Sensor de Temperatura', 'Mide la temperatura del ambiente'),
    (2, 'Sensor de Humedad', 'Mide el nivel de humedad del ambiente'),
    (3, 'Actuador de Luces', 'Controla el encendido y apagado de las luces'),
    (4, 'Actuador de Cerradura', 'Controla el bloqueo y desbloqueo de las cerraduras'),
    (5, 'Sensor de Movimiento', 'Detecta el movimiento en una zona específica'),
    (6, 'Sensor de CO2', 'Mide el nivel de dióxido de carbono en el aire'),
    (7, 'Actuador de Cortinas', 'Controla la apertura y cierre de las cortinas'),
    (8, 'Sensor de Luz', 'Detecta la intensidad de luz en el ambiente'),
    (9, 'Actuador de Ventilación', 'Controla la apertura y cierre de las ventilaciones'),
    (10, 'Sensor de Gas', 'Detecta la presencia de gases peligrosos'),
    (11, 'Actuador de Puertas', 'Controla el abrir y cerrar de puertas'),
    (12, 'Sensor de Presencia', 'Detecta la presencia de personas en una área'),
    (13, 'Actuador de Persianas', 'Controla la apertura y cierre de persianas'),
    (14, 'Sensor de Humo', 'Detecta la presencia de humo'),
    (15, 'Actuador de Aire Acond.', 'Controla el encendido y apagado del aire acondicionado'),
    (16, 'Electrodoméstico Lavadora', 'Controla el funcionamiento de una lavadora'),
    (17, 'Electrodoméstico Refrigerador', 'Controla el funcionamiento de un refrigerador'),
    (18, 'Electrodoméstico Horno', 'Controla el funcionamiento de un horno'),
    (19, 'Electrodoméstico Cafetera', 'Controla el funcionamiento de una cafetera'),
    (20, 'Electrodoméstico Aspiradora', 'Controla el funcionamiento de una aspiradora'),
    (21, 'Sensor de Movimiento Exterior', 'Detecta el movimiento en áreas exteriores'),
    (22, 'Sensor de Luminosidad Exterior', 'Detecta la luminosidad en áreas exteriores'),
    (23, 'Actuador de Riego', 'Controla el riego automático del jardín'),
    (24, 'Sensor de Puerta/Garaje', 'Detecta el estado abierto/cerrado de puertas/garaje'),
    (25, 'Actuador de Ventanas', 'Controla la apertura y cierre de ventanas');

-- Insertar datos en la tabla "Dispositivos"
INSERT INTO Dispositivos (ID_dispositivo, ID_hogar, ID_tipo_dispositivo, Nombre_dispositivo, Estado, Ubicacion)
VALUES
    -- Hogar 1
    (1, 1, 1, 'Sensor Temperatura Sala', 'Activo', 'Sala de estar'),
    (2, 1, 2, 'Sensor Humedad Cocina', 'Activo', 'Cocina'),
    (3, 1, 3, 'Actuador Luces Dormitorio', 'Activo', 'Dormitorio'),
    -- Hogar 2
    (4, 2, 1, 'Sensor Temperatura Habitación Ppal', 'Activo', 'Habitación Principal'),
    (5, 2, 2, 'Sensor Humedad Baño', 'Activo', 'Baño'),
    (6, 2, 3, 'Actuador Luces Cocina', 'Activo', 'Cocina'),
    -- Hogar 3
    (7, 3, 4, 'Actuador Cerradura Puerta', 'Activo', 'Puerta Principal'),
    (8, 3, 5, 'Sensor Movimiento Patio', 'Activo', 'Patio'),
    (9, 3, 6, 'Sensor CO2 Cocina', 'Activo', 'Cocina'),
    -- Hogar 4
    (10, 4, 7, 'Actuador Cortinas Sala', 'Activo', 'Sala de estar'),
    (11, 4, 8, 'Sensor Luz Habitación Secundaria', 'Activo', 'Habitación Secundaria'),
    (12, 4, 9, 'Actuador Ventilación Baño', 'Activo', 'Baño'),
    -- Hogar 5
    (13, 5, 10, 'Sensor Gas Cocina', 'Activo', 'Cocina'),
    (14, 5, 11, 'Actuador Puerta Habitación', 'Activo', 'Habitación Principal'),
    (15, 5, 12, 'Sensor Presencia Sala', 'Activo', 'Sala de estar'),
    -- Hogar 6
    (16, 6, 13, 'Actuador Persianas Habitación', 'Activo', 'Habitación Principal'),
    (17, 6, 14, 'Sensor Humo Cocina', 'Activo', 'Cocina'),
    (18, 6, 15, 'Actuador Aire Acond. Salón', 'Activo', 'Salón'),
    -- Hogar 7
    (19, 7, 16, 'Electrodoméstico Lavadora', 'Activo', 'Lavadero'),
    (20, 7, 17, 'Electrodoméstico Refrigerador', 'Activo', 'Cocina'),
    (21, 7, 18, 'Electrodoméstico Horno', 'Activo', 'Cocina'),
    -- Hogar 8
    (22, 8, 19, 'Electrodoméstico Cafetera', 'Activo', 'Cocina'),
    (23, 8, 20, 'Electrodoméstico Aspiradora', 'Activo', 'Salón'),
    (24, 8, 21, 'Sensor Movimiento Exterior', 'Activo', 'Exterior'),
    -- Hogar 9
    (25, 9, 22, 'Sensor Luminosidad Exterior', 'Activo', 'Exterior'),
    (26, 9, 23, 'Actuador Riego Jardín', 'Activo', 'Jardín'),
    (27, 9, 24, 'Sensor Puerta Garaje', 'Activo', 'Garaje'),
    -- Hogar 10
    (28, 10, 25, 'Actuador Ventanas', 'Activo', 'Cocina'),
    (29, 10, 4, 'Actuador Cerradura Puerta', 'Activo', 'Puerta Principal'),
    (30, 10, 7, 'Actuador Cortinas Sala', 'Activo', 'Sala de estar'),
    -- Hogar 11
    (31, 11, 1, 'Sensor Temperatura Sala', 'Activo', 'Sala de estar'),
    (32, 11, 2, 'Sensor Humedad Cocina', 'Activo', 'Cocina'),
    (33, 11, 3, 'Actuador Luces Dormitorio', 'Activo', 'Dormitorio'),
    -- Hogar 12
    (34, 12, 4, 'Actuador Cerradura Puerta', 'Activo', 'Puerta Principal'),
    (35, 12, 5, 'Sensor Movimiento Patio', 'Activo', 'Patio'),
    (36, 12, 6, 'Sensor CO2 Cocina', 'Activo', 'Cocina'),
    -- Hogar 13
    (37, 13, 7, 'Actuador Cortinas Sala', 'Activo', 'Sala de estar'),
    (38, 13, 8, 'Sensor Luz Habitación Secundaria', 'Activo', 'Habitación Secundaria'),
    (39, 13, 9, 'Actuador Ventilación Baño', 'Activo', 'Baño'),
    -- Hogar 14
    (40, 14, 10, 'Sensor Gas Cocina', 'Activo', 'Cocina'),
    (41, 14, 11, 'Actuador Puerta Habitación', 'Activo', 'Habitación Principal'),
    (42, 14, 12, 'Sensor Presencia Sala', 'Activo', 'Sala de estar'),
    -- Hogar 15
    (43, 15, 13, 'Actuador Persianas Habitación', 'Activo', 'Habitación Principal'),
    (44, 15, 14, 'Sensor Humo Cocina', 'Activo', 'Cocina'),
    (45, 15, 15, 'Actuador Aire Acond. Salón', 'Activo', 'Salón');

-- Insertar datos en la tabla "Eventos_Dispositivos"
INSERT INTO Eventos_Dispositivos (ID_evento_dispositivo, ID_dispositivo, Tipo_evento, Descripcion, Fecha_hora)
VALUES
    -- Eventos del Dispositivo 1
    (1, 1, 'Alerta_temperatura_alta', 'Temperatura en la sala muy alta', '2023-07-15 08:30:00'),
    (2, 1, 'Alerta_humedad_baja', 'Humedad en la cocina muy baja', '2023-07-15 12:45:00'),
    (3, 1, 'Cambio_estado_luces', 'Luces del dormitorio encendidas', '2023-07-16 09:10:00'),
    -- Eventos del Dispositivo 2
    (4, 2, 'Alerta_temperatura_alta', 'Temperatura en habitación principal alta', '2023-07-16 19:20:00'),
    (5, 2, 'Cambio_estado_luces', 'Luces de la cocina encendidas', '2023-07-17 14:55:00'),
    (6, 2, 'Cambio_estado_cerradura', 'Cerradura de la puerta principal abierta', '2023-07-18 10:30:00'),
    -- Eventos del Dispositivo 3
    (7, 3, 'Alerta_temperatura_alta', 'Temperatura en el dormitorio muy alta', '2023-07-18 15:45:00'),
    (8, 3, 'Alerta_humedad_baja', 'Humedad en la habitación baja', '2023-07-19 11:20:00'),
    (9, 3, 'Cambio_estado_luces', 'Luces del dormitorio apagadas', '2023-07-20 08:35:00');
    -- Agrega aquí más datos para completar los eventos de dispositivos...

-- Insertar datos en la tabla "Proveedores"
INSERT INTO Proveedores (ID_proveedor, Nombre_proveedor, Direccion_proveedor)
VALUES
    (1, 'Proveedor IoT X', 'Calle 123, Ciudad A'),
    (2, 'Proveedor IoT Y', 'Avenida XYZ, Ciudad B'),
    (3, 'Proveedor IoT Z', 'Calle 456, Ciudad C'),
    (4, 'Proveedor IoT W', 'Avenida ABC, Ciudad D'),
    (5, 'Proveedor IoT V', 'Calle 789, Ciudad E');

-- Insertar datos en la tabla "Dispositivos_Proveedores"
INSERT INTO Dispositivos_Proveedores (ID_dispositivo_proveedor, ID_tipo_dispositivo, ID_proveedor, Precio_dispositivo)
VALUES
    -- Dispositivos relacionados con proveedores
    (1, 1, 1, 40.00),
    (2, 2, 1, 30.00),
    (3, 3, 2, 25.00),
    (4, 4, 2, 50.00),
    (5, 5, 3, 15.00),
    (6, 6, 3, 20.00),
    (7, 7, 4, 35.00),
    (8, 8, 4, 30.00),
    (9, 9, 5, 18.00),
    (10, 10, 5, 22.00);
    -- Agrega aquí más datos para completar la relación de dispositivos y proveedores...
