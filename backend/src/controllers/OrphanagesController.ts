import { Request, Response } from "express";

import OrphanagesRepository from "../repositories/OrphanagesRepository";

import CreateOrphanageService from "../services/CreateOrphanageService";
import ListOrphanagesService from "../services/ListOrphanagesService";
import ShowOrphanageService from "../services/ShowOrphanageService";

export default class OrphanagesController {
    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const orphanagesRepository = new OrphanagesRepository();

        const showOrphanage = new ShowOrphanageService(orphanagesRepository);

        const orphanage = await showOrphanage.execute(id);

        return response.json(orphanage);
    }

    public async index(request: Request, response: Response): Promise<Response> {
        const { page } = request.query;

        const orphanagesRepository = new OrphanagesRepository();

        const listOrphanages = new ListOrphanagesService(orphanagesRepository);

        const orphanages = await listOrphanages.execute(Number(page));

        return response.json(orphanages);
    }

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