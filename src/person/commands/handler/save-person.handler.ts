import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/entities/person';
import { Repository } from 'typeorm';
import { SavePersonCommand } from '../impl/save-person.command';

@CommandHandler(SavePersonCommand)
export class SavePersonHandler implements ICommandHandler<SavePersonCommand> {
  constructor(
    @InjectRepository(Person) private personRepo: Repository<Person>,
  ) {}
  async execute(command: SavePersonCommand): Promise<void> {
    const person = new Person();
    person.name = command.name;
    person.age = command.age;
    await this.personRepo.insert(person);
  }
}
