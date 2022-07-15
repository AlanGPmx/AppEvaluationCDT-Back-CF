import { Controller, Get, Header, Query, Res, UseFilters } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CABECERA, VALOR_CABECERA } from 'src/config/constantes';
import { FiltroDeExcepcionHTTP } from 'src/filters/filtroDeExcepcionHTTP';
import { ProductosService } from './productos.service';
import {
  API_RESPUESTA_ERROR_INTERNO_SERVIDOR,
  API_RESPUESTA_INCORRECTA,
  API_RESPUESTA_NO_ENCONTRADO,
} from '../../config/api-responses/respuestaApis';
import { RESPUESTA_PRODUCTO, RESPUESTA_PRODUCTOS, RESPUESTA_PRODUCTOS_MAS_VENDIDOS } from 'src/config/api-responses/productos/respuesta';
import { validarRespuesta } from 'src/helpers/validarRespuesta';
import { Respuesta } from './interfaces/respuesta.interface';
import { Response } from 'express';
import { ObtenerProductoDto } from './DTOs/ObtenerProductoDto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  @ApiTags('Productos')
  @UseFilters(new FiltroDeExcepcionHTTP())
  @Header(CABECERA, VALOR_CABECERA)
  @ApiInternalServerErrorResponse(API_RESPUESTA_ERROR_INTERNO_SERVIDOR)
  @ApiResponse(RESPUESTA_PRODUCTOS)
  @ApiBadRequestResponse(API_RESPUESTA_INCORRECTA)
  @ApiNotFoundResponse(API_RESPUESTA_NO_ENCONTRADO)
  @ApiOperation({ summary: 'Obtiene todos los productos' })
  async obtenerProductos(@Res() response: Response) {
    const respuesta: Respuesta = await this.productosService.obtenerProductos();
    const codigoRespuesta = Number(respuesta.codigo.split('.', 1));
    const respuestaFiltrada = validarRespuesta(respuesta, codigoRespuesta);
    return response
      .status(codigoRespuesta)
      .send(JSON.stringify(respuestaFiltrada));
  }

  @Get('buscar')
  @ApiTags('Productos')
  @UseFilters(new FiltroDeExcepcionHTTP())
  @Header(CABECERA, VALOR_CABECERA)
  @ApiQuery({
    name: 'id',
    type: Number,
    description: 'Identificador único del producto',
    required: true,
    example: '3',
  })
  @ApiInternalServerErrorResponse(API_RESPUESTA_ERROR_INTERNO_SERVIDOR)
  @ApiResponse(RESPUESTA_PRODUCTO)
  @ApiBadRequestResponse(API_RESPUESTA_INCORRECTA)
  @ApiNotFoundResponse(API_RESPUESTA_NO_ENCONTRADO)
  @ApiOperation({ summary: 'Obtiene un producto por su ID' })
  async obtenerProducto(@Res() response: Response, @Query() query: ObtenerProductoDto) {
    const respuesta: Respuesta = await this.productosService.obtenerProducto(query);
    const codigoRespuesta = Number(respuesta.codigo.split('.', 1));
    const respuestaFiltrada = validarRespuesta(respuesta, codigoRespuesta);
    return response
      .status(codigoRespuesta)
      .send(JSON.stringify(respuestaFiltrada));
  }

  @Get('mas-vendidos')
  @ApiTags('Productos más vendidos')
  @UseFilters(new FiltroDeExcepcionHTTP())
  @Header(CABECERA, VALOR_CABECERA)
  @ApiInternalServerErrorResponse(API_RESPUESTA_ERROR_INTERNO_SERVIDOR)
  @ApiResponse(RESPUESTA_PRODUCTOS_MAS_VENDIDOS)
  @ApiBadRequestResponse(API_RESPUESTA_INCORRECTA)
  @ApiNotFoundResponse(API_RESPUESTA_NO_ENCONTRADO)
  @ApiOperation({ summary: 'Obtiene todos los productos que más se venden' })
  async obtenerProductosMasVendidos(@Res() response: Response) {
    const respuesta: Respuesta = await this.productosService.obtenerProductosMasVendidos();
    const codigoRespuesta = Number(respuesta.codigo.split('.', 1));
    const respuestaFiltrada = validarRespuesta(respuesta, codigoRespuesta);
    return response
      .status(codigoRespuesta)
      .send(JSON.stringify(respuestaFiltrada));
  }
}
