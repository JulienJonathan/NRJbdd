const connection = require('../config/db')
const Stockage = require('./stockage')
const mysql = require('mysql')

module.exports = class Solaire extends Stockage {

	static insert(variables){
		let query = "INSERT INTO miac_eolienne_solaire (date,tension, courantPanneau, courantBatterie, courantEolienne, courantTotal, irradiance, temperature) VALUES ?";
		//let data = [new Date(), variables]
		connection.query(query,variables,(err, results, fields) => {
			if (err) {
				return console.error(err.message);
			}
			// get inserted id
			console.log('Todo Id:' + results.insertId);
		});
	}




}