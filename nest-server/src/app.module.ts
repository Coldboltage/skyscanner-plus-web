import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserFlightsModule } from './user-flights/user-flights.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://coldbolt-flightscanner:vtwmT7B4HkObSyYc@scannerplus.zgsmw.mongodb.net/scannerplus?retryWrites=true&w=majority',
    ),
    UserFlightsModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
