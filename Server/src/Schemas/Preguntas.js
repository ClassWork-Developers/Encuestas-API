import mongoose from 'mongoose';

const preguntas = mongoose.Schema({
  pregunta: String,
  id_encuesta: String,
});

export const PreguntasModel = mongoose.model('Preguntas', preguntas);
