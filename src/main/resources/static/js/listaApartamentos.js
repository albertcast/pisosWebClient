$(document).ready(function() {
    $.ajax({
      	url: "https://pisoswebserver.herokuapp.com/api/apartment/",
		success: function(data){		
			localStorage.setItem("apartmentId", data.apartmentId);	
			let output = data.map(i => "<tr class='clickable' onclick='sendToDetalles("+ '"'+ i.id + '"' + ")'><th scope='row'>" + i.title + "</th><td>" + i.place
										+ "</td><td>" + i.description+ "</td><td>" + i.date + "</td></tr>").join('');
			document.getElementById("tablaAparment").innerHTML += output;
		}
    })
});	

