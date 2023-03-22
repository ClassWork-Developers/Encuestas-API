import { EncuestasModel } from '../../Schemas/Encuestas.js';
import { PreguntasModel } from '../../Schemas/Preguntas.js';
import { RespuestasModel } from '../../Schemas/Respuestas.js';

export async function FullData(req, res) {
  let encuestas = await EncuestasModel.find();
  let preguntas = await PreguntasModel.find();
  let respuestas = await RespuestasModel.find();
  let FullData = {
    Encuestas: [],
  };
  for (let index = 0; index < encuestas.length; index++) {
    FullData.Encuestas.push({
      id: encuestas[index]._id,
      nombre: encuestas[index].nombre,
      preguntas: [],
    });
  }
  for (let i = 0; i < FullData.Encuestas.length; i++) {
    for (let j = 0; j < preguntas.length; j++) {
      if (FullData.Encuestas[i].id == preguntas[j].id_encuesta) {
        FullData.Encuestas[i].preguntas.push({
          id: preguntas[j]._id,
          pregunta: preguntas[j].pregunta,
          id_encuesta: preguntas[j].id_encuesta,
          respuestas: [],
        });
      }
    }
  }
  for (let q = 0; q < FullData.Encuestas.length; q++) {
    for (let w = 0; w < FullData.Encuestas[q].preguntas.length; w++) {
      for (let e = 0; e < respuestas.length; e++) {
        if (FullData.Encuestas[q].preguntas[w].id == respuestas[e].id_pregunta) {
          FullData.Encuestas[q].preguntas[w].respuestas.push(respuestas[e]);
        }
      }
    }
  }
  res.json(FullData);
}
