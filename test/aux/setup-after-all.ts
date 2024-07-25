import { INestApplication } from '@nestjs/common';
import { PrismaAux } from './prisma.aux';

export const setupAfterAll = async (app: INestApplication, prismaAux: PrismaAux) => {
  await prismaAux.cleanDatabase();
  await prismaAux.disconnect();
  await app.close();
};
