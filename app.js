//Book constructor

function Book(title, author, isbn)
{
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor

function UI() {}

//Add to list prototype
UI.prototype.addBookToList = function(book)
{
    //Get table body
    const list = document.getElementById('book-list');
    //create tr element
    const tr = document.createElement('tr');
    //Add the values inside tr
    tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#"><img src="https://img.icons8.com/material-rounded/24/000000/delete-forever.png"></a></td>
    `;
    //Append tr to list
    list.appendChild(tr);
}

//Clear form
UI.prototype.clearForm = function()
{
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event listeners

document.getElementById('book-form').addEventListener('submit', function(e) {
    //Form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    //Add these values to Book constuctor
    book = new Book(title, author, isbn);
     
    //Add these values to table
    ui = new UI();
    ui.addBookToList(book);

    //Clear form elements
    ui.clearForm();

    e.preventDefault();
})