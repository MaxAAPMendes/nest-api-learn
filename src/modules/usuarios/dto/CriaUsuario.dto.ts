import { IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

export class CriaUsuarioDTO {
  @IsString()
  nome: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: 'Email inválido'
  })
  email: string;

  @MinLength(6, {
    message: "Senha deve possuir 6 dígitos"
  })
  senha: string;
}