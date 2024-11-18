var notesInput = document.querySelector('#notesInput')
var notesCard = document.querySelector('#notesCard')

notesInput.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        addItem()
    }
})

function addItem() {
    console.log("ADD ITEM", notesInput.value)

    if (!notesInput.value.length > 3) {
        alert('Please enter more than 3 characters')
        notesInput.value = ""
        return;
    } else if (!isNaN(notesInput.value)) {
        alert('Please Donot enter integer or number')
        notesInput.value = ""
        return;
    } else {
        var getNotes = localStorage.getItem('notes')
        console.log('getNotes 1st', getNotes);
        if (getNotes == null || getNotes == undefined || getNotes == "undefined" || getNotes == "null" || getNotes == "") {
            var newArray = [notesInput.value]
            console.log('newArray --', newArray);
            localStorage.setItem('notes', JSON.stringify(newArray))
        }
        else {
            // var inputValue = [notesInput.value]
            var newArray = JSON.parse(getNotes)
            console.log('newArray not null', newArray);
            newArray.unshift(notesInput.value)
            console.log('new one', newArray);
            var storedNotes = localStorage.setItem('notes', JSON.stringify(newArray))
            console.log('localStorage', storedNotes);
        }
    }

    notesInput.value = ""
    console.log('uiRendering()', uiRendering())
    uiRendering()
}

function uiRendering() {
    var getNotes = JSON.parse(localStorage.getItem('notes'))
    var cardUi = ""
    console.log('uiRendering', getNotes);
    if (getNotes === null || getNotes.length === 0) {
        cardUi += `
                    <p class="card-text">Nothing to show</p>
        `
    }else{

        for (i = 0; i < getNotes.length; i++) {
            // console.log('loop console' , getNotes[i])
            cardUi += `
            <div class="container card mt-5" style="width: 18rem;">
                    <div class="card-body">
                        <p class="card-text">${getNotes[i]}</p>
                        <button type="button" onclick="editBtn(this)" id=${i} class="btn btn-warning"><i
                                class="fa-solid fa-pencil"></i></button>
                        <button type="button" onclick="deleteBtn(this)" id=${i} class="btn btn-danger"><i
                                class="fa-solid fa-delete-left"></i></button>
                    </div>
                </div>
            `
        }
        notesCard.innerHTML = cardUi
        console.log('notesCard.innerHTML', notesCard);
    }
}

function editBtn(edit) {
    console.log('editbutton', edit);
    var getNotes = JSON.parse(localStorage.getItem('notes'))
    var indexNumber = edit.id
    var editPrompt = prompt("Enter The Edit Note")
    getNotes.splice(indexNumber, 1, editPrompt)
    localStorage.setItem('notes', JSON.stringify(getNotes))
    uiRendering()
}

function deleteBtn(del) {
    console.log('deleteButton', del)
    var getNotes = JSON.parse(localStorage.getItem('notes'))
    var indexNumber = del.id;
    getNotes.splice(indexNumber, 1)
    localStorage.setItem('notes', JSON.stringify(getNotes))
    uiRendering()
}

function deleteAll() {
    console.log("Deleting all notes...")
    localStorage.removeItem('notes')
    notesCard.innerHTML = "";
    uiRendering()
}