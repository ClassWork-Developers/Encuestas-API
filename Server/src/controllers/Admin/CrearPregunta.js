import { PreguntasModel } from '../../Schemas/Preguntas.js';
import { RelacionModel } from '../../Schemas/Relacion.js';

export async function CrearPregunta(req, res) {
  const { array_preguntas, id_encuesta } = req.body;

  try {
    array_preguntas.forEach((element, index) => {
      let Pregunta = new PreguntasModel({
        pregunta: element.pregunta,
      });
      Pregunta.save()
        .then((response) => {
          let Relacion = new RelacionModel({
            id_pregunta: response._id,
            id_encuesta: id_encuesta,
          });
          Relacion.save()
        })
    })
    res.status(201).json({ r: true });
    } catch (err) {
    res.status(404).json({ msg: 'Ha ocurrido un error creando la pregunta, intentelo de nuevo. ' + err, r: false });
  }
}
