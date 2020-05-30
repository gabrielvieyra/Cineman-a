process.env.BASE_URL   = 'http://localhost:8888/';
process.env.IMAGES_URL = process.env.BASE_URL + 'images/';
process.env.VIDEOS_URL = process.env.BASE_URL + 'videos/';

const express = require('express');
const cors =require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const peliculasRoutes = require('./routes/peliculas_routes')
const sessionRoutes   = require('./routes/session_routes');
const proximamenteRoutes = require('./routes/proximamente_routes')
const favoritosRoutes = require('./routes/favoritos_routes')
const favoritosProximamenteRoutes = require('./routes/favproximamente_routes')
const noticiasRoutes = require('./routes/noticias_routes')

const app = express();

app.use(bodyParser.urlencoded({ extended: false} ));
app.use(bodyParser.json());
app.use(fileUpload());

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const auth = require('./auth');

//app.use(express.static('../public'));
app.use('*/images', express.static('public/images'));
app.use('*/videos', express.static('public/videos'));

app.use( cors({
            credentials: true,
            origin: 'http://localhost:3000',
            allowedHeaders: ['Content-Type']

})    
)

app.use( session({
    store  : new FileStore,
    secret : '123456',
    resave: false,
    saveUninitialized: true,
    name: 'cinemania'
}))

app.use('/auth', sessionRoutes);
app.use('/peliculas', peliculasRoutes);
app.use('/proximamente', proximamenteRoutes);
app.use('/favoritos', favoritosRoutes);
app.use('/favproximamente', favoritosProximamenteRoutes);
app.use('/noticias', noticiasRoutes);

app.listen(8888, ()=>{console.log('Escuchando...')} );
