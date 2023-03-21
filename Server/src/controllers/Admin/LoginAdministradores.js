import { AdministradoresModel } from '../../Schemas/Administradores.js';

export async function LoginAdmin (req, res) {
  const { correo, clave } = req.body;
  let resultado = await AdministradoresModel.find({ correo: correo, clave: clave });
  if (resultado.length == 0) {
    res.send(false)
  } else {
    res.send(true);
  }
}
