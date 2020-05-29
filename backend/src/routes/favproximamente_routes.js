const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.get('/:user', (req, res) => {
    let sql = `SELECT proximamente.pro_id, pro_titulo, pro_fecha, pro_imagen
               FROM proximamente, favoritos_proximamente
               WHERE favoritos_proximamente.usu_id = ?
                 AND proximamente.pro_id = favoritos_proximamente.pro_id`;

    let values = [req.params.user];

    conexion.query( sql, values, (err, result, fields)=>{
        if (err) throw err;

        res.json(result);
    })
})

router.post('/', (req, res) =>{
    let sqlInsert = `INSERT INTO favoritos_proximamente
                        VALUES(?, ?)`;
    
    let values = [ req.body.userId, req.body.proId ];

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
    let sqlDelete = `DELETE FROM favoritos_proximamente
                        WHERE usu_id = ?
                          AND pro_id = ?`;
    
    let values = [ req.body.userId, req.body.proId ];

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