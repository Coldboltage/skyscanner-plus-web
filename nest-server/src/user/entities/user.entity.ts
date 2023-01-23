import { IsEmail, IsString } from 'class-validator';
import { UserFlightTypeORM } from 'src/user-flights/entities/user-flight.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column({ nullable: true })
  email?: string;
  @Column({ nullable: true })
  fingerPrintId: string;
  @Column({ nullable: true })
  sub: string;
  @Column({ nullable: true })
  auth0_email?: string;
  @OneToMany(() => UserFlightTypeORM, (userFlight) => userFlight.user, {
    eager: true,
  })
  userFlight?: UserFlightTypeORM[];
}

export class UserSaveMethod {
  fingerprint: string;
  email: string | null;
  user: {
    sub: string | null;
    auth0_email: string | null;
  };
}
