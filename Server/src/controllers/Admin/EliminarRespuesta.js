import { RespuestasModel } from '../../Schemas/Respuestas.js';

export async function EliminarRespuesta(req, res) {
  const { id } = req.body;
  await RespuestasModel.findByIdAndDelete(id)
  .then(() => res.status(201).json({r: true}))
  .catch((err) => res.status(404).json({msg: 'Ha ocurrido un error eliminando la respuesta, intentelo de nuevo. ' + err, r: false}))
}
