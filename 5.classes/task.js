class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
       this.state = 100;
       this.type = null;
       this.name = name;
       this.pagesCount = pagesCount;
       this.releaseDate = releaseDate;
    }
    fix(){
        this.state *= 1.5;
    }
    set state(newState){
       if(newState < 0){
        this._state = 0;
       }else if(newState > 100){
        this._state = 100;
       }else {
        this._state = newState;
       }     
    }
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}
class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
        this.author = author;
    }
}
           

class NovelBook extends Book{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}
class FantasticBook extends Book{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}
class DetectiveBook extends Book{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}


class Library {
    constructor(name, books){
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        const foundBook = this.books.find(book => book[type] === value);
        return foundBook !== undefined ? foundBook : null;
    }
    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            const book = this.books[index];
            this.books.splice(index, 1);
            return book;
        } else {
            return null;
        }
    }
}
