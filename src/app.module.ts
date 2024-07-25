import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { environments } from './config';
import { KafkaModule } from './modules/kafka/kafka.module';
import { TemplateModule } from '@module/template/template.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environments],
    }),
    KafkaModule,
    TemplateModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
