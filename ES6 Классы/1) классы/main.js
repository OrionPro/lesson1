

/*
В новом стандарте EcmaScript 6 появился новый способ определение классов. Оператор class существует для объявления классов.
 */

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
}

const user = new User("Ivan");
user.sayHi(); // Ivan

/*
    Запись выше эквалантна этой записи:
 */

function UserFunc(name) {
    this.name = name;
}

UserFunc.prototype.sayHi = function() {
    console.log(this.name);
};

const userFunc = new UserFunc("Egor");
userFunc.sayHi(); // Egor