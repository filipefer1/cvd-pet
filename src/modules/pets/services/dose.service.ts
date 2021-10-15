import { Injectable } from '@nestjs/common';
import { DoseRepository } from '../repositories/dose.repository';

@Injectable()
export class DoseService {
    constructor(private readonly doseRepository: DoseRepository) {}
}
