
var age = +prompt('Привет! Сколько тебе лет?');
console.log (typeof age, age);
if ((typeof(age) !="number") ||  (age!=age) ){
	alert("Введите правильно возраст!");
}

else {
var smoke = confirm('Только чесно! Ты куриш?');

	if  (smoke){
		if (age <= 18)  {
		alert('Маме расскажу!');
		}
		else alert('Ну и зря!');
	}
	else if (age > 18){
		alert('Так держать!');
		}
		else  alert('Молодец, и не надо!');
}

	
	
