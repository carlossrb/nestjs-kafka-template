import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/healthz')
  heatlhCheck() {
    return { healthy: true };
  }
}
