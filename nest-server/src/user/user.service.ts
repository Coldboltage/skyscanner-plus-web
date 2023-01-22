import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user-flights/entities/user-flight.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEmailDto } from './dto/user-email.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    if (
      !createUserDto.hasOwnProperty('email') &&
      !createUserDto.hasOwnProperty('sub')
    )
      throw new BadRequestException('sub_or_email_needed');
    await this.checkIfFingerprintPresent(createUserDto.fingerPrintId);
    await this.userRepository.save(createUserDto);
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  // Utility Services

  async findByFingerprint(fingerprint: string) {
    return await this.userRepository.findOneBy({ fingerPrintId: fingerprint });
  }

  async checkIfFingerprintPresent(fingerprint: string): Promise<void> {
    if (await this.findByFingerprint(fingerprint))
      throw new BadRequestException('device_has_account');
  }

  async findByEmail(email: UserEmailDto) {
    const test = await this.userRepository.findOneBy({ email: email.email });
    console.log(test);
    return test;
  }
}
