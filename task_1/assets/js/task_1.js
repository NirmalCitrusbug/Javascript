function validateForm() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let zipcode = document.getElementById("zipcode");
    let dob = document.getElementById("dob");
    let gender = document.querySelector('input[name="gender"]:checked');
    let hobby = document.querySelectorAll('input[name="hobby"]:checked');
    let technology = document.getElementById("technology");

    let errorName = document.getElementById("errorName");
    let errorEmail = document.getElementById("errorEmail");
    let errorPhone = document.getElementById("errorPhone");
    let errorZip = document.getElementById("errorZip");
    let errorDob = document.getElementById("errorDob");
    let errorGender = document.getElementById("errorGender");
    let errorHobby = document.getElementById("errorHobby");
    let errorTechnology = document.getElementById("errorTechnology");

    errorName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorPhone.innerHTML = "";
    errorZip.innerHTML = "";
    errorDob.innerHTML = "";
    errorGender.innerHTML = "";
    errorHobby.innerHTML = "";
    errorTechnology.innerHTML = "";

    let isValid = true;

    if (name.value == "") {
        errorName.innerHTML = "Please enter your name!!!";
        errorName.style.color = "red";
        isValid = false;
    }

    name.addEventListener("change", function () {
        if (name.value != "") {
            errorName.innerHTML = "";
        }
    });

    if (email.value == "") {
        errorEmail.innerHTML = "Please enter your email";
        errorEmail.style.color = "red";
        isValid = false;
    }

    email.addEventListener("change", function () {
        if (email.value != "") {
            errorEmail.innerHTML = "";
        }
    });

    if (phone.value == "") {
        errorPhone.innerHTML = "Please enter your phone number";
        errorPhone.style.color = "red";
        isValid = false;
    }

    phone.addEventListener("change", function () {
        if (phone.value != "") {
            errorPhone.innerHTML = "";
        }
    });

    if (zipcode.value == "") {
        errorZip.innerHTML = "Please enter your zipcode";
        errorZip.style.color = "red";
        isValid = false;
    }

    zipcode.addEventListener("change", function () {
        if (zipcode.value != "") {
            errorZip.innerHTML = "";
        }
    });

    if (dob.value == "") {
        errorDob.innerHTML = "Please enter your date of birth";
        errorDob.style.color = "red";
        isValid = false;
    }

    dob.addEventListener("change", function () {
        if (dob.value != "") {
            errorDob.innerHTML = "";
        }
    });

    if (gender == null) {
        errorGender.innerHTML = "Please select your gender";
        errorGender.style.color = "red";
        isValid = false;
    }

    let genderInputs = document.querySelectorAll('input[name="gender"]');
    for (let i = 0; i < genderInputs.length; i++) {
        genderInputs[i].addEventListener("change", function () {
            errorGender.innerHTML = "";
        });
    }

    if (hobby.length === 0) {
        errorHobby.innerHTML = "Please select at least one hobby";
        errorHobby.style.color = "red";
        isValid = false;
    }

    let hobbyInputs = document.querySelectorAll('input[name="hobby"]');
    for (let i = 0; i < hobbyInputs.length; i++) {
        hobbyInputs[i].addEventListener("change", function () {
            errorHobby.innerHTML = "";
        });
    }

    if (technology.value == "") {
        errorTechnology.innerHTML = "Please enter your technology";
        errorTechnology.style.color = "red";
        isValid = false;
    }

    technology.addEventListener("change", function () {
        if (technology.value != "") {
            errorTechnology.innerHTML = "";
        }
    });

    if (!isValid) {
        return false;
    }
    return true;

}

function storeFormDetails() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let zipcode = document.getElementById("zipcode").value;
    let dob = document.getElementById("dob").value;
    let selectedGender = document.getElementsByName('gender');
    let gender = null;

    for (let radioGender of selectedGender) {
        if (radioGender.checked) {
            gender = radioGender.value;
            break;
        }
    }

    let hobby = document.querySelectorAll('input[name="hobby"]');
    let hobbySelected = [];
    hobby.forEach(function (checkbox) {
        if (checkbox.checked) {
            hobbySelected.push(checkbox.value);
        }
    });

    let techField = document.getElementById('technology');
    let tech = [];
    for (let i = 0; i < techField.options.length; i++) {
        if (techField.options[i].selected) {
            tech.push(techField.options[i].value);
        }

    }

    // Call the validateForm() function to perform validation
    if (validateForm()) {
        // Get the form details
        let formDetails = { name, email, phone, zipcode, dob, gender, hobbySelected, tech };
        // Store the form details in local storage
        let entries = JSON.parse(localStorage.getItem('formDetails')) || [];
        entries.push(formDetails);
        localStorage.setItem('formDetails', JSON.stringify(entries));
        document.getElementById('regForm').reset();
    }
}

