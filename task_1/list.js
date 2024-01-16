
const jsonStore = localStorage.getItem('entries');

const retrieved = JSON.parse(jsonStore);

// console.log(retrieved[0]);
var entry = document.getElementById('entry');

for (let i = 0; i < retrieved.length; i++) {
    entry.innerHTML += `<tr id> <td id="checkb"><td> 
                            <td> ${i} </td> 
                            <td>${retrieved[i].fname} </td> 
                            <td>${retrieved[i].lname} </td> 
                            <td>${retrieved[i].email} </td>
                            <td>${retrieved[i].phone} </td>
                            <td>${retrieved[i].gender} </td>
                            <td>${retrieved[i].hobby} </td>
                            <td>${retrieved[i].tech} </td>
                            <td> <button class"view-list"> View Details </button></td>
                        </tr>`
} 

const delButton = document.getElementById('deleteEntry');
delButton.visibility = 'hidden';

function selectEntry() {
    for (let i = 1; i <= retrieved.length; i++) {
        entry.children[i].childNodes[0].children[0].innerHTML = `<input type='checkbox' id='e-${i-1}' class='entryCheck'>`;  
    }
}

function deleteEntry(){
    var ent = entry.getElementsByClassName('entryCheck');
    var lst = [];
    for (let i = ent.length - 1; i >= 0; i--) {
        if (ent[i].checked) {
           lst.push(i);
        }
    }

    for (let i = 0; i < lst.length; i++) {
        retrieved.splice(lst[i],1);
        entry.deleteRow(lst[i]);
    }

    localStorage.setItem('entries', JSON.stringify(retrieved));

}


const selectButton = document.getElementById('selectEntry');

selectButton.addEventListener('click', function(){
    selectEntry();
    delButton.style.display = 'flex';
});

delButton.addEventListener('click', function(){
    deleteEntry();
})

