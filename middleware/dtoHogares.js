import 'reflect-metadata';
import {Exclude, plainToClass} from "class-transformer"
import {Hogares} from "../controller/hogares.js"


const dtoHogares= ((req,res,next)=>{
    try{
        let data = plainToClass(Hogares,req.body,{ excludeExtraneousValues: true });
        req.body=JSON.parse(JSON.stringify(data));        
        next();        
    }
    catch(error){
        res.status(200).send(error);
    }
    
})

export default dtoHogares;