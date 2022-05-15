const express = require("express");
const app = express.Router();

var path = require('path');
var static = require('serve-static');
var session = require('express-session');
var db = require('./model/db.js');
var MySQLStore = require("express-mysql-session")(session);


var db_info = db.getConnection();
var sessionStore = new MySQLStore(db_info);
app.use(
	session({
		key: "session_cookie_name#@",
		secret: "session_cookie_secret",
		store: sessionStore,
		resave: false,
		saveUninitialized: true,
	})
);
app.use('/', router);
// app.use('/web', static(path.join(__dirname, 'web')));


app.listen(80,()=>{
    console.log("http://localhost/");
})


