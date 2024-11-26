var bookNameInput = document.getElementById('bookNameInput');
var bookURLInput = document.getElementById('bookURLInput');
var tbody = document.getElementById('tbody');
var booksArr = [];
var boohnameregex = /[\w]{3,}/
var bookURLregex = /^https:\/\/[\w]+\.[\w]{2,}/

function add(){
    bookNameInputvalue = bookNameInput.value;
    bookURLInputvalue = bookURLInput.value;

if (boohnameregex.test(bookNameInputvalue) && bookURLregex.test(bookURLInputvalue)) {
    
    localStorage.setItem("bookArr", JSON.stringify({bookNameInputvalue,bookURLInputvalue}));
    
    var book = {
        name: bookNameInputvalue,
        URL: bookURLInputvalue
    }
    booksArr.push(book);
    
    displaybooks()
    clearinputs()
} else {
    message1 = ""
    message2 = ""
    message1.search()
    if (!boohnameregex.test(bookNameInputvalue)){
        message1 = 'book name shoud be at least 3 characters'
    }
    if (!bookURLregex.test(bookURLInputvalue)){
        message2 = 'the URL should start with https:// and have at least 1 characters before the . and at least 2 characters after the.'
    }
    alert(message1 + '\n' + '\n' + message2)
}
}

var book = {
    name: bookNameInput,
    URL: bookURLInput
}
booksArr.push(book);

function displaybooks(){
    
    localStorage.setItem("booksArr", JSON.stringify(booksArr));
    cartona = ``
    for (var i = 1; i < booksArr.length; i++) {
    cartona += `<tr>
                        <th>${i}</th>
                        <th>${booksArr[i].name}</th>
                        <th><a href="${booksArr[i].URL}"><button class="border-0 rounded-2 text-light p-2 bg-green-light"> <i class="fa-solid fa-eye"></i> Viste </button></a></th>
                        <th><button class="border-0 rounded-2 text-light p-2 bg-danger" onclick="deleteElement(${i})"> <i class="fa-solid fa-trash-can"></i> DELETE </button></th>
                    </tr>`
    }
    tbody.innerHTML = cartona;
}
    
function clearinputs(){
    document.getElementById('bookNameInput').value = "";
    bookURLInputvalue = ''
}

function deleteElement(index) {
    booksArr.splice(index, 1)
    displaybooks()
}