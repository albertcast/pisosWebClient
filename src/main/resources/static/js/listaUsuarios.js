$(document).ready(function() {
    $.ajax({
      	url: "https://pisoswebserver.herokuapp.com/api/user/",
		success: function(data){			
			 let output = data.map(i => "<tr><th scope='row'>" + i.email + "</td><td>" + i.nombre 
										+ "</td><td>" + i.apellidos + "</td><td>" + i.edad + "</td></tr>").join('');
			document.getElementById("tablaUser").innerHTML += output;
		}
    })
});	

