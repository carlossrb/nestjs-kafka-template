import { Module } from '@nestjs/common';
import { KafkaModule } from '@module/kafka/kafka.module';
import { TemplateController } from './template.controller';
import { TemplateService } from './template.service';

@Module({
  imports: [KafkaModule],
  controllers: [TemplateController],
  providers: [TemplateService],
})
export class TemplateModule {}
