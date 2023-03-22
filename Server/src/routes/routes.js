import Express from 'express';

//IMPORTACION DE FUNCIONES

//LOGINS-REGISTERS
import { CrearAdmin } from '../controllers/Admin/RegistrarAdministrador.js';
import { LoginAdmin } from '../controllers/Admin/LoginAdministradores.js';
import { CrearUser } from '../controllers/Client/RegisterUser.js';
import { LoginUser } from '../controllers/Client/LoginUser.js';

//FUNCIONES
import { CrearEncuesta } from '../controllers/Admin/CrearEncuesta.js';
import { CrearPregunta } from '../controllers/Admin/CrearPregunta.js';
import { CrearRespuesta } from '../controllers/Client/CrearRespuesta.js';
import { MostrarEncuestas } from '../controllers/Renders/MostrarEncuestas.js';
import { FullData } from '../controllers/Renders/FullData.js';
import { DataFilter } from '../controllers/Renders/DataFilter.js';
import { EditarEncuesta } from '../controllers/Admin/EditarEncuesta.js';
import { EliminarEncuesta } from '../controllers/Admin/EliminarEncuesta.js'
import { EliminarPregunta } from '../controllers/Admin/EliminarPregunta.js';
import { EliminarRespuesta } from '../controllers/Admin/EliminarRespuesta.js';

//ROUTING
export const routes = Express.Router();

//RUTAS POST

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

//RUTAS GET

routes.get('/MostrarEncuestas', MostrarEncuestas, (req, res) => {
  //Mostrar Encuestas
});

routes.get('/FullData', FullData, (req, res) => {
  //Mostrar Full Data
});

routes.get('/DataFilter/:nombre', DataFilter, (req, res) => {
  //Mostrar Datos Filtrados
});

routes.put('/EditarEncuesta', EditarEncuesta, (req, res) => {
  //Editar Encuesta
});

routes.delete('/EliminarEncuesta', EliminarEncuesta, (req, res) => {
  //Eliminar Encuesta
});

routes.delete('/EliminarPregunta', EliminarPregunta, (req, res) => {
  //Eliminar Pregunta
});

routes.delete('/EliminarRespuesta', EliminarRespuesta, (req, res) => {
  //Eliminar Respuesta
});
