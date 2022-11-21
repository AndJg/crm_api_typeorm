import { Exclude } from 'class-transformer';
import { UserRole } from './users.enums';
import { Subscription } from 'src/subscriptions/subscriptions.enitity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  name: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  currency: number;

  @Column()
  time_zone: string;

  @OneToOne(() => Subscription, {
    eager: true,
    cascade: true,
  })
  subscription: Subscription;

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
}

export default User;
