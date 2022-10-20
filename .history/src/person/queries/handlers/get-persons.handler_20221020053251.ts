/* eslint-disable @typescript-eslint/no-unused-vars */
import { IQueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/entities/person';
import { Repository } from 'typeorm';
import { GetPersonQuery } from '../impl/get-persons.query';

export class GetPersonsHandler implements IQueryHandler<GetPersonQuery> {
  constructor(
    @InjectRepository(Person) private personRepo: Repository<Person>,
  ) {}
  async execute(query: GetPersonQuery): Promise<Person[]> {
    return await this.personRepo.find();
  }
}
