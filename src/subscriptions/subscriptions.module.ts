import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscription } from './subscriptions.enitity';

@Module({
  imports: [TypeOrmModule.forFeature([Subscription])],
  controllers: [],
  providers: [],
})
export class SubscriptionModule {}
