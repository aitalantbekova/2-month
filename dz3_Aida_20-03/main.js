var a = prompt ('Введите первое число')
var b = prompt ('Введите второе число')


function ai (a,b) {
    if (isNaN(a) || isNaN(b)) {
    alert('Введите число!!!')
        return;
}
    console.log(Math.min(a,b))
}
ai (a,b)





const word = prompt("Что-нибудь напишите");
function returnFunction(word) {
    console.log(`Длина строки равна ${word.length}`)
}
returnFunction(word)





function calc() {
    var result;
    var num1 = Number(prompt("Введите первое число"));
    var  oper  = prompt("Выберите действие\n+\n-\n*\n/")
    var num2 = Number(prompt("Введите второе число"))

    if (isNaN(num1) || isNaN(num2)) {
      alert("Введите только числа!")
    }
    switch (oper) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        num2 === 0 ? result="Ошибка!" : result = num1 / num2;
        break;
      default:
        alert("Выберите правильный действия")
    }
    alert(result)
  }
calc()