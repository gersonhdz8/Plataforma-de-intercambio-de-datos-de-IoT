import 'reflect-metadata';
import {plainToClass} from "class-transformer"
import {Hogares} from "../controller/hogares.js"
import {Propietarios} from "../controller/propietarios.js"
import {Dispositivos} from "../controller/dispositivos.js"
import {Ubicacion} from "../controller/ubicacion.js"
import {Proveedores} from "../controller/proveedores.js"
import {TiposDispositivos} from "../controller/tiposDispositivos.js"
import {Eventos} from "../controller/eventos.js"
import {DispositivosProveedores} from "../controller/dispositivosProveedores.js"
import { validate } from 'class-validator';


const dtoHogares= (async(req,res,next)=>{
    try{
        let data = plainToClass(Hogares,req.body,{ excludeExtraneousValues: true });
        await validate(data)
        req.body=data;
        next();         
    }
    catch(error){   

        res.status(error.status).json(error);
    }
    
})
const dtoPropietarios= (async(req,res,next)=>{
    try{
        
        let data = plainToClass(Propietarios,req.body,{ excludeExtraneousValues: true });
        await validate(data)
        req.body=data; 
        next();         
    }
    catch(error){   

        res.status(error.status).json(error);
    }
    
})
const dtoDispositivos= (async(req,res,next)=>{
    try{

        let data = plainToClass(Dispositivos,req.body,{ excludeExtraneousValues: true });
        await validate(data)
        req.body=data; 
        next();         
    }
    catch(error){        
        
        res.status(error.status).json(error);
    }
    
})
const dtoUbicacion= (async(req,res,next)=>{
    try{

        let data = plainToClass(Ubicacion,req.body,{ excludeExtraneousValues: true });
        await validate(data)
        req.body=data; 
        next();         
    }
    catch(error){        
        
        res.status(error.status).json(error);
    }
    
})
const dtoTiposDispositivos= (async(req,res,next)=>{
    try{

        let data = plainToClass(TiposDispositivos,req.body,{ excludeExtraneousValues: true });
        await validate(data)
        req.body=data; 
        next();         
    }
    catch(error){     
        
        res.status(error.status).json(error);
    }
    
})
const dtoProveedores= (async(req,res,next)=>{
    try{

        let data = plainToClass(Proveedores,req.body,{ excludeExtraneousValues: true });
        await validate(data)
        req.body=data;
        next();         
    }
    catch(error){        
        
        res.status(error.status).json(error);
    }
    
})
const dtoEventos= (async(req,res,next)=>{
    try{

        let data = plainToClass(Eventos,req.body,{ excludeExtraneousValues: true });
        await validate(data)
        req.body=data; 
        next();         
    }
    catch(error){        
        
        res.status(error.status).json(error);
    }
    
})
const dtoDispositivosProveedores= (async(req,res,next)=>{
    try{

        let data = plainToClass(DispositivosProveedores,req.body,{ excludeExtraneousValues: true });
        await validate(data)
        req.body=data; 
        next();         
    }
    catch(error){        
        
        res.status(error.status).json(error);
    }
    
})

export {dtoHogares,dtoPropietarios,dtoDispositivos,dtoUbicacion,dtoTiposDispositivos,dtoProveedores,dtoEventos,dtoDispositivosProveedores} ;