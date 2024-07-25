import { Module } from '@nestjs/common';
import { ClientProviderOptions, ClientsModule } from '@nestjs/microservices';
import { consts } from '@config/index';

enum ClientsEnum {
  MATCH_MAKING = 'MATCH_MAKING',
}

const client: ClientProviderOptions = {
  ...consts.kafka.config,
  name: ClientsEnum.MATCH_MAKING,
} as ClientProviderOptions;

@Module({
  imports: [ClientsModule.register({ clients: [client] })],
})
export class KafkaModule {}
