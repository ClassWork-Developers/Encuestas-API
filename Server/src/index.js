//IMPORTS
import Express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: './.env' });

//ROUTES
import { routes } from './routes/routes.js';

//SWAGGER API
import SwaggerUI from 'swagger-ui-express';
import SwaggerJsDoc from 'swagger-jsdoc';

//BCRYPT SALT
export const SaltRounds = process.env.GENSALT;

//JSON WEB TOKEN HASH
export const token = process.env.TOKEN;

//PASSWORD
export const password = process.env.PASSWORD;

//SWAGGER CONFIG
const swagerSpect = {
  definition: {
    openapi: '3.0.0',
    info: {
      tittle: 'Encuestas API',
      version: '1.0.0',
    },
    servers: [{ url: `https://localhost:${process.env.PORT}` }],
  },
  apis: [`${path.join(__dirname, './routes/routes.js')}`],
};

//AUTO DEPLOY BD

const app = Express();

//Many Config
let port = process.env.PORT;

//Use APP
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);
app.use('/Documentation', SwaggerUI.serve, SwaggerUI.setup(SwaggerJsDoc(swagerSpect)));

//APP set
app.set('port', port);

app.listen(app.get('port'), () => {
  console.log(`[Running] - PORT: ${port}`);
});
