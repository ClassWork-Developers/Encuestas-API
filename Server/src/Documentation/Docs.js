//APARTADO DE SCHEMAS DEL SWAGGER

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
 *         clave_especial:
 *           type: string
 *           description: Clave Especial de Creacion de Administrador
 *       required:
 *         -nombre
 *         -clave
 *         -icon
 *         -clave_especial
 *       example:
 *         nombre: DarkKevo
 *         correo: DarkKevo@gmail.com
 *         clave: my-secret-password-encrypted
 *         icon: www.my-logo-user
 *         clave_especial: my-secret-developers-administrator
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

/**
 * @swagger
 * /CrearAdmin:
 *   post:
 *     summary: Crea un Nuevo Administrador
 *     tags: [Administradores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Admins-Register'
 *     responses:
 *       200:
 *         description: Success New Admin!
 */

/**
 * @swagger
 * /LoginAdmin:
 *   post:
 *     summary: Login de Administrador
 *     tags: [Administradores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Admins-Login'
 *     responses:
 *       200:
 *         description: Success New Admin!
 */
