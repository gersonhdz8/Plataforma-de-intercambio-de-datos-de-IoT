import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TiposDispositivos {

    @Expose({ name: "ID_tipo_dispositivo" })
    @Type(() => Number)    
    ID_tipo_dispositivo: number;

    @Expose({ name: "Nombre_tipo" })
    @IsString({ message: "El formato del parametro (Nombre_tipo) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Nombre_tipo) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Nombre_tipo) no debe estar vacio"}}})
    Nombre_tipo: string;

    @Expose({ name: "Descripcion" })
    @IsString({ message: "El formato del parametro (Descripcion) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Descripcion) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Descripcion) no debe estar vacio"}}})
    Descripcion: string; 


    constructor(p1: number, p2: string, p3: string) {
        this.ID_tipo_dispositivo = p1;
        this.Nombre_tipo = p2;
        this.Descripcion = p3;

    }
}