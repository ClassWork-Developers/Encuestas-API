import { EncuestasModel } from '../../Schemas/Encuestas.js';

export async function MostrarEncuestas(req, res) {
  await EncuestasModel.find()
  .then((response) => res.status(201).json({data: response, r: true}))
  .catch((err) => res.status(404).json({msg: 'Ha ocurrido un error consultando las encuestas, intentelo de nuevo. ' + err, r: false}))
}
