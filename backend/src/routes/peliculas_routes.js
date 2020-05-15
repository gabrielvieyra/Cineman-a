const express = require('express')
const router = express.Router();
const conexion = require('../connection')

router.get('/', (req, res)=>{

    let sql = `SELECT pel_id, pel_titulo, pel_imagen, pel_puntuacion, pel_trailer, ori_pais, gen_genero, pel_director, cla_clasificación, pel_sinopsis
               FROM peliculas, origen, generos, clasificación 
               WHERE pel_ori_id = ori_id AND pel_gen_id = gen_id AND pel_cla_id = cla_id`;

    conexion.query(sql, function(err, result, fields){
                                     
                            if ( err ) throw err;

                            res.json(result);
                            }
    ); 

});

router.get('/:id', (req, res)=>{

    let sql = `SELECT pel_id, pel_titulo, pel_imagen, pel_puntuacion, pel_trailer, ori_pais, gen_genero, pel_director, cla_clasificación, pel_sinopsis
               FROM peliculas, origen, generos, clasificación 
               WHERE pel_ori_id = ori_id AND pel_gen_id = gen_id AND pel_cla_id = cla_id AND pel_id = ${req.params.id}`;
         
    conexion.query(sql, function (err, result, fields){
                            
                            if ( err ) throw err;
                            
                            res.json(result[0]);
                        }
                     )
    
});

module.exports = router;
