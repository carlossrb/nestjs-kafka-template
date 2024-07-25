/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PrismaClient } from '@prisma/client';

export class PrismaAux {
  constructor(readonly client: PrismaClient) {}

  async disconnect() {
    await this.client.$disconnect();
  }

  async cleanDatabase(): Promise<void> {
    const tablenames = await this.client.$queryRaw<
      Array<{ tablename: string }>
    >`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

    const tables = tablenames
      .map(({ tablename }) => tablename)
      .filter((name) => name !== '_prisma_migrations')
      .map((name) => `"public"."${name}"`)
      .join(', ');

    await this.client.$executeRawUnsafe(`TRUNCATE TABLE ${tables} CASCADE;`);
  }

  async build(): Promise<this> {
    await this.client.$connect();
    return this;
  }
}
