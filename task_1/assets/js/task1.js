document.addEventListener('DOMContentLoaded', function () {
    const entryForm = document.getElementById('myForm');
    const addEntryButton = document.getElementById('addEntry');

    addEntryButton.addEventListener('click', function () {
        validateForm();
        addEntry();
    });

    // entryForm.addEventListener('change', function () {
    //     validateForm();
    // });

    function addEntry() {
        const fname = document.getElementById('first_name').value;
        const lname = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        var gender = document.getElementsByName('gen');
        var selectedGender = null;

        for (const radioGender of gender) {
            if (radioGender.checked) {
            selectedGender = radioGender.value;
            break;
            }
        }

        var hobby = document.querySelectorAll('input[name="hobby"]');
        var hobbySelected = [];
        hobby.forEach(function(checkbox){
            if (checkbox.checked) {
                hobbySelected.push(checkbox.value);
            }
        });
        
        var techField = document.getElementById('tech');
        var tech = [];
        for (let i = 0; i < techField.options.length; i++) {
            if (techField.options[i].selected) {
                tech.push(techField.options[i].value);
            }
            
        }

        if (fname && lname && email && phone && selectedGender && hobbySelected.length > 0 && tech.length > 0) {
            const entry = { fname, lname, email, phone, selectedGender, hobbySelected, tech};
            saveEntry(entry);
            entryForm.reset();
        } 
    }

    function validateForm() {
        var x = document.forms["myForm"]["first_name"].value;
        if (x == "") {
            
            return false;
        }

        var lname = document.forms["myForm"]["last_name"].value;
        if (lname == "") {
            alert("Last name must be filled out");
            return false;
        }

        var y = document.forms["myForm"]["email"].value;
        if (y == "") {
            alert("Email must be filled out");
            return false;
        }

        var email = document.getElementById("email").value;
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(pattern)) {
            alert("Please enter valid email address");
            return false;
        }

        var z = document.forms["myForm"]["phone"].value;
        if (z == "") {
            alert("Phone number must be filled out");
            return false;
        }

        var phone = document.getElementById("phone").value;
        var pattern = /^[0-9]{10}$/;
        if (!phone.match(pattern)) {
            alert("Please enter valid phone number");
            return false;
        }

        var gender = document.getElementsByName('gen');
        var selectedGender = null;

        for (const radioGender of gender) {
            if (radioGender.checked) {
            selectedGender = radioGender.value;
            break;
            }
        }
        if (selectedGender === null) {
            alert('Please select a gender');
            return false;
        } 
          
        var hobby = document.querySelectorAll('input[name="hobby"]');
        var hobbySelected = [];
        hobby.forEach(function(checkbox){
            if (checkbox.checked) {
                hobbySelected.push(checkbox.value);
            }
        });

        if (hobbySelected.length === 0) {
            alert('select at least one hobby');
        }

        var tech = document.forms["myForm"]["tech"].value;
        if (tech == "") {
            alert("Technology must be filled out");
            return false;
        }
        }

    function saveEntry(entry) {
        let entries = JSON.parse(localStorage.getItem('entries')) || [];
        entries.push(entry);
        localStorage.setItem('entries', JSON.stringify(entries));
    }


    
});

const jsonStore = localStorage.getItem('entries');

    const retrieved = JSON.parse(jsonStore);

    // console.log(retrieved[0]);
    var entry = document.getElementById('entry');

    for (let i = 0; i < retrieved.length; i++) {
        entry.innerHTML += `<tr id> 
                                <td><input type='checkbox' id='e-${i-1}' class='entryCheck'> </td>
    
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


