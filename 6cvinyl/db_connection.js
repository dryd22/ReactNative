
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000
const mysql =require ('mysql');

const connection = mysql.createPool ({
host    :'localhost',
//port  :'8012',
user    :'admindb',
password    :'SE350Admin',
database    :'6CVinyl_db'
});


// We are using our packages here
app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 
app.use(cors())

//You can use this to check if your server is working
//app.get('/', (req, res)=>{
//res.send("Welcome to your server")
//})
app.get('/users' , function (req,res) {
	//Connecting to DB
	connection.getConnection (function (err, connection) {
		//Executing query
		connection.query('SELECT UserEmail, UserPassword FROM users', function (error, results, fields){
			if (error) throw error;
			res.send(results)
		});
	});
});

//Route that handles login logic
app.post('/login', (req, res) =>{
    console.log(req.body.UserName) 
    console.log(req.body.UserPassword) 
	console.log(req.body.UserName)
})

/*/Route that handles signup logic
app.post('/users', (req, res) =>{
	const email = req.body.email;
const pass = req.body.pass;
//const name = req.body.name;
	connection.getConnection (function (err, connection) {
		//Executing query
		connection.query('INSERT INTO `6cvinyl_db`insert into users,  (UserEmail, UserPassword, UserName) values ( ?, ?)', 
  [email, pass, name ], (err, result) => {
      if(err) {
        console.log(err)
      } else {
        res.send("Values Inserted");
      }
    }
  )
	});
console.log(req.body.UserEmail) 
console.log(req.body.UserName)
console.log(req.body.UserPassword) 
})*/

//Start your server on a specified port
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
