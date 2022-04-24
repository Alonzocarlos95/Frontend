const links = [
    {
        label: "Week 1",
        description: "Localstorage",
        level: {
            exercises:"W01/exercises/story_editor.html"
        }
    },
    {
        label: "Week 2",
        description: "Arrays, Logic, Loops, and Functions",level: {
            exercises:"#test"
        }
    },
    {
        label: "Week 3",
        description: "Objects, DOM, and Events",
        level: {
            exercises:"../W01/exercises/story_editor.html"
        }
    },
    {
        label: "Week 4",
        description: "Unknown",
        level: {
            exercises:"#test"
        }
    },
    {
        label: "Week 5",
        description: "Unknown",
        level: {
            exercises:"#test"
        }
    },
    {
        label: "Week 6",
        description: "Unknown",
        level: {
            exercises:"#test"
        }
    },
    {
        label: "Week 7",
        description: "Unknown",
        level: {
            exercises:"#test"
        }
    },
    {
        label: "Week 8",
        description: "Unknown",
        level: {
            exercises:"#test"
        }
    },
    {
        label: "Week 9",
        description: "Unknown",
        level: {
            exercises:"#test"
        }
    },
    {
        label: "Week 10",
        description: "Unknown",
        level: {
            exercises:"#test"
        }
    },
    {
        label: "Week 11",
        description: "Unknown",
        level: {
            exercises:"#test"
        }
    },
    {
        label: "Week 12",
        description: "Unknown",
        level: {
            exercises:"#test"
        }
    },
    {
        label: "Week 13",
        description: "Unknown",
        level: {
            exercises:"#test"
        }
    },
]

const catalog = document.getElementById("catalog");
for(var i=0; i < links.length; i++){
    debugger
    let catalogList = document.createElement("li");
    catalogList.classList.add("accordion");
    catalogList.innerHTML = '<div class="accordion-item" id="w'+ i +'"><a class="accordion-link" id="acc'+ i +'" href="#l'+ i +'" >'+ links[i].label +' - '+ links[i].description +'<i class="fa-solid fa-plus"></i><i class="fa-solid fa-minus"></i></a><div id="ans'+ i +'" class="answer"><a href='+ links[i].level.exercises +'>Exercises</a></div></div>';
    catalog.appendChild(catalogList);
}

// document.getElementById("acc0").addEventListener("click", () => {
//     // document.getElementById("ans0").style.maxHeight = "20em";
//     document.getElementById("ans0").classList.toggle("opened");
// })

Array.from(document.getElementsByClassName("accordion-link")).forEach(function(element){
    element.addEventListener("click",() => {
       debugger;
        element.parentNode.childNodes[1].classList.toggle("opened");
    })
})