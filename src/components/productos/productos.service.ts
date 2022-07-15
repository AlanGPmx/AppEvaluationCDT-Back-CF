import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ObtenerProductoDto } from './DTOs/ObtenerProductoDto.dto';
import { Respuesta } from './interfaces/respuesta.interface';

@Injectable()
export class ProductosService {
  private readonly client: ClientProxy;

  constructor() {
    const { API_SERVIDOR_CF_APPEVALUATIONCDT, API_PUERTO_MSO_APPEVALUATIONCDT } = process.env;

    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: API_SERVIDOR_CF_APPEVALUATIONCDT,
        port: +API_PUERTO_MSO_APPEVALUATIONCDT,
      },
    });
  }

  async obtenerProductos() {
    return firstValueFrom( this.client.send<Respuesta>('obtenerProductos', []) );
  }

  async obtenerProducto(query: ObtenerProductoDto) {
    return firstValueFrom( this.client.send<Promise<Respuesta>, ObtenerProductoDto>('obtenerProducto', query) );
  }

  async obtenerProductosMasVendidos() {
    return firstValueFrom( this.client.send<Respuesta>('obtenerProductosMasVendidos', []) );
  }
}
