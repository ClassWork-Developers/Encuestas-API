import { PreguntasModel } from '../../Schemas/Preguntas.js';
import { RespuestasModel } from '../../Schemas/Respuestas.js';

export async function EliminarPregunta(req, res) {
  const { id } = req.body;
  let respuestas = await RespuestasModel.find({ id_pregunta: id });

  respuestas.forEach(async (obj) => {
    await RespuestasModel.findByIdAndDelete(obj._id);
  });

  await PreguntasModel.findByIdAndDelete(id)
  .then(() => res.status(201).json({r: true}))
  .catch((err) => res.status(404).json({msg: 'Ha ocurrido un error eliminando la pregunta, intentelo de nuevo. ' + err, r: false}))
}
