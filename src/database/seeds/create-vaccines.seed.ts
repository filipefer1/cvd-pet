import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Vaccine } from '../../modules/pets/entities/vaccine.entity';
import { v4 as uuid } from 'uuid';

export default class CreateVaccines implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const vaccines = [
            {
                id: uuid(),
                name: 'V8',
            },
            {
                id: uuid(),
                name: 'V10',
            },
            {
                id: uuid(),
                name: 'Giárdia',
            },
            {
                id: uuid(),
                name: 'Tosse canina',
            },
            {
                id: uuid(),
                name: 'Antirrábica',
            },
            {
                id: uuid(),
                name: 'V4',
            },
            {
                id: uuid(),
                name: 'V5',
            },
        ];

        const vaccineRepository = connection.getRepository(Vaccine);

        await vaccineRepository.save(vaccines);
    }
}