function displayFormDetails() {
    const jsonStore = localStorage.getItem('formDetails');
    const retrieved = JSON.parse(jsonStore);
    var entry = document.getElementById('entry');

    for (let i = 0; i < retrieved.length; i++) {
        entry.innerHTML += `<tr> 
                                <td><input type='checkbox' id='e-${i - 1}' class='entryCheck'> </td>
                                <td>${retrieved[i].name} </td> 
                                <td>${retrieved[i].email} </td> 
                                <td>${retrieved[i].phone} </td>
                                <td>${retrieved[i].zipcode} </td>
                                <td>${retrieved[i].dob} </td>
                                <td>${retrieved[i].gender} </td>
                                <td>${retrieved[i].hobbySelected} </td>
                                <td>${retrieved[i].tech} </td>
                                <td> <button class"view-list" onclick = 'displaysingleform(${i})'> View Details </button></td>
                            </tr>`;
    }
}

function displaysingleform(i) {
    const jsonStore = localStorage.getItem('formDetails');
    const retrieved = JSON.parse(jsonStore);
    var entry = document.getElementById('entry');

    entry.innerHTML = `<li>
                                <ul>Name: ${retrieved[i].name} </ul>
                                <ul>Email: ${retrieved[i].email} </ul>
                                <ul>Phone: ${retrieved[i].phone} </ul>
                                <ul>Zipcode: ${retrieved[i].zipcode} </ul>
                                <ul>Date of Birth: ${retrieved[i].dob} </ul>
                                <ul>Gender: ${retrieved[i].gender} </ul>
                                <ul>Hobby: ${retrieved[i].hobbySelected} </ul>
                                <ul>Technology: ${retrieved[i].tech} </ul>
                            </li>
                            <br>
                            <button type='button' onclick = 'location.reload()' class='btn btn-outline-primary'><a href='list.html'>Back</a></button>`;
    document.getElementById('addEntry').style.display = 'none';
    document.getElementById('deleteEntry').style.display = 'none';
    document.getElementById('editdetails').style.display = 'none';



}

displayFormDetails();

var deleteButton = document.getElementById('deleteEntry');
var entry = document.getElementById('entry');

function deleteFormDetails() {

    const jsonStore = localStorage.getItem('formDetails');
    const retrieved = JSON.parse(jsonStore);

    var ent = document.getElementsByClassName('entryCheck');
    var lst = [];
    for (let i = ent.length - 1; i >= 0; i--) {
        if (ent[i].checked) {
            lst.push(i);
        }
    }

    for (let i = 0; i < lst.length; i++) {
        retrieved.splice(lst[i], 1);
        entry.deleteRow(lst[i]);
    }

    localStorage.setItem('formDetails', JSON.stringify(retrieved));


}

deleteButton.addEventListener('click', function () {
    deleteFormDetails();
})



// form sliders

var slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the current slide
    slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
    slideIndex += n;

    let slides = document.getElementsByClassName("slide");

    // Wrap around when reaching the beginning or end of slides
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlides();
}

let updateFormVar = document.getElementById('updateForm');

