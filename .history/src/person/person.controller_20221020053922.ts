import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetPersonQuery } from './queries/impl/get-persons.query';

@Controller('person')
export class PersonController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('all')
  async getAll() {
    return await this.queryBus.execute(new GetPersonQuery());
  }
}
