

/*
   Класс, как и функция, является объектом. Статические свойства класса User – это свойства непосредственно User, то есть доступные из него «через точку».

Для их объявления используется ключевое слово static.

Мы можем использовать функцию static если в ней мы не используем контекст класса (this).
 */


class LocalStorageService {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // получение name из Local Storage
    static getName() {
        return localStorage.getItem('name');
    }

    // задание name из Local Storage
    static setName(name) {
        return localStorage.setItem('name', name);
    }

    // удаление name из Local Storage
    static removeName() {
        return localStorage.clear('name');
    }
}

LocalStorageService.setName('Ivan');
console.log(LocalStorageService.getName());
// LocalStorageService.removeName();



