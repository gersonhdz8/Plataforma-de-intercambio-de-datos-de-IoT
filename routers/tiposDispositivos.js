import {Router} from "express";
import {dtoTiposDispositivos} from "../middleware/DTO.js"
import appDB from "../conexionDataBase/conexionDB.js"



const appTiposDispositivos = Router();


appTiposDispositivos.get('/list',appDB, (req, res) => {

    req.conexion.query(
        /*sql*/`SELECT * FROM  tipos_dispositivos
        ORDER BY ID_tipo_dispositivo ASC`,        
        (error, data,fils) => {            
            console.log(data);            
            res.send(data);
        }
    );   
    
})

appTiposDispositivos.post('/post',dtoTiposDispositivos,appDB, (req, res) => {    
    
    
    console.log(req.body)
    req.conexion.query(
    /*sql*/`INSERT INTO tipos_dispositivos SET ?`,
        [req.body],
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);           
            res.send();
        })
});

appTiposDispositivos.put('/update/:ID_tipo_dispositivo',dtoTiposDispositivos,appDB, (req, res) => { 

    const { ID_tipo_dispositivo, Nombre_tipo, Descripcion} = req.body;  
    

    const updateFields = {};
    if (ID_tipo_dispositivo) updateFields.ID_tipo_dispositivo = ID_tipo_dispositivo;
    if (Nombre_tipo) updateFields.Nombre_tipo = Nombre_tipo;
    if (Descripcion) updateFields.Descripcion = Descripcion;    

    // Verificar si hay campos para actualizar
    if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'No se proporcionaron campos para actualizar.' });
    }

    // Construir la consulta SQL dinámicamente
    let sql = 'UPDATE tipos_dispositivos SET';
    const values = [];
    for (const key in updateFields) {
        sql += ` ${key} = ?,`;
        values.push(updateFields[key]);
    }
    sql = sql.slice(0, -1); // Eliminar la última coma
    sql += ' WHERE ID_tipo_dispositivo = ?';
    values.push(req.params.ID_tipo_dispositivo);

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
appTiposDispositivos.delete('/delete/:ID_tipo_dispositivo',appDB, (req, res) => { 
    
    const { ID_tipo_dispositivo } = req.body; 

    // Verificar que el ID_tipo_dispositivo sea un número válido antes de continuar
    if (!Number.isInteger(ID_tipo_dispositivo) || ID_tipo_dispositivo <= 0) {
        return res.status(400).json({ error: 'El ID_tipo_dispositivo debe ser un número entero válido y mayor que cero.'});
    }
    
    
    console.log(req.body)
    req.conexion.query(
    /*sql*/`DELETE FROM  tipos_dispositivos WHERE ID_tipo_dispositivo= ?`,
        [req.params.ID_tipo_dispositivo],
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);           
            res.send();
        })
});


export default appTiposDispositivos;