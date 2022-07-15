import { CODIGO_200, CODIGO_201, CODIGO_400, CODIGO_401, CODIGO_404, CODIGO_500, ERROR_INESPERADO, ERROR_INTERNO_SERVIDOR, MENSAJE_NO_AUTORIZADO, MENSAJE_NO_ENCONTRADO, MENSAJE_PETICION_INCORRECTA, NO_AUTORIZADO, PETICION_INCORRECTA, RECURSO_NO_ENCONTRADO, RESPUESTA_EXITOSA } from '../constantes';
import { generaEstructuraExcepcion } from '../../helpers/generarEstructuraExcepcion';
import { generarFolio } from '../../helpers/generarFolio';

export const API_RESPUESTA_INCORRECTA = generaEstructuraExcepcion(CODIGO_400, PETICION_INCORRECTA, MENSAJE_PETICION_INCORRECTA);
export const API_RESPUESTA_NO_AUTORIZADO = generaEstructuraExcepcion(CODIGO_401, NO_AUTORIZADO, MENSAJE_NO_AUTORIZADO);
export const API_RESPUESTA_NO_ENCONTRADO = generaEstructuraExcepcion(CODIGO_404, RECURSO_NO_ENCONTRADO, MENSAJE_NO_ENCONTRADO);
export const API_RESPUESTA_ERROR_INTERNO_SERVIDOR = generaEstructuraExcepcion(CODIGO_500, ERROR_INTERNO_SERVIDOR, ERROR_INESPERADO);

export const API_RESPUESTA_CREADO = {
    status: CODIGO_201,
    schema: {
        properties: {
            'mensaje': { type: 'string', example: RESPUESTA_EXITOSA},
            'folio': { type: 'string', example: generarFolio()}
        }
    }
}

export const API_ACTUALIZADO_CREADO = {
    status: CODIGO_200,
    schema: {
        properties: {
            'mensaje': { type: 'string', example: RESPUESTA_EXITOSA},
            'folio': { type: 'string', example: generarFolio()}
        }
    }
}