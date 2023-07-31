import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class Hogares {

    @Expose({ name: "ID_hogar" })
    @Type(() => Number)       
    ID_hogar: number;

    @Expose({ name: "Nombre_hogar" })
    @IsString({ message: "El formato del parametro (Nombre_hogar) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Nombre_hogar) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Nombre_hogar) no debe estar vacio"}}})
    Nombre_hogar: string;

    @Expose({ name: "Direccion" })
    @IsString({ message: "El formato del parametro (Direccion) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Direccion) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Direccion) no debe estar vacio"}}})
    Direccion: string; 

    @Expose({ name: "Ciudad" })
    @IsString({ message: "El formato del parametro (Ciudad) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Ciudad) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Ciudad) no debe estar vacio"}}})
    Ciudad: string;

    @Expose({ name: "Pais" })
    @IsString({ message: "El formato del parametro (Pais) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Pais) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Pais) no debe estar vacio"}}})
    Pais: string;

    @Expose({ name: 'ID_propietario' })
    @IsDefined({ message: 'El parametro (ID_propietario) es obligatorio' })
    @IsNotEmpty({ message: 'El parametro (ID_propietario) no debe estar vacio' })
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro (ID_hogar) no es correcto"}}})  
    ID_propietario: number;

    constructor(data:Partial<Hogares>)
    {
        Object.assign(this, data);
    }
}
