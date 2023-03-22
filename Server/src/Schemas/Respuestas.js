import mongoose from 'mongoose';

const respuestas = mongoose.Schema({
  id_pregunta: String,
  id_encuesta: String,
  id_usuario: String,
  nombre: String,
  icon: String,
  respuesta: String,
});

export const RespuestasModel = mongoose.model('Respuestas', respuestas);
