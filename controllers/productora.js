const Productora = require('../models/productora')
const { request, response } = require('express')


/**
 * Crear productora
 */
const createProductora = async (req = request, res = response) => {// endpoint
    //console.log(req.body)
    const { nombre, descripcion} = req.body
    try {
        const productoraDB = await Productora.findOne({ nombre })

        if(ProductoraDB) {
            return res.status(400).json({mjs: 'Ya existe nombre'})
        }// select * from generos where nombre = ?
        
        const datos = {
            nombre,
            descripcion
        }
    
        const productora = new Productora(datos)
    
        await productora.save()
    
        return res.status(201).json(productora)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

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
module.exports = {
    createProductora
}