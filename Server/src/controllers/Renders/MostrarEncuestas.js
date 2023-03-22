import { EncuestasModel } from '../../Schemas/Encuestas.js';

export async function MostrarEncuestas(req, res) {
  await EncuestasModel.find()
    .then((response) => res.send(response))
    .catch((err) => res.send(false));
}
