const {Router} = require ('express')
const {createTipo} = require('../controllers/tipo')

const router = Router ()

/**
 * Crear tipo
 */
router.post('/', createTipo)

/**
 * consultar todos los tipos
 */

/**
 * Consultar un tipo por su ID
 */

/**
 * Actualizar tipo
 */

/**
 * Borrar un tipo
 */

module.exports = router