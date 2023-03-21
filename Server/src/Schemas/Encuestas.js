import mongoose from 'mongoose';

const encuestas = mongoose.Schema({
  nombre: String,
});

export const EncuestasModel = mongoose.model('Encuestas', encuestas);
