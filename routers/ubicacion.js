import {Router} from "express";
import {dtoUbicacion} from "../middleware/DTO.js"
import appDB from "../conexionDataBase/conexionDB.js"



const appUbicacion = Router();


appUbicacion.get('/list',appDB, (req, res) => {

    req.conexion.query(
        /*sql*/`SELECT * FROM  ubicacion
        ORDER BY ID_ubicacion ASC`,        
        (error, data,fils) => {            
            console.log(data);            
            res.send(data);
        }
    );   
    
})

appUbicacion.post('/post',dtoUbicacion,appDB, (req, res) => {       

    console.log(req.body)
    req.conexion.query(
    /*sql*/`INSERT INTO ubicacion SET ?`,
        [req.body],
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);            
            res.send();
        })
});

appUbicacion.put('/update/:ID_ubicacion',dtoUbicacion,appDB, (req, res) => { 

    const { ID_ubicacion, Nombre_ubicacion } = req.body;  
    
    const updateFields = {};
    if (ID_ubicacion) updateFields.ID_ubicacion = ID_ubicacion;
    if (Nombre_ubicacion) updateFields.Nombre_ubicacion = Nombre_ubicacion;    

    // Verificar si hay campos para actualizar
    if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'No se proporcionaron campos para actualizar.' });
    }

    // Construir la consulta SQL dinámicamente
    let sql = 'UPDATE ubicacion SET';
    const values = [];
    for (const key in updateFields) {
        sql += ` ${key} = ?,`;
        values.push(updateFields[key]);
    }
    sql = sql.slice(0, -1); // Eliminar la última coma
    sql += ' WHERE ID_ubicacion = ?';
    values.push(req.params.ID_ubicacion);

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
appUbicacion.delete('/delete',appDB, (req, res) => { 
    
    const { ID_ubicacion } = req.body; 

    // Verificar que el ID_ubicacion sea un número válido antes de continuar
    if (!Number.isInteger(ID_ubicacion) || ID_ubicacion <= 0) {
        return res.status(400).json({ error: 'El ID_ubicacion debe ser un número entero válido y mayor que cero.'});
    }
    
    
    console.log(req.body)
    req.conexion.query(
    /*sql*/`DELETE FROM  ubicacion WHERE ID_ubicacion= ?`,
        [req.params.ID_ubicacion],
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);           
            res.send();
        })
});


export default appUbicacion;