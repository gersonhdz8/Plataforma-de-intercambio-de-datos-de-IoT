-- Insertar datos en la tabla "Hogares"
INSERT INTO Hogares (ID_hogar, Nombre_hogar, Direccion, Ciudad, Pais, ID_propietario)
VALUES
    (1, 'Casa Principal', 'Calle 123, Ciudad A', 'Ciudad A', 'País A', 1),
    (2, 'Casa de Playa', 'Avenida XYZ, Ciudad B', 'Ciudad B', 'País B', 2),
    (3, 'Hogar Acogedor', 'Carrera 456, Ciudad C', 'Ciudad C', 'País C', 3),
    (4, 'Apartamento Moderno', 'Calle 789, Ciudad D', 'Ciudad D', 'País D', 4),
    (5, 'Casa de Campo', 'Avenida ABC, Ciudad E', 'Ciudad E', 'País E', 5),
    (6, 'Apartamento Céntrico', 'Carrera 654, Ciudad F', 'Ciudad F', 'País F', 6),
    (7, 'Hogar Familiar', 'Calle 987, Ciudad G', 'Ciudad G', 'País G', 7),
    (8, 'Casa Elegante', 'Avenida XYZ, Ciudad H', 'Ciudad H', 'País H', 8),
    (9, 'Apartamento Pequeño', 'Carrera 321, Ciudad I', 'Ciudad I', 'País I', 9),
    (10, 'Casa Moderna', 'Calle 567, Ciudad J', 'Ciudad J', 'País J', 10);

-- Insertar datos en la tabla "Tipos_Dispositivos"
INSERT INTO Tipos_Dispositivos (ID_tipo_dispositivo, Nombre_tipo, Descripcion)
VALUES
    (1, 'Sensor de Temperatura', 'Mide la temperatura del ambiente'),
    (2, 'Sensor de Humedad', 'Mide el nivel de humedad del ambiente'),
    (3, 'Sensor de Movimiento', 'Detecta movimientos en su entorno'),
    (4, 'Sensor de Luz', 'Mide la intensidad de luz en su entorno'),
    (5, 'Actuador de Puerta', 'Abre y cierra puertas de forma automática'),
    (6, 'Actuador de Cortina', 'Abre y cierra cortinas de forma automática'),
    (7, 'Actuador de Iluminación', 'Controla la intensidad de la iluminación'),
    (8, 'Sensor de CO2', 'Mide la concentración de CO2 en el ambiente'),
    (9, 'Sensor de Sonido', 'Mide la intensidad del sonido en su entorno'),
    (10, 'Actuador de Ventilación', 'Controla la ventilación del hogar');

-- Insertar datos en la tabla "Dispositivos"
INSERT INTO Dispositivos (ID_dispositivo, ID_hogar, ID_tipo_dispositivo, Nombre_dispositivo, Estado, ID_ubicacion)
VALUES
    (1, 1, 1, 'Sensor Temperatura Sala', 'Activo', 1),
    (2, 1, 2, 'Sensor Humedad Cocina', 'Activo', 2),
    (3, 2, 1, 'Sensor Temperatura Habitación', 'Inactivo', 3),
    (4, 2, 2, 'Sensor Humedad Baño', 'Activo', 4),
    (5, 3, 3, 'Sensor Movimiento Sala', 'Activo', 1),
    (6, 3, 4, 'Sensor Luz Patio', 'Inactivo', 5),
    (7, 4, 5, 'Actuador Puerta Principal', 'Activo', 6),
    (8, 4, 6, 'Actuador Cortina Sala', 'Inactivo', 7),
    (9, 5, 7, 'Actuador Iluminación Jardín', 'Activo', 8),
    (10, 5, 8, 'Sensor CO2 Habitación', 'Activo', 3);

-- Insertar datos en la tabla "Ubicacion"
INSERT INTO Ubicacion (ID_ubicacion, Nombre_ubicacion)
VALUES
    (1, 'Sala'),
    (2, 'Cocina'),
    (3, 'Habitación'),
    (4, 'Baño'),
    (5, 'Patio'),
    (6, 'Ventana'),
    (7, 'Terraza'),
    (8, 'Jardín'),
    (9, 'Comedor'),
    (10, 'Garaje');

-- Insertar datos en la tabla "Eventos_Dispositivos"
INSERT INTO Eventos_Dispositivos (ID_evento_dispositivo, ID_dispositivo, Tipo_evento, Descripcion, Fecha_hora)
VALUES
    (1, 1, 'Alerta_temperatura_alta', 'Temperatura en la sala muy alta', '2023-07-15 08:30:00'),
    (2, 1, 'Alerta_humedad_baja', 'Humedad en la cocina muy baja', '2023-07-15 12:45:00'),
    (3, 2, 'Alerta_temperatura_baja', 'Temperatura en la cocina muy baja', '2023-07-15 10:15:00'),
    (4, 3, 'Alerta_movimiento_detectado', 'Movimiento detectado en la habitación', '2023-07-16 09:00:00'),
    (5, 3, 'Alerta_temperatura_baja', 'Temperatura en la habitación muy baja', '2023-07-16 12:30:00'),
    (6, 4, 'Alerta_humedad_alta', 'Humedad en el baño muy alta', '2023-07-17 07:20:00'),
    (7, 4, 'Alerta_luz_apagada', 'La luz del baño está apagada', '2023-07-17 18:10:00'),
    (8, 5, 'Alerta_movimiento_detectado', 'Movimiento detectado en el patio', '2023-07-18 11:45:00'),
    (9, 5, 'Alerta_luz_encendida', 'La luz del patio está encendida', '2023-07-18 20:30:00'),
    (10, 6, 'Alerta_temperatura_alta', 'Temperatura en la ventana muy alta', '2023-07-19 13:00:00');

-- Insertar datos en la tabla "Proveedores"
INSERT INTO Proveedores (ID_proveedor, Nombre_proveedor, Direccion_proveedor, Numero_Contacto)
VALUES
    (1, 'Proveedor IoT X', 'Calle 123, Ciudad A', '+1234567890'),
    (2, 'Proveedor IoT Y', 'Avenida XYZ, Ciudad B', '+9876543210'),
    (3, 'Proveedor IoT Z', 'Carrera 456, Ciudad C', '+2468135790'),
    (4, 'Proveedor IoT W', 'Calle 789, Ciudad D', '+1357924680'),
    (5, 'Proveedor IoT V', 'Avenida ABC, Ciudad E', '+6789054321'),
    (6, 'Proveedor IoT U', 'Carrera 654, Ciudad F', '+0987654321'),
    (7, 'Proveedor IoT T', 'Calle 987, Ciudad G', '+5432109876'),
    (8, 'Proveedor IoT S', 'Avenida XYZ, Ciudad H', '+1234509876'),
    (9, 'Proveedor IoT R', 'Carrera 321, Ciudad I', '+9876543210'),
    (10, 'Proveedor IoT Q', 'Calle 567, Ciudad J', '+2468135790');

-- Insertar datos en la tabla "Dispositivos_Proveedores"
INSERT INTO Dispositivos_Proveedores (ID_dispositivo, ID_proveedor, Precio_pesos_colombianos)
VALUES
    (1, 1, 200000),
    (2, 1, 150000),
    (3, 2, 180000),
    (4, 2, 160000),
    (5, 3, 250000),
    (6, 3, 300000),
    (7, 4, 350000),
    (8, 4, 120000),
    (9, 5, 180000),
    (10, 5, 200000);
