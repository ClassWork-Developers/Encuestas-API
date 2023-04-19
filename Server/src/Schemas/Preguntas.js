import mongoose from 'mongoose';

const preguntas = mongoose.Schema({
  pregunta: String,
  vof: Boolean,
});

export const PreguntasModel = mongoose.model('Preguntas', preguntas);
