import {Router} from "express";
import {dtoDispositivosProveedores} from "../middleware/DTO.js"
import appDB from "../conexionDataBase/conexionDB.js"



const appDispositivosProveedores = Router();


appDispositivosProveedores.get('/list',appDB, (req, res) => {

    req.conexion.query(
        /*sql*/`SELECT * FROM  dispositivos_proveedores
        ORDER BY ID_dispositivo_proveedor ASC`,        
        (error, data,fils) => {            
            console.log(data);            
            res.send(data);
        }
    );   
    
})

appDispositivosProveedores.post('/post',dtoDispositivosProveedores,appDB, (req, res) => {    
    
    console.log(req.body)
    req.conexion.query(
    /*sql*/`INSERT INTO dispositivos_proveedores SET ?`,
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

appDispositivosProveedores.put('/update/:ID_dispositivo_proveedor',dtoDispositivosProveedores,appDB, (req, res) => { 

    const { ID_dispositivo_proveedor, ID_dispositivo, ID_proveedor,Precio} = req.body;   
    
    
    const updateFields = {};
    if (ID_dispositivo) updateFields.ID_dispositivo = ID_dispositivo;
    if (ID_proveedor) updateFields.ID_proveedor = ID_proveedor;
    if (Precio) updateFields.Precio = Precio;   

    // Verificar si hay campos para actualizar
    if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'No se proporcionaron campos para actualizar.' });
    }

    // Construir la consulta SQL dinámicamente
    let sql = 'UPDATE dispositivos_proveedores SET';
    const values = [];
    for (const key in updateFields) {
        sql += ` ${key} = ?,`;
        values.push(updateFields[key]);
    }
    sql = sql.slice(0, -1); // Eliminar la última coma
    sql += ' WHERE ID_dispositivo_proveedor = ?';
    values.push(req.params.ID_dispositivo_proveedor);

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
appDispositivosProveedores.delete('/delete/:ID_dispositivo_proveedor',appDB, (req, res) => { 
    
    const { ID_dispositivo_proveedor } = req.body; 

    // Verificar que el ID_evento_dispositivo sea un número válido antes de continuar
    if (!Number.isInteger(ID_dispositivo_proveedor) || ID_dispositivo_proveedor <= 0) {
        return res.status(400).json({ error: 'El ID_dispositivo_proveedor debe ser un número entero válido y mayor que cero.'});
    }
    
    
    console.log(req.body)
    req.conexion.query(
    /*sql*/`DELETE FROM  dispositivos_proveedores WHERE ID_evento_dispositivo= ?`,
        [req.params.ID_evento_dispositivo],
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);           
            res.send();
        })
});


export default appDispositivosProveedores;