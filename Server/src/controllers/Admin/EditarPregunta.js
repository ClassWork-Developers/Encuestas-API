import { PreguntasModel } from '../../Schemas/Preguntas.js';

export function EditarPregunta(req, res) {
  const { id, pregunta } = req.body;
  PreguntasModel.updateOne(
    { _id: id },
    {
      $set: {
        pregunta: pregunta,
      },
    }
  )
    .then(() => res.send(true))
    .catch((err) => {
      console.log(err);
      res.send(false);
    });
}
