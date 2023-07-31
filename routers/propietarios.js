import {Router} from "express";
import {dtoPropietarios} from "../middleware/DTO.js"
import appDB from "../conexionDataBase/conexionDB.js"


const appPropietarios = Router();


appPropietarios.get('/list',appDB, (req, res) => {

    req.conexion.query(
        /*sql*/`SELECT * FROM  info_propietario
        ORDER BY DNI ASC`,        
        (error, data,fils) => {            
            console.log(data);            
            res.send(data);
        }
    );   
    
})

appPropietarios.post('/post',dtoPropietarios,appDB, (req, res) => {    
    
    console.log(req.body)
    req.conexion.query(
    /*sql*/`INSERT INTO info_propietario SET ?`,
        [req.body],
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);            
            res.send();
        })
});

appPropietarios.put('/update/:DNI',dtoPropietarios,appDB, (req, res) => { 

    const { ID_propietario, Nombre, Apellido,Numero_Contacto,DNI } = req.body;   
    
    
    const updateFields = {};
    if (ID_propietario) updateFields.ID_propietario = ID_propietario;
    if (Nombre) updateFields.Nombre = Nombre;
    if (Apellido) updateFields.Apellido = Apellido;
    if (Numero_Contacto) updateFields.Numero_Contacto = Numero_Contacto;
    if (DNI) updateFields.DNI = DNI;

    // Verificar si hay campos para actualizar
    if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'No se proporcionaron campos para actualizar.' });
    }

    // Construir la consulta SQL dinámicamente
    let sql = 'UPDATE info_propietario SET';
    const values = [];
    for (const key in updateFields) {
        sql += ` ${key} = ?,`;
        values.push(updateFields[key]);
    }
    sql = sql.slice(0, -1); // Eliminar la última coma
    sql += ' WHERE DNI = ?';
    values.push(req.params.DNI);

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
appPropietarios.delete('/delete/:DNI',appDB, (req, res) => { 
    
    const { DNI } = req.body; 

    // Verificar que el DNI sea un número válido antes de continuar
    if (!Number.isInteger(DNI) || DNI <= 0) {
        return res.status(400).json({ error: 'El DNI debe ser un número entero válido y mayor que cero.'});
    }
    
    
    console.log(req.body)
    req.conexion.query(
    /*sql*/`DELETE FROM  info_propietario WHERE DNI= ?`,
        [req.params.DNI],
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);           
            res.send();
        })
});


export default appPropietarios;