$(document).ready(function() {
    $.ajax({
      	url: "https://pisoswebserver.herokuapp.com/api/apartment/owner?owner=63641e030a34a82ae3b7f137",
		success: function(data){		
			let output = data.map(i => "<tr class='clickable' onclick='sendToDetalles("+ '"'+ i.id + '"' + ")'><th scope='row'>" + i.title + "</th><td>" + i.place
										+ "</td><td>" + i.description+ "</td><td>" + i.date + "</td></tr>").join('');
			document.getElementById("tablaAparment").innerHTML += output;
		}
    })
});	
