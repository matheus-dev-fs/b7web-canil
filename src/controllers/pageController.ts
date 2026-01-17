import type { Request, Response } from 'express';

export const home = (req: Request, res: Response): void => {
    res.send('Welcome to the Home Page');
};

export const dogs = (req: Request, res: Response): void => {
    res.send('Welcome to the Dogs Page');
};

export const cats = (req: Request, res: Response): void => {
    res.send('Welcome to the Cats Page');
};

export const fishes = (req: Request, res: Response): void => {
    res.send('Welcome to the Fishes Page');
};