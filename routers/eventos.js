import {Router} from "express";
import {dtoEventos} from "../middleware/DTO.js"
import appDB from "../conexionDataBase/conexionDB.js"



const appEventos = Router();


appEventos.get('/list',appDB, (req, res) => {

    req.conexion.query(
        /*sql*/`SELECT * FROM  eventos_dispositivos
        ORDER BY ID_dispositivo ASC`,        
        (error, data,fils) => {            
            console.log(data);            
            res.send(data);
        }
    );   
    
})

appEventos.post('/post',dtoEventos,appDB, (req, res) => {    

    console.log(req.body)
    req.conexion.query(
    /*sql*/`INSERT INTO eventos_dispositivos SET ?`,
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

appEventos.put('/update/:ID_evento_dispositivo',dtoEventos,appDB, (req, res) => { 

    const { ID_evento_dispositivo, ID_dispositivo, Tipo_evento,Descripcion,Fecha_hora } = req.body;   

    
    const updateFields = {};
    if (ID_evento_dispositivo) updateFields.ID_evento_dispositivo = ID_evento_dispositivo;
    if (ID_dispositivo) updateFields.ID_dispositivo = ID_dispositivo;
    if (Tipo_evento) updateFields.Tipo_evento = Tipo_evento;
    if (Descripcion) updateFields.Descripcion = Descripcion;
    if (Fecha_hora) updateFields.Fecha_hora = Fecha_hora;

    // Verificar si hay campos para actualizar
    if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'No se proporcionaron campos para actualizar.' });
    }

    // Construir la consulta SQL dinámicamente
    let sql = 'UPDATE eventos_dispositivos SET';
    const values = [];
    for (const key in updateFields) {
        sql += ` ${key} = ?,`;
        values.push(updateFields[key]);
    }
    sql = sql.slice(0, -1); // Eliminar la última coma
    sql += ' WHERE ID_evento_dispositivo = ?';
    values.push(req.params.ID_evento_dispositivo);

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
appEventos.delete('/delete/:ID_evento_dispositivo',appDB, (req, res) => { 
    
    const { ID_evento_dispositivo } = req.body; 

    // Verificar que el ID_evento_dispositivo sea un número válido antes de continuar
    if (!Number.isInteger(ID_evento_dispositivo) || ID_evento_dispositivo <= 0) {
        return res.status(400).json({ error: 'El ID_hogar debe ser un número entero válido y mayor que cero.'});
    }
    
    
    console.log(req.body)
    req.conexion.query(
    /*sql*/`DELETE FROM  eventos_dispositivos WHERE ID_evento_dispositivo= ?`,
        [req.params.ID_evento_dispositivo],
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);           
            res.send();
        })
});


export default appEventos;