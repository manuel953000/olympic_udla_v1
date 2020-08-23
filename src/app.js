const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const cookieParser = require('cookie-parser');
const colors = require('colors');
//const ngrok = require('ngrok');



const server = express();

//importando rutas
const competenciaRoutes = require('./routes/competencia');
const indexRoutes = require('./routes/index');
const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user');
const cuestionarioRoutes = require('./routes/cuestionario');
const { urlencoded } = require('body-parser');



//Configuraciones del servidor
server.set('port', process.env.PORT || 3000);
//Motor de plantillas 
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));
//archivos static en la carpeta public
server.use('/public',express.static(__dirname + "/public"));

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


//Middlewares

server.use(morgan('dev'));
server.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'olympic_bd'
}, 'single'));
//conversion de los datos que vienen desde el formulario
server.use(express.urlencoded({extended: false}));

server.use(cookieParser('secret'));
server.use(session({cookie: {maxAge: null}}));

// flash  mensajes middleware
server.use((req, res, next)=>{
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});



//Routes 
server.use('/', competenciaRoutes);
server.use('/', indexRoutes);
server.use('/', loginRoutes);
server.use('/', userRoutes);
server.use('/', cuestionarioRoutes);




/*server.get('/', function(req, res) {
    res.render('index');
});

server.get('/user', function(req, res) {
    res.render('user');
});

server.get('/login', function(req, res) {
    res.render('login');
});*/


//Iniciando el servidor en INTERNET

/*server.listen(server.get('port'), function() {
    console.log(`server on port ${server.get('port')}`.yellow);
    (async function() {
        const endpoingAccesibleOnTheIneternet = await ngrok.connect(server.get('port'));
        console.log(`Proyecto publicado en Internet en puerto : ${server.get('port')}, enlace ${endpoingAccesibleOnTheIneternet}`);
    })()
});*/


//Iniciando el servidor en localhost

server.listen(server.get('port'), function() {
    console.log(`server localhost on port ${server.get('port')}`.bold);
});