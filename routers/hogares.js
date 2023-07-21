import mysql from "mysql2";
import {Router} from "express";
import {Exclude, plainToClass} from "class-transformer";
import dtoHogares from "../middleware/dtoHogares.js"
import appDB from "../conexionDataBase/conexionDB.js"



const appHogares = Router();

appHogares.get('/list',dtoHogares,appDB, (req, res) => {

    req.conexion.query(
        /*sql*/`SELECT * FROM  hogares
        ORDER BY nombre_hogar ASC`,        
        (error, data,fils) => {            
            console.log(data);            
            res.send(data);
        }
    );   
    
})

appHogares.post('/newBodega',appDB, (req, res) => {
    
    
    /* VALORES DE ENTRADA PARA CREAR UNA BODEGA ( "nombre":"BodegasGerson3",
        "id_responsable":17,
        "estado":1)*/
    req.conexion.query(
        /*sql*/`INSERT INTO bodegas SET ?`,
        [req.body],
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);
            //data.affectedRows += 200;
            //let result = req.body;
            //result.id = data.insertId;
            res.send();
        })
});


export default appHogares;