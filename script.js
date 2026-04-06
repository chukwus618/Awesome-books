class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [
      {
        title: 'Lorem ipsum',
        author: 'Testeroo Testyy',
      },
      {
        title: 'The Waterfalls',
        author: 'Emmanuel James',
      },
    ];
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
const addBtn = document.querySelector('#add-btn');
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.page-section');

function displayBooks() {
  booksContainer.innerHTML = '';

  library.books.forEach((book, index) => {
    booksContainer.innerHTML += `<tr class="book">
      <td>${book.title} by ${book.author}</td>
      <td><button type="button" class="remove-button" data-index="${index}">Remove</button></td>
    </tr>`;
  });
}

displayBooks();

addBtn.addEventListener('click', () => {
  library.addBook(title.value, author.value);
  displayBooks();
  title.value = '';
  author.value = '';
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
