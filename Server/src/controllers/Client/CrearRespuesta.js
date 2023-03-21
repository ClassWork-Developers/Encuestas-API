import { RespuestasModel } from '../../Schemas/Respuestas.js';

export async function CrearRespuesta(req, res) {
  const { id_encuesta, id_pregunta, id_usuario, respuesta } = req.body;

  let Respuesta = new RespuestasModel({
    id_encuesta: id_encuesta,
    id_pregunta: id_pregunta,
    id_usuario: id_usuario,
    respuesta: respuesta,
  });

  Respuesta.save()
    .then(() => res.send(true))
    .catch(() => res.send(false));
}
