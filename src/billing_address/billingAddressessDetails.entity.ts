import { Column, Entity, OneToOne } from 'typeorm';
import { BillingAddress } from './billingAddressess.entity';

@Entity()
export class BillingAddressDetails {
  @Column()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column()
  vatId: string;

  @OneToOne(
    () => BillingAddress,
    (billingAddress: BillingAddress) => billingAddress.billingAddressDetails,
  )
  billingAddress: BillingAddress;
}
