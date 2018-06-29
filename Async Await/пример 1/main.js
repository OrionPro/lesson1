
/*
Объявление async function определяет асинхронную функцию, которая возвращает объект Promise.


После вызова функция async возвращает Promise. Когда результат был получен, Promise завершается, возвращая полученное значение.  Когда функция async выбрасывает исключение, Promise ответит отказом с выброшенным (throws) значением.

Функция async может содержать выражение await, которое приостанавливает выполнение функции async и ожидает ответа от переданного Promise, затем возобновляя выполнение функции async и возвращая полученное значение.

Ключевое слово await допустимо только в асинхронных функциях. В другом контексте вы получите ошибку SyntaxError.
 */

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function asyncExample(x) {
    console.log('1');
    const a = await resolveAfter2Seconds(20);
    console.log('2');
    const b = await resolveAfter2Seconds(30);
    console.log('3');
    return x + a + b;
}

asyncExample(10).then(v => {
    console.log(v);  // 60 через 4 секунды
});