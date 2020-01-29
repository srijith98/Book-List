//Book constructor

function Book(title, author, isbn)
{
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor

function UI() {}

// Show alert
UI.prototype.showAlert = function(message, class_name)
{
    const container = document.querySelector('.container');
    form = document.querySelector('form');
    const div = document.createElement('div');
    div.textContent = message;
    div.className = class_name + ' u-full-width alert';
    container.insertBefore(div, form);

    //Clear error
    setTimeout(clearError, 3000);
}

//Clear error
function clearError()
{
    document.querySelector('.alert').remove();
}
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
        <td><a href="#"><img src="https://img.icons8.com/material-rounded/24/000000/delete-forever.png" class = "delete"></a></td>
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

//Delete book
UI.prototype.deleteBook = function(target)
{
    //Delete the book only if clicked on delete icon
    if(target.className === 'delete')
    {
        target.parentElement.parentElement.parentElement.remove();
    }
}

//Event listeners

//Event listener for submit
document.getElementById('book-form').addEventListener('submit', function(e) {
    //Form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
    
    // Instantiate UI
    const ui = new UI();

    if(title === '' || author === '' || isbn === '')
    {
        ui.showAlert('Please fill in all fields..', 'error');
    }
    else
    {
        //Add these values to Book constuctor
        const book = new Book(title, author, isbn);

        //Add these values to table
        ui.addBookToList(book);

        //Show success message
        ui.showAlert('Book added successfully..', 'success');
        //Clear form elements
        ui.clearForm();
    }
    e.preventDefault();
})

//Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {
    
    // Instantiate UI
    const ui = new UI();

    //Delete the book
    ui.deleteBook(e.target);

    //Show delete succesful mesaage
    ui.showAlert('Book deleted successfully..', 'success');

    e.preventDefault();
})