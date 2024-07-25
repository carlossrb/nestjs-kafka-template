enum Envs {
  TEST = 'test',
  DEV = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

const isDev = (): boolean => process.env.NODE_ENV === Envs.DEV;
const isStaging = (): boolean => process.env.NODE_ENV === Envs.STAGING;
const isProd = (): boolean => process.env.NODE_ENV === Envs.PRODUCTION;
const isTest = (): boolean => process.env.NODE_ENV === Envs.TEST;
const isInternal = (): boolean => isDev() || isStaging() || isTest();

export interface EnvironmentsInterface {
  env: string;
  kafka: { brokers: string[] };
  isDev: () => boolean;
  isStaging: () => boolean;
  isProd: () => boolean;
  isTest: () => boolean;
  isInternal: () => boolean;
}

const handleKafkaBrokers = (env: string): string[] => {
  if (!env?.includes(',')) {
    console.error('Env KAFKA_BROKERS is incorrect');
    return [];
  }

  return env.split(',');
};

export const environments = (): EnvironmentsInterface => ({
  env: process.env.NODE_ENV,
  kafka: { brokers: handleKafkaBrokers(process.env.KAFKA_BROKERS) },
  isDev,
  isStaging,
  isProd,
  isTest,
  isInternal,
});
