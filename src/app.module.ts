import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductosModule } from './components/productos/productos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
