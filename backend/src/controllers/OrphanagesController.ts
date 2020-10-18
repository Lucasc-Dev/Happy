import { Request, Response } from "express";
import orphanageView from '../views/orphanages_view';
import * as Yup from 'yup';

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

        return response.json(orphanageView.render(orphanage));
    }

    public async index(request: Request, response: Response): Promise<Response> {
        const { page } = request.query;

        const orphanagesRepository = new OrphanagesRepository();

        const listOrphanages = new ListOrphanagesService(orphanagesRepository);

        const orphanages = await listOrphanages.execute(Number(page));

        return response.json(orphanageView.renderMany(orphanages));
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

        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => ({ path: image.filename }))
        
        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images,
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required(),
                }),
            ).required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const orphanagesRepository = new OrphanagesRepository();

        const createOrphanage = new CreateOrphanageService(orphanagesRepository);

        const orphanage = await createOrphanage.execute(data);

        return response.json(orphanageView.render(orphanage));
    }
}