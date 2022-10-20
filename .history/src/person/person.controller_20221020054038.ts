import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetPersonQuery } from './queries/impl/get-persons.query';

@Controller('persons')
export class PersonController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getAll() {
    return await this.queryBus.execute(new GetPersonQuery());
  }
}
