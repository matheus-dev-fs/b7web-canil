import type { Request, Response } from 'express';

export const search = (req: Request, res: Response): void => {
    res.send('Welcome to the Search Page');
};