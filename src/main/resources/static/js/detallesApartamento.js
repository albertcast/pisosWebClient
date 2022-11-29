$(document).ready(function(id) {
    $.ajax({
        url: "https://pisoswebserver.herokuapp.com/api/apartment/"+window.sessionStorage.apartmentId
    }).then(function(data) {
       	$('.apartment-title').append(data.title);
       	$('.apartment-place').append(data.place);
		$('.apartment-description').append(data.description);
       	$('.apartment-date').append(data.date.substring(0,10));
        $('.apartment-capacity').append(data.capacity);

    });
});	