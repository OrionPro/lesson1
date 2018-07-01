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

class Request {
    
    constructor() {
        this.url = "https://gist.githubusercontent.com/ebaranov/41bf38fdb1a2cb19a781/raw/fb097a60427717b262d5058633590749f366bd80/gistfile1.json";
        this.xmlhttp = new XMLHttpRequest();
    }


    open() {
        return this.xmlhttp.open("GET", this.url, true);
    }

    send() {
        return new Promise(resolve => {
            this.xmlhttp.onload = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const countries = JSON.parse(this.responseText).countries;
                    resolve(countries);
                }
            };
            this.open();
            this.xmlhttp.send()
        });
    }
}


class RenderInDOM extends Request {
    get selectElem() {
        return document.getElementById('countries-select');
    }

    createOptionElem() {
        return document.createElement('option');
    }

    async getCountriesRequest() {
        return await this.send();
    }

    render() {
        this.getCountriesRequest().then(data => {
            data.forEach(el => {
            const optionElem = this.createOptionElem();
            optionElem.value = el.country;
            optionElem.text = el.country;
            this.selectElem.appendChild(optionElem);
        });
        });
    }
}

const renderInDOM = new RenderInDOM();
renderInDOM.render();