//APARTADO DE SCHEMAS DEL SWAGGER
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
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

/**
 * @swagger
 * components:
 *  schemas:
 *    Users-Register:
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
 *    Users-Login:
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
 *    Encuestas:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre o Titulo de la Encuesta
 *         periodo:
 *           type: string
 *           description: Periodo Academico
 *       required:
 *         -nombre
 *         -periodo
 *       example:
 *         nombre: Opiniones Estudiantiles
 *         periodo: 2023a
 *         open: true
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Encuestas-Delete:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Id de la encuesta a eliminar
 *       required:
 *         -id
 *       example:
 *         id: 234234234j23k4jk23
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Encuestas-Edit:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           description: Id del Objeto a Editar
 *         nombre:
 *           type: string
 *           description: Nombre o Titulo de la Encuesta
 *         open: 
 *           type: boolean
 *           description: Declara si esta abierto o no el form
 *         periodo:
 *           type: string
 *           description: Periodo Academico
 *       required:
 *         -nombre
 *         -id
 *         -open
 *         -periodo
 *       example:
 *         id: 234923rjf2ri
 *         nombre: Opiniones Estudiantiles
 *         open: true
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Preguntas:
 *       type: object
 *       properties:
 *         pregunta:
 *           type: string
 *           description: Texto o enunciado de la pregunta
 *         id_encuesta:
 *           type: string
 *           description: Id de la encuesta a la que pertenece
 *       required:
 *         -pregunta
 *         -id_encuesta
 *       example:
 *         pregunta: ¿Como te llamas?
 *         id_encuesta: 34fbh675655g
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Respuestas:
 *       type: object
 *       properties:
 *         id_encuesta:
 *           type: string
 *           description: Id de la encuesta a la que pertenece la respuesta
 *         id_pregunta:
 *           type: string
 *           description: Id de la pregunta a la que pertenece la respuesta
 *         id_usuario:
 *           type: string
 *           description: Id del usuario al cual pertenece la respuesta
 *         respuesta:
 *           type: string
 *           description: Respuesta del Usuario
 *       required:
 *         -id_encuesta
 *         -id_pregunta
 *         -id_usuario
 *         -respuesta
 *       example:
 *         id_encuesta: 641a37ea1753dbd2b79999b9
 *         id_pregunta: 641a37fb1753dbd2b79999bb
 *         id_usuario: 6419ff7a2b894018a12f0012 
 *         respuesta: Con respecto a este tema me encuentro a favor de lo opinado
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Crear-Relaciones:
 *       type: object
 *       properties:
 *         id_pregunta:
 *           type: string
 *           description: Id de la Pregunta
 *         id_encuesta:
 *           type: string
 *           description: Id de la encuesta a la que pertenece
 *       required:
 *         -id_pregunta
 *         -id_encuesta
 *       example:
 *         id_pregunta: 3452g4ggergb
 *         id_encuesta: 34fbh675655g
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

/**
 * @swagger
 * /CreateUser:
 *   post:
 *     summary: Crea un Nuevo Usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Users-Register'
 *     responses:
 *       200:
 *         description: Success New User!
 */

/**
 * @swagger
 * /LoginUser:
 *   post:
 *     summary: Login de Usuarios
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Users-Login'
 *     responses:
 *       200:
 *         description: Success New User!
 */

/**
 * @swagger
 * /CrearEncuesta:
 *   post:
 *     summary: Creacion de Encuestas
 *     tags: [Encuestas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Encuestas'
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success New Encuesta!
 */

/**
 * @swagger
 * /CrearPregunta:
 *   post:
 *     summary: Creacion de Preguntas
 *     tags: [Preguntas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Preguntas'
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success New Pregunta!
 */

/**
 * @swagger
 * /CrearRespuesta:
 *   post:
 *     summary: Creacion de Respuesta
 *     tags: [Respuestas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Respuestas'
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success New Respuesta!
 */

/**
 * @swagger
 * /MostrarEncuestas:
 *   get:
 *     summary: Retornar todos las encuestas
 *     tags: [Encuestas]
 *     responses:
 *       200:
 *         description: Todas las encuestas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Encuestas'
 *
 */

/**
 * @swagger
 * /FullData:
 *   get:
 *     summary: Retornar todos las encuestas
 *     tags: [Datos]
 *     responses:
 *       200:
 *         description: Retorna un objeto de datos completo
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Encuestas'
 *
 */

/**
 * @swagger
 * /DataFilter/{nombre}:
 *   get:
 *     summary: Retornar una encuesta
 *     parameters:
 *       - in: path
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de la encuesta que desea retornar
 *     tags: [Datos]
 *     responses:
 *       200:
 *         description: Retorna un objeto de datos filtrado por nombre
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Encuestas'
 *
 */

/**
 * @swagger
 * /EditarEncuesta:
 *   put:
 *     summary: Edicion de Encuestas
 *     tags: [Encuestas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Encuestas-Edit'
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success Edit Encuesta!
 */

/**
 * @swagger
 * /EliminarEncuesta:
 *   delete:
 *     summary: Eliminacion de Encuestas
 *     tags: [Encuestas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Encuestas-Delete'
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success Edit Encuesta!
 */

/**
 * @swagger
 * /EliminarPregunta:
 *   delete:
 *     summary: Eliminacion de Pregunta
 *     tags: [Preguntas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Encuestas-Delete'
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success Delete Pregunta!
 */

/**
 * @swagger
 * /EliminarRespuesta:
 *   delete:
 *     summary: Eliminacion de Respuesta
 *     tags: [Respuestas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Encuestas-Delete'
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success Delete Respuesta!
 */

/**
 * @swagger
 * /CrearRelacion:
 *   post:
 *     summary: Crear Relacion
 *     tags: [Relacion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Crear-Relaciones'
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success New Encuesta!
 */