import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  currentPeriodStart: Date;

  @Column()
  currentPeriodEnd: Date;

  @Column()
  cancelAtPeriodEnd: boolean;

  @Column()
  cancelAt: Date;

  @Column()
  endedAt: Date;

  @Column()
  defaultPaymentMethod: string;
}
