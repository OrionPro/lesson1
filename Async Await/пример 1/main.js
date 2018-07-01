/*
Объявление async function определяет асинхронную функцию, которая возвращает объект Promise.


После вызова функция async возвращает Promise. Когда результат был получен, Promise завершается, возвращая полученное значение.  Когда функция async выбрасывает исключение, Promise ответит отказом с выброшенным (throws) значением.

Функция async может содержать выражение await, которое приостанавливает выполнение функции async и ожидает ответа от переданного Promise, затем возобновляя выполнение функции async и возвращая полученное значение.

Ключевое слово await допустимо только в асинхронных функциях. В другом контексте вы получите ошибку SyntaxError.
 */

function resolveAfter2Seconds(x) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject(x);
      }, 2000);
    });
}

async function asyncExample(x) {
    const a = await resolveAfter2Seconds(20);
    return x + a;
}

asyncExample(10)
    .then(v => {
        console.log(v);  // 60 через 4 секунды
    })
    .catch();