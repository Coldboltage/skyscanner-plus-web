import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserFlightDocument = HydratedDocument<UserFlight>;

class User {
  email?: string;
  fingerPrintId: string;
  sub: string;
}

class Currency {
  fullCurrency: string;
  currencyCode: string;
}

class Flights {
  departure: string;
  arrival: string;
  returnFlight: boolean;
  passengers?: number;
}

class Dates {
  departureDate: Date;
  returnDate: Date;
  departureDateString?: string;
  returnDateString?: string;
  minimalHoliday: number;
  maximumHoliday: number;
  requiredDayStart?: Date;
  requiredDayEnd?: Date;
  weekendOnly?: Date;
}

export class ScanDate {
  dateOfScanLoop: string;
  departureDate: DepartureDate[];
}

export class DepartureDate {
  date: Date;
  dateString: string;
  returnDates: ReturnDates[];
}

export class ReturnDates {
  departDate: Date;
  returnDate: Date;
  daysBetweenDepartureDateAndArrivalDate: number;
  dateString: string;
  url: string;
  flightDatesString: string;
  cheapest: {
    cost: number;
    costWithCurrency: string;
    time: string;
    arrival: string;
    durationOfFlight: string;
  };
  best: {
    cost: number;
    costWithCurrency: string;
    time: string;
    arrival: string;
    durationOfFlight: string;
  };
}

@Schema()
export class UserFlight {
  @Prop()
  user: User;
  @Prop({ required: true })
  ref: string;
  @Prop({ required: true })
  isBeingScanned: boolean;
  @Prop({ required: true })
  workerPID: number;
  @Prop()
  lastUpdated: number;
  @Prop({ required: true })
  scannedLast: number;
  @Prop({ required: true })
  nextScan: number;
  @Prop()
  screenshot?: string;
  @Prop()
  status: boolean;
  @Prop()
  currency: Currency;
  @Prop()
  alertPrice: number;
  @Prop({ required: true })
  flights: Flights;
  @Prop()
  dates: Dates;
  @Prop()
  scanDate?: ScanDate[];
}

export const UserFlightSchema = SchemaFactory.createForClass(UserFlight); // NEST GODS BE NICE TO ME TY
