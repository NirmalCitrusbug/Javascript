function nextStep(currentStep){
    if (validation(currentStep)) {
        document.getElementById(`step${currentStep}`).classList.remove('show');
        document.getElementById(`step${currentStep + 1}`).classList.add('show');
        updateConfirmation();
    }
}

function prevStep(currentStep){
    document.getElementById(`step${currentStep}`).classList.remove('show');
    document.getElementById(`step${currentStep - 1}`).classList.add('show');
    updateConfirmation();
}


function validation(step){
    // check name validation
    if (step == 1) {
        const firstName = document.getElementById("name").value.trim();
        if (firstName == "") {
            let errorField = document.getElementById("errorName");
            errorField.innerHTML = "This field is required!!!";
            errorField.style.color = 'red';
            alert('enter name');
            return false
        }
        else{
            let errorField = document.getElementById("errorName");
            errorField.innerHTML = "";
        }
    }

    // Check email validation
    else if (step == 2) {
        const email = document.getElementById('email').value.trim();
        if (email == "") {
            let errorField = document.getElementById("errorEmail");
            errorField.innerHTML = "This field is required!!!";
            errorField.style.color = 'red';
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            let errorField = document.getElementById("errorEmail");
            errorField.innerHTML = "Enter valid email!!!";
            errorField.style.color = 'red';
            return false;
        }
    } 
    
    // check validation for gender
    else if(step == 3){
        let gender = document.getElementsByName('gender');
        let selectedGender = null;

        for (const genderIterator of gender) {
            if (genderIterator.checked) {
                selectedGender = genderIterator.value;
                break;
            }
        }
        if (selectedGender == null) {
            let errorField = document.getElementById("errorGender");
            errorField.innerHTML = "Please select gender!!!";
            errorField.style.color = 'red';
            valid = false;
            return valid;
        }
    }

    // check validation for age
    else if(step == 4){
        const age = document.getElementById('age');
        if (age== "") {
            let errorField = document.getElementById("errorAge");
            errorField.innerHTML = "This field is required!!!";
            errorField.style.color = 'red';
            valid = false;
            return valid;
        }

        if (Number.isInteger(age)) {
            let errorField = document.getElementById("errorAge");
            errorField.innerHTML = "Enter age in numbers only!!!";
            errorField.style.color = 'red';
            valid = false;
            return valid;
        }
    }
    return true;
}

function updateConfirmation(){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.getElementsByName('gender');
    let selectedGender = null;

        for (const genderIterator of gender) {
            if (genderIterator.checked) {
                selectedGender = genderIterator.value;
                break;
            }
        }
    const age = document.getElementById('age').value.trim();

    const confirmationDiv = document.getElementById('confirmation');
      confirmationDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gender:</strong> ${selectedGender}</p>
        <p><strong>Age:</strong> ${age}</p>
      `;
}

function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.getElementsByName('gender');
    let selectedGender = null;

        for (const genderIterator of gender) {
            if (genderIterator.checked) {
                selectedGender = genderIterator.value;
                break;
            }
        }
    const age = document.getElementById('age').value.trim();

    const data = {
        name,
        email,
        selectedGender,
        age
    };

    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push(data);
    localStorage.setItem('formData', JSON.stringify(formData));

    alert('Form submitted successfully!');
    afterSubmit();
}

function afterSubmit(){
    document.getElementById(`step5`).classList.remove('show');
    document.getElementById(`step1`).classList.add('show');
}
