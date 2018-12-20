const solaireRecup = require('./recuperation/solaire')

function checkMiac (ip,cb) {
	require('dns').resolve(ip, function (err) {
		if (err) {
			console.log("No connection");
		} else {
			console.log("Connected");
		}
	});
}
checkMiac('http://192.168.1.2',function (isConnected) {
	if(isConnected){
		let varSolaire = solaireRecup.retrieve()

	}
	else {
		//Non connecté
	}

})