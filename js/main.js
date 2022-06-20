const links = [
    {
        label: "Week 1",
        description: "Localstorage",
        level: {
            exercises:["W01/exercises/story_editor.html"],
            ref:[""]
        }
    },
    {
        label: "Week 2",
        description: "Arrays, Logic, Loops, and Functions",level: {
            exercises:["W02/exercises/ch2.html","W02/exercises/ch3.html","W02/exercises/ch4.html","W02/exercises/teamWork.html"],
            ref:[" - Ch2: Programming basics", " - Ch3: Arrays, Logic, and Loops", " - Ch4: Functions"," - Team Assignment"]
        }
    },
    {
        label: "Week 3",
        description: "Objects, DOM, and Events",
        level: {
            exercises:["W03/exercises/ch5.html", "W03/exercises/ch6.html", "W03/exercises/ch7.html"],
            ref:[" - Ch5: Objects", " - Ch6: Document Object Model", " - Ch7: Events"]
        }
    },
    {
        label: "Week 4",
        description: "Forms, OOP, and Modern Javascript",
        level: {
            exercises:["W04/exercises/ch8.html", "W04/exercises/ch12.html"],
            ref:[" - Ch8: Forms", " - Ch12: Object Oriented Programming"]
        }
    },
    {
        label: "Week 5",
        description: "Testing and Debugging",
        level: {
            exercises:["W05/exercises/ch10.html"],
            ref:[" - Ch10: Testing and Debugging"]
        }
    },
    {
        label: "Week 6",
        description: "Challenge One: Todo",
        level: {
            exercises:["W06/challenges/index.html"],
            ref:[" - Todo App"]
        }
    },
    {
        label: "Week 7",
        description: "Further Functions and AJAX",
        level: {
            exercises:["W07/exercises/ch11.html", "W07/exercises/ch13.html"],
            ref:[" - Ch11: Further Functions", " - Ch13: Ajax"],
        }
    },
    {
        label: "Week 8",
        description: "Unknown",
        level: {
            exercises:["#test"],
            ref:[""]
        }
    },
    {
        label: "Week 9",
        description: "Unknown",
        level: {
            exercises:["#test"],
            ref:[""]
        }
    },
    {
        label: "Week 10",
        description: "Unknown",
        level: {
            exercises:["#test"],
            ref:[""]
        }
    },
    {
        label: "Week 11",
        description: "Unknown",
        level: {
            exercises:["#test"],
            ref:[""]
        }
    },
    {
        label: "Week 12",
        description: "Unknown",
        level: {
            exercises:["#test"],
            ref:[""]
        }
    },
    {
        label: "Week 13",
        description: "Unknown",
        level: {
            exercises:["#test"],
            ref:[""]
        }
    },
]

const catalog = document.getElementById("catalog");
for(var i=0; i < links.length; i++){
    // debugger
    let catalogList = document.createElement("li");
    catalogList.classList.add("accordion");
    catalogList.innerHTML = '<div class="accordion-item" id="w'+ i +'"><a class="accordion-link" id="acc'+ i +'" href="#l'+ i +'" >'+ links[i].label +' - '+ links[i].description +'<i class="fa-solid fa-plus"></i><i class="fa-solid fa-minus"></i></a></div>';
    // for(var y = 0; y < links[i].level.exercises.length; y++){
    //     debugger;
    //     let topics = document.createElement("div");
    //     topics.id = 'ans'+i;
    //     topics.classList.add("answer");
    //     topics.innerHTML = '<a href='+ links[i].level.exercises[y]+'>Exercises</a>';
    //     document.getElementsByClassName('accordion')[i].appendChild(topics);
    // }
    catalog.appendChild(catalogList);
}

let acc_wrapper = document.getElementsByClassName("accordion-link");
for(var i = 0; i < acc_wrapper.length; i++){
    // debugger;
    for(var y = 0; y < links[i].level.exercises.length; y++){
            // debugger;
        let topics = document.createElement("div");
        topics.id = 'ans'+i;
        topics.classList.add("answer");
        topics.innerHTML = '<a href='+ links[i].level.exercises[y]+' target="_blank">Exercises '+ links[i].level.ref[y] +'</a>';
        document.getElementsByClassName("accordion-item")[i].appendChild(topics);
    }
}

// document.getElementById("acc0").addEventListener("click", () => {
//     // document.getElementById("ans0").style.maxHeight = "20em";
//     document.getElementById("ans0").classList.toggle("opened");
// })

Array.from(document.getElementsByClassName("accordion-link")).forEach(function(element){
    element.addEventListener("click",() => {
    //    debugger;
       if(element.parentNode.childNodes.length >= 3){
        let listOfItems = element.parentNode.childNodes;
        for(var i = 1; i < listOfItems.length; i++){
            listOfItems[i].classList.toggle("opened");
        }
       }
       else {
        element.parentNode.childNodes[1].classList.toggle("opened");
       }
        
    })
})

window.addEventListener("scroll", function(){
    var navBar = this.document.querySelector("nav");
    navBar.classList.toggle("sticky", window.scrollY > 0);
})