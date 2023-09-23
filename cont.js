//toggling registration form show/hide

const register = document.querySelector("#register");
const wrapper = document.querySelector(".wrapper_1");



register.addEventListener("click", (e) => {
    wrapper.classList.toggle('active');
    fullName.value = "";
    email.value = "";
    telephone.value = "";

})


//accessing html elements for manipulation
const male = document.getElementById("radiobox1");
const female = document.getElementById("radiobox2");
const myLab = document.getElementById("mylabel8")
const myLabel = document.getElementById("mylabel7");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const form_1 = document.querySelector(".wrapper_1");
const form_2 = document.querySelector(".wrapper_2");

//next button event
nextBtn.addEventListener("click", () => {
    if (fullName.value != "" && email.value != "" && telephone.value != "") {
        form_2.style.display = "block";
        form_1.style.display = "none";
        myLabel.innerHTML = "";

}
    else {
        form_1.style.display = "block";
        form_2.style.display = "none";
        myLabel.innerHTML = "Unable to proceed to next, try again!";
        myLabel.style.color = "red";
        myLabel.style.textAlign = "center";
    }
})
//previous button even
prevBtn.addEventListener("click", () => {
    if (form_2.style.display === "block") {
        form_1.style.display = "block";
        form_2.style.display = "none";
        myLab.innerHTML = "";

    }
    else {
        form_2.style.display = "block";
        form_1.style.display = "none";
    }
})

//accessing html elements for page functionality

const fullName = document.getElementById("texbox1");
const email = document.getElementById("email");
const telephone = document.getElementById("phone");
const age = document.getElementById("myage");
const feedMe = document.getElementById("mytextmgs");
const myForm = document.getElementById("contactme");
const message = document.getElementById("message");
const submit = document.getElementById("forms");
const locationz = document.querySelector('#selectme');
const waiting = document.getElementById('sending');

submit.addEventListener("submit", (event) => {
    event.preventDefault();
    waiting.innerHTML = "Wait! Sending message to database..."
    waiting.style.color = 'blue';
    waiting.style.textAlign = 'center';
    myLab.innerHTML = "";
   try{
    setTimeout(() => {
        
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fullName: fullName.value,
                email: email.value,
                age: age.value,
                locationz: locationz.value,
                message: message.value,
                telephone: telephone.value,
                female: female.checked,
                male: male.checked
            })
        }

        const url = 'http://localhost:5000/message'
        
        const response =  fetch(url, options)
        if (response.ok) {
            const jsonRes =  response.json();
            console.log(jsonRes)
        };
    
    if (message.value != "" && (male.checked && !female.checked || female.checked && !male.checked)) {
        setTimeout(() => {
            feedMe.style.display = "block";
            myForm.style.display = "none";

        }, 3000);
    }


    else {
        feedMe.style.display = "none";
        myForm.style.display = "block";
        myLab.innerHTML = "Input values rejected by server, try again";
        myLab.style.color = "red";
        waiting.innerHTML = "";

    }
}, 4000);

}catch(error){
    console.log(error.message);
}

});


