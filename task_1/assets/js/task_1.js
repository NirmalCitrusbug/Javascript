function validation(n){
    if (n == 1) {
        const fname = document.getElementById('name').value;
        if (fname == "") {
            document.getElementById('errorName').innerHTML = 'This field is required';
            return false;
        }
    }
    return true;
    
}

function submitForm(){
    if (validation(1)) {
        document.getElementById('regForm').submit();
    }
    else{
        alert('Fill all the details!!!');
    }
}