let books = JSON.parse(localStorage.getItem('books')) || [
  {
    title: 'Lorem ipsum',
    author: 'Testeroo Testyy',
  },

  {
    title: 'The Waterfalls',
    author: 'Emmanuel James',
  },
];

const booksContainer = document.getElementById('books-container');
books.forEach((book, index) => {
  booksContainer.innerHTML += `<section>
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button type="button" class="remove-button" data-index="${index}">Remove</button>
      <hr>
  </section>`;
});

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  const newBook = {
    title: title.value,
    author: author.value,
  };
  books.push(newBook);
  booksContainer.innerHTML = '';
  books.forEach((book, index) => {
    booksContainer.innerHTML += `<section>
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button type="button" class="remove-button" data-index="${index}">Remove</button>
      <hr>
    </section>`;
  });
  localStorage.setItem('books', JSON.stringify(books));
  JSON.parse(localStorage.getItem('books'));
});

booksContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-button')) {
    const index = Number(e.target.dataset.index);
    books = books.filter((_, i) => i !== index);
    localStorage.setItem('books', JSON.stringify(books));

    booksContainer.innerHTML = '';
    books.forEach((book, index) => {
      booksContainer.innerHTML += `<section>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button type="button" class="remove-button" data-index="${index}">Remove</button>
        <hr>
      </section>`;
    });
  }
});