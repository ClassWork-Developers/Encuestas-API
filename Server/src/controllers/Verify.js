import jwt from 'jsonwebtoken';
import { token as jwt_hash } from '../index.js';

export function verify(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        auth: false,
        err: 'No se envió el Token'
      });
    };
    const decodificado = jwt.verify(token, jwt_hash);
    
    console.log(decodificado)
    if (Date.now() > decodificado.exp) {
      res.status(401).json({ msg: 'El tiempo del token ya expiró', r: false});
    } else {
      req.userid = decodificado.id;
      next();
    }
  } catch (error) {
    res.status(401).json({ msg: 'No se ha recibido el token', r: false})
  }
}