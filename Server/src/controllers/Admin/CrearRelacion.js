import { RelacionModel } from '../../Schemas/Relacion.js';

export async function CrearRelacion(req, res) {
  const { id_pregunta, id_encuesta } = req.body;

  let Relacion = new RelacionModel({
    id_pregunta: id_pregunta,
    id_encuesta: id_encuesta,
  });

  Relacion.save()
    .then((response) => {
      res.status(201).json({r: true});
    })
    .catch((err) => res.status(404).json({msg: 'Ha ocurrido un error creando la relación pregunta-encuesta, intentelo de nuevo. ' + err, r: false}));
}
