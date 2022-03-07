let form = document.getElementById('form');

function hitung(operator) {
	let a1 = form.a1.value;
	let a2 = form.a2.value;
	let hasil;

	switch(operator) {
		case '+' :
			hasil = parseInt(a1) + parseInt(a2);
			break;
		case '-' : 
			hasil = a1 - a2;
			break;
		case '/' :
			hasil = a1 / a2;
			break;
		case '*' :
			hasil = a1 * a2;
			break;
		case '^' : 
			hasil = Math.pow(a1, a2);
			break;
	}

	if(hasil >= 0){
		form.hasil.value = hasil;
	} else {
		alert('Harap isi data berupa angka')
	}

}

function batal() {
	form.a1.value = '';
	form.a2.value = '';
	form.hasil.value = '';
}