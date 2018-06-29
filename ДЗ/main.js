/*
 Написать select, куда динамически будет добавляться options со значением соответствующей страны.

 Список стран можно получить отправив GET запрос сюда:
 https://gist.githubusercontent.com/ebaranov/41bf38fdb1a2cb19a781/raw/fb097a60427717b262d5058633590749f366bd80/gistfile1.json

 Так же нужно перевести ответ в json формат.

 Что должно быть:
 - класс родитель
 - дочерний класс
 - в запросах использовать Promise, async/await
 */


var xmlhttp = new XMLHttpRequest();
var url = "https://gist.githubusercontent.com/ebaranov/41bf38fdb1a2cb19a781/raw/fb097a60427717b262d5058633590749f366bd80/gistfile1.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const countries = JSON.parse(this.responseText);
        console.log(countries);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();