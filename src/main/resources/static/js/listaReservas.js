$(document).ready(function() {
    $.ajax({
      	url: "https://pisoswebserver.herokuapp.com/api/booking/",
		success: function(data){			
			 let output = data.map(i => "<tr><th scope='row'>" + i.guest + "</td><td>" + i.arrivalDate 
										+ "</td><td>" + i.departureDate+ "</td><td>" + i.apartment+ "</td></tr>");
			document.getElementById("tablaUser").innerHTML += output;
		}
    })
});	

