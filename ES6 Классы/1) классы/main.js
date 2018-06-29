

/*
В EcmaScript 6 классы обьявляются с помощью оператора class.
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