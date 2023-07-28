import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Propietarios {

    @Expose({ name: "ID_propietario" })
    @Type(() => Number)    
    ID_propietario: number;

    @Expose({ name: "Nombre" })
    @IsString({ message: "El formato del parametro (Nombre) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Nombre) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Nombre) no debe estar vacio"}}})
    Nombre: string;

    @Expose({ name: "Apellido" })
    @IsString({ message: "El formato del parametro (Apellido) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Apellido) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Apellido) no debe estar vacio"}}})
    Apellido: string; 

    @Expose({ name: "Numero_Contacto" })
    @IsNumber({},{ message: "El formato del parametro (Numero_Contacto) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Numero_Contacto) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Numero_Contacto) no debe estar vacio"}}})
    Numero_Contacto: number;

    @Expose({ name: "DNI" })
    @IsNumber({},{ message: "El formato del parametro (DNI) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (DNI) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (DNI) no debe estar vacio"}}})
    DNI: number;
    

    constructor(p1: number, p2: string, p3: string, p4: number, p5: number) {
        this.ID_propietario = p1;
        this.Nombre = p2;
        this.Apellido = p3;
        this.Numero_Contacto = p4;
        this.DNI = p5;
        
    }
}