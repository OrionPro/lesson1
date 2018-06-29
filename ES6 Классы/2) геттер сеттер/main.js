

/*
   Геттер и сеттер (get / set). Это способ получить или вывести данные из класса.
   В ES6 за это отвечает опертары get/set перед обьявдением названия метода.
 */

class User {
    // метод для
    get userName() {
        return this.name;
    }

    set userName(name) {
        this.name = name;
    }
}

/*
    При чтении fullName будет вызван метод get fullName(),
    при присвоении – метод set fullName с новым значением.
 */

const user = new User();
console.log(user.userName);
user.userName = 'Iauhdyguay';
console.log(user.userName);
