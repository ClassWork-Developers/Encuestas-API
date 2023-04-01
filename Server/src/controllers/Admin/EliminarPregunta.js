import { RelacionModel } from '../../Schemas/Relacion.js';
import { RespuestasModel } from '../../Schemas/Respuestas.js';

export async function EliminarPregunta(req, res) {
  const { id, id_encuesta } = req.body;

  let relaciones = await RelacionModel.find({ id_pregunta: id, id_encuesta: id_encuesta });

  let respuestas = await RespuestasModel.find({ id_encuesta: id_encuesta, id_pregunta: id });

  respuestas.forEach(async (obj) => {
    await RespuestasModel.findByIdAndDelete(obj._id);
  });

  await RelacionModel.findByIdAndDelete(relaciones[0]._id)
    .then(() => res.status(201).json({ r: true }))
    .catch((err) => res.status(404).json({ msg: 'Ha ocurrido un error eliminando la pregunta, intentelo de nuevo. ' + err, r: false }));
}
