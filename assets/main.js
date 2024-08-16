const inputBox = document.getElementById('input-box');
const listContainer = document.querySelector(".list-container");
const btn = document.getElementById("btn");

/**
 * @void
 * Special function in order to save tasks and their states
 */
const saveData = ()=>{
    localStorage.setItem("data", listContainer.innerHTML);
}

/**
 * @void
 * Special function in order to show tasks */
const show = function () {
    listContainer.innerHTML = localStorage.getItem("data")
}

btn.addEventListener('click',()=>{
    if (inputBox.value !== "") {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
        
    }
    else {
        alert('Il faut renseigner une tache !');
    }
    inputBox.value ="";
    saveData();
    console.log(localStorage);
    
}) 

listContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        // console.log(e.target.classList.toggle('checked'));
        saveData();
        
    } else if (e.target.tagName === 'SPAN') {
        // console.log(e.target.parentElement.remove());
        e.target.parentElement.remove();
        saveData();
    }
    // console.log(e.target.classList.toggle('checked'));
}, false);

show();
