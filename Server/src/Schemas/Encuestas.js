import mongoose from 'mongoose';

const encuestas = mongoose.Schema({
  propietario: String,
  nombre: String,
  descripcion: String,
  open: Boolean,
  tema: String,
  periodo: String,
});

export const EncuestasModel = mongoose.model('Encuestas', encuestas);
