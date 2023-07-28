import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Ubicacion {

    @Expose({ name: "ID_ubicacion" })
    @Type(() => Number)  
    ID_ubicacion: number;

    @Expose({ name: "Nombre_ubicacion" })
    @IsString({ message: "El formato del parametro (Nombre_ubicacion) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Nombre_ubicacion) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Nombre_ubicacion) no debe estar vacio"}}})
    Nombre_ubicacion: string;

    

    constructor(p1: number, p2: string) {
        this.ID_ubicacion = p1;
        this.Nombre_ubicacion = p2;       
    }
}