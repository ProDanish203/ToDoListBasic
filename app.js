// Selectors
const input = document.getElementById('input-field');
const addBtn = document.getElementById('addBtn');
const listContainer = document.getElementById('list-container');


const addTask = () => {
    if(input.value == ""){
        alert("Field cannot be empty!!!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "<i class='fas fa-trash'></i>";
        li.appendChild(span);

    }
    input.value = "";
    saveData();
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
       saveData(); 
    }
    else if(e.target.tagName == "I"){
        e.target.parentElement.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

getData();

input.onkeyup = (e)=> {
    if(e.keyCode === 13){
        addTask();
    }
}

addBtn.addEventListener("click", addTask);