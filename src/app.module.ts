import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConnectionConfig } from './config/typeorm.config';
import { UserModule } from './users/users.module';
import { SubscriptionModule } from './subscriptions/subscriptions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConnectionConfig),
    UserModule,
    SubscriptionModule,
  ],
})
export class AppModule {}
