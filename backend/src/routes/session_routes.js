const express = require('express');
const router  = express.Router();
const conexion = require('../connection')

router.post('/', (req, res) =>{

    let sql = `
                 SELECT *
                 FROM usuarios
                 WHERE usu_nick = ?
                   AND usu_contraseña = ?`;

    let values = [
                    req.body.user,
                    req.body.password 
                 ]
        
    conexion.query(sql, values, (err, result, fields) => {
        
        if ( err ) {
            res.json(
                {
                    status : 'error',
                    message : 'No es posible acceder en este momento. Intente nuevamente en unos minutos.'
                }
            )
        }else{
            
            if(result.length == 1){
                req.session.user   = req.body.user;
                req.session.userId = result[0].usu_id;

                res.json(
                    {
                        status     : 'ok',
                        message    : 'sesión iniciada',
                        loggedUser : {
                                        id     : req.session.userId,
                                        nombre : result[0].usu_nombre
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

        }
    })

})

router.post('/', (req, res) =>{
    let sqlInsert = `INSERT INTO usuarios(usu_nick, usu_nombre, usu_contraseña, usu_email, usu_id)
                        VALUES(
                            '${req.body.registrateUsuario}',
                            '${req.body.registrateNombreCompleto}',
                            '${req.body.registrateContraseña}',
                            '${req.body.registrateEmail}',
                            '${req.session.userId}'
                        )`;

    conexion.query( sqlInsert, function(err, result, fields) {
        if( err ) {
            res.json(
                {
                    status: 'error',
                    message : 'Error al registrarse'
                }
            ) 
        }else{
            res.json(
                {
                    status: 'ok',
                    message : 'Tu registro fue exitoso'   
                }
            )
        }   
    })

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
            //res.clearCookie(options.name);
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