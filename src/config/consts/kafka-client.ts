import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { environments } from '..';
import { NestApplicationContextOptions } from '@nestjs/common/interfaces/nest-application-context-options.interface';

const envs = environments();

export const kafkaClientConfig: NestApplicationContextOptions & MicroserviceOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'nestjs-kafka-template',
      brokers: envs.kafka.brokers,
    },
    consumer: {
      groupId: 'nestjs-kafka-template-consumer',
    },
  },
};
