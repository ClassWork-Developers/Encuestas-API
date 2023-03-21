import Express from 'express';

//IMPORTACION DE FUNCIONES

//LOGINS-REGISTERS
import { CrearAdmin } from '../controllers/Admin/RegistrarAdministrador.js';
import { LoginAdmin } from '../controllers/Admin/LoginAdministradores.js';
import { CrearUser } from '../controllers/Client/RegisterUser.js';
import { LoginUser } from '../controllers/Client/LoginUser.js';

//FUNCIONES
import { CrearEncuesta } from '../controllers/Admin/CrearEncuesta.js';
import { CrearPregunta } from '../controllers/Admin/CrearPregunta.js'
import { CrearRespuesta } from '../controllers/Client/CrearRespuesta.js'

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

routes.post('/CrearEncuesta', CrearEncuesta, (req, res) => {
  //Crear una Encuesta
});

routes.post('/CrearPregunta', CrearPregunta, (req, res) => {
  //Crear una Pregunta en una Encuesta
});

routes.post('/CrearRespuesta', CrearRespuesta, (req, res) => {
  //Crear una Respuesta en una Encuesta
});
