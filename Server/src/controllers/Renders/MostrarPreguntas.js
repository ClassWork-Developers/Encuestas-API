import { PreguntasModel } from "../../Schemas/Preguntas.js";

export async function MostrarPreguntas(req, res) {
  await PreguntasModel.find()
    .then((response) => res.send(response))
    .catch((err) => res.send(false));
}
