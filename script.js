const books = [
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
