const express = require('express')
const router = express.Router();
const conexion = require('../connection')

router.get('/', (req, res)=>{

    let sql = `SELECT pro_id, pro_titulo, pro_imagen, pro_fecha, pro_trailer, ori_pais, gen_genero, pro_director, cla_clasificación, pro_sinopsis
               FROM proximamente, origen, generos, clasificación 
               WHERE pro_ori_id = ori_id AND pro_gen_id = gen_id AND pro_cla_id = cla_id`;

    conexion.query(sql, function(err, result, fields){
                                     
                            if ( err ) throw err;

                            res.json(result);
                            }
    ); 

});

router.get('/:id', (req, res)=>{

    let sql = `SELECT pro_id, pro_titulo, pro_imagen, pro_fecha, pro_trailer, ori_pais, gen_genero, pro_director, cla_clasificación, pro_sinopsis
               FROM proximamente, origen, generos, clasificación 
               WHERE pro_ori_id = ori_id AND pro_gen_id = gen_id AND pro_cla_id = cla_id AND pro_id = ${req.params.id}`;
         
    conexion.query(sql, function (err, result, fields){
                            
                            if ( err ) throw err;
                            
                            res.json(result[0]);
                        }
                     )
    
});

module.exports = router;
