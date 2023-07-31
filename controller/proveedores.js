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
export class Proveedores {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "ID_proveedor" }),
    Type(() => Number),
    __metadata("design:type", Number)
], Proveedores.prototype, "ID_proveedor", void 0);
__decorate([
    Expose({ name: "Nombre_proveedor" }),
    IsString({ message: "El formato del parametro (Nombre_proveedor) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Nombre_proveedor) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Nombre_proveedor) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], Proveedores.prototype, "Nombre_proveedor", void 0);
__decorate([
    Expose({ name: "Direccion_proveedor" }),
    IsString({ message: "El formato del parametro (Direccion_proveedor) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Direccion_proveedor) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Direccion_proveedor) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], Proveedores.prototype, "Direccion_proveedor", void 0);
__decorate([
    Expose({ name: "Numero_Contacto" }),
    IsNumber({}, { message: "El formato del parametro (Numero_Contacto) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Numero_Contacto) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Numero_Contacto) no debe estar vacio" }; } }),
    __metadata("design:type", Number)
], Proveedores.prototype, "Numero_Contacto", void 0);
