import { PreguntasModel } from '../../Schemas/Preguntas.js';

export async function CrearPregunta(req, res) {
  const { pregunta, id_encuesta } = req.body;

  let Pregunta = new PreguntasModel({
    pregunta: pregunta,
    id_encuesta: id_encuesta,
  });

  Pregunta.save()
    .then((response) => res.json({ status: true, id_pregunta: response._id, id_encuesta: response.id_encuesta }))
    .catch(() => res.send(false));
}
