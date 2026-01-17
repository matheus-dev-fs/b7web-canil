import type { Request, Response } from 'express';
import type { BannerData } from '../interfaces/bannerData.interface.js';

export const home = (req: Request, res: Response): void => {
    const data: BannerData = {
        title: 'Todos os animais',
        background: 'allanimals.jpg'
    }

    res.render('pages/page', {
        banner: data
    });
};

export const dogs = (req: Request, res: Response): void => {
    const data: BannerData = {
        title: 'Cachorros',
        background: 'banner_dog.jpg'
    }

    res.render('pages/page', {
        banner: data
    });
};

export const cats = (req: Request, res: Response): void => {
    const data: BannerData = {
        title: 'Gatos',
        background: 'banner_cat.jpg'
    }

    res.render('pages/page', {
        banner: data
    });
};

export const fishes = (req: Request, res: Response): void => {
    const data: BannerData = {
        title: 'Peixes',
        background: 'banner_fish.jpg'
    }
    res.render('pages/page', {
        banner: data
    });
};