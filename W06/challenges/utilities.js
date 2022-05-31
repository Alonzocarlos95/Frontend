import {saveToStorage, loadStorage} from "./ls.js"

function getCurrentDate(elementId){
    return setInterval(
        () => document.getElementById(elementId).innerHTML = new Date().toLocaleTimeString(), 1000
    );
}

function openModal() {

}

function saveForm() {
    const task = document.getElementById('taskName');
    const dateTask = document.getElementById('taskDate');
    const priorTask = document.getElementById('priorities');
    const formComplete = validateTask();

    function validateTask() {
        
        if(task.value === '' || dateTask.value === '') {
            alert('Please fill all the fields');
            return false;
        }
        else {
            // alert('You are good to go');
            return true;
        }
    }

    if (formComplete) {
        //Close Modal
        document.getElementById('bounce_modal').classList.remove('active');
        if(document.getElementsByClassName('quotes')[0].classList.contains('q-active')) {
            document.getElementsByClassName('quotes')[0].classList.remove('q-active');
        }
        addToDo(task,dateTask,priorTask);
        cleanForm();
    }

    function addToDo(x, y, z) {
        saveToStorage(x.value ,y.value ,z);
        // const tbl = document.getElementById('tbl_todo');
        // const idItem = Math.floor(Date.now() * Math.random());
        // var row = tbl.insertRow(0);
        // row.classList.add('r-action')
        // var cell1 = row.insertCell(0);
        // var cell2 = row.insertCell(1);
        // var cell3 = row.insertCell(2);
        // var cell4 = row.insertCell(3);
        // var cell5 = row.insertCell(4);
        // cell1.innerHTML = '<input type="checkbox" name="todoBox" class="chg-mng" id='+ idItem +'>'
        // cell1.removeAttribute('checked');
        // cell2.innerHTML = '<i class="fa-solid fa-trash-can" ></i>'
        // cell3.innerHTML = '<span>'+ task.value +'</span>';
        // cell4.innerHTML = dateTask.value;
        // cell5.innerHTML = '<i class="fa-solid fa-flag '+ priorTask.options[priorTask.selectedIndex].id +'"></i>';
        // cell4.innerHTML = priorTask.options[priorTask.selectedIndex].id;
    }

    function cleanForm() {
        task.value = '';
        dateTask.value = '';
    }

    function testing() {
        Array.from(document.getElementsByClassName("chg-mng")).forEach(function(element) {
            debugger;
            element.addEventListener('click', (element) => {
                debugger;
                if(element.target.checked === true){
                    completeTask(element.target.id);
                }
                else {
                    uncheckTask(element.target.id);
                }
    
            }
            )
        });
    }


    actionEvents();


}

function actionEvents() {
    Array.from(document.getElementsByClassName("chg-mng")).forEach(function(element) {
        debugger;
        element.addEventListener('click', (element) => {
            debugger;
            if(element.target.checked === true){
                completeTask(element.target.id);
            }
            else {
                uncheckTask(element.target.id);
            }

        }
        )
    });
}

function completeTask(item) {
    debugger;
    document.getElementById(item).parentNode.nextSibling.nextSibling.childNodes[0].classList.add('completed');
}

function uncheckTask(item) {
    document.getElementById(item).parentNode.nextSibling.nextSibling.childNodes[0].classList.remove('completed')
}

function callLocalStorage(todoStorage) {
    loadStorage(todoStorage);
    actionEvents();
}



export {
    getCurrentDate,
    saveForm,
    callLocalStorage,
}