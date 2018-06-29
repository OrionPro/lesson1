

/*
    В ES6 наследование классов реализуется с помощью оператора extends
 */

// класс - родитель
class Animal {
    constructor(name) {
        this.name = name;
    }

    action() {
        console.log(this.name);
    }
}


// класс - наследник
class Rabbit extends Animal {
    constructor(name) {
        /*
            оператор super предает параметры из родителя к наследнику.
            он может принисать аргументами параметры для конструктора родительского класса
         */
        super(name);
    }

    geAction() {
        // вызываем метод из класса - родителя
        return this.action();
    }
}

const rabbit = new Rabbit('jump');
rabbit.geAction(); // jump