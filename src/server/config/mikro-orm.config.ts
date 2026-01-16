import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Migrator } from '@mikro-orm/migrations';
import { SeedManager } from '@mikro-orm/seeder';

const config: Options = {
  driver: PostgreSqlDriver,
  dbName: process.env.DB_NAME || 'omoikane_dev',
  user: process.env.DB_USER || 'omoikane',
  password: process.env.DB_PASSWORD || 'password',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '54320'),
  entities: ['dist/server/modules/**/*.entity.js'],
  entitiesTs: ['src/server/modules/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  debug: process.env.NODE_ENV !== 'production',
  extensions: [Migrator, SeedManager],
  migrations: {
    path: 'dist/server/migrations',
    pathTs: 'src/server/migrations',
  },
  seeder: {
    path: 'dist/server/seeders',
    pathTs: 'src/server/seeders',
  },
};

export default config;
