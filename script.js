class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook(title, author) {
    this.books.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(index) {
    this.books = this.books.filter((_, i) => i !== index);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
const library = new Library();
const booksContainer = document.getElementById('books-container').querySelector('tbody');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.page-section');

function displayBooks() {
  booksContainer.innerHTML = '';
  if (library.books.length === 0) {
    booksContainer.innerHTML = `
      <tr>
        <td colspan="2">No books in your library</td>
      </tr>`;
    return;
  }
  library.books.forEach((book, index) => {
    booksContainer.innerHTML += `<tr class="book">
      <td>${book.title} by ${book.author}</td>
      <td><button type="button" class="remove-button" data-index="${index}">Remove</button></td>
    </tr>`;
  });
}

displayBooks();

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  library.addBook(title.value, author.value);
  displayBooks();
});

booksContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-button')) {
    const index = Number(e.target.dataset.index);
    library.removeBook(index);
    displayBooks();
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const sectionId = link.dataset.section;
    sections.forEach((section) => {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  });
});

const dateTime = document.getElementById('date-time');

function updateDateTime() {
  const now = new Date();

  dateTime.textContent = now.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
}

updateDateTime();
setInterval(updateDateTime, 1000);