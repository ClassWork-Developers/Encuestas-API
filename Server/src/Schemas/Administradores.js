import mongoose from 'mongoose';

const administradores = mongoose.Schema({
    correo: String,
    nombre: String,
    clave: String,
    icon: String
})

export const AdministradoresModel = mongoose.model('Administradores', administradores)