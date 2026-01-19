import type { Request, Response } from 'express';
import type { BannerData } from '../interfaces/bannerData.interface.js';
import { createMenuOptions } from '../helpers/createMenuObject.helper.js';
import type { MenuOptions } from '../interfaces/menuOptions.interface.js';
import { Pet } from '../models/pet.model.js';
import type { PetData } from '../interfaces/petData.interface.js';

export const home = (req: Request, res: Response): void => {
    const menu: MenuOptions = createMenuOptions('all');

    const data: BannerData = {
        title: 'Todos os animais',
        background: 'allanimals.jpg'
    }

    const list: PetData[] = Pet.getAll();

    res.render('pages/page', {
        menu,
        banner: data,
        list
    });
};

export const dogs = (req: Request, res: Response): void => {
    const menu: MenuOptions = createMenuOptions('dogs');

    const data: BannerData = {
        title: 'Cachorros',
        background: 'banner_dog.jpg'
    }

    const list: PetData[] = Pet.getByType('dog');

    res.render('pages/page', {
        menu,
        banner: data,
        list
    });
};

export const cats = (req: Request, res: Response): void => {
    const menu: MenuOptions = createMenuOptions('cats');

    const data: BannerData = {
        title: 'Gatos',
        background: 'banner_cat.jpg'
    }

    const list: PetData[] = Pet.getByType('cat');

    res.render('pages/page', {
        menu,
        banner: data,
        list
    });
};

export const fishes = (req: Request, res: Response): void => {
    const menu: MenuOptions = createMenuOptions('fishes');

    const data: BannerData = {
        title: 'Peixes',
        background: 'banner_fish.jpg'
    }

    const list: PetData[] = Pet.getByType('fish');

    res.render('pages/page', {
        menu,
        banner: data,
        list
    });
};