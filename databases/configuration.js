const mongoose = require('mongoose')


const mongoConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {

        })
        console.log('Conexion ok')
    } catch (e) {
        console.log('Error de conexion', e)
        throw new Error('Error de conexion')
    }
    
}

module.exports = {mongoConn}