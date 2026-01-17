import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import { fileURLToPath } from 'url';
import mainRoutes from './routes/index.js';

import type { 
    Express, 
    Request, 
    Response 
} from 'express';

dotenv.config();

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

const server: Express = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req: Request, res: Response): void => {
    res.status(404).send('Página não encontrada!');
})

server.listen(process.env.PORT || 3000, (): void => {
  console.log('Server is running...');
});