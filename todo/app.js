var notesInput = document.querySelector('#notesInput')
var notesCard = document.querySelector('#notesCard')
var cardUi;

// backtag method
function addItem() {
    console.log('notesInput value ---> ', notesInput.value)

    if (notesInput.value.length < 3) {
        alert("Please enter more than 3 characters")
        notesInput.value = ""
        return;
    }

    cardUi = `
        <div class="container card mt-5" style="width: fit-content;">
            <div class="card-body">
                <p class="card-text">${notesInput.value}</p>
                <button type="button" onclick="editNote(this)" class="btn btn-warning"><i
                    class="fa-solid fa-pencil"></i></button>
                <button type="button" onclick="deleteNote(this)" class="btn btn-danger"><i
                    class="fa-solid fa-delete-left"></i></button>
            </div>
        </div>
    `

    notesCard.innerHTML += cardUi
    notesInput.value = ""
}

// function addItem() {
//     console.log('notesInput value ---> ', notesInput.value)

//     if (notesInput.value.length < 3) {
//         alert("Please enter more than 3 characters")
//         notesInput.value = ""
//         return;
//     }

//     var cardDiv = document.createElement("div")
//     cardDiv.className = "container card mt-5"
//     cardDiv.style.width = "fit-content"

//     var cardBody = document.createElement("div")
//     cardBody.className = "card-body"

//     cardDiv.append(cardBody)

//     var paragraphTag = document.createElement("p")
//     paragraphTag.className = "card-text"
//     paragraphTag.innerHTML = notesInput.value
//     // console.log('paragraphTag' , paragraphTag.innerHTML);


//     var buttonDiv = document.createElement("div")
//     buttonDiv.style.display = "flex"
//     buttonDiv.style.justifyContent = "center"
//     buttonDiv.style.gap = "0.7rem"

//     cardBody.append(paragraphTag)
//     cardBody.append(buttonDiv)

//     var editButton = document.createElement("button")
//     editButton.className = "btn btn-warning"
//     editButton.setAttribute("onclick", "editNote(this)")

//     var editIcon = document.createElement("i")
//     editIcon.className = "fa-solid fa-pencil"

//     editButton.append(editIcon)

//     var deleteButton = document.createElement("button")
//     deleteButton.className = "btn btn-danger"
//     deleteButton.setAttribute("onclick", "deleteNote(this)")

//     var deleteIcon = document.createElement("i")
//     deleteIcon.className = "fa-solid fa-delete-left"

//     deleteButton.append(deleteIcon)
//     buttonDiv.append(editButton)
//     buttonDiv.append(deleteButton)
//     notesCard.append(cardDiv)
// }

function deleteAll() {
    notesCard.remove()
}

function editNote(con) {
    console.log('edit con', con);
    var editTextPrompt = prompt("Enter the text you want to change")

    if (editTextPrompt.length < 3) {
        alert("Please enter more than 3 characters")
        editTextPrompt = prompt("Enter the text you want to change")
        return;
    }
    else {
        con.closest('.card-body').querySelector('.card-text').textContent = editTextPrompt
    }
}

function deleteNote(con) {
    console.log('delete con', con);
    con.parentNode.parentNode.remove()
}