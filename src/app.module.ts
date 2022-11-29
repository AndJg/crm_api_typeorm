import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConnectionConfig } from './config/typeorm.config';
import { UserModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConnectionConfig), UserModule],
})
export class AppModule {}
