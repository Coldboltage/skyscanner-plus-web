import { IsEmail, IsOptional, IsUUID } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsEmail()
  email?: string;
  @IsUUID()
  fingerPrintId?: string;
  @IsOptional()
  sub?: string;
}
