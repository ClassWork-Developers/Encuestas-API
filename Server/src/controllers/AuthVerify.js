import { UsuariosModel } from '../Schemas/Usuarios.js';
import bcrypt from 'bcrypt';
import { SaltRounds } from '../index.js';
import jwt from 'jsonwebtoken';
import { token as jwt_hash } from '../index.js';

export async function AuthVerify(req, res) {
  const { correo, nombre, clave, icon } = req.body;

  let data = await UsuariosModel.find({ correo: correo });

  if (data.length == 0) {
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
    let resultado = await UsuariosModel.find({ correo: correo });
    if (resultado.length == 0) {
      res.send(false);
    } else {
      bcrypt.compare(clave, resultado[0].clave).then((resp) => {
        if (resp == true) {
          let token = jwt.sign({ nombre: nombre, exp: Date.now() + 60 * 50000 }, jwt_hash);
          res.json({
            nombre: nombre,
            token: token,
            status: true,
            icon: icon,
            id: resultado[0]._id,
          });
        } else {
          res.json({ status: false, token: null });
        }
      });
    }
  }
}
