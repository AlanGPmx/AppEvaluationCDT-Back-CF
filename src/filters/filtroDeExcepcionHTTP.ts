import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { PETICION_INCORRECTA } from '../config/constantes';
import { generarFolio } from '../helpers/generarFolio';
import { generarUrl } from '../helpers/generarUrl';

@Catch(HttpException)
export class FiltroDeExcepcionHTTP implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const respuesta = ctx.getResponse<Response>();
    const estado = exception.getStatus();

    let folio = generarFolio();
    const mensaje = exception.getResponse()['message'];

    respuesta
      .status(estado)
      .json({
        codigo: generarUrl(estado, false),
        mensaje: PETICION_INCORRECTA,
        folio,
        info: generarUrl(estado, true),
        detalles: typeof(mensaje) === 'string' ? [ mensaje ] : mensaje,
      });
  }
}