var array = [];

for (var i = 0; i <= 10; i++) {
    array.push(i)
}
console.log(array);


for (var i = 20; i >=0; i--) {
    console.log(i)
}


var color = prompt('Введите цвет: ')

if (color=='Зеленый') {
    alert ('Можно идти')
}
else if (color=='Желтый') {
    alert ('Приготовиться')
}
else if (color=='Красный') {
    alert ('Стоп')
}
else {
    alert ('Вводите только цвета светофора')
}