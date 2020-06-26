const mysql = require('mysql');

let conexion = mysql.createConnection(                       
    {
        host: 'us-cdbr-east-02.cleardb.com',              
        user: 'bd78f4e7e55156',
        password: 'f8fa6629',        
        database: 'heroku_09a05d14c5bdf14'
    }
);

conexion.connect( 
    function(err){

        if ( err ) throw err;

        console.log("Conectado con exito!");
    }
);

module.exports = conexion;

