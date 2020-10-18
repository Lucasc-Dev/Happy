import { getRepository, Repository } from "typeorm";

import Orphanage from "../models/Orphanage";
import CreateOrphanageDTO from "../dtos/CreateOrphanageDTO";

export default class OrphanagesRepository {
    private ormRepository: Repository<Orphanage>;

    constructor() {
        this.ormRepository = getRepository(Orphanage);
    }

    public async create(data: CreateOrphanageDTO): Promise<Orphanage> {
        const orphanage = this.ormRepository.create(data);

        await this.ormRepository.save(orphanage);

        return orphanage;
    }

    public async find(page: number): Promise<Orphanage[]> {
        const orphanages = this.ormRepository.find({ take: 5, skip: 5 * page })

        return orphanages;
    }

    public async findById(id: string): Promise<Orphanage | undefined> {
        const orphanage = this.ormRepository.findOne({ where: id });

        return orphanage;
    }
    
    public async findByName(name: string): Promise<Orphanage | undefined> {
        const orphanage = this.ormRepository.findOne({ where: name });

        return orphanage;
    }
}