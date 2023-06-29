import { Actividad } from './actividad'
import { Evento } from './evento'

export class Destino {
    _id?: string;
    nombre: string;
    descripcion: string;
    actividades: Actividad[];
    eventos: Evento[];
    estacion: number

    constructor(nombre: string, descripcion: string, actividades: Actividad[], eventos: Evento[], estacion: number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.actividades = actividades;
        this.eventos = eventos;
        this.estacion = estacion;
    }

}