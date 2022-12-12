//SELCTORS
const form= document.querySelector("form");
const inputTitle= document.querySelector(".input-title input");
const selectPriority= document.querySelector(".select-priority select");
const chooseStatus= document.querySelectorAll(".radio");
const submitButton= document.querySelector(".submit-btn button");
const tasksContainer= document.querySelector(".list-container ul");


let taskArray=[];


//EVENT LISTENERS
submitButton.addEventListener("click", (event)=> {
    addNewTask(event);
});




//FUNCTIONS
function addNewTask(event){
 event.preventDefault();

    const title= inputTitle.value;
    const priority= selectPriority.value;
    let status;

    
    
    
    chooseStatus.forEach(radio => {
        console.log(radio);
        if(radio.checked){
            status= radio.value;
        }
    })
    

    const newTask= {title: title, priority: priority, status: status};

    taskArray.push(newTask);

    const newTaskHtml= `
    <li class="task-container">
    <span class="title">${title}</span>
    <span class="priority">${priority}</span>
    <span class="status">${status}</button>
    <button class="remove-btn">Remove</button>
    <button class="mark-btn">Mark as complete</button>
</li>
    `;

    tasksContainer.insertAdjacentHTML("afterbegin", newTaskHtml);

    console.log(taskArray);
}
