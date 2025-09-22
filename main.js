let inputElement = document.querySelector('.js-input');
let addButton = document.querySelector('.js-addbutton');
let task = document.querySelector('.js-paragraph');
let display = document.querySelector('.display');
let list = [];
let toDo;
//let cancelButton = document.querySelector('.js-cancelbutton');
let doneButton = document.querySelector('.js-donebutton');



//display list function
function displayList() {

   let html = ''

   for (let i = 0; i < list.length; i++) {
      let toDo = list[i];
      console.log(list)
      const listDisplay =
         `<div>
       <p class="js-paragraph"> ${toDo}</p>
      </div>
      <div class="display-buttons">
        <button class="js-cancelbutton " onclick="
         list.splice(${i},1)
        displayList()
        saveList()
         ">cancel
        </button>
        <button class="js-donebutton" onclick=" 
        taskDone()
        saveList()
         ">Done
        </button>
      </div>`

      html += listDisplay

   }
   document.querySelector('.display').innerHTML = html
saveList()
};



//add todoitem function
function addItem() {
   let item = inputElement.value
   list.push(item)
   displayList()
   inputElement.value = ''
  
};


//strikethrough done function


function taskDone(){
display.addEventListener('click',(e)=>{
   e.target.classList.add('done-paragraph')
   
}
   
)}

//save data
function saveList(){
localStorage.setItem("list",display.innerHTML)
};
 function getList(){
  localStorage.getItem("list")
 }
 getList()