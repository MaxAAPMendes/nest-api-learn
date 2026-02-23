// o controller já dá cesso a rota

import { Body, Controller, Get, Post } from "@nestjs/common";
import { Usuario } from "../entities/Usuario";
import { UsuarioRepository } from "./usuario.repository";
import { validaEmail } from "src/common/utils";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController {

  //private repositorioUsuario = new UsuarioRepository();
  // injeção de dependência - a classe injetada precisa tá com o decorator @Injectable
  constructor(private repositorioUsuario: UsuarioRepository) {}

  @Post('/criar')
  async criarUsuario(@Body() usuario: CriaUsuarioDTO) {
    console.log("criando novo usuário")

    /*const { nome, email } = usuario;

    if (!nome || !validaEmail(email)) {
      return {
        mensagem: 'Não foi possível salvar o usuário, faltam dados!',
        usuario,
      }
    }*/
    this.repositorioUsuario.salvar(usuario);
    return {
      mensagem:
      'usuário criado com sucesso!',
      usuario,
    }
  }

  @Get()
  async listarUsuario() {
    return this.repositorioUsuario.listarTodos();
  }
}