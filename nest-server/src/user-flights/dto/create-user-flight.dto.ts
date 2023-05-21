export class CreateUserFlightDto {
  currencyCode: string;
  fullCurrency: string;
  departureDate: Date;
  maximumHoliday: number;
  minimalHoliday: number;
  requiredDayEnd: Date;
  requiredDayStart: Date;
  returnDate: Date;
  weekendOnly: boolean;
  arrival: string;
  departure: string;
  returnFlight: boolean;
  isBeingScanned: boolean;
  nextScan: number;
  ref: string;
  scannedLast: number;
  fingerPrintId: string;
  sub: string;
}
