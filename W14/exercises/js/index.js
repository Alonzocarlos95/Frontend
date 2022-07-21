const bookCategories = ['Business','Fiction','Code','Art & Literature','Biography','Cooking','Drama','Education','Fantasy','Horror','Humor','Religious','Sports','Suspense','Thriller'];
let myBookList = [];

function lookUpVolume(id){
    debugger;
    const apiContent = {};
    fetch("https://www.googleapis.com/books/v1/volumes/"+ id +"?key=AIzaSyD1RtY9SCt33V5xXlwuB1YY4oVmS8QHQuA")
        .then(res => res.json())
        .then(data => {
            debugger;
            apiContent.description = data.volumeInfo.description
        })
        return apiContent;
}

function openModal(x) {
    debugger;
    let getSrc;
    let getBookId;
    if(x.target.className == "re-books-wrapper"){
        getSrc = x.target.firstChild.firstChild.src;
        getBookId = x.target.lastChild.value;
    }
    else if(x.target.className == "book-thumb"){
        getSrc = x.target.firstChild.src;
        getBookId = x.target.parentNode.lastChild.value;
    }
    else if(x.target.className == "b-title"){
        getSrc = x.target.parentNode.firstChild.firstChild.src;
        getBookId = x.target.parentNode.lastChild.value;
    }
    else if(x.target.className == "b-nAuthor"){
        getSrc = x.target.parentNode.firstChild.firstChild.src;
        getBookId = x.target.parentNode.lastChild.value;
    }
    else if(x.target.className == "b-nAuthor2"){
        getSrc = x.target.parentNode.parentNode.firstChild.firstChild.src;
        getBookId = x.target.parentNode.parentNode.lastChild.value;
    }
    else {
        getSrc = x.target.src;
        getBookId = x.target.parentNode.parentNode.lastChild.value;
    }
    // let getDataApi = lookUpVolume(getBookId);
    document.getElementById("book_avatar").src = getSrc;
    document.querySelector(".book-description").textContent = getBookId;
    domPropt.modal.classList.toggle("m-active");
}


const domPropt = {
    modal: document.getElementById("modal_bottom"),
    categoryBarId: document.getElementById("category_bar"),
    categoriesId: document.getElementById("categor_opt"),
    recommended: document.getElementById("recommendBook"),
    lastAdded: document.getElementById("latestBooks"),
    optionLeft: document.getElementById("opt_recom"),
    optionRight: document.getElementById("opt_latest"),
    valThumbnail({imageLinks }) {
        debugger;
        if(imageLinks  == undefined || imageLinks  === ""){
            return "/imgs/logo.svg";
        }
        else {
            return imageLinks.thumbnail;
        }
        
    },
    valAuthorName({authors}){
        if(authors  == undefined || authors  === ""){
            return "";
        }
        else {
            return authors;
        }
    }
}


fetch("https://www.googleapis.com/books/v1/volumes?q=subject:javascript&printType=books&maxResults=8&key=AIzaSyD1RtY9SCt33V5xXlwuB1YY4oVmS8QHQuA")
    .then(res => res.json())
    .then(data => {
        for(var i = 0; i < data.items.length;i++) {
            domPropt.recommended.innerHTML += `<div class="re-books-wrapper"><div class="book-thumb"><img src="${domPropt.valThumbnail(data.items[i].volumeInfo)}" alt="${data.items[i].volumeInfo.title}"></div><span class="b-title">${data.items[i].volumeInfo.title}</span><p class="b-nAuthor"><strong class="b-nAuthor2">${domPropt.valAuthorName(data.items[i].volumeInfo)}</strong></p><input type="hidden" value="${data.items[i].volumeInfo.description}"></div>`;
        }

    })
    .then(data => {
        console.log(domPropt.bookDetails);
        // document.getElementsByClassName('re-books-wrapper')[0].addEventListener('click', openModal);
        // document.getElementsByClassName('re-books-wrapper')[1].addEventListener('click', openModal);
        let recommendedBooks = document.querySelectorAll('.re-books-wrapper');
        recommendedBooks.forEach(element => {
            element.addEventListener('click', openModal)
        })
    })


    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:javascript&printType=books&maxResults=8&orderBy=newest&key=AIzaSyD1RtY9SCt33V5xXlwuB1YY4oVmS8QHQuA")
    .then(res => res.json())
    .then(data => {
        for(var i = 0; i < data.items.length;i++) {
            domPropt.lastAdded.innerHTML += `<div class="re-books-wrapper"><div class="book-thumb"><img src="${domPropt.valThumbnail(data.items[i].volumeInfo)}" alt="${data.items[i].volumeInfo.title}"></div><span class="b-title">${data.items[i].volumeInfo.title}</span><p class="b-nAuthor"><strong class="b-nAuthor2">${domPropt.valAuthorName(data.items[i].volumeInfo)}</strong></p></div>`;
        }

    })
    // .then(data => {
    //     let recommendedBooks = document.querySelectorAll('.re-books-wrapper');
    //     recommendedBooks.forEach(element => {
    //         element.addEventListener('click', openModal)
    //     })
    // })

domPropt.categoryBarId.addEventListener('click', () => {
    domPropt.categoriesId.classList.toggle("show-menu");
})

function fillCategoryOpt() {
    for(var i=0; i < bookCategories.length; i++) {
        domPropt.categoriesId.innerHTML += `<li>${bookCategories[i]}</li>`;
    }
}

document.addEventListener('click',function(e){
    if(!e.target.matches('.modal-bottom')){
        e.target.classList.remove('m-active');
        return;
    }
})

const slider = document.querySelector(".slider");
const bookTypes = document.querySelectorAll(".b-types");
bookTypes.forEach((bType) => {
    bType.addEventListener("click",(event) => {
        // debugger;
        if (event.target.id === "opt_latest") {
            domPropt.optionLeft.classList.remove("active-opt");
            domPropt.optionRight.classList.add("active-opt");
            slider.style.transform = 'translate(-50%)';
        }
        else {
            domPropt.optionLeft.classList.add("active-opt");
            domPropt.optionRight.classList.remove("active-opt");
            slider.style.transform = 'translate(0%)';
        }
    })
})

fillCategoryOpt();

// google.books.load();

// function initialize() {
//     var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
//     viewer.load('ISBN:9781451648546');
//   }

//   google.books.setOnLoadCallback(initialize);

//   function saveToMyLibrary(volumeId, imageLink, infoLink){
//     const myBook = {
//         id:
//     }
//   }

  function addToLocalStorage(){
    localStorage.setItem('myLibrary', JSON.stringify(myBookList));
  }