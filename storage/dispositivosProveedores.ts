import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DispositivosProveedores {

    @Expose({ name: "ID_dispositivo_proveedor" })
    @Type(() => Number)     
    ID_dispositivo_proveedor: number;

    @Expose({ name: "ID_dispositivo" })
    @Type(() => Number)
    @IsNumber({}, { message: "El formato del parametro (ID_dispositivo) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (ID_dispositivo) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (ID_dispositivo) no debe estar vacio"}}})
    ID_dispositivo: number;

    @Expose({ name: "ID_proveedor" })
    @IsString({ message: "El formato del parametro (ID_proveedor) no es correcto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (ID_proveedor) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (ID_proveedor) no debe estar vacio"}}})
    ID_proveedor: number;

    @Expose({ name: "Precio" })    
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro (Precio) es obligatorio"}}})
    @IsNotEmpty({message: ()=>{ throw {status:422, message: "El parametro (Precio) no debe estar vacio"}}})
    Precio: number;  

    

    constructor(data:Partial<DispositivosProveedores>)
    {
        Object.assign(this, data);
    }
}