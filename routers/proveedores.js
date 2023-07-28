import {Router} from "express";
import {dtoProveedores} from "../middleware/DTO.js"
import appDB from "../conexionDataBase/conexionDB.js"



const appProveedores = Router();


appProveedores.get('/list',appDB, (req, res) => {

    req.conexion.query(
        /*sql*/`SELECT * FROM  proveedores
        ORDER BY ID_proveedor ASC`,        
        (error, data,fils) => {            
            console.log(data);            
            res.send(data);
        }
    );   
    
})

appProveedores.post('/post',dtoProveedores,appDB, (req, res) => {   
    
    console.log(req.body)
    req.conexion.query(
    /*sql*/`INSERT INTO proveedores SET ?`,
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

appProveedores.put('/update/:ID_proveedor',dtoProveedores,appDB, (req, res) => { 

    const { ID_proveedor, Nombre_proveedor, Direccion_proveedor,Numero_Contacto } = req.body;  
    
    
    const updateFields = {};
    if (ID_proveedor) updateFields.ID_proveedor = ID_proveedor;
    if (Nombre_proveedor) updateFields.Nombre_proveedor = Nombre_proveedor;
    if (Direccion_proveedor) updateFields.Direccion_proveedor = Direccion_proveedor;
    if (Numero_Contacto) updateFields.Numero_Contacto = Numero_Contacto;    

    // Verificar si hay campos para actualizar
    if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'No se proporcionaron campos para actualizar.' });
    }

    // Construir la consulta SQL dinámicamente
    let sql = 'UPDATE proveedores SET';
    const values = [];
    for (const key in updateFields) {
        sql += ` ${key} = ?,`;
        values.push(updateFields[key]);
    }
    sql = sql.slice(0, -1); // Eliminar la última coma
    sql += ' WHERE ID_proveedor = ?';
    values.push(req.params.ID_proveedor);

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
appProveedores.delete('/delete/:ID_proveedor',appDB, (req, res) => { 
    
    const { ID_proveedor } = req.body; 

    // Verificar que el ID_proveedor sea un número válido antes de continuar
    if (!Number.isInteger(ID_proveedor) || ID_proveedor <= 0) {
        return res.status(400).json({ error: 'El ID_proveedor debe ser un número entero válido y mayor que cero.'});
    }
    
    
    console.log(req.body)
    req.conexion.query(
    /*sql*/`DELETE FROM  proveedores WHERE ID_proveedor= ?`,
        [req.params.ID_proveedor],
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);           
            res.send();
        })
});


export default appProveedores;