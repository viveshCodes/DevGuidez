// sign up 
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

   
    // sign up the user               __these two parameters are declared above
    auth.createUserWithEmailAndPassword(email, password)
        .then(cred =>{               // here response is cred
            console.log(cred.user);

            // close the modal
            const modal = document.querySelector("#modal-signup");
            M.Modal.getInstance(modal).close();   // modal from above DOM manipulation
             // clear form after submit
            signupForm.reset();

        }).catch(err =>{
            console.log(err);
        });

});