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
        
        // cover.classList.add('bookStyle')

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

    createStatus()
}

function removeBook(event){
    if (event.target.classList.contains('delBtn')){
        let book = event.target.parentElement
        books.removeChild(book)
    }
    //delete child from ARRAY, according to data-attribute
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

function createStatus(){
    const addedBooks = document.querySelectorAll('.bookStyle, .bookStyle2')
    addedBooks.forEach(book =>{
        let status = document.createElement('button')
        status.classList.add('status')
        status.textContent = 'mark as read'
        book.appendChild(status)
    })

    const statusBtns = document.querySelectorAll('.status')
    statusBtns.forEach(btn => {
        btn.addEventListener('click', changeColor)
    })
}

function changeColor(event){
    let book = event.target.parentElement

    if (event.target.classList.contains('status') 
        && event.target.textContent == 'mark as read'){
        book.classList.remove('bookStyleNotRead')
        book.classList.add('bookStyleRead')
        event.target.textContent = 'mark as unread'

        //change finished property in object
        let index = book.dataset.index
        myLibrary[index].finished = 'true'
    }
    else if(event.target.classList.contains('status') 
        && event.target.textContent == 'mark as unread'){

        book.classList.remove('bookStyleRead')
        book.classList.add('bookStyleNotRead')
        event.target.textContent = 'mark as read'

        //change prop in obj
        let index = book.dataset.index
        myLibrary[index].finished = 'false'
    }

}
// event.target.textContent == 'mark as read'