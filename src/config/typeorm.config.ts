import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const port: number = parseInt(<string>process.env.PORT) || 3306;

export const typeormConnectionConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: port,
  username: 'junior_task',
  password: 'test',
  database: 'crm_api',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  // entities: ['src/**/*.entity.ts'],
  synchronize: true,
  autoLoadEntities: true,
  timezone: 'utc',
};
