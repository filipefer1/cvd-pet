import { Injectable } from '@nestjs/common';
import { PetVaccinesRepository } from '../repositories/pet-vaccines.repository';

@Injectable()
export class PetVaccinesService {
    constructor(
        private readonly petVaccinesRepository: PetVaccinesRepository,
    ) {}
}
