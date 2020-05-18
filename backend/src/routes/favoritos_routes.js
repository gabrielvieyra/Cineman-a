const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.get('/:user', (req, res) => {
    let sql = `SELECT peliculas.pel_id, pel_titulo, pel_puntuacion, pel_imagen
               FROM peliculas, favoritos
               WHERE favoritos.usu_id = ?
                 AND peliculas.pel_id = favoritos.pel_id`;

    let values = [req.params.user];

    conexion.query( sql, values, (err, result, fields)=>{
        if (err) throw err;

        res.json(result);
    })
})

router.post('/', (req, res) =>{
    let sqlInsert = `INSERT INTO favoritos
                        VALUES(?, ?)`;
    
    let values = [ req.body.userId, req.body.pelId ];

    conexion.query( sqlInsert, values, (err, result, fields) =>{
        if( err ){
            res.json(
                {
                    status: 'error',
                    message : 'Error al agregar el favorito'
                }
            )
        }
        else{
            res.json(
                {
                    status: 'ok',
                    message : 'Agregado a favoritos'
                }
            )           
        }
    })
})

router.delete('/', (req, res) =>{
    let sqlDelete = `DELETE FROM favoritos
                        WHERE usu_id = ?
                          AND pel_id = ?`;
    
    let values = [ req.body.userId, req.body.pelId ];

    conexion.query( sqlDelete, values, (err, result, fields) =>{
        if( err ){
            res.json(
                {
                    status: 'error',
                    message : 'Error al quitar el favorito'
                }
            )
        }
        else{
            res.json(
                {
                    status: 'ok',
                    message : 'Favorito eliminado'
                }
            )           
        }
    })
})

module.exports = router;