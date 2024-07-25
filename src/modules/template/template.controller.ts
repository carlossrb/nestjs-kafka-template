import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TemplateService } from './template.service';

@Controller()
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @MessagePattern('nestjs-kafka-template')
  async handleMessage(message: Record<string, any>): Promise<void> {
    console.log('message received', message);
  }
}
