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
        .then(() => res.send(true))
        .catch((err) => {
          console.log(err);
          res.send(false);
        });
    } else {
      res.send(false);
    }
  } else {
    res.send(false);
  }
}
