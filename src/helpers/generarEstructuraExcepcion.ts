import { generarFolio } from './generarFolio';
import { generarUrl } from './generarUrl';

export const generaEstructuraExcepcion = (codigoRespuesta: number, datalles: string, mensaje: string): Object => ({
    status: codigoRespuesta,
    schema: {
        properties: {
            'codigo': { type: 'string', example: generarUrl(codigoRespuesta, false) },
            'mensaje': { type: 'string', example: mensaje},
            'folio': { type: 'string', example: generarFolio()},
            'info': { type: 'string', example: generarUrl(codigoRespuesta, true) },
            'detalles': { 
                type: 'object', 
                example: [ datalles ] 
            }
        }
    }
});