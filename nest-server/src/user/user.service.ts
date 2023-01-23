import { Injectable, Logger } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEmailDto } from './dto/user-email.dto';
import { User, UserSaveMethod } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  private readonly logger = new Logger('User');
  async create(createUserDto: CreateUserDto) {
    this.logger.verbose('Creating User');
    if (
      !createUserDto.hasOwnProperty('email') &&
      !createUserDto.hasOwnProperty('sub')
    )
      throw new BadRequestException('sub_or_email_needed');
    // await this.checkIfFingerprintPresent(createUserDto.fingerPrintId);
    console.log(createUserDto);
    return await this.userRepository.save(createUserDto);
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string) {
    return await this.userRepository.findOneBy({ id });
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
    return await this.userRepository.findOneBy({ email: email.email });
  }

  async findByAuth0Email(email: UserEmailDto) {
    return await this.userRepository.findOneBy({
      auth0_email: email.email,
    });
  }

  async findBySubId(sub: string) {
    return await this.userRepository.findOneBy({ sub });
  }

  async checkForUser(userInformation: UserSaveMethod): Promise<User> {
    console.log(userInformation);
    // const user = await this.findByFingerprint(userInformation.fingerprint);
    // if (user) return user;
    if (userInformation.email) {
      const email: UserEmailDto = {
        email: userInformation.email,
      };
      return await this.findByEmail(email);
    }
    if (userInformation.user.sub)
      return this.findBySubId(userInformation.user.sub);
    if (userInformation.user.auth0_email) {
      const email: UserEmailDto = {
        email: userInformation.user.auth0_email,
      };
      return await this.findByAuth0Email(email);
    }
    console.log('No user found. Creating user');
  }
}