function addForm() {

    let slideVar = document.getElementById('slider');
    const jsonStore = localStorage.getItem('formDetails');
    let retrieved = JSON.parse(jsonStore);

    var ent = document.getElementsByClassName('entryCheck');
    var lst = [];
    for (let entryIndex = ent.length - 1; entryIndex >= 0; entryIndex--) {
        if (ent[entryIndex].checked) {
            lst.push(entryIndex);
        }
    }

    for (let i = 0; i < lst.length; i++) {

        slideVar.innerHTML += `<div id="updateForm" class='slide'>
       <div id="formNumber${i}"></div>
       <div class="mb-3">
         <label for="updateName${i}" class="form-label">Name:</label> <br>
         <input type="text" id="updateName${i}" name="updateName" class="form-control"> <br>
         <span id="errorName"></span><br>
   
       </div>
       <div class="mb-3">
         <label for="updateEmail${i}" class="form-label">Email:</label> <br>
         <input type="email" id="updateEmail${i}" name="updateEmail" class="form-control"> <br>
         <span id="errorEmail"></span><br>
       </div>
       <div class="mb-3">
         <label for="updatePhone${i}" class="form-label">Phone:</label> <br>
         <input type="tel" id="updatePhone${i}" name="updatePhone" class="form-control"> <br>
         <span id="errorPhone"></span><br>
       </div>
       <div class="mb-3">
         <label for="updateZipcode${i}" class="form-label">Zipcode:</label> <br>
         <input type="text" id="updateZipcode${i}" name="updateZipcode" class="form-control"> <br>
         <span id="errorZip"></span><br>
       </div>
       <div class="mb-3">
         <label for="updatedob${i}" class="form-label">Date of Birth:</label> <br>
         <input type="date" id="updatedob${i}" name="updatedob" class="form-control">
         <br>
         <span id="errorDob"></span><br>
       </div>
       <div class="mb-3">
         <label for="updateGender${i}" class="form-label">Gender:</label> <br>
         <input type="radio" id="updatemale${i}" name="updateGender${i}" value="male" class="form-check-input radioGender">
         <label for="updatemale${i}">Male</label>
         <input type="radio" id="updatefemale${i}" name="updateGender${i}" value="female" class="form-check-input radioGender">
         <label for="updatefemale${i}">Female</label>
         <input type="radio" id="updateother${i}" name="updateGender${i}" value="other" class="form-check-input radioGender">
         <label for="updateother${i}">Other</label> <br>
         <span id="errorGender"></span><br>
       </div>
       <div class="mb-3">
         <label for="updateHobby${i}" class="form-label">Hobby:</label> <br>
         <input type="checkbox" id="reading" name="updateHobby${i}" value="reading" class="hobbyCheck form-check-input">
         <label for="reading">Reading</label>
         <input type="checkbox" id="sports" name="updateHobby${i}" value="sports" class="hobbyCheck form-check-input">
         <label for="sports">Sports</label>
         <input type="checkbox" id="music" name="updateHobby${i}" value="music" class="hobbyCheck  form-check-input">
         <label for="music">Music</label>
         <input type="checkbox" id="traveling" name="updateHobby${i}" value="traveling" class="hobbyCheck  form-check-input">
         <label for="traveling">Traveling</label> <br>
         <span id="errorHobby"></span><br>
       </div>
       <div class="mb-3">
         <label for="updateTechnology${i}" class="form-label">Technology:</label> <br>
         <select id="updateTechnology${i}" name="updateTechnology" class="form-select" multiple
           aria-label="Multiple select example">
           <option value="html" id="html">HTML</option>
           <option value="css" id="css">CSS</option>
           <option value="javascript" id="javascript">JavaScript</option>
           <option value="python" id="python">Python</option>
           <option value="java" id="java">Java</option>
         </select> <br>
         <span id="errorTechnology"></span><br>
       </div>
       <button type="button" id="updateDetails" onclick = 'updateDetails()'>Update</button>
     </div>`;

        const name = retrieved[lst[i]].name;
        const email = retrieved[lst[i]].email;
        const phone = retrieved[lst[i]].phone;
        const zipcode = retrieved[lst[i]].zipcode;
        const dob = retrieved[lst[i]].dob;
        const gender = retrieved[lst[i]].gender;
        const hobbySelected = retrieved[lst[i]].hobbySelected;
        const tech = retrieved[lst[i]].tech;

        document.getElementById(`formNumber${i}`).innerHTML = `<p>Form Number : ${i}</p>`;
        document.getElementById(`updateName${i}`).setAttribute('value', name);
        document.getElementById(`updateEmail${i}`).setAttribute('value', email);
        document.getElementById(`updatePhone${i}`).setAttribute('value', phone);
        document.getElementById(`updateZipcode${i}`).setAttribute('value', zipcode);
        document.getElementById(`updatedob${i}`).setAttribute('value', dob);

        let hobbies = document.getElementsByName(`updateHobby${i}`);
        let technologies = document.getElementById(`updateTechnology${i}`).options;

        let male = document.getElementById(`updatemale${i}`);
        let female = document.getElementById(`updatefemale${i}`);
        let other = document.getElementById(`updateother${i}`);

        if (gender == 'male') {
            male.checked = true;
        }

        else if (gender == 'female') {
            female.checked = true;
        }

        else {
            other.checked = true;
        }

        for (let indexHobby = 0; indexHobby < hobbies.length; indexHobby++) {

            for (let y = 0; y < hobbySelected.length; y++) {
                if (hobbies[indexHobby].value == hobbySelected[y]) {
                    document.getElementById(hobbies[indexHobby].value).checked = true;
                }
            }
        }

        
        for (let indexTech = 0; indexTech < technologies.length; indexTech++) {
            for (let x = 0; x < tech.length; x++) {
                if (technologies[indexTech].value == tech[x]) {
                    document.getElementById(`updateTechnology${i}`).options[indexTech].selected = true
                }
            }
        }

        // var formClassList = slideVar.getElementById('updateForm');
    }
}

const editButton = document.getElementById('editdetails');
editButton.addEventListener('click', function () {
    document.getElementById('viewList').classList.add('hideList');
    document.getElementById('slider').style.display = 'flex';
    addForm();
    showSlides();
}
);

