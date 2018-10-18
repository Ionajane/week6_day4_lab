document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);



});



const handleFormSubmit = function(event) {
  event.preventDefault();
  const result = document.querySelector('#reading-list');

  const newListItem = document.createElement('li');

  const title = document.createElement('h2')
  title.textContent = `${this.title.value}`;
  newListItem.appendChild(title)

  const author = document.createElement('h3')
  author.textContent = `${this.author.value}`;
  newListItem.appendChild(author)

  newListItem.classList.add("book");

  const list = document.querySelector('ul');
  list.appendChild(newListItem);
  //result.textContent = `Title: ${this.title.value} Author: ${this.author.value}, Category: ${this.category.value}`;
  //call function that adds this 'event' into a list item'
};



//function that adds arguements into a new list item
