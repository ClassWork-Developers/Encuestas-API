import Express from 'express';

//IMPORTACION DE FUNCIONES
import { CrearAdmin } from '../controllers/Admin/RegistrarUsuario.js';
import { LoginAdmin } from '../controllers/Admin/LoginAdministradores.js';

//ROUTING
export const routes = Express.Router();

routes.post('/CrearAdmin', CrearAdmin, (req, res) => {
  //Create a new User
});

routes.post('/LoginAdmin', LoginAdmin, (req, res) => {
  //Login Admin
});
