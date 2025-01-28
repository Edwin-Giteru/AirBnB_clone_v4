$(document).ready(() => {
	let myObj = [];
	$(":checkbox").on('change', () => {
		let amenityID = checkbox.data('id')
		if ($(this).is(':checked')) {
			myObj.push(amenityID);
	}
	else {
		myObj = myObj.filter(id => id !== amenityID);
	}
	$('div h4').text(myObj.join(', '));
	});

});

