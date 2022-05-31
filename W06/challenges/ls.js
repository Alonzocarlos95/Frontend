let toDoList = [];

function saveToStorage(taskName, taskDate, taskPrior) {
    debugger;
    const toDoing = {
        id: Math.floor(Date.now() * Math.random()),
        content: taskName,
        dateSet: taskDate,
        priority: taskPrior.options[taskPrior.selectedIndex].id,
        completed: false
    }
    if(localStorage.getItem("todo-elements") != null){
        toDoList = JSON.parse(localStorage.getItem('todo-elements'))
    }
    toDoList.push(toDoing);
    addToLocalStorage(toDoList);
}

function addToLocalStorage(toDoList) {
    localStorage.setItem('todo-elements', JSON.stringify(toDoList));
    renderTodos(toDoList);
}

function renderTodos(toDoList) {
    debugger;
    function removeTodo(event) {
        debugger;
        event.target.parentNode.parentNode.remove();
    }

    function formatArray(bx) {
        debugger;
        let newArr = []
        for(var p = 0; p < bx.length; p++) {
            newArr.push(Number(bx[p].id));
        }
        return newArr;
    }

    function matchArray(a,b) {
        debugger;
        const inter = a.filter(element => b.includes(element));
        return inter; 
    }

    function getCurrentItems(original, changed) {
        debugger;
        for(var m = 0; m < original.length; m++) {
            for (var n = 0; n < changed.length; n++) {
                if(original[m].id === changed[n]) {
                    original.splice(m,1);
                }
            }
            
        }
    }

    const tbl = document.getElementById('tbl_todo');

        let boxesArray = document.querySelectorAll('[name="todoBox"]');
        if(boxesArray.length > 0) {
            debugger;
            let boxesIdFormated = formatArray(boxesArray);
            let toDoFormated = formatArray(toDoList);
            let intersection = matchArray(toDoFormated, boxesIdFormated);
            if(intersection.length > 0) {
                getCurrentItems(toDoList, intersection);
            }
        }
        // for(var j = 0; j < boxesArray.length; j++){
        //     if(toDoList[i].id != boxesArray[j].id) {
            for(var i = 0; i < toDoList.length; i++) {
                var row = tbl.insertRow(0);
                row.classList.add('r-action')
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                cell1.innerHTML = '<input type="checkbox" name="todoBox" class="chg-mng" id='+ toDoList[i].id +'>';
                cell1.removeAttribute('checked');
                cell2.innerHTML = '<i class="fa-solid fa-trash-can del-action" ></i>'
                cell2.onclick = removeTodo;
                cell3.innerHTML = '<span>'+ toDoList[i].content +'</span>';
                cell4.innerHTML = toDoList[i].dateSet;
                cell5.innerHTML = '<i class="fa-solid fa-flag '+ toDoList[i].priority +'"></i>';
            }
        }

//     }
// }

function loadStorage(items) {
    debugger;
    function removeTodo(event) {
        debugger;
        event.target.parentNode.parentNode.remove();
    }
    const tbl = document.getElementById('tbl_todo');
    for(var i = 0; i < items.length; i++) {
        debugger;
        var row = tbl.insertRow(0);
        row.classList.add('r-action')
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = '<input type="checkbox" name="todoBox" class="chg-mng" id='+ items[i].id +'>';
        cell1.removeAttribute('checked');
        cell2.innerHTML = '<i class="fa-solid fa-trash-can del-action"></i>'
        cell2.firstChild.addEventListener('click', removeTodo, false);
        cell3.innerHTML = '<span>'+ items[i].content +'</span>';
        cell4.innerHTML = items[i].dateSet;
        cell5.innerHTML = '<i class="fa-solid fa-flag '+ items[i].priority +'"></i>';
    }
}


export {
    saveToStorage,
    loadStorage
}