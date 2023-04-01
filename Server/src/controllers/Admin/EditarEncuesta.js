import { EncuestasModel } from '../../Schemas/Encuestas.js';

export function EditarEncuesta(req, res) {
  const { id, nombre, open, periodo } = req.body;
  EncuestasModel.updateOne(
    { _id: id },
    {
      $set: {
        nombre: nombre,
        open: open,
        periodo: periodo,
      },
    }
  )
    .then(() => res.status(201).json({r: true}))
    .catch((err) => res.status(404).json({msg: 'Ha ocurrido un error editando la encuesta, intentelo de nuevo. ' + err, r: false}))
}
