import { Module } from '@nestjs/common';
import { UsuarioController } from './modules/usuarios/usuario.controller';


@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [],
})
export class AppModule {}
