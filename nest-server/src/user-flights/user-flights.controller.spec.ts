import { Test, TestingModule } from '@nestjs/testing';
import { UserFlightsController } from './user-flights.controller';
import { UserFlightsService } from './user-flights.service';

describe('UserFlightsController', () => {
  let controller: UserFlightsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFlightsController],
      providers: [UserFlightsService],
    }).compile();

    controller = module.get<UserFlightsController>(UserFlightsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
