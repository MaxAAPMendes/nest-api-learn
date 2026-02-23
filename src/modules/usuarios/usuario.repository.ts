import { Injectable } from "@nestjs/common";
import { Usuario } from "../entities/Usuario";

@Injectable()
export class UsuarioRepository {
  private usuarios = [];

  salvar(usuario: Usuario) {
    console.log('Salvando novo usuario...')
    this.usuarios.push(usuario);
    console.log('Lista de usuários', this.usuarios)
  }

  listarTodos() {
    return this.usuarios;
  }
}