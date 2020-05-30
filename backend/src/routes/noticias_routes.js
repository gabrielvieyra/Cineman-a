const express = require('express')
const router = express.Router();
const conexion = require('../connection')

router.get('/cine', (req, res)=>{

    let sql = `SELECT not_id, not_imagen, not_titulo, not_texto, not_publicacion, not_tip_id
               FROM noticias
               WHERE not_tip_id = 1`;

    conexion.query(sql, function(err, result, fields){
                                     
                            if ( err ) throw err;

                            res.json(result);
                            }
    ); 

});

router.get('/series', (req, res)=>{

    let sql = `SELECT not_id, not_imagen, not_titulo, not_texto, not_publicacion, not_tip_id
               FROM noticias
               WHERE not_tip_id = 2`;

    conexion.query(sql, function(err, result, fields){
                                     
                            if ( err ) throw err;

                            res.json(result);
                            }
    ); 

});

module.exports = router;
