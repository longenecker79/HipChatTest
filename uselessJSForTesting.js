var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = '!Buenas Dias';
}
else if (hourNow > 12){
	greeting = 'Buenas Tardes!';
}
else if (hourNow > 0){
	greeting = 'Good morning!'
};
