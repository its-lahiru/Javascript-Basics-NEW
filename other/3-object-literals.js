// OLD
function getBook(title, author){
    return {
        title: title,
        author: author
    }
}

var book1 = getBook("Harry Potter", "JKR");
console.log(book1);



// ES6
function getBook(title, author){
    return {
        title,
        author
    }
}

var book1 = getBook("Madol Duwa", "MW");
console.log(book1);