
$(document).ready(function() {
    $.ajax({
      	url: "https://pisoswebserver.herokuapp.com/api/comment/apartment/"+window.sessionStorage.apartmentId,
		success: function(data){		
			sessionStorage.setItem("apartmentId", data.apartmentId);
										
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
                                "<h5>Nombre del usuario</h5>"+
                                "<p>"+data.text+"</p>"+
                            "</div>"+
                        "</div>").join('');
     
                
			document.getElementById("tablaComment").innerHTML += output;
		}
    })
});