import mongoose from 'mongoose';

const usuarios = mongoose.Schema({
  correo: String,
  nombre: String,
  clave: String,
  icon: String,
});

export const UsuariosModel = mongoose.model('Usuarios', usuarios);
