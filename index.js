function fetchBooks(renderBooks) {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then ( res => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json()
  })
  .then (data => {
    renderBooks(null, data)
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
