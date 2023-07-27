import { tokenJWT } from '../middleware/token.js';
import {Router} from 'express';

const appJWT = Router();

appJWT.get("/", tokenJWT, (req,res)=>{
    res.send(req.data)
});

export default appJWT;