

/*
Promise – предоставляют удобный способ организации асинхронного кода.

Promise – это специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).
 */


const promise = new Promise(function(resolve, reject) {
    // Эта функция будет вызвана автоматически

    // В ней можно делать любые асинхронные операции,
    // А когда они завершатся — нужно вызвать одно из:
    // resolve(результат) при успешном выполнении
    // reject(ошибка) при ошибке
    setTimeout(() => {
        resolve();
    }, 1000)
})
    .then(() => {
        console.log('Success');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
    })
    .then(() => {
        console.log('Success1');
    })
    .catch(() => {
        console.log('Error');
    });