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
export class DispositivosProveedores {
    constructor(p1, p2, p3, p4) {
        this.ID_dispositivo_proveedor = p1;
        this.ID_dispositivo = p2;
        this.ID_proveedor = p3;
        this.Precio = p4;
    }
}
__decorate([
    Expose({ name: "ID_dispositivo_proveedor" }),
    Type(() => Number),
    __metadata("design:type", Number)
], DispositivosProveedores.prototype, "ID_dispositivo_proveedor", void 0);
__decorate([
    Expose({ name: "ID_dispositivo" }),
    Type(() => Number),
    IsNumber({}, { message: "El formato del parametro (ID_dispositivo) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (ID_dispositivo) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (ID_dispositivo) no debe estar vacio" }; } }),
    __metadata("design:type", Number)
], DispositivosProveedores.prototype, "ID_dispositivo", void 0);
__decorate([
    Expose({ name: "ID_proveedor" }),
    IsString({ message: "El formato del parametro (ID_proveedor) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (ID_proveedor) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (ID_proveedor) no debe estar vacio" }; } }),
    __metadata("design:type", Number)
], DispositivosProveedores.prototype, "ID_proveedor", void 0);
__decorate([
    Expose({ name: "Precio" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Precio) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Precio) no debe estar vacio" }; } }),
    __metadata("design:type", Number)
], DispositivosProveedores.prototype, "Precio", void 0);
