

/*
Promise (обычно их так и называют «промисы») – предоставляют удобный способ организации асинхронного кода.

Promise – это специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).
 */


const promise = new Promise(function(resolve, reject) {
    // Эта функция будет вызвана автоматически

    // В ней можно делать любые асинхронные операции,
    // А когда они завершатся — нужно вызвать одно из:
    // resolve(результат) при успешном выполнении
    // reject(ошибка) при ошибке
    setTimeout(() => {
        resolve('1');
    }, 1000)
})
    .then((data) => {
        console.log(data);
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                reject(2);
            }, 1000)
        })
    })
    .then((data) => {
        console.log(data);
        return '3'
    })
    .then((data) => {
        console.log(data);

    })
    .catch(() => {
        return 'Error'
    }).then(data => {
        console.log('123', data);

    });