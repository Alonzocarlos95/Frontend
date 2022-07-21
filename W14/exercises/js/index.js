const bookCategories = ['Business','Fiction','Code','Art & Literature','Biography','Cooking','Drama','Education','Fantasy','Horror','Humor','Religious','Sports','Suspense','Thriller'];
let myBookList = [];
let bookCollection = {};

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

function getRating(rate) {
    const starTotal = 5;
    let starTarget = document.querySelector(".stars-inner");
    if(rate === undefined){
        starTarget.style.width = "20%";
    }
    else {
        const starPercentage = (rate / starTotal) * 100;
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
        starTarget.style.width = starPercentageRounded;
    }
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
    for(let ref in bookCollection){
        console.log(bookCollection[ref].Ikey);
        if(getBookId === bookCollection[ref].Ikey){
            document.getElementById("b_publisher").textContent = bookCollection[ref].info[0].authors[0];
            document.getElementById("b_pages").textContent = bookCollection[ref].info[4].pageCount;
            document.getElementById("book_title").textContent = bookCollection[ref].info[6].title;
            document.getElementById("book_subtitle").textContent = bookCollection[ref].info[7].subtitle;
            document.querySelector(".book-description").textContent = bookCollection[ref].info[8].description;
            document.getElementById("published").textContent = getRating(bookCollection[ref].info[9].averageRating);
            document.getElementById("published").textContent = bookCollection[ref].info[10].publishedDate;
        }
    }
    document.getElementById("book_avatar").src = getSrc;
    
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
            bookCollection[i] = {"Ikey": data.items[i].id, "info": [{"authors": data.items[i].volumeInfo.authors},{"categories": data.items[i].volumeInfo.categories}, { "smallThumbnail": data.items[i].volumeInfo.imageLinks.smallThumbnail}, {"infoLink": data.items[i].volumeInfo.infoLink}, {"pageCount": data.items[i].volumeInfo.pageCount}, {"previewLink": data.items[i].volumeInfo.previewLink}, {"title":data.items[i].volumeInfo.title}, {"subtitle":data.items[i].volumeInfo.subtitle}, {"description":data.items[i].volumeInfo.description}, {"averageRating":data.items[i].volumeInfo.averageRating}, {"publishedDate":data.items[i].volumeInfo.publishedDate}]}
            domPropt.recommended.innerHTML += `<div class="re-books-wrapper"><div class="book-thumb"><img src="${domPropt.valThumbnail(data.items[i].volumeInfo)}" alt="${data.items[i].volumeInfo.title}"></div><span class="b-title">${data.items[i].volumeInfo.title}</span><p class="b-nAuthor"><strong class="b-nAuthor2">${domPropt.valAuthorName(data.items[i].volumeInfo)}</strong></p><input type="hidden" value="${data.items[i].id}"></div>`;
        }
        console.log(bookCollection);
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