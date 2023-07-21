import {Type, Transform, Expose} from "class-transformer";

export class Hogares{
    
    @Expose ({name: "id"})
    /*@Transform(({value})=>{

        let data = /^[0-9]+$/g.test(value);
        if(data && typeof value == "number"){            
            return Number(value);
        }
        else{ 
            throw {status: 401, message: "Error en el id: " + value};
        }
    })*/
    id_hogar:number

    @Expose ({name: "nombre"})
    nombre_hogar:string

    @Expose ({name: "direccion"})
    direccion:number

    @Expose ({name: "ciudad"})
    ciudad:boolean

    @Expose ({name: "pais"})
    pais:string			

    @Expose ({name: "id_propietario"})
    id_propietario:string    
    
    constructor(p1:number ,p2:string, p3:number, p4:boolean,p5:string,p6:string){

        this.id_hogar=p1;
        this.nombre_hogar=p2;
        this.direccion=p3;
        this.ciudad=p4;
        this.pais=p5;
        this.id_propietario=p6;
    }
}