import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Vaccine } from '../../modules/pets/entities/vaccine.entity';
import { v4 as uuid } from 'uuid';

export default class CreateVaccines implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const vaccines = [
            {
                id: uuid(),
                name: 'Cinomose',
            },
            {
                id: uuid(),
                name: 'Parvovirose',
            },
        ];

        const vaccineRepository = connection.getRepository(Vaccine);

        await vaccineRepository.save(vaccines);
    }
}
