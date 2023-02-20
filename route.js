// This is a route.js file!
const express = require('express');
const bodyParser = require ('body-parser');
const mysql =require ('mysql');

const connection = mysql.createPool ({
host	:'127.0.0.1',
//port	:'8012',
user	:'dbadmin',
password	:'se350',
database	:'tester'
});

const app = express ();
//Creating a get route that returns data from users table
app.get('/users' , function (req,res) {
	//Connecting to DB
	connection.getConnection (function (err, connection) {
		//Executing query
		connection.query('SELECT * FROM users', function (error, results, fields){
			if (error) throw error;
			res.send(results)
		});
	});
});

//starting our server
app.listen (3000, () =>{
	console.log('Go to http://127.0.0.1:3000/users so you can see the data.');
});