import { IQueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/entities/person';
import { Repository } from 'typeorm';
import { GetPersonQuery } from '../impl/get-persons.query';

export class GetPersonsHandler implements IQueryHandler<GetPersonQuery> {
  constructor(@InjectRepository(Person) private personRepo: Repository) {}
  execute(query: GetPersonQuery): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
