import { UsuariosModel } from '../../Schemas/Usuarios.js';
import bcrypt from 'bcrypt';
import { SaltRounds } from '../../index.js';

export async function CrearUser(req, res) {
  const { correo, nombre, clave, icon } = req.body;
  let verify = await UsuariosModel.find({ correo: correo });
  if (verify.length == 0) {
    var Encripted_password = bcrypt.hashSync(clave, parseInt(SaltRounds));
    const Usuario = new UsuariosModel({
      correo: correo,
      nombre: nombre,
      clave: Encripted_password,
      icon: icon,
    });
    await Usuario.save()
    .then(() => res.status(201).json({r: true}))
    .catch((err) => res.status(404).json({msg: 'Ha ocurrido un error registrandose, intentelo de nuevo. ' + err, r: false}))
  } else {
    res.status(404).json({msg: 'Correo ya registrado', r: false});
  }
}
