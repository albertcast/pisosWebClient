
    $.ajax({
        url: "https://pisoswebserver.herokuapp.com/api/apartment/"+window.localStorage.apartmentId
    }).then(function(data) {
		for(let i=0;i<5;i++){
			let output="<option value=\"\">"+i+" Personas</option>";
			document.getElementById("capac").innerHTML += output;
			console.log("HOLA1");
		}

    });
