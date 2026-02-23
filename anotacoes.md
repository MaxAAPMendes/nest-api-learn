Instalar nestjs (não global) e já cria o projeto
  $ npx @nestjs/cli new loja


# organização das pastas do projetos

src/
├── common/                # Recursos globais e utilitários
│   ├── decorators/        # Decorators customizados (@GetUser, etc)
│   ├── filters/           # Tratamento de exceções (HttpExceptionFilter)
│   ├── guards/            # Autenticação e Autorização (AuthGuard)
│   ├── interceptors/      # Transformação de logs e respostas
│   └── middleware/        # Middlewares clássicos do Express/Fastify
├── config/                # Gerenciamento de variáveis de ambiente e validação
├── modules/               # O coração da aplicação (Funcionalidades)
│   ├── auth/              # Módulo de Autenticação
│   └── users/             # Exemplo de módulo de domínio
│       ├── dto/           # Data Transfer Objects (validação de entrada)
│       ├── entities/      # Classes que representam o banco de dados (TypeORM/Prisma)
│       ├── interfaces/    # Interfaces TypeScript
│       ├── users.controller.ts
│       ├── users.module.ts
│       ├── users.service.ts
│       └── users.service.spec.ts
├── database/              # Migrations, seeds e configurações de conexão
├── main.ts                # Ponto de entrada (Bootstrap da app)
└── app.module.ts          # Módulo raiz que orquestra os outros