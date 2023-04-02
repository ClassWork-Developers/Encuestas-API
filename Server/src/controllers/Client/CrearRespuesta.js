import { RespuestasModel } from '../../Schemas/Respuestas.js';

export async function CrearRespuesta(req, res) {
  const { id_encuesta, id_usuario, respuestas } = req.body;

  try {
    respuestas.forEach((element, index) => {
      let Respuesta = new RespuestasModel({
        id_encuesta: id_encuesta,
        id_pregunta: element.id,
        id_usuario: id_usuario,
        respuesta: element.respuesta,
      });
      Respuesta.save()
    })
    res.status(201).json({r: true})
  } catch (err) {
    res.status(404).json({msg: 'Ha ocurrido un error registrando la respuesta, intentelo de nuevo. ' + err, r: false})
  }
}
