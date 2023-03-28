import mongoose from 'mongoose';

const relacion = mongoose.Schema({
  id_pregunta: String,
  id_encuesta: String,
});

export const RelacionModel = mongoose.model('Relacion', relacion);
