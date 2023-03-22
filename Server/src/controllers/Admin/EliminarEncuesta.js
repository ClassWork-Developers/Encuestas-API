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
    .then(() => res.send(true))
    .catch((err) => {
      res.send(false);
    });
}
