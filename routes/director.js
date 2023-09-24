const {Router} = require ('express')
const {createDirector} = require('../controllers/director')

const router = Router ()

/**
 * Crear director
 */
router.post('/', createDirector)

/**
 * consultar todos los directores
 */

/**
 * Consultar un director por su ID
 */

/**
 * Actualizar director
 */

/**
 * Borrar un director
 */

module.exports = router