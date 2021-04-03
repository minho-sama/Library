

const harryP = new Book('harry potter', 'jk rowling', 540, false)
const lotr = new Book('lord of the rings', 'tolkien', 1200, true)

//add prototype
Book.prototype.material = 'paper'
Book.prototype.info = function(){
    return (this.finished) ? 
        `${this.title} by ${this.author}, ${this.pages} pages, already read ` 
        :`${this.title} by ${this.author}, ${this.pages} pages, not read yet` 
}

// Fent csak sandbox
//miután kész mindent lerövidíteni amit csak lehet (pl forEach, stb) 

const inputs = document.querySelectorAll('.input')
const titleInput = document.querySelector('#titleInput')
const authorInput = document.querySelector('#authorInput')
const pagesInput = document.querySelector('#pagesInput')
const submitBook = document.querySelector('#submit')

const books = document.querySelector('.books')

let myLibrary = [];

function Book (title, author, pages, finished){
    this.title = title
    this.author = author
    this.pages = pages
    this.finished = finished
}

let checkedValue = document.getElementById("isFinished")

function checked (){
    return (checkedValue.checked) ? true : false;
}

function addBookToLibrary (){
    clearBooks()

    let title = titleInput.value
    let author = authorInput.value
    let pages = pagesInput.value
    
    let finished = checked()

    let newBook = new Book(title, author, pages, finished)
    myLibrary.push(newBook)
    
    print()

    clearFields()
}

submitBook.addEventListener('click', addBookToLibrary)


function print(){
    // let lastBook = myLibrary[myLibrary.length - 1]
    //     book = document.createElement('div')
    //     book.textContent = `title: ${lastBook.title} 
    //                         author: ${lastBook.author}
    //                         pages: ${lastBook.pages}
    //                         ${lastBook.finished}` 
    //     book.classList.add('bookStyle')
    //     books.appendChild(book)
    // így nem kéne clearelni mindent submit book előtt, de a delete-nél üres helyek maradnának

    for (const book of myLibrary){
        let cover = document.createElement('div')
        cover.textContent =`title: ${book.title} 
                            author: ${book.author}
                            pages: ${book.pages}
                            ${book.finished}` 
        cover.classList.add('bookStyle')
        books.appendChild(cover)
    }
    const addedBooks = document.querySelectorAll('.bookStyle')
    addedBooks.forEach(book => {
        let del = document.createElement('BUTTON');
        del.classList.add('delBtn')
        del.textContent = 'x'
        book.appendChild(del)
    }) 
    //delete gomb event targetttel?
}

function clearBooks(){
    books.textContent = '';
}


function clearFields(){
    titleInput.value = ''
    authorInput.value =''
    pagesInput.value = ''
}

/*array:
myLibrary = [
    Book:{
        author:
        title:
        pages:
        finished: true
    },
        Book:{
        author:
        title:
        pages:
        finished: false
    },
]
*/