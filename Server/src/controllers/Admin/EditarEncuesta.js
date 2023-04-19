import { EncuestasModel } from '../../Schemas/Encuestas.js';

export function EditarEncuesta(req, res) {
  const { id, propietario ,nombre, descripcion, open, tema, periodo } = req.body;
  EncuestasModel.updateOne(
    { _id: id },
    {
      $set: {
        propietario: propietario,
        nombre: nombre,
        descripcion: descripcion,
        open: open,
        tema: tema,
        periodo: periodo,
      },
    }
  )
    .then(() => res.status(201).json({ r: true }))
    .catch((err) => res.status(404).json({ msg: 'Ha ocurrido un error editando la encuesta, intentelo de nuevo. ' + err, r: false }));
}
