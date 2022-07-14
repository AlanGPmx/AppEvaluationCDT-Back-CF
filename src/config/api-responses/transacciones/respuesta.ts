import { generarFolio } from '../../../helpers/generarFolio';
import { CODIGO_200, RESPUESTA_EXITOSA } from '../../constantes';

export const RESPUESTA_TRANSACCIONES = { 
  status: CODIGO_200,
  schema: {
    properties: {
      'codigo': { type: 'string', example: '200.Plataforma-CDT' },
      'mensaje': { type: 'string', example: RESPUESTA_EXITOSA },
      'folio': { type: 'string', example: generarFolio() },
      'resultado': {
        'transacciones': [
          {
            'id': 1,
            'accion': 'Insertar clasificacion de banco',
            'fechaEjecucion': '2022-06-13T15:27:00.000Z',
            'numeroEmpleado': 666
          }
        ]
      }              
    }
  }
}