// Funkcje warunkowe
var a = prompt('wpisz wartość "a"'),
	b = prompt('wpisz wartość "b"'),
	value = (a * a) - (2 * a * b) + (b * b);
if (value > 0) {
	alert('Dla wartości a = ' + a + " oraz wartości b = " + b + " działanie jest równe: " + value + " i ma wartość dodatnią ");
	console.log('Dla wartości a = ' + a + " oraz wartości b = " + b + " działanie jest równe: " + value + " i ma wartość dodatnią ");
		
} else if (value < 0) {
	alert('Dla wartości a = ' + a + " oraz wartości b = " + b + " działanie jest równe: " + value + " i ma wartość ujemną ");
	console.log('Dla wartości a = ' + a + " oraz wartości b = " + b + " działanie jest równe: " + value + " i ma wartość ujemną ");
	
} else {
	alert('Dla wartości a = ' + a + " oraz wartości b = " + b + " działanie jest równe: " + " i ma wartość równą 0 ");
	console.log('Dla wartości a = ' + a + " oraz wartości b = " + b + " działanie jest równe: " + value + " i ma wartość równą zero ");
}


