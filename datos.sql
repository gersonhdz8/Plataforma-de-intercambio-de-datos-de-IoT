INSERT INTO Dispositivos (ID_dispositivo, Nombre_dispositivo, Ubicacion, Tipo_dispositivo, Fecha_registro, Estado)
VALUES
  (1, 'Sensor_Temperatura1', 'Sala de producción 1', 'Sensor', '2023-06-15', 'Activo'),
  (2, 'Sensor_Temperatura2', 'Sala de producción 2', 'Sensor', '2023-06-16', 'Activo'),
  (3, 'Sensor_Presion1', 'Sala de producción 1', 'Sensor', '2023-06-17', 'Activo'),
  (4, 'Actuador_Valvula1', 'Línea de ensamblaje 1', 'Actuador', '2023-06-18', 'Activo'),
  (5, 'Actuador_Valvula2', 'Línea de ensamblaje 2', 'Actuador', '2023-06-19', 'Activo'),
  (6, 'Motor_Transporte1', 'Área de logística', 'Motor', '2023-06-20', 'Activo'),
  (7, 'Motor_Transporte2', 'Área de logística', 'Motor', '2023-06-21', 'Activo'),
  (8, 'Robot_Ensamblaje1', 'Línea de ensamblaje 1', 'Robot', '2023-06-22', 'Activo'),
  (9, 'Robot_Ensamblaje2', 'Línea de ensamblaje 2', 'Robot', '2023-06-23', 'Activo'),
  (10, 'Piston_Hidraulico1', 'Línea de ensamblaje 1', 'Piston', '2023-06-24', 'Activo'),
  (11, 'Piston_Hidraulico2', 'Línea de ensamblaje 2', 'Piston', '2023-06-25', 'Activo'),
  (12, 'Banda_Transportadora1', 'Sala de producción 1', 'Banda Transportadora', '2023-06-26', 'Activo'),
  (13, 'Banda_Transportadora2', 'Sala de producción 2', 'Banda Transportadora', '2023-06-27', 'Activo'),
  (14, 'Sensor_Humedad1', 'Sala de producción 1', 'Sensor', '2023-06-28', 'Activo'),
  (15, 'Sensor_Humedad2', 'Sala de producción 2', 'Sensor', '2023-06-29', 'Activo'),
  (16, 'Actuador_Motor1', 'Área de logística', 'Actuador', '2023-06-30', 'Activo'),
  (17, 'Actuador_Motor2', 'Área de logística', 'Actuador', '2023-07-01', 'Activo'),
  (18, 'Motor_Elevador1', 'Línea de ensamblaje 1', 'Motor', '2023-07-02', 'Activo'),
  (19, 'Motor_Elevador2', 'Línea de ensamblaje 2', 'Motor', '2023-07-03', 'Activo'),
  (20, 'Robot_Inspeccion1', 'Línea de ensamblaje 1', 'Robot', '2023-07-04', 'Activo'),
  (21, 'Robot_Inspeccion2', 'Línea de ensamblaje 2', 'Robot', '2023-07-05', 'Activo');
INSERT INTO Datos_Sensores (ID_dato, ID_dispositivo, Tipo_sensor, Valor, Fecha_hora)
VALUES
  (1, 1, 'Temperatura', 35.5, '2023-06-15 09:32:15'),
  (2, 2, 'Temperatura', 34.8, '2023-06-16 10:17:40'),
  (3, 3, 'Presion', 2.8, '2023-06-17 11:25:10'),
  (4, 4, 'Nivel', 0.6, '2023-06-18 12:40:30'),
  (5, 5, 'Temperatura', 36.8, '2023-06-19 13:55:18'),
  (6, 6, 'Presion', 2.6, '2023-06-20 14:30:45'),
  (7, 7, 'Nivel', 0.8, '2023-06-21 15:45:30'),
  (8, 8, 'Temperatura', 34.2, '2023-06-22 16:20:50'),
  (9, 9, 'Presion', 2.9, '2023-06-23 09:50:15'),
  (10, 10, 'Temperatura', 35.1, '2023-06-24 10:25:20'),
  (11, 11, 'Presion', 3.0, '2023-06-25 11:40:30'),
  (12, 12, 'Nivel', 0.7, '2023-06-26 12:15:45'),
  (13, 13, 'Temperatura', 36.5, '2023-06-27 13:20:30'),
  (14, 14, 'Presion', 2.7, '2023-06-28 14:30:40'),
  (15, 15, 'Nivel', 0.9, '2023-06-29 15:45:20'),
  (16, 16, 'Temperatura', 33.9, '2023-06-30 16:20:50'),
  (17, 17, 'Presion', 3.1, '2023-07-01 09:50:15'),
  (18, 18, 'Nivel', 0.5, '2023-07-02 10:25:20'),
  (19, 19, 'Temperatura', 37.0, '2023-07-03 11:40:30'),
  (20, 20, 'Presion', 3.2, '2023-07-04 12:15:45');
INSERT INTO Datos_Actuadores (ID_dato, ID_dispositivo, Tipo_actuador, Estado, Fecha_hora)
VALUES
  (1, 4, 'Valvula', 'Abierta', '2023-06-18 10:30:20'),
  (2, 5, 'Valvula', 'Cerrada', '2023-06-19 11:45:35'),
  (3, 16, 'Motor', 'Encendido', '2023-06-30 12:55:18'),
  (4, 17, 'Motor', 'Apagado', '2023-07-01 14:30:45');
INSERT INTO Datos_Motores (ID_dato, ID_dispositivo, Tipo_motor, RPM, Fecha_hora)
VALUES
  (1, 6, 'Transporte', 1500, '2023-06-20 09:10:50'),
  (2, 7, 'Transporte', 2000, '2023-06-21 10:25:15'),
  (3, 18, 'Elevador', 1800, '2023-07-02 11:50:40'),
  (4, 19, 'Elevador', 1600, '2023-07-03 12:15:20');
INSERT INTO Datos_Robots (ID_dato, ID_dispositivo, Tipo_robot, Estado, Fecha_hora)
VALUES
  (1, 8, 'Ensamblaje', 'En funcionamiento', '2023-06-22 09:10:50'),
  (2, 9, 'Ensamblaje', 'Fuera de servicio', '2023-06-23 10:25:15'),
  (3, 20, 'Inspeccion', 'En funcionamiento', '2023-07-04 11:50:40'),
  (4, 21, 'Inspeccion', 'En mantenimiento', '2023-07-05 12:15:20');
