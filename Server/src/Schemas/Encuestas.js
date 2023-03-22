import mongoose from 'mongoose';

const encuestas = mongoose.Schema({
  nombre: String,
  open: Boolean
});

export const EncuestasModel = mongoose.model('Encuestas', encuestas);
