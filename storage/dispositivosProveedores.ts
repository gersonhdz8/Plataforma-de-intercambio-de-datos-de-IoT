import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DispositivosProveedores {

    @Expose({ name: "ID_evento_dispositivo" })
    @Type(() => Number)
    //@IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro (ID_hogar) no es correcto"}}})
    //@IsDefined({message: ()=>{ throw {status:422, message: "El parametro ID_hogar es obligatorio"}}})    
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

    

    constructor(p1: number, p2: number, p3: string, p4: string, p5: string) {
        this.ID_evento_dispositivo = p1;
        this.ID_dispositivo = p2;
        this.Tipo_evento = p3;
        this.Descripcion = p4;
        this.Fecha_hora = p5;
        
    }
}