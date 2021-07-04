class Game {
    constructor(container) {
        this.container = container;
        this.wordElement = container.querySelector('.word');
        this.winsElement = container.querySelector('.status__wins');
        this.lossElement = container.querySelector('.status__loss');

        this.reset();

        this.registerEvents();
    }

    reset() {
        this.setNewWord();
        this.winsElement.textContent = 0;
        this.lossElement.textContent = 0;
    }

    registerEvents() {
        /*
          TODO:
          Написать обработчик события, который откликается
          на каждый введённый символ.
          В случае правильного ввода слова вызываем this.success()
          При неправильном вводе символа - this.fail();
         */

        function keyup(event) {
            let Symbol = event.key;
            console.log(Symbol, typeof Symbol, this.currentSymbol);
        }

        this.keySymbol = document.addEventListener('keyup', keyup); //2.Получить символ, который был введён с клавиатуры.
        console.log(this.keySymbol, this.currentSymbol);

        this.currentSymbol = this.wordElement.querySelector('.symbol_current'); //1.Получить DOM-элемент текущего символа, который необходимо ввести (свойство *this.currentSymbol*)
        console.log(this.currentSymbol);

        const currentSymbolValue = this.currentSymbol.textContent;
        if (currentSymbolValue === this.keySymbol) { //3.Если два символа одинаковые, вызывать метод *this.success*
            this.success();
        } else if (this.keySymbol != undefined && currentSymbolValue != this.keySymbol) { //Если два символа отличаются, вызвать метод *this.fail*
            this.fail();
        }
        console.log(currentSymbolValue);
    }

    success() {
        this.currentSymbol.classList.add('symbol_correct');
        this.currentSymbol = this.currentSymbol.nextElementSibling;
        if (this.currentSymbol !== null) {
            return;
        }

        if (++this.winsElement.textContent === 10) {
            alert('Победа!');
            this.reset();
        }
        this.setNewWord();
    }

    fail() {
        if (++this.lossElement.textContent === 5) {
            alert('Вы проиграли!');
            this.reset();
        }
        this.setNewWord();
    }

    setNewWord() {
        const word = this.getWord();

        this.renderWord(word);
    }

    getWord() {
        const words = [
                'bob',
                'awesome',
                'netology',
                'hello',
                'kitty',
                'rock',
                'youtube',
                'popcorn',
                'cinema',
                'love',
                'javascript'
            ],
            index = Math.floor(Math.random() * words.length);

        return words[index];
    }

    renderWord(word) {
        const html = [...word]
            .map(
                (s, i) =>
                `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
            )
            .join('');
        this.wordElement.innerHTML = html;

        this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    }
}

new Game(document.getElementById('game'))