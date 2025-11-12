const books = JSON.parse(localStorage.getItem('books')) || [
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
books.forEach((book) => {
  booksContainer.innerHTML += `<section>
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button type="button">Remove</button>
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
  books.forEach((book) => {
    booksContainer.innerHTML += `<section>
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button type="button">Remove</button>
      <hr>
    </section>`;
  });
  localStorage.setItem('books', JSON.stringify(books));
  JSON.parse(localStorage.getItem('books'));
});