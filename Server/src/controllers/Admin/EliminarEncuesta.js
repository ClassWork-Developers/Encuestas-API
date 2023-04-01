import { EncuestasModel } from '../../Schemas/Encuestas.js';
import { RelacionModel } from '../../Schemas/Relacion.js';
import { RespuestasModel } from '../../Schemas/Respuestas.js';

export async function EliminarEncuesta(req, res) {
  const { id } = req.body;

  let relaciones = await RelacionModel.find({ id_encuesta: id });
  let respuestas = await RespuestasModel.find({ id_encuesta: id });

  relaciones.forEach(async (obj) => {
    await RelacionModel.findByIdAndDelete(obj._id);
  });

  respuestas.forEach(async (obj) => {
    await RespuestasModel.findByIdAndDelete(obj._id);
  });

  await EncuestasModel.findByIdAndDelete(id)
    .then(() => res.status(201).json({ r: true }))
    .catch((err) => res.status(404).json({ msg: 'Ha ocurrido un error eliminando la encuesta, intentelo de nuevo. ' + err, r: false }));
}
