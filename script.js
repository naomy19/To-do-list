// Delete button
const list = document.querySelector('#list ul')

list.addEventListener('click', function (e) {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement
    list.removeChild(li)
  } else if (e.target.nodeName === 'P') {
    //Done class
    const p = e.target
    p.classList.toggle('done')
  }
})

// Add item
// const addForm = document.forms['add']

// addForm.addEventListener('submit', function (e) {
//   e.preventDefault() //prevent refreshing page
//   var value = addForm.querySelector('input[type="text"]').value //double quotation marks

// Add items
var button = document.querySelector('#enter')
var input = document.querySelector('#userinput')

function inputLength() {
  return input.value.length
}

function firstInput() {
  var elements = document.getElementsByClassName('instructions')
  return elements.length > 0
}

function createListElement() {
  //delete intructions
  if (firstInput()) {
    var inst = document.querySelector('.instructions')
    inst.remove()
  }

  //Create elements
  const li = document.createElement('li')
  const itemName = document.createElement('p')
  const deleteBtn = document.createElement('button')

  // add content
  deleteBtn.textContent = 'x'
  itemName.textContent = input.value

  // add classes and id
  li.classList.add('item')
  deleteBtn.classList.add('delete')
  deleteBtn.setAttribute('id', 'delete')

  // Append to document
  li.appendChild(itemName) //putting p and btn inside li
  li.appendChild(deleteBtn)
  list.appendChild(li) //putting li inside the ul

  input.value = ''
}

function addAfterClick(e) {
  if (inputLength() > 0) {
    e.preventDefault()
    createListElement()
  }
  e.preventDefault()
}

function addAfterKeypress(e) {
  if (inputLength() > 0 && e.keyCode === 13) {
    e.preventDefault()
    createListElement()
  }
}

button.addEventListener('click', addAfterClick)
input.addEventListener('keypress', addAfterKeypress)

// Search
// gets input from form w/ id 'search'
const searchBar = document.forms['search'].querySelector('input')
// keyup: when the user releases a key on the keyboard
searchBar.addEventListener('keyup', function (e) {
  const term = e.target.value.toLowerCase() //what is written in the search bar
  const items = list.getElementsByTagName('li')
  Array.from(items).forEach(function (i) {
    const title = i.firstElementChild.textContent // first element of the li
    if (title.toLowerCase().indexOf(term) != -1) {
      i.style.display = 'flex'
    } else {
      i.style.display = 'none'
    }
  })
})
