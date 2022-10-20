import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SavePersonCommand } from './commands/impl/save-person.command';
import { GetPersonQuery } from './queries/impl/get-persons.query';

@Controller('persons')
export class PersonController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  async getAll() {
    return await this.queryBus.execute(new GetPersonQuery());
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ValidationPipe({ transform: true }))
  async createEmployee(@Body() newPerson: SavePersonCommand) {
    return await this.commandBus.execute(newPerson);
  }
}
