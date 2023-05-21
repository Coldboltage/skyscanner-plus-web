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
import { UpdateUserFlightDto } from './dto/update-user-flight.dto';
import { UserFlight } from './schema/userFlight.schema';
import { UserSaveMethod } from 'src/user/entities/user.entity';

@Controller('user-flights')
export class UserFlightsController {
  constructor(private readonly userFlightsService: UserFlightsService) {}

  // @Post()
  // create(@Body() createUserFlightDto: CreateUserFlightDto) {
  //   return this.userFlightsService.create(createUserFlightDto);
  // }

  // @Post()
  // create(@Body() payload: UserFlight) {
  //   return this.userFlightsService.create(payload);
  // }

  // @Get()
  // findAll() {
  //   return this.userFlightsService.findAll();
  // }

  // @Get(':subId/sub')
  // findBySubId(@Param('subId') id: string) {
  //   return this.userFlightsService.findBySubId(id);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userFlightsService.findOne(id);
  // }

  // @Get(':id/flight')
  // findOne(@Param('id') id: string) {
  //   return this.userFlightsService.getMostRecentScannedFlights(id);
  // }

  // @Get(':fpId/fingerPrint')
  // fingerprintLast24Days(@Param('id') id: string) {
  //   return this.userFlightsService.fingerprintLast24Days(id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateUserFlightDto: UpdateUserFlightDto,
  // ) {
  //   return this.userFlightsService.update(+id, updateUserFlightDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userFlightsService.remove(+id);
  }

  @Post('/test')
  createTest() {
    return this.userFlightsService.createTest();
  }

  // TypeORM
  @Post('typeorm')
  createFlight(
    @Body('userInformation') userInformation: UserSaveMethod,
    @Body('payload') payload,
  ) {
    return this.userFlightsService.createFlight(userInformation, payload);
  }

  @Get(':fingerprint/fingerprint-today')
  checkIfFingerprintUsedToday(@Param('fingerprint') fingerprint: string) {
    return this.userFlightsService.checkIfFingerprintUsedToday(fingerprint);
  }

  @Get(':sub/suborm')
  findFlightsBySub(@Param('sub') sub: string) {
    return this.userFlightsService.findFlightsBySub(sub);
  }

  @Get(':ref/getByRef')
  findFlightsByRef(@Param('ref') ref: string) {
    return this.userFlightsService.findFlightByRef(ref);
  }

  @Get(':userId/getByUser')
  findFlightsByUser(@Param('userId') userId: string) {
    return this.userFlightsService.findFlightsByUser(userId);
  }

  @Get(':email/getByEmail')
  findFlightsByEmail(@Param('email') email: string) {
    return this.userFlightsService.findFlightsByEmail(email);
  }

  @Get(':ref/mostRecentFlightByRef')
  findOneByRef(@Param('ref') ref: string) {
    return this.userFlightsService.getMostRecentScannedFlightsByRef(ref);
  }
  @Delete('/delete/:id')
  deleteOneById(@Param('id') id: string) {
    return this.userFlightsService.deleteOneById(id);
  }

  // Testing

  @Get('test')
  getTests() {
    return this.userFlightsService.getTests();
  }
}
