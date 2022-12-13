import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

const port: number = parseInt(<string>process.env.PORT) || 3306;

export class DatabaseConfiguration implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: port,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
      timezone: 'utc',
    };
  }
}
