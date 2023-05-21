import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserFlightTypeORM } from './user-flight.entity';

@Entity()
export class Dates {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column()
  departureDate: Date;
  @Column()
  returnDate: Date;
  @Column({ nullable: true })
  departureDateString?: string;
  @Column({ nullable: true })
  returnDateString?: string;
  @Column()
  minimalHoliday: number;
  @Column()
  maximumHoliday: number;
  @Column({ nullable: true })
  requiredDayStart?: Date;
  @Column({ nullable: true })
  requiredDayEnd?: Date;
  @Column({ nullable: true })
  weekendOnly?: boolean;
  @OneToOne(() => UserFlightTypeORM, (userFlight) => userFlight.dates)
  userFlight: UserFlightTypeORM;
}
