import Orphanage from "../models/Orphanage";
import OrphanagesRepository from "../repositories/OrphanagesRepository";

interface IRequest {
    name: string;
    latitude: number;
    longitude: number;
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: boolean;
    images: string[];
}

export default class CreateOrphanageService {
    constructor(
        private orphanagesRepository: OrphanagesRepository,
    ) {}

    public async execute(data: IRequest): Promise<Orphanage> {
        const orphanage = await this.orphanagesRepository.create(data);

        return orphanage;
    }
}