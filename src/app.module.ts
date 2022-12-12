import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConnectionConfig } from './config/typeorm.config';
import { UserModule } from './users/users.module';
import { SubscriptionModule } from './subscriptions/subscriptions.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeormConnectionConfig),
    UserModule,
    SubscriptionModule,
    AuthenticationModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
