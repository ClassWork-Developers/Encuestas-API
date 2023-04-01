import { RespuestasModel } from '../../Schemas/Respuestas.js';

export async function CrearRespuesta(req, res) {
  const { id_encuesta, id_pregunta, id_usuario, nombre, icon, respuesta } = req.body;

  let Respuesta = new RespuestasModel({
    id_encuesta: id_encuesta,
    id_pregunta: id_pregunta,
    id_usuario: id_usuario,
    nombre: nombre,
    icon: icon,
    respuesta: respuesta,
  });

  Respuesta.save()
  .then(() => res.status(201).json({r: true}))
  .catch((err) => res.status(404).json({msg: 'Ha ocurrido un error registrando la respuesta, intentelo de nuevo. ' + err, r: false}))
}
