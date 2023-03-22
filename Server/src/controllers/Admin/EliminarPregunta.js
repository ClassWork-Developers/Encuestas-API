import { PreguntasModel } from '../../Schemas/Preguntas.js';
import { RespuestasModel } from '../../Schemas/Respuestas.js';

export async function EliminarPregunta(req, res) {
  const { id } = req.body;
  let respuestas = await RespuestasModel.find({ id_pregunta: id });

  respuestas.forEach(async (obj) => {
    await RespuestasModel.findByIdAndDelete(obj._id);
  });

  await PreguntasModel.findByIdAndDelete(id)
    .then(() => res.send(true))
    .catch((err) => {
      res.send(false);
    });
}
