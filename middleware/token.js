import dotenv from 'dotenv'
import { SignJWT, jwtVerify } from 'jose';
import express from 'express';
import 'reflect-metadata';
import {instanceToPlain} from 'class-transformer';

//const tokenJWT = express();
//const validateJWT = express();
dotenv.config("../");

const tokenJWT= (async(req,res,next)=>{
    
    console.log(req.body)
    let interfaceData = instanceToPlain(req.body); 
    //console.log(interfaceData)   
    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT({interfaceData});
    const jwt = await jwtconstructor
    .setProtectedHeader({alg:"HS256", typ: "JWT"})
    .setIssuedAt()
    .setExpirationTime("30m")
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    req.data = jwt;
    console.log(req.data)
    next();
})
const validateJWT= (async(req,res,next)=>{
    const {authorization} = req.headers;
    if (!authorization) return res.json({status: 401, message: "Token no enviado"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        
        req.data = jwtData.payload;
        next();
    } catch (error) {
        res.json({status: 401, message: "Token caducado"});
    }
})
export {
    tokenJWT,
    validateJWT
};