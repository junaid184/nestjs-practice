import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { GlobalGuard } from './global/global.guard';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.useGlobalGuards(new GlobalGuard());
  await app.listen(3000);
}
bootstrap();
