import { Module } from '@nestjs/common';
import { UserFlightsService } from './user-flights.service';
import { UserFlightsController } from './user-flights.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserFlightSchema, UserFlight } from './schema/userFlight.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DepartureDate,
  ReturnDatesORM,
  ScanDateORM,
  UserFlightTypeORM,
} from './entities/user-flight.entity';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/entities/user.entity';
import { Dates } from './entities/date.entity';

@Module({
  imports: [
    // MongooseModule.forFeature([
    //   { name: UserFlight.name, schema: UserFlightSchema },
    // ]),
    TypeOrmModule.forFeature([
      UserFlightTypeORM,
      ScanDateORM,
      DepartureDate,
      ReturnDatesORM,
      User,
      Dates,
    ]),
    UserModule,
  ],
  controllers: [UserFlightsController],
  providers: [UserFlightsService],
})
export class UserFlightsModule {}
