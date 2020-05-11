const express = require('express')
const conexion = require('../connection')
const router = express.Router();

router.get('/', (req, res)=>{

    conexion.query("SELECT * FROM peliculas",
                        function(err, result, fields){
                                     
                            if ( err ) throw err;

                            res.json(result);
                            }
    ); 

});

router.get('/:id', (req, res)=>{
         
    conexion.query('SELECT * FROM peliculas WHERE pel_id=' + req.params.id,
                        function (err, result, fields){
                            
                            if ( err ) throw err;
                            
                            res.json(result[0]);
                        }
                     )
    
});

module.exports = router;
