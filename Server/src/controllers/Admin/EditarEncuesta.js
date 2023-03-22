import { EncuestasModel } from '../../Schemas/Encuestas.js';

export function EditarEncuesta(req, res) {
  const { id, nombre } = req.body;
  EncuestasModel.updateOne(
    { _id: id },
    {
      $set: {
        nombre: nombre,
      },
    }
  )
    .then(() => res.send(true))
    .catch((err) => {
      console.log(err);
      res.send(false);
    });
}
