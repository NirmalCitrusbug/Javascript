// function for step 1 asking name
function step1(){
    const name = prompt('Enter your name');
    // validate name
    if (name.trim() == '') {
        alert('Enter your name');
        step1();
       
    }
    else{
        // add detail to local storage
        localStorage.setItem('name', name);
        step2();
    }
}

// function for step 2 asking email
function step2(){
    const email = prompt("Enter your email");

    // validate email
    if (email.trim() == '') {
        alert('email is required');
        step2();
    }
    // validate email formate
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("enter valid email");
        step2();
    } else {
        // add detail to local storage
        localStorage.setItem('email', email);
        step3();
        
    }
}

function step3(){
    // list of options
    let genderOptions = ["Male", "Female", "Other"];
    let gender = prompt("Step 3: Select your gender \n1. Male \n2. Female \n 3. Other");
    // validate gender
    if(!genderOptions.includes(gender)) {
        alert('Please select gender');
        step3();
    }
    else{
        // add detail to local storage
        localStorage.setItem('gender', gender);
        step4();
    }
}

function step4(){
    const age = prompt('Enter your age');
    // validate age
    if (age.trim() == '') {
        alert('Age is required');
        step4();
    }
    // validate whether age is number of not
    if (isNaN(age)) {
        alert('Enter your age in numbers');
        step4();
    } else {
        // add detail to local storage
        localStorage.setItem('age', age)
        step5();
    }
}
// call step1() function
step1();

// function to display information
function step5(){
    let name = localStorage.getItem('name');
    let email = localStorage.getItem('email');
    let gender = localStorage.getItem('gender');
    let age = localStorage.getItem('age');
    alert(`Summary:\n
            1. Name: ${name} \n
            2. Email: ${email} \n
            3. Gender: ${gender} \n
            4. Age: ${age}`);
}

