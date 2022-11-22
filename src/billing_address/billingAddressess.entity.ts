import { User } from 'src/users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BillingAddressDetails } from './billingAddressessDetails.entity';

@Entity()
export class BillingAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  region: string;

  @Column()
  postalCode: string;

  @Column()
  apartment: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToOne(() => BillingAddressDetails, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  billingAddressDetails: BillingAddressDetails;

  @ManyToOne(() => User, (user) => user.billingAddressess)
  user: User;
}
