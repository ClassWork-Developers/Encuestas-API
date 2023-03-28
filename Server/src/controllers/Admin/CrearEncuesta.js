import { EncuestasModel } from '../../Schemas/Encuestas.js';

export async function CrearEncuesta(req, res) {
  const { nombre, periodo } = req.body;

  let Encuesta = new EncuestasModel({
    nombre: nombre,
    open: true,
    periodo: periodo
  });

  Encuesta.save()
    .then((response) => res.json({ status: true, id: response._id }))
    .catch(() => res.send(false));
}
