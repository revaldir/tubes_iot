function nyala(){
	var LED = "ON";
	firebase.database().ref().update({LED});
}

function mati(){
	var LED = "OFF";
	firebase.database().ref().update({LED});
}