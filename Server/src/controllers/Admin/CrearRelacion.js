import { RelacionModel } from '../../Schemas/Relacion.js';

export async function CrearRelacion(req, res) {
  const { id_pregunta, id_encuesta } = req.body;

  let Relacion = new RelacionModel({
    id_pregunta: id_pregunta,
    id_encuesta: id_encuesta,
  });

  Relacion.save()
    .then((response) => {
      res.send(true);
    })
    .catch((err) => {
      console.log(err);
      res.send(false);
    });
}
