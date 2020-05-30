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

router.get('/cine/:user', (req, res) => {
    let sql = `SELECT noticias.not_id, not_imagen, not_titulo, not_texto, not_publicacion, not_tip_id
               FROM noticias, favoritos_noticias
               WHERE favoritos_noticias.usu_id = ?
                 AND noticias.not_id = favoritos_noticias.not_id AND not_tip_id = 1`;

    let values = [req.params.user];

    conexion.query( sql, values, (err, result, fields)=>{
        if (err) throw err;

        res.json(result);
    })
})

router.get('/series/:user', (req, res) => {
    let sql = `SELECT noticias.not_id, not_imagen, not_titulo, not_texto, not_publicacion, not_tip_id
               FROM noticias, favoritos_noticias
               WHERE favoritos_noticias.usu_id = ?
                 AND noticias.not_id = favoritos_noticias.not_id AND not_tip_id = 2`;

    let values = [req.params.user];

    conexion.query( sql, values, (err, result, fields)=>{
        if (err) throw err;

        res.json(result);
    })
})

router.post('/cine', (req, res) =>{
    let sqlInsert = `INSERT INTO favoritos_noticias
                        VALUES(?, ?)`;
    
    let values = [ req.body.userId, req.body.notId ];

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

router.post('/series', (req, res) =>{
    let sqlInsert = `INSERT INTO favoritos_noticias
                        VALUES(?, ?)`;
    
    let values = [ req.body.userId, req.body.notId ];

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

router.delete('/cine', (req, res) =>{
    let sqlDelete = `DELETE FROM favoritos_noticias
                        WHERE usu_id = ?
                          AND not_id = ?`;
    
    let values = [ req.body.userId, req.body.notId ];

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

router.delete('/series', (req, res) =>{
    let sqlDelete = `DELETE FROM favoritos_noticias
                        WHERE usu_id = ?
                          AND not_id = ?`;
    
    let values = [ req.body.userId, req.body.notId ];

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