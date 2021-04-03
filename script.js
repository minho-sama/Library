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
    if (titleInput.value == '') title = 'unknown'
    if (authorInput.value == '') author = 'unknown'
    if (pagesInput.value == '') pages = 'unknown'

    let finished = checked() //marked as finished or not

    let newBook = new Book(title, author, pages, finished)
    myLibrary.push(newBook)
    
    print()

    clearFields()
}

submitBook.addEventListener('click', addBookToLibrary)


function print(){
    for (const book of myLibrary){
        let cover = document.createElement('div')
        cover.textContent =`title: ${book.title} 
                            author: ${book.author}
                            pages: ${book.pages}` 
        
        cover.classList.add('bookStyle')

        if (book.finished){
            cover.classList.add('bookStyle2')
        }
        else{
            cover.classList.add('bookStyle')
        }

        books.appendChild(cover)
    }

    const addedBooks = document.querySelectorAll('.bookStyle, .bookStyle2')

    addedBooks.forEach(book => {
        book.addEventListener('click', removeBook)

        let del = document.createElement('BUTTON');
        del.classList.add('delBtn')
        del.textContent = 'x'
        book.appendChild(del)
    }) 
    //ilyen forEach létezik lol... 
    addedBooks.forEach((book, i) => book.setAttribute('data-index', i))
}

function removeBook(event){
    if (event.target.classList.contains('delBtn')){
        let book = event.target.parentElement
        books.removeChild(book)
    }
    //delete child from array, according to data-attribute
    let indexInArray = event.target.dataset.index
    myLibrary.splice( indexInArray, 1)
}

function clearBooks(){
    books.textContent = '';
}

function clearFields(){
    titleInput.value = ''
    authorInput.value =''
    pagesInput.value = ''
}

function toggle(){
}

// megcsinálni h kirakja  checkboxot minden bookra
// if false -> átállítja a finished-et falsera, vice versa
        //hasonlóna event target és data-index, kikeresi myLibrary[i].object.finished = 'false'
 let array = [
     object0 = {
         finished: 'false'
     },
     object1 = {
        finished: 'true'
    },
    object2 = {
        read: 'false'
    }
 ]
 array[1].finished //= true

 //new Books instanceof Book() 