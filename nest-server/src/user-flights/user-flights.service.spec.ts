import { Test, TestingModule } from '@nestjs/testing';
import { UserFlightsService } from './user-flights.service';

describe('UserFlightsService', () => {
  let service: UserFlightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFlightsService],
    }).compile();

    service = module.get<UserFlightsService>(UserFlightsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
