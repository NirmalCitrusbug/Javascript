// slider functionality
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let current = 0;
let sliderImages = document.querySelectorAll(".slide");

// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}
 
// Initial slide
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}
 
// Show previous
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}
 
// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}
 
// Left arrow click
arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});
 
// Right arrow click
arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});



let updateFormVar = document.getElementById('updateForm');

function addForm(){
    let slideVar = document.getElementById('slider');
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
        const name = retrieved[lst[i]].name;
        const email = retrieved[lst[i]].email;
        const phone = retrieved[lst[i]].phone;
        const zipcode = retrieved[lst[i]].zipcode;
        const dob = retrieved[lst[i]].dob;
        const gender = retrieved[lst[i]].gender;
        const hobbySelected = retrieved[lst[i]].hobbySelected;
        const tech = retrieved[lst[i]].tech;
       slideVar.innerHTML += `<div id="updateForm" class='slide'>
       <p id="formNumber"></p>
       <div class="mb-3">
         <label for="updateName" class="form-label">Name:</label> <br>
         <input type="text" id="updateName" name="updateName" class="form-control"> <br>
         <span id="errorName"></span><br>
   
       </div>
       <div class="mb-3">
         <label for="updateEmail" class="form-label">Email:</label> <br>
         <input type="email" id="updateEmail" name="updateEmail" class="form-control"> <br>
         <span id="errorEmail"></span><br>
       </div>
       <div class="mb-3">
         <label for="updatePhone" class="form-label">Phone:</label> <br>
         <input type="tel" id="updatePhone" name="updatePhone" class="form-control"> <br>
         <span id="errorPhone"></span><br>
       </div>
       <div class="mb-3">
         <label for="updateZipcode" class="form-label">Zipcode:</label> <br>
         <input type="text" id="updateZipcode" name="updateZipcode" class="form-control"> <br>
         <span id="errorZip"></span><br>
       </div>
       <div class="mb-3">
         <label for="updatedob" class="form-label">Date of Birth:</label> <br>
         <input type="date" id="updatedob" name="updatedob" class="form-control">
         <br>
         <span id="errorDob"></span><br>
       </div>
       <div class="mb-3">
         <label for="updateGender" class="form-label">Gender:</label> <br>
         <input type="radio" id="male" name="updateGender" value="male" class="form-check-input">
         <label for="male">Male</label>
         <input type="radio" id="female" name="updateGender" value="female" class="form-check-input">
         <label for="female">Female</label>
         <input type="radio" id="other" name="updateGender" value="other" class="form-check-input">
         <label for="female">Other</label> <br>
         <span id="errorGender"></span><br>
       </div>
       <div class="mb-3">
         <label for="updateHobby" class="form-label">Hobby:</label> <br>
         <input type="checkbox" id="reading" name="updateHobby" value="reading" class="form-check-input">
         <label for="reading">Reading</label>
         <input type="checkbox" id="sports" name="updateHobby" value="sports" class="form-check-input">
         <label for="sports">Sports</label>
         <input type="checkbox" id="music" name="updateHobby" value="music" class="form-check-input">
         <label for="music">Music</label>
         <input type="checkbox" id="traveling" name="updateHobby" value="traveling" class="form-check-input">
         <label for="traveling">Traveling</label> <br>
         <span id="errorHobby"></span><br>
       </div>
       <div class="mb-3">
         <label for="updateTechnology" class="form-label">Technology:</label> <br>
         <select id="updateTechnology" name="updateTechnology" class="form-select" multiple
           aria-label="Multiple select example">
           <option value="html">HTML</option>
           <option value="css">CSS</option>
           <option value="javascript">JavaScript</option>
           <option value="python">Python</option>
           <option value="java">Java</option>
         </select> <br>
         <span id="errorTechnology"></span><br>
       </div>
     </div>`;
    
    document.getElementById('formNumber').innerHTML = `Form number : ${i}`;
    document.getElementById('updateName').setAttribute('value', name);
    document.getElementById('updateEmail').setAttribute('value', email);
    document.getElementById('updatePhone').setAttribute('value', phone);
    document.getElementById('updateZipcode').setAttribute('value', zipcode);
    document.getElementById('updatedob').setAttribute('value', dob);
    document.getElementById('updateGender').setAttribute('value', gender);
    document.getElementById('updateHobby').setAttribute('value', hobbySelected);
    document.getElementById('updateTechnology').setAttribute('value', tech);
    }

    
}


