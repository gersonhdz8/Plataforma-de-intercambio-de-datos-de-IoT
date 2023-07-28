import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Proveedores {

    @Expose({ name: "ID_proveedor" })
    @Type(() => Number) 
    ID_proveedor: number;

    @Expose({ name: "Nombre_proveedor" })
    @IsString({ message: "El formato del parametro (Nombre_proveedor) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Nombre_proveedor) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Nombre_proveedor) no debe estar vacio"}}})
    Nombre_proveedor: string;

    @Expose({ name: "Direccion_proveedor" })
    @IsString({ message: "El formato del parametro (Direccion_proveedor) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Direccion_proveedor) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Direccion_proveedor) no debe estar vacio"}}})
    Direccion_proveedor: string; 

    @Expose({ name: "Numero_Contacto" })
    @IsNumber({},{ message: "El formato del parametro (Numero_Contacto) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Numero_Contacto) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Numero_Contacto) no debe estar vacio"}}})
    Numero_Contacto: number;

    

    constructor(p1: number, p2: string, p3: string, p4: number) {
        this.ID_proveedor = p1;
        this.Nombre_proveedor = p2;
        this.Direccion_proveedor = p3;
        this.Numero_Contacto = p4;
        
    }
}