import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/* const start = () => {
  console.log('Servidor rodando');
  return process.env.PORT ?? 3000;
} */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT ?? 3000);
  // await app.listen(start())
  await app.listen(process.env.PORT ?? 3000, () => {
    console.log('SErvidor disponível e rodando!')
  })
}
bootstrap();
