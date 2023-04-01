import { AdministradoresModel } from '../../Schemas/Administradores.js';
import { password } from '../../index.js';
import bcrypt from 'bcrypt';
import { SaltRounds } from '../../index.js';

export async function CrearAdmin(req, res) {
  const { correo, nombre, clave, icon, clave_especial } = req.body;
  let verify = await AdministradoresModel.find({ correo: correo });
  if (verify.length == 0) {
    if (clave_especial == password) {
      var Encripted_password = bcrypt.hashSync(clave, parseInt(SaltRounds));

      const Administrador = new AdministradoresModel({
        correo: correo,
        nombre: nombre,
        clave: Encripted_password,
        icon: icon,
      });
      await Administrador.save()
      .then(() => res.status(201).json({r: true}))
      .catch((err) => res.status(404).json({msg: 'Ha ocurrido un error registrando el profesor, intentelo de nuevo. ' + err, r: false}))
    } else {
      res.status(401).json({msg: 'Compruebe la clave especial', r: false})
    }
  } else {
    res.status(404).json({msg: 'Correo ya registrado', r: false});
  }
}