function updateDetails() {

    let name = document.getElementsByName('updateName')[0].value;
    let email = document.getElementsByName('updateEmail')[0].value;
    let phone = document.getElementsByName('updatePhone')[0].value;
    let zipcode = document.getElementsByName('updateZipcode')[0].value;
    let dob = document.getElementsByName('updatedob')[0].value;
    let genderSelected = document.getElementsByClassName('radioGender');
    let gender = null;

    for (let index = 0; index < 3; index++) {
        if (genderSelected[index].checked) {
            gender = genderSelected[index].value;
            break;
        }

    }

    let reading = document.getElementById('reading');
    let sports = document.getElementById('sports');
    let music = document.getElementById('music');
    let traveling = document.getElementById('traveling');
    let hobbySelected = [];

    if (reading.checked) {
        hobbySelected.push('reading');
    }
    if (sports.checked) {
        hobbySelected.push('sports');
    }
    if (music.checked) {
        hobbySelected.push('music');
    }
    if (traveling.checked) {
        hobbySelected.push('traveling')
    }

    let techfield = document.getElementsByName('updateTechnology')[0];
    let tech = [];
    for (let index = 0; index < 5; index++) {
        if (techfield.options[index].selected) {
            tech.push(techfield.options[index].value);
        }
    }
    // Call the validateForm() function to perform validation
    if (validateFormafterUpdate()) {
        // Get the form details
        let formDetails = { name, email, phone, zipcode, dob, gender, hobbySelected, tech };
        // Store the form details in local storage
        let entries = JSON.parse(localStorage.getItem('formDetails')) || [];
        entries.push(formDetails);
        localStorage.setItem('formDetails', JSON.stringify(entries));
    }
}

function validateFormafterUpdate() {
    let name = document.getElementsByName('updateName').value;
    let email = document.getElementsByName('updateEmail').value;
    let phone = document.getElementsByName('updatePhone').value;
    let zipcode = document.getElementsByName('updateZipcode').value;
    let dob = document.getElementsByName('updatedob').value;
    let genderSelected = document.getElementsByClassName('radioGender');
    let gender;

    for (let index = 0; index < 3; index++) {
        if (genderSelected[index].checked) {
            gender = genderSelected[index];
            break;
        }

    }
    let hobbyfield = document.getElementsByClassName('hobbyCheck');
    let hobby = [];
    for (let index = 0; index < 4; index++) {
        if (hobbyfield[index].checked) {
            hobby.push(hobbyfield[index].value);
        }

    }

    let techfield = document.getElementsByName('updateTechnology')[0];
    let tech = [];
    for (let index = 0; index < 5; index++) {
        if (techfield.options[index].selected) {
            tech.push(techfield.options[index].value);
        }
    }

    let errorName = document.getElementById("errorName");
    let errorEmail = document.getElementById("errorEmail");
    let errorPhone = document.getElementById("errorPhone");
    let errorZip = document.getElementById("errorZip");
    let errorDob = document.getElementById("errorDob");
    let errorGender = document.getElementById("errorGender");
    let errorHobby = document.getElementById("errorHobby");
    let errorTechnology = document.getElementById("errorTechnology");

    errorName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorPhone.innerHTML = "";
    errorZip.innerHTML = "";
    errorDob.innerHTML = "";
    errorGender.innerHTML = "";
    errorHobby.innerHTML = "";
    errorTechnology.innerHTML = "";

    let isValid = true;

    if (name == "") {
        errorName.innerHTML = "Please enter your name!!!";
        errorName.style.color = "red";
        isValid = false;
    }


    if (email == "") {
        errorEmail.innerHTML = "Please enter your email";
        errorEmail.style.color = "red";
        isValid = false;
    }


    if (phone == "") {
        errorPhone.innerHTML = "Please enter your phone number";
        errorPhone.style.color = "red";
        isValid = false;
    }

    if (zipcode == "") {
        errorZip.innerHTML = "Please enter your zipcode";
        errorZip.style.color = "red";
        isValid = false;
    }

    if (dob == "") {
        errorDob.innerHTML = "Please enter your date of birth";
        errorDob.style.color = "red";
        isValid = false;
    }


    if (gender == "") {
        errorGender.innerHTML = "Please select your gender";
        errorGender.style.color = "red";
        isValid = false;
    }

    if (hobby.length === 0) {
        errorHobby.innerHTML = "Please select at least one hobby";
        errorHobby.style.color = "red";
        isValid = false;
    }

    if (tech.length == 0) {
        errorTechnology.innerHTML = "Please enter your technology";
        errorTechnology.style.color = "red";
        isValid = false;
    }

    if (!isValid) {
        return false;
    }
    return true;
}
