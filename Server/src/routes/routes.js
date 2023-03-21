import Express from 'express';

//IMPORTACION DE FUNCIONES
import { CrearUsuario } from '../controllers/Client/RegistrarUsuario.js';

//ROUTING
export const routes = Express.Router();


routes.post('/CrearUsuario', CrearUsuario, (req, res) => {
  //Create a new User
});
