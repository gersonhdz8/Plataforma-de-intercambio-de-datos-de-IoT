import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Hogares {

    @Expose({ name: "ID_hogar" })
    @Type(() => Number)
    //@IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro (ID_hogar) no es correcto"}}})
    //@IsDefined({message: ()=>{ throw {status:422, message: "El parametro ID_hogar es obligatorio"}}})    
    id_hogar: number;

    @Expose({ name: "Nombre_hogar" })
    @IsString({ message: "El formato del parametro (Nombre_hogar) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Nombre_hogar) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Nombre_hogar) no debe estar vacio"}}})
    nombre_hogar: string;

    @Expose({ name: "Direccion" })
    @IsString({ message: "El formato del parametro (Direccion) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Direccion) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Direccion) no debe estar vacio"}}})
    direccion: string; 

    @Expose({ name: "Ciudad" })
    @IsString({ message: "El formato del parametro (Ciudad) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Ciudad) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Ciudad) no debe estar vacio"}}})
    ciudad: string;

    @Expose({ name: "Pais" })
    @IsString({ message: "El formato del parametro (Pais) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Pais) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Pais) no debe estar vacio"}}})
    pais: string;

    @Expose({ name: "ID_propietario" })
    @Type(() => Number)
    @IsNumber({}, { message: "El formato del parametro (ID_propietario) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (ID_propietario) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (ID_propietario) no debe estar vacio"}}})
    id_propietario: number;

    constructor(p1: number, p2: string, p3: string, p4: string, p5: string, p6: number) {
        this.id_hogar = p1;
        this.nombre_hogar = p2;
        this.direccion = p3;
        this.ciudad = p4;
        this.pais = p5;
        this.id_propietario = p6;
    }
}