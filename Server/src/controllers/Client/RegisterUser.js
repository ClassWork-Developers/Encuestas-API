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
      .then(() => res.send(true))
      .catch((err) => {
        console.log(err);
        res.send(false);
      });
  } else {
    res.send(false);
  }
}
