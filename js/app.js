function getData(){
	// document.getElementById('karbon').style.display = "block";
	// document.getElementById('karbon2').style.display = "block";

	const co = firebase.database().ref("Monitoring/CO");
			co.on("value",snap=>{
			document.getElementById('co').innerText = snap.val();
			})
			const co2 = firebase.database().ref("Monitoring/CO2");
			co2.on("value",snap=>{
			document.getElementById('codua').innerText = snap.val();
			})

	firebase.database().ref("Monitoring/CO").on("value",snap=>{
		var statco = snap.val();
		if (statco<=200){
		document.getElementById('status').innerText = "Normal";
		}
		else if (statco>200 && statco<=800){
			document.getElementById('status').innerText = "Waspada";
		}
		else if (statco>800){
			document.getElementById('status').innerText = "Bahaya";
		}
		})
}