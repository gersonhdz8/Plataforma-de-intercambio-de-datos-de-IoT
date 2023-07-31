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
export class Propietarios {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "ID_propietario" }),
    Type(() => Number),
    __metadata("design:type", Number)
], Propietarios.prototype, "ID_propietario", void 0);
__decorate([
    Expose({ name: "Nombre" }),
    IsString({ message: "El formato del parametro (Nombre) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Nombre) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Nombre) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], Propietarios.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: "Apellido" }),
    IsString({ message: "El formato del parametro (Apellido) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Apellido) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Apellido) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], Propietarios.prototype, "Apellido", void 0);
__decorate([
    Expose({ name: "Numero_Contacto" }),
    IsNumber({}, { message: "El formato del parametro (Numero_Contacto) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Numero_Contacto) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Numero_Contacto) no debe estar vacio" }; } }),
    __metadata("design:type", Number)
], Propietarios.prototype, "Numero_Contacto", void 0);
__decorate([
    Expose({ name: "DNI" }),
    IsNumber({}, { message: "El formato del parametro (DNI) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (DNI) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (DNI) no debe estar vacio" }; } }),
    __metadata("design:type", Number)
], Propietarios.prototype, "DNI", void 0);
