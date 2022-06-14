let button = document.querySelector('#btn')

button.addEventListener('click', function() {
	const gram = parseInt(document.querySelector('#grams').value) // способ поймать integer из input
	const type = document.querySelector('#type').value

	if (gram === '' || isNaN(gram)) {
		document.querySelector('#grams').focus()
		document.querySelector('#error').innerHTML = 'Please provide a valid gram'
		document.querySelector('output').innerHTML = ''
	} else {
		document.querySelector('#error').innerHTML = ''
		switch(type) {
			case 'Pounds':
				convert_pounds(gram)
				break
			case 'Kilograms':
				convert_kilograms(gram)
				break
			case 'Ounces':
				convert_ounces(gram)
				break
			case 'Stones':
				convert_stones(gram)
				break
			default :
				alert('Error')
		}

		function convert_pounds(gram) {
			let rate = 0.0022, pounds
			pounds = gram * rate
			document.querySelector('#output').innerHTML = gram + ' grams = ' + pounds.toFixed(3) + ' pounds.'
		}

		function convert_kilograms(gram) {
			let rate = 0.001, kilograms
			kilograms = gram * rate
			document.querySelector('#output').innerHTML = gram + ' grams = ' + kilograms.toFixed(3) + ' kg.'
		}

		function convert_ounces(gram) {
			let rate = 0.035274, ounces
			ounces = gram * rate
			document.querySelector('#output').innerHTML = gram + ' grams = ' + ounces.toFixed(3) + ' ounces.'
		}

		function convert_stones(gram) {
			let rate = 0.00015747, stones
			stones = gram * rate
			document.querySelector('#output').innerHTML = gram + ' grams = ' + stones.toFixed(3) + ' stones.'
		}
	}
})