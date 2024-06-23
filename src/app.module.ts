import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ec2-18-212-199-131.compute-1.amazonaws.com',
      database: 'app_back',
      port: 3306, 
      username: 'app_back',
      password: 'appback',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
