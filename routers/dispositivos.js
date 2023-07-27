import mysql from "mysql2";
import {Router} from "express";
import {Exclude, plainToClass} from "class-transformer";
import {dtoDispositivos} from "../middleware/DTO.js"
import appDB from "../conexionDataBase/conexionDB.js"
import {tokenJWT} from "../middleware/token.js"


const appDispositivos = Router();


appDispositivos.get('/list',appDB, (req, res) => {

    req.conexion.query(
        /*sql*/`SELECT * FROM  dispositivos
        ORDER BY ID_dispositivo ASC`,        
        (error, data,fils) => {            
            console.log(data);            
            res.send(data);
        }
    );   
    
})

appDispositivos.post('/post',dtoDispositivos,appDB, (req, res) => {     
    
    console.log(req.body)
    req.conexion.query(
    /*sql*/`INSERT INTO dispositivos SET ?`,
        [req.body],
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);
            data.affectedRows += 200;
            let result = req.body;
            result.id_hogar = data.insertId;
            res.status(data.affectedRows).send(result);
            res.send();
        })
});

appDispositivos.put('/update',dtoDispositivos,appDB, (req, res) => { 

    const { ID_dispositivo, ID_hogar, ID_tipo_dispositivo,Nombre_dispositivo,Estado,ID_ubicacion } = req.body;   
    
    
    const updateFields = {};
    if (ID_dispositivo) updateFields.ID_dispositivo = ID_dispositivo;
    if (ID_hogar) updateFields.ID_hogar = ID_hogar;
    if (ID_tipo_dispositivo) updateFields.ID_tipo_dispositivo = ID_tipo_dispositivo;
    if (Nombre_dispositivo) updateFields.Nombre_dispositivo = Nombre_dispositivo;
    if (Estado) updateFields.Estado = Estado;
    if (ID_ubicacion) updateFields.ID_ubicacion = ID_ubicacion;

    // Verificar si hay campos para actualizar
    if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'No se proporcionaron campos para actualizar.' });
    }

    // Construir la consulta SQL dinámicamente
    let sql = 'UPDATE dispositivos SET';
    const values = [];
    for (const key in updateFields) {
        sql += ` ${key} = ?,`;
        values.push(updateFields[key]);
    }
    sql = sql.slice(0, -1); // Eliminar la última coma
    sql += ' WHERE ID_dispositivo = ?';
    values.push(ID_dispositivo);

    // Ejecutar la consulta SQL
    req.conexion.query(sql, values, (error, data, fils) => {
        if (error) {
            console.log('Error en la consulta:', error);
            return res.status(500).json({ error: 'Ocurrió un error al actualizar el registro.' });
        }
        console.log(data);
        console.log(fils);
        res.send();
    });
});
appDispositivos.delete('/delete',appDB, (req, res) => { 
    
    const { ID_dispositivo } = req.body; 

    // Verificar que el ID_dispositivo sea un número válido antes de continuar
    if (!Number.isInteger(ID_dispositivo) || ID_dispositivo <= 0) {
        return res.status(400).json({ error: 'El ID_hogar debe ser un número entero válido y mayor que cero.'});
    }
    
    
    console.log(req.body)
    req.conexion.query(
    /*sql*/`DELETE FROM  dispositivos WHERE ID_dispositivo= ?`,
        [ID_dispositivo],
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);           
            res.send();
        })
});


export default appDispositivos;