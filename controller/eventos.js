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
export class Eventos {
    constructor(p1, p2, p3, p4, p5) {
        this.ID_evento_dispositivo = p1;
        this.ID_dispositivo = p2;
        this.Tipo_evento = p3;
        this.Descripcion = p4;
        this.Fecha_hora = p5;
    }
}
__decorate([
    Expose({ name: "ID_evento_dispositivo" }),
    Type(() => Number),
    __metadata("design:type", Number)
], Eventos.prototype, "ID_evento_dispositivo", void 0);
__decorate([
    Expose({ name: "ID_dispositivo" }),
    Type(() => Number),
    IsNumber({}, { message: "El formato del parametro (ID_dispositivo) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (ID_dispositivo) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (ID_dispositivo) no debe estar vacio" }; } }),
    __metadata("design:type", Number)
], Eventos.prototype, "ID_dispositivo", void 0);
__decorate([
    Expose({ name: "Tipo_evento" }),
    IsString({ message: "El formato del parametro (Tipo_evento) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Tipo_evento) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Tipo_evento) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], Eventos.prototype, "Tipo_evento", void 0);
__decorate([
    Expose({ name: "Descripcion" }),
    IsString({ message: "El formato del parametro (Descripcion) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Descripcion) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Descripcion) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], Eventos.prototype, "Descripcion", void 0);
__decorate([
    Expose({ name: "Fecha_hora" }),
    IsString({ message: "El formato del parametro (Fecha_hora) no es correcto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro (Fecha_hora) es obligatorio" }; } }),
    IsNotEmpty({ message: () => { throw { status: 422, message: "El parametro (Fecha_hora) no debe estar vacio" }; } }),
    __metadata("design:type", String)
], Eventos.prototype, "Fecha_hora", void 0);
