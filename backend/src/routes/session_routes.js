const express = require('express');
const conexion = require('../connection')
const router  = express.Router();

router.post('/', (req, res) =>{

    if ( req.body.user === 'pepe' && req.body.password === '123456' ){
        
        req.session.user = 'pepe';

        res.json(
            {
                status     : 'ok',
                message    : 'sesión iniciada',
                loggedUser : {
                                id     : 1,
                                nombre : 'Gabriel'
                             }
            }
        )
    }
    else{
        res.json(
            {
                status  : 'error',
                message : 'Usuario y/o contraseña no validos'
            }
        );
    }
})

router.delete('/', (req, res) => {
    req.session.destroy( err =>{
        if ( err ){
            res.json(
                {
                    status : 'error',
                    message : 'Error al cerrar la sesión'
                }
            )
        }else{
            res.clearCookie('cinemania');
            res.json(
                {
                    status  : 'ok',
                    message : 'Sesión cerrada'
                }
            )
        }
    })
})

module.exports = router;