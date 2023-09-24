const Media = require('../models/media')
const { request, response } = require('express')


/**
 * Crear media
 */
const createMedia = async (req = request, res = response) => {// endpoint
    //console.log(req.body)
    const { titulo, sinopsis} = req.body
    try {
        const mediaDB = await Media.findOne({ titulo })

        if(mediaDB) {
            return res.status(400).json({mjs: 'Ya existe titulo'})
        }// select * from generos where nombre = ?
        
        const datos = {
            titulo,
            sinopsis
        }
    
        const media = new Media(datos)
    
        await media.save()
    
        return res.status(201).json(media)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

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
module.exports = {
    createMedia
}