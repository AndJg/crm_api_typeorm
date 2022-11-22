import { User } from 'src/users/users.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToOne(() => User, (user: User) => user.subscription)
  user?: User;
}
