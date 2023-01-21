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
  User,
} from './entities/user-flight.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserFlight.name, schema: UserFlightSchema },
    ]),
    TypeOrmModule.forFeature([
      UserFlightTypeORM,
      ScanDateORM,
      DepartureDate,
      ReturnDatesORM,
      User,
    ]),
  ],
  controllers: [UserFlightsController],
  providers: [UserFlightsService],
})
export class UserFlightsModule {}
