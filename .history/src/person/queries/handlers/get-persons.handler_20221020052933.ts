import { IQueryHandler } from '@nestjs/cqrs';
import { GetPersonQuery } from '../impl/get-persons.query';

export class GetPersonsHandler {}
export class GetPersonsHandler implements IQueryHandler<GetPersonQuery> {
  execute(query: GetPersonQuery): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
