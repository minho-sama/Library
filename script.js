

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

let myLibrary = [];

function Book (title, author, pages, finished){
    this.title = title
    this.author = author
    this.pages = pages
    this.finished = finished
}

function addBookToLibrary (){
    let title = titleInput.value
    let author = authorInput.value
    let pages = pagesInput.value
    let finished = prompt('hey', "")

    let newBook = new Book(title, author, pages, finished)
    myLibrary.push(newBook)

    titleInput.value = ''
    authorInput.value =''
    pagesInput.value = ''
}

submitBook.addEventListener('click', addBookToLibrary)