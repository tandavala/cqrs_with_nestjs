import { Controller } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

@Controller('person')
export class PersonController {
  constructor(private readonly queryBus: QueryBus) {}
}
