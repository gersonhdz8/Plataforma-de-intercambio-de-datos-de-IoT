import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Eventos {

    @Expose({ name: "ID_evento_dispositivo" })
    @Type(() => Number)     
    ID_evento_dispositivo: number;

    @Expose({ name: "ID_dispositivo" })
    @Type(() => Number)
    @IsNumber({}, { message: "El formato del parametro (ID_dispositivo) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (ID_dispositivo) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (ID_dispositivo) no debe estar vacio"}}})
    ID_dispositivo: number;

    @Expose({ name: "Tipo_evento" })
    @IsString({ message: "El formato del parametro (Tipo_evento) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Tipo_evento) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Tipo_evento) no debe estar vacio"}}})
    Tipo_evento: string;

    @Expose({ name: "Descripcion" })
    @IsString({ message: "El formato del parametro (Descripcion) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Descripcion) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Descripcion) no debe estar vacio"}}})
    Descripcion: string; 

    @Expose({ name: "Fecha_hora" })
    @IsString({ message: "El formato del parametro (Fecha_hora) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Fecha_hora) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Fecha_hora) no debe estar vacio"}}})
    Fecha_hora: string;

    

    constructor(data:Partial<Eventos>)
    {
        Object.assign(this, data);
    }
}