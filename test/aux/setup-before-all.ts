import { Test } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { AppModule } from 'src/app.module';
import { PrismaAux } from './prisma.aux';

export const setupBeforeAll = async () => {
  const module = await Test.createTestingModule({
    imports: [AppModule],
    providers: [PrismaClient],
  }).compile();

  const prisma = module.get(PrismaClient);
  const prismaAux = await new PrismaAux(prisma).build();
  const app = module.createNestApplication();
  await app.init();

  return {
    app,
    prismaAux,
    module,
  };
};
