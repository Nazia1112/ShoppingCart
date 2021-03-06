var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var mongoStore = require('connect-mongo')(session);

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var passport = require('passport');
const config = require('./config');

var app = express();

const url = config.mongoUrl;
const connect = mongoose.connect(url, {
  useMongoClient: true,
});

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

require('./config/passport');


// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname : '.hbs'}));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(session({
  secret: 'mysupersecret', 
  resave: false, 
  saveUninitialized: false,
  store: new mongoStore({mongooseConnection : mongoose.connection}),
  cookie: { maxAge: 180 * 600  * 1000}
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
})

app.use('/', indexRouter);
app.use('/user', userRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
