class Media {
    constructor (artMedia) {
        this.mediaType = artMedia
    }
    description() {
        return 'one of art media is => ' + this.mediaType;
    }
}

class Book extends Media {
    constructor (artMedia, name) {
        super(artMedia);
        this.bookName = name
    }
    show() {
        return this.description() + ' , the name of the book : ' + this.bookName;
    }
}

class Film extends Media {
    constructor (artMedia, name) {
        super(artMedia);
        this.filmName = name
    }
    introduce() {
        return this.description() + ' , the name of the film : ' + this.filmName;
    }
}




let myBook = new Book("book", "A fraction of the whole");
console.log(myBook.show()); 
// one of art media is => book , the name of the book : A fraction of the whole

let myFavoriteMovie = new Film("Cinema", "Gone With The Wind");
console.log(myFavoriteMovie.introduce()); 
// one of art media is => Cinema , the name of the film : Gone With The Wind