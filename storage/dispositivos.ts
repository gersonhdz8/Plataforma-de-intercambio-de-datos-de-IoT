import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';



export class Dispositivos {

    @Expose({ name: "ID_dispositivo" })
    @Type(() => Number)       
    ID_dispositivo: number;

    @Expose({ name: "ID_hogar" })
    @Type(() => Number)
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro (ID_hogar) no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro ID_hogar es obligatorio"}}})    
    ID_hogar: number;

    @Expose({ name: "ID_tipo_dispositivo" })
    @Type(() => Number)
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro (ID_tipo_dispositivo) no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro ID_tipo_dispositivo es obligatorio"}}})    
    ID_tipo_dispositivo: number;

    @Expose({ name: "Nombre_dispositivo" })
    @IsString({ message: "El formato del parametro (Nombre_dispositivo) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Nombre_dispositivo) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Nombre_dispositivo) no debe estar vacio"}}})
    Nombre_dispositivo: string;

    @Expose({ name: "Estado" })
    @IsString({ message: "El formato del parametro (Estado) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Estado) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Estado) no debe estar vacio"}}})
    Estado: string; 

    @Expose({ name: "ID_ubicacion" })
    @Type(() => Number)
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro (ID_ubicacion) no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro ID_ubicacion es obligatorio"}}})    
    ID_ubicacion: number;

    
    constructor(data:Partial<Dispositivos>)
    {
        Object.assign(this, data);
    }

    
}