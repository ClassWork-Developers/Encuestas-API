import { PreguntasModel } from '../../Schemas/Preguntas.js';

export function EditarPregunta(req, res) {
  const { id, pregunta, vof } = req.body;
  PreguntasModel.updateOne(
    { _id: id },
    {
      $set: {
        pregunta: pregunta,
        vof: vof,
      },
    }
  )
  .then(() => res.status(201).json({r: true}))
  .catch((err) => res.status(404).json({msg: 'Ha ocurrido un error editando la pregunta, intentelo de nuevo. ' + err, r: false}))
}
