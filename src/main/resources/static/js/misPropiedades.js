$(document).ready(function() {
    $.ajax({
      	url: "http://localhost:8081/api/apartment/owner?owner="+sessionStorage.userId,
		success: function(data){		
			let output = data.map(i => "<tr class='clickable' onclick='sendToDetalles("+ '"'+ i.id + '"' + ")'><th scope='row'>" + i.title + "</th><td>" + i.place
										+ "</td><td>" + i.description+ "</td><td>" + i.date + "</td></tr>").join('');
			document.getElementById("tablaAparment").innerHTML += output;
		}
    })
});	
