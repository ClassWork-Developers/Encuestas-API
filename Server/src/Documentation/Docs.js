//APARTADO DE SCHEMAS DEL SWAGGER

/**
 * @swagger
 * components:
 *  schemas:
 *    Usuarios-Register:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre del Usuario
 *         correo:
 *           type: string
 *           description: Correo del Usuario
 *         clave:
 *           type: string
 *           description: Clave del Usuario
 *         icon:
 *           type: string
 *           description: Icono del Usuario
 *       required:
 *         -nombre
 *         -clave
 *         -icon
 *       example:
 *         nombre: DarkKevo
 *         correo: DarkKevo@gmail.com
 *         clave: my-secret-password-encrypted
 *         icon: www.my-logo-user
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Usuarios-Login:
 *       type: object
 *       properties:
 *         correo:
 *           type: string
 *           description: Correo del Usuario
 *         clave:
 *           type: string
 *           description: Clave del Usuario
 *       required:
 *         -correo
 *         -clave
 *       example:
 *         correo: DarkKevo@gmail.com
 *         clave: my-secret-password-encrypted
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Admins-Register:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre del Admin
 *         correo:
 *           type: string
 *           description: Correo del Admin
 *         clave:
 *           type: string
 *           description: Clave del Admin
 *         icon:
 *           type: string
 *           description: Icono del Admin
 *         special_code:
 *           type: string
 *           description: Clave Especial de Creacion de Administrador
 *       required:
 *         -nombre
 *         -clave
 *         -icon
 *         -special_code
 *       example:
 *         nombre: DarkKevo
 *         correo: DarkKevo@gmail.com
 *         clave: my-secret-password-encrypted
 *         icon: www.my-logo-user
 *         special_code: secret.developer.code
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Admins-Login:
 *       type: object
 *       properties:
 *         correo:
 *           type: string
 *           description: Correo del Admin
 *         clave:
 *           type: string
 *           description: Clave del Admin
 *       required:
 *         -correo
 *         -clave
 *       example:
 *         correo: DarkKevo@gmail.com
 *         clave: my-secret-password-encrypted
 */


//APARTADO DE DOCUMENTACION POR RUTA

