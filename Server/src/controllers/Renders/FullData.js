import { EncuestasModel } from '../../Schemas/Encuestas.js';
import { PreguntasModel } from '../../Schemas/Preguntas.js';
import { RespuestasModel } from '../../Schemas/Respuestas.js';
import { RelacionModel } from '../../Schemas/Relacion.js';

export async function FullData(req, res) {
  let encuestas = await EncuestasModel.find();
  let relacion = await RelacionModel.find();
  let preguntas = await PreguntasModel.find();
  let respuestas = await RespuestasModel.find();
  let FullData = {
    Encuestas: [],
  };
  for (let index = 0; index < encuestas.length; index++) {
    FullData.Encuestas.push({
      id: encuestas[index]._id,
      propietario: encuestas[index].propietario,
      nombre: encuestas[index].nombre,
      descripcion: encuestas[index].descripcion,
      preguntas: [],
    });
  }
  for (let i = 0; i < FullData.Encuestas.length; i++) {
    for (let y = 0; y < relacion.length; y++) {
      if (FullData.Encuestas[i].id == relacion[y].id_encuesta) {
        for (let q = 0; q < preguntas.length; q++) {
          if (preguntas[q]._id == relacion[y].id_pregunta) {
            let obj = {
              id: preguntas[q]._id,
              pregunta: preguntas[q].pregunta,
              respuestas: [],
            };
            FullData.Encuestas[i].preguntas.push(obj);
          }
        }
      }
    }
  }

  for (let e = 0; e < FullData.Encuestas.length; e++) {
    for (let r = 0; r < FullData.Encuestas[e].preguntas.length; r++) {
      for (let t = 0; t < respuestas.length; t++) {
        if (FullData.Encuestas[e].preguntas[r].id == respuestas[t].id_pregunta && FullData.Encuestas[e].id == respuestas[t].id_encuesta) {
          FullData.Encuestas[e].preguntas[r].respuestas.push(respuestas[t]);
        }
      }
    }
  }

  res.json(FullData);
}
