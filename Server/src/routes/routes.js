import Express from 'express';

//IMPORTACION DE FUNCIONES
import { CrearAdmin } from '../controllers/Admin/RegistrarAdministrador.js';
import { LoginAdmin } from '../controllers/Admin/LoginAdministradores.js';
import { CrearUser } from '../controllers/Client/RegisterUser.js';
import { LoginUser } from '../controllers/Client/LoginUser.js';

//ROUTING
export const routes = Express.Router();

routes.post('/CrearAdmin', CrearAdmin, (req, res) => {
  //Create a new Admin
});

routes.post('/LoginAdmin', LoginAdmin, (req, res) => {
  //Login Admin
});

routes.post('/CreateUser', CrearUser, (req, res) => {
  //Create a new User
});

routes.post('/LoginUser', LoginUser, (req, res) => {
  //Login User
});
