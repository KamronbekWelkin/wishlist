let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

filter.addEventListener('keyup', filterItem);

// Call function 
form.addEventListener('submit', runEvent);

let deleteBtn = document.getElementById('items');
    deleteBtn.addEventListener('click', removeItem);

// Filter Items
function filterItem(e){
    let text = e.target.value.toLowerCase();
     
    //get Item
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        let itemArray = item.firstChild.textContent;
        if(itemArray.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}

// Add item function
function runEvent(e){
    e.preventDefault();

    // Get input value
    let inputValue = document.getElementById('item').value;
    
    // Create item
    let li = document.createElement('li');

    // add class to li
    li.className = 'element';

    // add text to li
    li.appendChild(document.createTextNode(inputValue));
    
    //push item
    itemList.appendChild(li);
    
    //create button
    let button = document.createElement('button');

    //add Text to botton
    button.appendChild(document.createTextNode('X'));

    //add classes to button;
    button.className = " trash delete";

    // push button to li
    li.appendChild(button);

}

// function remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure? ')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    console.log(e.target.parentElement);
}
