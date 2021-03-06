import { getCurrentDate, saveForm, callLocalStorage } from "./utilities.js";

window.onload = function() {
    debugger;
    if(localStorage.getItem("todo-elements") != null) {
        debugger;
        callLocalStorage(JSON.parse(localStorage.getItem("todo-elements")));
            // elements = JSON.parse(localStorage.getItem("todo-elements"));
            // console.log(elements);
    }
    else {
        document.getElementsByClassName('quotes')[0].classList.add('q-active');
    }
}

getCurrentDate('cu_date'); //Get the current Date to display in the header image.

document.getElementById("addTask").addEventListener('click', () => {
    document.getElementById("bounce_modal").classList.add("active");
});

document.addEventListener('click', function(e){
    if (!e.target.matches('.modal')) return;
    else{
        if (e.target.classList.contains('do-not-close')) return;
        else{
            e.target.classList.remove('active');
        }      
    }
});

document.addEventListener('click', function (e) {

    //check is the right element clicked
    if (!e.target.matches('.m-close')) return;
    else{
       //remove active class on modal
       e.target.parentElement.parentElement.classList.remove('active');
    }
});

document.getElementById('saveTask').addEventListener('click', saveForm, false);
debugger;
const checkboxes = document.querySelectorAll("input[type=checkbox]");

function checkVal() {
    alert('More checking')
}

