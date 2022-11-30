
function usuario(id) {
	nombre=""
    $.ajax({
        url: "https://pisoswebserver.herokuapp.com/api/user/"+id
    }).then(function(data) {
       $('.user-name').append(data.usuarioId);
       nombre=data.nombre
       console.log(data)
       alert(nombre)
       $('.user-lastname').append(data.email);
    });
    return nombre
};




$(document).ready(function() {

    $.ajax({
      	url: "https://pisoswebserver.herokuapp.com/api/comment/apartment/"+window.sessionStorage.apartmentId,
		success: function(data){		
										
			let output = data.map(i => "<div class='review-item'>"+
                            "<div class='ri-pic'>"+
                                "<img src='img/room/avatar/avatar-1.jpg' alt=''>"+
                            "</div>"+
                            "<div class='ri-text'>"+
                                "<span>METER FECHA EN COMENTARIOS</span>"+
                                "<div class='rating'>"+
                                    "<i class='icon_star'></i>"+
                                    "<i class='icon_star'></i>"+
                                    "<i class='icon_star'></i>"+
                                    "<i class='icon_star'></i>"+
                                    "<i class='icon_star-half_alt'></i>"+
                                "</div>"+
                                "<h5>"+String(usuario(i.user))+"</h5>"+
                                "<p>"+i.text+"</p>"+
                            "</div>"+
                        "</div>").join('');
     
                
			document.getElementById("tablaComment").innerHTML += output;
		}
    })
});