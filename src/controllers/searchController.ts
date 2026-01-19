import type { Request, Response } from 'express';
import type { MenuOptions } from '../interfaces/menuOptions.interface.js';
import { createMenuOptions } from '../helpers/createMenuObject.helper.js';
import type { PetData } from '../interfaces/petData.interface.js';
import { Pet } from '../models/pet.model.js';

export const search = (req: Request, res: Response): void => {
    const query: string = req.query.q as string;

    if (!query) {
        res.redirect('/');
        return;
    }

    const list: PetData[] = Pet.getByName(query);
    const menu: MenuOptions = createMenuOptions('');

    res.render('pages/page', {
        menu,
        list,
        searchTerm: query
    });
};