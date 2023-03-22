import { RespuestasModel } from '../../Schemas/Respuestas.js';

export async function EliminarRespuesta(req, res) {
  const { id } = req.body;
  await RespuestasModel.findByIdAndDelete(id)
    .then(() => res.send(true))
    .catch((err) => {
      res.send(false);
    });
}
