import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BillingAddress } from './billingAddressess.entity';

@Entity()
export class BillingAddressDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  vatId: string;

  @OneToOne(
    () => BillingAddress,
    (billingAddress: BillingAddress) => billingAddress.billingAddressDetails,
  )
  billingAddress: BillingAddress;
}
