import { UsuariosModel } from '../../Schemas/Usuarios.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { token as jwt_hash } from '../../index.js';

export async function LoginUser(req, res) {
  const { correo, clave } = req.body;
  let resultado = await UsuariosModel.find({ correo: correo });
  if (resultado.length == 0) {
    res.send(false);
  } else {
    bcrypt.compare(clave, resultado[0].clave).then((resp) => {
      if (resp == true) {
        let token = jwt.sign({ nombre: resultado[0].nombre, exp: Date.now() + 60 * 50000 }, jwt_hash);
        res.json({
          nombre: resultado[0].nombre,
          token: token,
          status: true,
          icon: resultado[0].icon,
          id: resultado[0]._id,
        });
      } else {
        res.json({ status: false, token: null });
      }
    });
  }
}
