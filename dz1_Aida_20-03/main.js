let number = prompt("пожалуйста оцените наш сервис");

if (number < 1 || number > 10) {
    alert('оценка должна быть от 1 до 10')
}else if(number <= 5){
    alert("мы работаем над улучшением нашего сервиса")
}else if (number >=6 && number <= 10 ) {
    alert( "спасибо за высокую оценку")
}else{
    alert("Соблюдайте условия!!!");
}
