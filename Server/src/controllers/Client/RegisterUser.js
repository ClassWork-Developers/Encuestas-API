import { UsuariosModel } from "../../Schemas/Usuarios.js";
import bcrypt from "bcrypt";
import { SaltRounds } from "../../index.js";
import jwt from "jsonwebtoken";
import { token as jwt_hash } from "../../index.js";

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
      .then((response) => {
        let token = jwt.sign(
          { nombre: nombre, exp: Date.now() + 60 * 50000 },
          jwt_hash
        );
        res.status(201).res.json({
          r: true,
          nombre: nombre,
          token: token,
          status: true,
          icon: icon,
          id: response._id,
        });
      })
      .catch((err) =>
        res
          .status(404)
          .json({
            msg:
              "Ha ocurrido un error registrandose, intentelo de nuevo. " + err,
            r: false,
          })
      );
    /* .then(() => res.status(201).json({r: true})) */
  } else {
    res.status(404).json({ msg: "Correo ya registrado", r: false });
  }
}
