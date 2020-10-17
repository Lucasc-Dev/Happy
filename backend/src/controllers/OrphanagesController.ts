import { Request, Response } from "express";
import OrphanagesRepository from "../repositories/OrphanagesRepository";
import CreateOrphanageService from "../services/CreateOrphanageService";

export default class OrphanagesController {
    public async create(request: Request, response: Response): Promise<Response> {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body;

        const orphanagesRepository = new OrphanagesRepository();

        const createOrphanage = new CreateOrphanageService(orphanagesRepository);

        const orphanage = await createOrphanage.execute({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        });

        return response.json(orphanage);
    }
}