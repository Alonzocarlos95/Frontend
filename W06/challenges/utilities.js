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
            alert('You are good to go');
            return true;
        }
    }

    if (formComplete) {
        //Close Modal
        document.getElementById('bounce_modal').classList.remove('active');

        addToDo();
        cleanForm();
    }

    function addToDo() {
        const tbl = document.getElementById('tbl_todo');
        const idItem = Math.floor(Date.now() * Math.random());
        var row = tbl.insertRow(0);
        row.classList.add('r-action')
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = '<input type="checkbox" name="todoBox" class="chg-mng" id='+ idItem +'>'
        cell1.removeAttribute('checked');
        cell2.innerHTML = '<span>'+ task.value +'</span>';
        cell3.innerHTML = dateTask.value;
        cell4.innerHTML = '<i class="fa-solid fa-flag '+ priorTask.options[priorTask.selectedIndex].id +'"></i>';
        cell5.innerHTML = '<i class="fa-solid fa-trash-can" ></i>'
        cell5.setAttribute('style','display:none;');
        // cell4.innerHTML = priorTask.options[priorTask.selectedIndex].id;
    }

    function cleanForm() {
        task.value = '';
        dateTask.value = '';
    }

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

    Array.from(document.getElementsByClassName("r-action")).forEach(function(element) {
        debugger;
        element.addEventListener('mouseover', (element) => {
            debugger;
            const trashElement = element.target.parentNode.childNodes;
            trashElement[4].setAttribute('style','display:table-cell;');

        }
        )
        element.addEventListener('mouseout', (element) => {
            const trashElement = element.target.parentNode.childNodes;
            trashElement[4].setAttribute('style','display:none;');
        })
    });

    function completeTask(item) {
        debugger;
        document.getElementById(item).parentNode.nextSibling.childNodes[0].classList.add('completed');
    }

    function uncheckTask(item) {
        document.getElementById(item).parentNode.nextSibling.childNodes[0].classList.remove('completed')
    }

}

export {
    getCurrentDate,
    saveForm
}