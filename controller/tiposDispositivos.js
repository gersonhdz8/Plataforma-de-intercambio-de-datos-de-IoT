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
export class TiposDispositivos {
    constructor(p1, p2, p3) {
        this.ID_tipo_dispositivo = p1;
        this.Nombre_tipo = p2;
        this.Descripcion = p3;
    }
}
__decorate([
    Expose({ name: "ID_tipo_dispositivo" }),
    Type(() => Number),
    __metadata("design:type", Number)
], TiposDispositivos.prototype, "ID_tipo_dispositivo", void 0);
__decorate([
    Expose({ name: "Nombre_tipo" }),
    IsString({ message: "El formato del parametro (Nombre_tipo) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Nombre_tipo) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Nombre_tipo) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], TiposDispositivos.prototype, "Nombre_tipo", void 0);
__decorate([
    Expose({ name: "Descripcion" }),
    IsString({ message: "El formato del parametro (Descripcion) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Descripcion) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Descripcion) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], TiposDispositivos.prototype, "Descripcion", void 0);
