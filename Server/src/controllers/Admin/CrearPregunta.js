import { PreguntasModel } from '../../Schemas/Preguntas.js';
import { RelacionModel } from '../../Schemas/Relacion.js';

export async function CrearPregunta(req, res) {
  const { pregunta, id_encuesta } = req.body;

  let Pregunta = new PreguntasModel({
    pregunta: pregunta,
  });

  Pregunta.save()
    .then((response) => {
      res.status(201).json({ data: {status: true, id_pregunta: response._id, id_encuesta: response.id_encuesta}, r: true });
      let Relacion = new RelacionModel({
        id_pregunta: response._id,
        id_encuesta: id_encuesta,
      });
      Relacion.save().then((res) => {
        let obj = { status: true, id_: res._id };
        console.log(obj);
      });
    })
    .catch((err) => res.status(404).json({msg: 'Ha ocurrido un error creando la pregunta, intentelo de nuevo. ' + err, r: false}));
}