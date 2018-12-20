const mysql      = require('mysql');
let connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'supervisionnrj'
});

connection.connect((err)=>{
	if(err){
		console.error('connection error',err.stack)
	}
	else{
		console.error('Connecté')
	}

});

module.exports = connection;