

/*
   Класс, как и функция, является объектом. Статические свойства класса LocalStorageService – это свойства непосредственно User, то есть доступные из него «через точку».

Для их объявления используется ключевое слово static.

Мы можем использовать функцию static если в ней мы не используем контекст класса (this).
 */


class LocalStorageServicePar {

    // получение name из Local Storage
    getCount() {
        return localStorage.getItem('count');
    }

    // задание name из Local Storage
    setStartCount(count) {
        return localStorage.setItem('count', count);
    }

    // удаление name из Local Storage
    updateCount() {
        const count = parseInt(this.getCount()) + 1;
        this.setStartCount(count);
    }
}

class LocalStorageServiceChild extends LocalStorageServicePar {

    constructor() {
        super()
    }

    getCountChild() {
        return this.getCount();
    }

    setStartCountChild(count) {
        return this.setStartCount(count);
    }

    updateCountChild() {
        return this.updateCount();
    }
}


const obj = new LocalStorageServiceChild();

obj.setStartCountChild(1);
console.log(obj.getCountChild());
obj.updateCountChild();
console.log(obj.getCountChild());


