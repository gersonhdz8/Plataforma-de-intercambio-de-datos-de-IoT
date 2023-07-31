import {Router} from "express";
import {dtoHogares} from "../middleware/DTO.js"
import appDB from "../conexionDataBase/conexionDB.js"



const appHogares = Router();


appHogares.get('/list',appDB, (req, res) => {

    req.conexion.query(
        /*sql*/`SELECT * FROM  hogares
        ORDER BY nombre_hogar ASC`,        
        (error, data,fils) => {            
            console.log(data);            
            res.send(data);
        }
    );   
    
})

appHogares.post('/post',dtoHogares,appDB, (req, res) => {  
    
    console.log(req.body)    
    req.conexion.query(
    /*sql*/`INSERT INTO hogares SET ?`,
        [req.body],             
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);           
            res.send();
        })
});

appHogares.put('/update/:ID_hogar',dtoHogares,appDB, (req, res) => { 

    const { ID_hogar, Nombre_hogar, Direccion,Ciudad,Pais,ID_propietario } = req.body;
    

    const updateFields = {};
    if (Nombre_hogar) updateFields.Nombre_hogar = Nombre_hogar;
    if (Direccion) updateFields.Direccion = Direccion;
    if (Ciudad) updateFields.Ciudad = Ciudad;
    if (Pais) updateFields.Pais = Pais;
    if (ID_propietario) updateFields.ID_propietario = ID_propietario;

    // Verificar si hay campos para actualizar
    if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'No se proporcionaron campos para actualizar.' });
    }

    // Construir la consulta SQL dinámicamente
    let sql = 'UPDATE hogares SET';
    const values = [];
    for (const key in updateFields) {
        sql += ` ${key} = ?,`;
        values.push(updateFields[key]);
    }
    sql = sql.slice(0, -1); // Eliminar la última coma
    sql += ' WHERE ID_hogar = ?';
    values.push(req.params.ID_hogar);

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
appHogares.delete('/delete:ID_hogar',appDB, (req, res) => { 
    
    const { ID_hogar } = req.body; 

    // Verificar que el ID_hogar sea un número válido antes de continuar
    if (!Number.isInteger(ID_hogar) || ID_hogar <= 0) {
        return res.status(400).json({ error: 'El ID_hogar debe ser un número entero válido y mayor que cero.'});
    }
    
    /* VALORES DE ENTRADA PARA ELIMINAR UN HOGAR ()*/
    console.log(req.body)
    req.conexion.query(
    /*sql*/`DELETE FROM  hogares WHERE ID_hogar= ?`,
        [req.params.ID_hogar],
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);           
            res.send();
        })
});


export default appHogares;