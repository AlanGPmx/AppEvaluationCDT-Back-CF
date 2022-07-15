import { Response } from 'express';
import { Productos } from './productos.interface';

export interface Respuesta extends Response {
    codigo?: string;
    detalles?: string[];
    folio: string;
    info?: string;
    mensaje: string;
    resultado?: {
        poductos: Productos[];
    };
}
