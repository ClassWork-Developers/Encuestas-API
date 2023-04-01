import { EncuestasModel } from '../../Schemas/Encuestas.js';
import { PreguntasModel } from '../../Schemas/Preguntas.js';
import { RespuestasModel } from '../../Schemas/Respuestas.js';

export async function EliminarEncuesta(req, res) {
  const { id } = req.body;
  let preguntas = await PreguntasModel.find({ id_encuesta: id });
  let respuestas = await RespuestasModel.find({ id_encuesta: id });

  preguntas.forEach(async (obj) => {
    await PreguntasModel.findByIdAndDelete(obj._id);
  });

  respuestas.forEach(async (obj) => {
    await RespuestasModel.findByIdAndDelete(obj._id);
  });

  await EncuestasModel.findByIdAndDelete(id)
    .then(() => res.status(201).json({r: true}))
    .catch((err) => res.status(404).json({msg: 'Ha ocurrido un error eliminando la encuesta, intentelo de nuevo. ' + err, r: false}))
}
