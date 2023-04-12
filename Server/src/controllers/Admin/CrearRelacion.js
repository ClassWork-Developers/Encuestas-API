import { RelacionModel } from '../../Schemas/Relacion.js';

export async function CrearRelacion(req, res) {
  // const { id_pregunta, id_encuesta } = req.body;
  const { relaciones, id_encuesta } = req.body;

  var target = relaciones.length - 1;

  relaciones.forEach((element, index) => {
    let Relacion = new RelacionModel({
      id_pregunta: element.id,
      id_encuesta: id_encuesta,
    });

    if (index == target) {
      Relacion.save()
        .then((response) => {
          console.log(response);
          res.status(201).json({ r: true });
        })
        .catch((err) => {
          console.log(err);
          res.status(404).json({ msg: 'Ha ocurrido un error creando la relación pregunta-encuesta, intentelo de nuevo. ' + err, r: false });
        });
    } else {
      Relacion.save().then((response) => {
        console.log(response);
      });
    }
  });
}
