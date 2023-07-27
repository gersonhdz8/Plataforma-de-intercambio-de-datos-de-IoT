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
export class Dispositivos {
    constructor(p1, p2, p3, p4, p5) {
        this.ID_dispositivo = p1;
        this.ID_tipo_dispositivo = p2;
        this.Nombre_dispositivo = p3;
        this.Estado = p4;
        this.ID_ubicacion = p5;
    }
}
__decorate([
    Expose({ name: "ID_dispositivo" }),
    Type(() => Number)
    //@IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro (ID_hogar) no es correcto"}}})
    //@IsDefined({message: ()=>{ throw {status:422, message: "El parametro ID_hogar es obligatorio"}}})    
    ,
    __metadata("design:type", Number)
], Dispositivos.prototype, "ID_dispositivo", void 0);
__decorate([
    Expose({ name: "ID_hogar" }),
    Type(() => Number),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro (ID_hogar) no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro ID_hogar es obligatorio" }; } }),
    __metadata("design:type", Number)
], Dispositivos.prototype, "ID_hogar", void 0);
__decorate([
    Expose({ name: "ID_tipo_dispositivo" }),
    Type(() => Number),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro (ID_tipo_dispositivo) no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro ID_tipo_dispositivo es obligatorio" }; } }),
    __metadata("design:type", Number)
], Dispositivos.prototype, "ID_tipo_dispositivo", void 0);
__decorate([
    Expose({ name: "Nombre_dispositivo" }),
    IsString({ message: "El formato del parametro (Nombre_dispositivo) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Nombre_dispositivo) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Nombre_dispositivo) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], Dispositivos.prototype, "Nombre_dispositivo", void 0);
__decorate([
    Expose({ name: "Estado" }),
    IsString({ message: "El formato del parametro (Estado) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Estado) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Estado) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], Dispositivos.prototype, "Estado", void 0);
__decorate([
    Expose({ name: "ID_ubicacion" }),
    Type(() => Number),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro (ID_ubicacion) no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro ID_ubicacion es obligatorio" }; } }),
    __metadata("design:type", Number)
], Dispositivos.prototype, "ID_ubicacion", void 0);
