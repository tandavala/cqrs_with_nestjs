import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person';

@Module({
  imports: [
    {
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'secret',
          database: 'myworlddb',
          entities: [Person],
        }),
      ],
    },
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
