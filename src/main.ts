import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { consts } from '@config/index';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter());
  app.connectMicroservice<MicroserviceOptions>(consts.kafka.config);
  await app.startAllMicroservices();
  await app.listen(process.env.PORT);
}
bootstrap();
