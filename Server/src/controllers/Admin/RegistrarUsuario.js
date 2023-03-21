import { AdministradoresModel } from '../../Schemas/Administradores.js';
import { password } from '../../index.js';

export async function CrearAdmin(req, res) {
  const { correo, nombre, clave, icon, clave_especial } = req.body;
  if (clave_especial == password) {
    const Administrador = new AdministradoresModel({
      correo: correo,
      nombre: nombre,
      clave: clave,
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
}
