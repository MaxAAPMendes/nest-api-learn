import { Injectable } from "@nestjs/common";
// import { Usuario } from "../entities/Usuario";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";

@Injectable()
export class UsuarioRepository {
  private usuarios = [];

  salvar(usuario: CriaUsuarioDTO) {
    console.log('Salvando novo usuario...')
    this.usuarios.push(usuario);
    console.log('Lista de usuários', this.usuarios)
  }

  listarTodos() {
    return this.usuarios;
  }
}