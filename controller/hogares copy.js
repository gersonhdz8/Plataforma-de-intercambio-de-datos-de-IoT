var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Type, Expose } from "class-transformer";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';
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
    Expose({ name: "ID_hogar" }),
    Type(() => Number)
    //@IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro (ID_hogar) no es correcto"}}})
    //@IsDefined({message: ()=>{ throw {status:422, message: "El parametro ID_hogar es obligatorio"}}})    
    ,
    __metadata("design:type", Number)
], Hogares.prototype, "id_hogar", void 0);
__decorate([
    Expose({ name: "Nombre_hogar" }),
    IsString({ message: "El formato del parametro (Nombre_hogar) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Nombre_hogar) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Nombre_hogar) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], Hogares.prototype, "nombre_hogar", void 0);
__decorate([
    Expose({ name: "Direccion" }),
    IsString({ message: "El formato del parametro (Direccion) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Direccion) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Direccion) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], Hogares.prototype, "direccion", void 0);
__decorate([
    Expose({ name: "Ciudad" }),
    IsString({ message: "El formato del parametro (Ciudad) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Ciudad) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Ciudad) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], Hogares.prototype, "ciudad", void 0);
__decorate([
    Expose({ name: "Pais" }),
    IsString({ message: "El formato del parametro (Pais) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Pais) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Pais) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], Hogares.prototype, "pais", void 0);
__decorate([
    Expose({ name: "ID_propietario" }),
    Type(() => Number),
    IsNumber({}, { message: "El formato del parametro (ID_propietario) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (ID_propietario) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (ID_propietario) no debe estar vacio" }; } }),
    __metadata("design:type", Number)
], Hogares.prototype, "id_propietario", void 0);
