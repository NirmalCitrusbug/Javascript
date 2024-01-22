// code to validate name, email, phone, zipcode, date of birth, gender, hobby and technology while adding entry adding onchange event listener
function validateForm() {

    // declare variable and their values
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let zipcode = document.getElementById("zipcode");
    let dob = document.getElementById("dob");
    let gender = document.querySelector('input[name="gender"]:checked');
    let hobby = document.querySelectorAll('input[name="hobby"]:checked');
    let technology = document.getElementById("technology");

    // variable for displaying errors at their respective locations
    let errorName = document.getElementById("errorName");
    let errorEmail = document.getElementById("errorEmail");
    let errorPhone = document.getElementById("errorPhone");
    let errorZip = document.getElementById("errorZip");
    let errorDob = document.getElementById("errorDob");
    let errorGender = document.getElementById("errorGender");
    let errorHobby = document.getElementById("errorHobby");
    let errorTechnology = document.getElementById("errorTechnology");

    // empty error fields
    errorName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorPhone.innerHTML = "";
    errorZip.innerHTML = "";
    errorDob.innerHTML = "";
    errorGender.innerHTML = "";
    errorHobby.innerHTML = "";
    errorTechnology.innerHTML = "";

    let isValid = true;

    // validate name
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

    // validate email
    if (email.value == "") {
        errorEmail.innerHTML = "Please enter valid email";
        errorEmail.style.color = "red";
        isValid = false;


    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        errorEmail.innerHTML = "Please enter valid email";
        errorEmail.style.color = "red";
        isValid = false;
    }


    email.addEventListener("change", function () {
        errorEmail.innerHTML = "";
    });


    // validate phone
    if (phone.value == "") {
        errorPhone.innerHTML = "Please enter your 10 digit phone number";
        errorPhone.style.color = "red";
        isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.value)) {
        errorPhone.innerHTML = "Please enter your 10 digit phone number";
        errorPhone.style.color = "red";
        isValid = false;
    }


    phone.addEventListener("change", function () {

        errorPhone.innerHTML = "";

    });

    // validate zipcode
    if (zipcode.value == "") {
        errorZip.innerHTML = "Please enter your 6 digit zipcode";
        errorZip.style.color = "red";
        isValid = false;
    }

    const zipRegex = /^\d{6}$/;
    if (!zipRegex.test(zipcode.value)) {
        errorZip.innerHTML = "Please enter your 6 digit zipcode";
        errorZip.style.color = "red";
        isValid = false;
    }

    zipcode.addEventListener("change", function () {
        errorZip.innerHTML = "";
    });

    // validate zipcode
    if (dob.value == "") {
        errorDob.innerHTML = "Please enter your date of birth";
        errorDob.style.color = "red";
        isValid = false;
    }

    dob.addEventListener("change", function () {
        errorDob.innerHTML = "";
    });

    // ------------------------validate gender start------------------------------
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
    // ------------------------validate gender end------------------------------

    // validate hobby
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

    // valdiate technology
    if (technology.value == "") {
        errorTechnology.innerHTML = "Please enter your technology";
        errorTechnology.style.color = "red";
        isValid = false;
    }

    technology.addEventListener("change", function () {
        errorTechnology.innerHTML = "";
    });

    if (!isValid) {
        return false;
    }
    return true;

}

// function tp store form details in local storage
function storeFormDetails() {

    // fetch all the values of input fields name, email, phone, zipcode, and date of birth
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let zipcode = document.getElementById("zipcode").value;
    let dob = document.getElementById("dob").value;

    // fetch value of the gender radio button
    let selectedGender = document.getElementsByName('gender');
    let gender = null;

    for (let radioGender of selectedGender) {
        if (radioGender.checked) {
            gender = radioGender.value;
            break;
        }
    }

    // fetch values of hobby checkboxes
    let hobby = document.querySelectorAll('input[name="hobby"]');
    let hobbySelected = [];
    hobby.forEach(function (checkbox) {
        if (checkbox.checked) {
            hobbySelected.push(checkbox.value);
        }
    });

    // fetch values of select Technology
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
        alert('form submitted successfully....');
        // reset form after submission
        document.getElementById('regForm').reset();
    }
}

