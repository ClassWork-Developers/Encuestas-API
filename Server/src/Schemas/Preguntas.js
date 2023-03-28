import mongoose from 'mongoose';

const preguntas = mongoose.Schema({
  pregunta: String,
});

export const PreguntasModel = mongoose.model('Preguntas', preguntas);
