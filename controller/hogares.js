var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
export class Hogares {
    constructor(p1, p2, p3, p4, p5, p6) {
        this.id_hogar = p1;
        this.nombre_hogar = p2;
        this.direccion = p3;
        this.ciudad = p4;
        this.pais = p5;
        this.id_propietario = p6;
    }
}
__decorate([
    Expose({ name: "id" })
    /*@Transform(({value})=>{

        let data = /^[0-9]+$/g.test(value);
        if(data && typeof value == "number"){
            return Number(value);
        }
        else{
            throw {status: 401, message: "Error en el id: " + value};
        }
    })*/
    ,
    __metadata("design:type", Number)
], Hogares.prototype, "id_hogar", void 0);
__decorate([
    Expose({ name: "nombre" }),
    __metadata("design:type", String)
], Hogares.prototype, "nombre_hogar", void 0);
__decorate([
    Expose({ name: "direccion" }),
    __metadata("design:type", Number)
], Hogares.prototype, "direccion", void 0);
__decorate([
    Expose({ name: "ciudad" }),
    __metadata("design:type", Boolean)
], Hogares.prototype, "ciudad", void 0);
__decorate([
    Expose({ name: "pais" }),
    __metadata("design:type", String)
], Hogares.prototype, "pais", void 0);
__decorate([
    Expose({ name: "id_propietario" }),
    __metadata("design:type", String)
], Hogares.prototype, "id_propietario", void 0);
