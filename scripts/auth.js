/*_______________getting data________________
____________________________________________*/
db.collection('guides').get()
    .then(snpashot =>{
        setupGuides(snpashot.docs);
    }).catch(err =>{
        console.log(err);
    });

/*_________Track Auth Status__________________
______________________________________________*/
auth.onAuthStateChanged(user =>{
    if(user){
        console.log('User is logged in :', user);
    }else{
        console.log('User logged out');
    }
});


/*_________________sign up _____________________
_______________________________________________*/
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

   
    // sign up the user               __these two parameters are declared above
    auth.createUserWithEmailAndPassword(email, password)
        .then(cred =>{               // here response is cred
            // close the modal
            const modal = document.querySelector("#modal-signup");
            M.Modal.getInstance(modal).close();   // modal from above DOM manipulation
             // clear form after submit
            signupForm.reset();

        }).catch(err =>{
            console.log(err);
        });

});


/*_________________Log Out _____________________
_______________________________________________*/
const logout = document.querySelector('#logout');

logout.addEventListener('click', (event) =>{
    event.preventDefault();
    auth.signOut();  // firebase logs out with this method
       
});


/*_________________Log In _____________________
_______________________________________________*/
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener('submit', event =>{
    event.preventDefault();

    // get login credentials
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email,password)
        .then(cred =>{
            
            // close login modal 
            const modal = document.querySelector("#modal-login");
            M.Modal.getInstance(modal).close();   // modal from above DOM manipulation
             // clear form after submit
            loginForm.reset();

        }).catch(err =>{
            console.log(err);
        });
})