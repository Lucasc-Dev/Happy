import Orphanage from "../models/Orphanage";
import OrphanagesRepository from "../repositories/OrphanagesRepository";

export default class ListOrphanagesService {
    constructor(
        private orphanagesRepository: OrphanagesRepository,
    ) {}

    public async execute(page: number): Promise<Orphanage[]> {
        if (!page) {
            page = 0;
        }

        const orphanage = await this.orphanagesRepository.find(page);

        return orphanage;
    }
}