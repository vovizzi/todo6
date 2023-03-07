///////Первый блок.......

const button = document.querySelector('.todo-main-view-button')
const input = document.querySelector('.todo-main-view-input')
let alltext = input.value
const addElementsLabel = document.createElement('label')
addElementsLabel.classList.add = 'add-elements-label'
const ul = document.createElement('ul')
ul.classList.add = 'new-list'
const li = document.createElement('li')
li.classList.add = 'new-list-li'
const nllDiv = document.createElement('div') 
nllDiv.classList.add = 'new-list-li-div'
const nllSpan = document.createElement('span')
nllSpan.classList.add = 'new-list-li-span'
const nllInput = document.createElement('input')
nllInput.classList.add = 'new-list-li-input'
const nllButton = document.createElement('button')
nllButton.classList.add = 'new-list-li-button'
const divwrapper = document.createElement('div')
divwrapper.classList.add = 'wrapper'
const section = document.querySelector('.add-elements')
section.append(ul)

//Второй блок.....................

const divLowElements = document.createElement('div')
divLowElements.classList.add = 'low-elements-action'
const divSpan = document.createElement('div')
divSpan.classList.add = 'low-elements-span'

const divButton = document.createElement('div')
divButton.classList.add = 'low-elements-action-button'

// Активируем работу кнопки 
button.onclick = function () {
    let alltext = input.value
    
    if(alltext.length===0) {
        return ''
    }

    ul.insertAdjacentHTML('beforeEnd', `<li class="new-list-li">
    <div class="new-list-li-div">
       <span class="new-list-li-span">${alltext}</span>
       <input  type="checkbox" class="new-list-li-input">
       <button data-action="delete"  class="new-list-li-button">x</button>
    </div>
    </li>`)
    input.value=''   
    if(ul.length>0) {
    
    }
}

// Делам вывод с помощью кноппки enter
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
        document.getElementById('butt').click();
    }
    });

//Удаляем элементы
    ul.addEventListener('click', deleteTask)

    function deleteTask(event) {
        console.log(event.target.dataset.action)
       if(event.target.dataset.action === 'delete') {
           const parentNode = event.target.closest('.new-list-li')
           parentNode.remove()
       }
    }


// Добавление нижнего блока

