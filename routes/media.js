const {Router} = require ('express')
const {createMedia} = require('../controllers/media')

const router = Router ()

/**
 * Crear contenido
 */
router.post('/', createMedia)

/**
 * consultar todos los contenidos
 */

/**
 * Consultar un contenido por su ID
 */

/**
 * Actualizar contenido
 */

/**
 * Borrar un contenido
 */

module.exports = router