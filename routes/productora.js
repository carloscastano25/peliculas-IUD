const {Router} = require ('express')
const {createProductora} = require('../controllers/productora')

const router = Router ()

/**
 * Crear productora
 */
router.post('/', createProductora)

/**
 * consultar todas las productoras
 */

/**
 * Consultar una productora por su ID
 */

/**
 * Actualizar productora
 */

/**
 * Borrar una productora
 */

module.exports = router