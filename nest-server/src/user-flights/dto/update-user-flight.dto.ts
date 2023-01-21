import { PartialType } from '@nestjs/mapped-types';
import { CreateUserFlightDto } from './create-user-flight.dto';

export class UpdateUserFlightDto extends PartialType(CreateUserFlightDto) {}
