function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.report = function () {
    return `${title} by ${author},${pages} pages, ${read}`;
  };
}
const book1 = new Book("Meditations", "Karthik", "205", "read");
console.log(book1.report());
