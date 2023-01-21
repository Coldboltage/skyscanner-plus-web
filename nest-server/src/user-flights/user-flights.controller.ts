import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserFlightsService } from './user-flights.service';
import { CreateUserFlightDto } from './dto/create-user-flight.dto';
import { UpdateUserFlightDto } from './dto/update-user-flight.dto';
import { UserFlight } from './schema/userFlight.schema';

@Controller('user-flights')
export class UserFlightsController {
  constructor(private readonly userFlightsService: UserFlightsService) {}

  // @Post()
  // create(@Body() createUserFlightDto: CreateUserFlightDto) {
  //   return this.userFlightsService.create(createUserFlightDto);
  // }

  @Post()
  create(@Body() payload: UserFlight) {
    return this.userFlightsService.create(payload);
  }

  @Get()
  findAll() {
    return this.userFlightsService.findAll();
  }

  @Get(':subId/sub')
  findBySubId(@Param('subId') id: string) {
    return this.userFlightsService.findBySubId(id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userFlightsService.findOne(id);
  // }

  @Get(':id/flight')
  findOne(@Param('id') id: string) {
    return this.userFlightsService.getMostRecentScannedFlights(id);
  }

  @Get(':fpId/fingerPrint')
  fingerprintLast24Days(@Param('id') id: string) {
    return this.userFlightsService.fingerprintLast24Days(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserFlightDto: UpdateUserFlightDto,
  ) {
    return this.userFlightsService.update(+id, updateUserFlightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userFlightsService.remove(+id);
  }

  @Post('/test')
  createTest() {
    return this.userFlightsService.createTest();
  }

  @Get('test')
  getTests() {
    return this.userFlightsService.getTests();
  }
}
