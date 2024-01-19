
function step1(){
    const name = prompt('Enter your name');
    if (name.trim() == '') {
        alert('Enter your name');
        step1();
       
    }
    else{
        localStorage.setItem('name', name);
        step2();
    }
}

function step2(){
    const email = prompt("Enter your email");
    if (email.trim() == '') {
        alert('email is required');
        step2();
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("enter valid email");
        step2();
    } else {
        localStorage.setItem('email', email);
        step3();
        
    }
}

function step3(){
    let genderOptions = ["Male", "Female", "Other"];
    let gender = prompt("Step 3: Select your gender \n1. Male \n2. Female \n 3. Other");
    if(!genderOptions.includes(gender)) {
        alert('Please select gender');
        step3();
    }
    else{
        localStorage.setItem('gender', gender);
        step4();
    }
}

function step4(){
    const age = prompt('Enter your age');
    if (age.trim == '') {
        alert('Please enter age');
        step4();
    }

    if (isNaN(age)) {
        alert('Enter your age in numbers');
        step4();
    } else {
        localStorage.setItem('age', age)
        step5();
    }
}

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

step1();