// function to display all the entries of local storage on list.html page.
function displayFormDetails() {

    // fetch details from local storage and store in variable
    const jsonStore = localStorage.getItem('formDetails');

    // convert the string data to object
    const retrieved = JSON.parse(jsonStore);

    // fetch table document to add list of entries
    let entry = document.getElementById('entry');

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

// function to display details of perticular entry on clicking view details

function displaysingleform(i) {
    // fetch details from local storage
    const jsonStore = localStorage.getItem('formDetails');
    // convert data to objects
    const retrieved = JSON.parse(jsonStore);
    let entry = document.getElementById('entry');

    // display detail
    entry.innerHTML = `
                        <p>Name: ${retrieved[i].name} </p>
                        <p>Email: ${retrieved[i].email} </p>
                        <p>Phone: ${retrieved[i].phone} </p>
                        <p>Zipcode: ${retrieved[i].zipcode} </p>
                        <p>Date of Birth: ${retrieved[i].dob} </p>
                        <p>Gender: ${retrieved[i].gender} </ul>
                        <p>Hobby: ${retrieved[i].hobbySelected} </p>
                         <p>Technology: ${retrieved[i].tech} </p>
                        <br>
                        <button type='button' onclick = 'location.reload()' class='btn btn-outline-primary'><a href='list.html'>Back</a></button>
                    `;

    // hide add entry button, delete entry button and edit details button
    document.getElementById('addEntry').style.display = 'none';
    document.getElementById('deleteEntry').style.display = 'none';
    document.getElementById('editdetails').style.display = 'none';

}

// call displayFormDetails() function
displayFormDetails();

// delete entries function
var deleteButton = document.getElementById('deleteEntry');
var entry = document.getElementById('entry');

function deleteFormDetails() {

    // fetch details from local storage
    const jsonStore = localStorage.getItem('formDetails');
    // convert data to object
    let retrieved = JSON.parse(jsonStore);

    // fetch checked checkbox and its id
    let entryCheckbox = document.getElementsByClassName('entryCheck');

    let lst = [];
    for (let i = 0; i < entryCheckbox.length; i++) {
        if (entryCheckbox[i].checked) {
            lst.push(i);
        }
    }

    // delete entry from object list and delete that row of table
    for (let i = 0; i < lst.length; i++) {
        retrieved.splice(lst[i], 1);
        entry.deleteRow(lst[i]);
    }

    // push the new list to localstorage
    localStorage.setItem('formDetails', JSON.stringify(retrieved));

}

// call the delete button using onclick event listner
deleteButton.addEventListener('click', function () {
    deleteFormDetails();
    window.location.href = "/task_1/list.html";
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


// function to add prefilled forms in slider to update entries
function addForm() {

    // get slider division
    let slideVar = document.getElementById('slider');

    // fetch entries from local storage and convert to storage
    const jsonStore = localStorage.getItem('formDetails');
    let retrieved = JSON.parse(jsonStore);

    // store checked entries number in lst variable
    let entryChecked = document.getElementsByClassName('entryCheck');
    let lst = [];
    for (let entryIndex = 0; entryIndex < entryChecked.length; entryIndex++) {
        if (entryChecked[entryIndex].checked) {
            lst.push(entryIndex);
        }
    }

    // if lst is empty slider should not come and if edit entry button is clicked it should show error
    if (lst.length == 0) {
        alert('Please select entry!!!');
        return false;
    }

    // add form according to number of checkbox checked
    for (let i = 0; i < lst.length; i++) {
        slideVar.innerHTML += `<div id="updateForm" class='slide'>
       <div id="formNumber${i}"></div>
       <div class="mb-3">
         <label for="updateName${i}" class="form-label">Name:</label> <br>
         <input type="text" id="updateName${i}" name="updateName" class="form-control"> <br>
         <span id="errorName${lst[i]}"></span><br>
   
       </div>
       <div class="mb-3">
         <label for="updateEmail${i}" class="form-label">Email:</label> <br>
         <input type="email" id="updateEmail${i}" name="updateEmail" class="form-control"> <br>
         <span id="errorEmail${lst[i]}"></span><br>
       </div>
       <div class="mb-3">
         <label for="updatePhone${i}" class="form-label">Phone:</label> <br>
         <input type="tel" id="updatePhone${i}" name="updatePhone" class="form-control"> <br>
         <span id="errorPhone${lst[i]}"></span><br>
       </div>
       <div class="mb-3">
         <label for="updateZipcode${i}" class="form-label">Zipcode:</label> <br>
         <input type="text" id="updateZipcode${i}" name="updateZipcode" class="form-control"> <br>
         <span id="errorZip${lst[i]}"></span><br>
       </div>
       <div class="mb-3">
         <label for="updatedob${i}" class="form-label">Date of Birth:</label> <br>
         <input type="date" id="updatedob${i}" name="updatedob" class="form-control">
         <br>
         <span id="errorDob${lst[i]}"></span><br>
       </div>
       <div class="mb-3">
         <label for="updateGender${i}" class="form-label">Gender:</label> <br>
         <input type="radio" id="updatemale${i}" name="updateGender${i}" value="male" class="form-check-input radioGender">
         <label for="updatemale${i}">Male</label>
         <input type="radio" id="updatefemale${i}" name="updateGender${i}" value="female" class="form-check-input radioGender">
         <label for="updatefemale${i}">Female</label>
         <input type="radio" id="updateother${i}" name="updateGender${i}" value="other" class="form-check-input radioGender">
         <label for="updateother${i}">Other</label> <br>
         <span id="errorGender${lst[i]}"></span><br>
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
         <span id="errorHobby${lst[i]}"></span><br>
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
         <span id="errorTechnology${lst[i]}"></span><br>
       </div>
       <button type="button" id="updateDetails" onclick = 'updateDetails(${lst[i]}, ${i})'>Update</button>
     </div>`;

        // get all the details to preselect the fields
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

        // fetch hobbies
        let hobbies = document.getElementsByName(`updateHobby${i}`);
        // fetch technology
        let technologies = document.getElementById(`updateTechnology${i}`).options;

        // fetch genders
        let male = document.getElementById(`updatemale${i}`);
        let female = document.getElementById(`updatefemale${i}`);
        let other = document.getElementById(`updateother${i}`);

        // fetch selected genders
        if (gender == 'male') {
            male.setAttribute('checked', true);
        }

        else if (gender == 'female') {
            female.setAttribute('checked', true);
        }

        else {
            other.setAttribute('checked', true);
        }
        // fetch selected hobbies
        for (let indexHobby = 0; indexHobby < hobbies.length; indexHobby++) {
            if (hobbySelected.includes(hobbies[indexHobby].value)) {
                hobbies[indexHobby].setAttribute('checked', true);
            }
        }

        // fetch selected technologies
        for (let indexTech = 0; indexTech < technologies.length; indexTech++) {
            for (let x = 0; x < tech.length; x++) {
                if (technologies[indexTech].value == tech[x]) {
                    document.getElementById(`updateTechnology${i}`).options[indexTech].setAttribute('selected', true)
                }
            }
        }
    }
    return true;
}

// add onclick event listener to by clicking edit button and slider should pop
const editButton = document.getElementById('editdetails');

editButton.addEventListener('click', function () {
    document.getElementById('viewList').classList.add('hideList');
    document.getElementById('slider').style.display = 'flex';
    if (!addForm()) {
        window.location.href = "/task_1/list.html";
    }
    else {
        showSlides();
    }
}
);

// function to update details details in form present in sliders
function updateDetails(indexUpdate, indexInput) {
    // fetch details of each fields 
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
    // Call the validateFormAfterUpdate() function to perform validation
    if (validateFormAfterUpdate(indexUpdate, indexInput)) {
        // Get the form details
        let updatedValues = { name, email, phone, zipcode, dob, gender, hobbySelected, tech };
        // Store the form details in local storage
        let entries = JSON.parse(localStorage.getItem('formDetails')) || [];
        entries[indexUpdate] = updatedValues;
        localStorage.setItem('formDetails', JSON.stringify(entries));
        // display message on update
        alert('Updated successfully......');
    }
}

// function to validate forms in slider
function validateFormAfterUpdate(indaxValid, indexInput) {
    let name = document.getElementById(`updateName${indexInput}`)
    let email = document.getElementById(`updateEmail${indexInput}`)
    let phone = document.getElementById(`updatePhone${indexInput}`)
    let zipcode = document.getElementById(`updateZipcode${indexInput}`)
    let dob = document.getElementById(`updatedob${indexInput}`)
    let gender = document.querySelector(`input[name= 'updateGender${indexInput}']:checked`);
    let hobby = document.querySelectorAll(`input[name='updateHobby${indexInput}']:checked`);
    let technology = document.getElementById(`updateTechnology${indexInput}`);

    let errorName = document.getElementById(`errorName${indaxValid}`);
    let errorEmail = document.getElementById(`errorEmail${indaxValid}`);
    let errorPhone = document.getElementById(`errorPhone${indaxValid}`);
    let errorZip = document.getElementById(`errorZip${indaxValid}`);
    let errorDob = document.getElementById(`errorDob${indaxValid}`);
    let errorGender = document.getElementById(`errorGender${indaxValid}`);
    let errorHobby = document.getElementById(`errorHobby${indaxValid}`);
    let errorTechnology = document.getElementById(`errorTechnology${indaxValid}`);

    let isValid = true;

    // validate name
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

    // validate email
    if (email.value == "") {
        errorEmail.innerHTML = "Please enter valid email";
        errorEmail.style.color = "red";
        isValid = false;


    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        errorEmail.innerHTML = "Please enter valid email";
        errorEmail.style.color = "red";
        isValid = false;
    }


    email.addEventListener("change", function () {

        errorEmail.innerHTML = "";

    });

    // validate phone number
    if (phone.value == "") {
        errorPhone.innerHTML = "Please enter your 10 digit phone number";
        errorPhone.style.color = "red";
        isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.value)) {
        errorPhone.innerHTML = "Please enter your 10 digit phone number";
        errorPhone.style.color = "red";
        isValid = false;
    }


    phone.addEventListener("change", function () {

        errorPhone.innerHTML = "";

    });

    // validate zipcode
    if (zipcode.value == "") {
        errorZip.innerHTML = "Please enter your 6 digit zipcode";
        errorZip.style.color = "red";
        isValid = false;
    }

    const zipRegex = /^\d{6}$/;
    if (!zipRegex.test(zipcode.value)) {
        errorZip.innerHTML = "Please enter your 6 digit zipcode";
        errorZip.style.color = "red";
        isValid = false;
    }

    zipcode.addEventListener("change", function () {
        errorZip.innerHTML = "";
    });

    // validate date of birth
    if (dob.value == "") {
        errorDob.innerHTML = "Please enter your date of birth";
        errorDob.style.color = "red";
        isValid = false;
    }

    dob.addEventListener("change", function () {
        errorDob.innerHTML = "";
    });

    // validate gender
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

    // validate hobby
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

    // validate technology
    if (technology.value == "") {
        errorTechnology.innerHTML = "Please enter your technology";
        errorTechnology.style.color = "red";
        isValid = false;
    }

    technology.addEventListener("change", function () {
        errorTechnology.innerHTML = "";
    });

    // return false when any of the above condition does not satisfy
    if (!isValid) {
        return false;
    }

    // else return true
    return true;
}
