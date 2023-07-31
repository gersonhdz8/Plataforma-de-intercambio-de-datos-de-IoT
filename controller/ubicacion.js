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
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
export class Ubicacion {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "ID_ubicacion" }),
    Type(() => Number),
    __metadata("design:type", Number)
], Ubicacion.prototype, "ID_ubicacion", void 0);
__decorate([
    Expose({ name: "Nombre_ubicacion" }),
    IsString({ message: "El formato del parametro (Nombre_ubicacion) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Nombre_ubicacion) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Nombre_ubicacion) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], Ubicacion.prototype, "Nombre_ubicacion", void 0);
