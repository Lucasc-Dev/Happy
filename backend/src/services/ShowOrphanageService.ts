import Orphanage from "../models/Orphanage";
import OrphanagesRepository from "../repositories/OrphanagesRepository";

export default class ShowOrphanageService {
    constructor(
        private orphanagesRepository: OrphanagesRepository,
    ) {}

    public async execute(id: string): Promise<Orphanage> {
        const orphanage = await this.orphanagesRepository.findById(id);

        if (!orphanage) {
            throw new Error('');
        }

        return orphanage;
    }
}