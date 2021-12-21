class Media {
    constructor (artMedia) {
        this.mediaType = artMedia
    }
    description() {
        return 'one of the List of art media is => ' + this.mediaType;
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
    
}




let myBook = new Book("book", "A fraction of the whole");
console.log(myBook.show()); // one of the List of art media is => book , the name of the book : A fraction of the whole