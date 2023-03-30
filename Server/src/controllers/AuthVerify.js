import { UsuariosModel } from '../../Schemas/Usuarios.js';
import { Create } from './Auth/Create.js';
import { Sesion } from './Auth/Sesion.js';

export async function AuthVerify(req, res) {
  const { correo, nombre, clave, icon } = req.body;

  await UsuariosModel.find({ correo: correo }).then((response) => {
    if (response.length == 0) {
      let resp = Create(correo, nombre, clave, icon);
      res.json(resp)
    } else {
      let resp = Sesion(correo, clave);
      res.json(resp)
    }
  });
}
