import type { Request, Response } from 'express';
import type { BannerData } from '../interfaces/bannerData.interface.js';
import { createMenuOptions } from '../helpers/createMenuObject.helper.js';
import type { MenuOptions } from '../interfaces/menuOptions.interface.js';

export const home = (req: Request, res: Response): void => {
    const menu: MenuOptions = createMenuOptions('all');

    const data: BannerData = {
        title: 'Todos os animais',
        background: 'allanimals.jpg'
    }

    res.render('pages/page', {
        menu,
        banner: data
    });
};

export const dogs = (req: Request, res: Response): void => {
    const menu: MenuOptions = createMenuOptions('dogs');

    const data: BannerData = {
        title: 'Cachorros',
        background: 'banner_dog.jpg'
    }

    res.render('pages/page', {
        menu,
        banner: data
    });
};

export const cats = (req: Request, res: Response): void => {
    const menu: MenuOptions = createMenuOptions('cats');

    const data: BannerData = {
        title: 'Gatos',
        background: 'banner_cat.jpg'
    }

    res.render('pages/page', {
        menu,
        banner: data
    });
};

export const fishes = (req: Request, res: Response): void => {
    const menu: MenuOptions = createMenuOptions('fishes');

    const data: BannerData = {
        title: 'Peixes',
        background: 'banner_fish.jpg'
    }

    res.render('pages/page', {
        menu,
        banner: data
    });
};