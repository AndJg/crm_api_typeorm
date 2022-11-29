import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';

const port: number = parseInt(<string>process.env.PORT) || 3306;

export const typeormConnectionConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: port,
  username: 'junior_task',
  password: 'test',
  database: 'crm_api',
  entities: ['dist/**/*.entity{.ts,.js}'], 
  synchronize: true,
  timezone: 'utc',
};
