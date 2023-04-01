import { AdministradoresModel } from '../../Schemas/Administradores.js';
import { password } from '../../index.js';
import bcrypt from 'bcrypt';
import { SaltRounds } from '../../index.js';
import jwt from 'jsonwebtoken';
import { token as jwt_hash } from '../../index.js';

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
        .then((response) => {
          let token = jwt.sign({ nombre: nombre, exp: Date.now() + 60 * 50000 }, jwt_hash);
          res.json({
            nombre: nombre,
            token: token,
            status: true,
            icon: icon,
            id: response._id,
          });
        })
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
