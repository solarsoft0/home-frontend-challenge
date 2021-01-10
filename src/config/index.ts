export type ConfigType = {
  env: EnvEnums;
  apiHost: string;
  schemaVersion: string;
  schemaVersionKey: string;
};

export enum EnvEnums {
  development = 'development',
  test = 'test',
  production = 'production',
}

const devConfig: ConfigType = {
  env: EnvEnums.development,
  apiHost: 'https://graphqlzero.almansi.me/api',
  schemaVersion: '1',
  schemaVersionKey: 'apollo-schema-version',
};
const testConfig: ConfigType = {
  env: EnvEnums.test,
  apiHost: 'https://graphqlzero.almansi.me/api',
  schemaVersion: '1',
  schemaVersionKey: 'apollo-schema-version',// can change this for tests
};
const liveConfig: ConfigType = {
  env: EnvEnums.production,
  apiHost: 'https://graphqlzero.almansi.me/api',
  schemaVersion: '1',
  schemaVersionKey: 'apollo-schema-version',// can change this for live
};

const allEnvCong = {
  development: devConfig,
  test: testConfig,
  production: liveConfig,
};

export const appConfig: ConfigType = allEnvCong[process.env.NODE_ENV ?? 'development'];
