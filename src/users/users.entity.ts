import { Exclude } from 'class-transformer';
import { UserRole } from './users.enums';
import { AvailableCurrencies } from 'src/currencies/currencies.enums';
import { Subscription } from 'src/subscriptions/subscriptions.enitity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BillingAddress } from 'src/billing_address/billingAddressess.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  name: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: AvailableCurrencies,
    default: AvailableCurrencies.USD,
  })
  currency: number;

  @Column({
    default: 'UTC+01:00',
  })
  time_zone: string;

  @OneToOne(() => Subscription, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  subscription: Subscription;

  @OneToMany(
    () => BillingAddress,
    (billingAddress: BillingAddress) => billingAddress.user,
  )
  billingAddressess: BillingAddress[];

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  public role: UserRole;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: false })
  isEmailConfirmed: boolean;

  @Column({ default: '' })
  refreshToken: string;
}
