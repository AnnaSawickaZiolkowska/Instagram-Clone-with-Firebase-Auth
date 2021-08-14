// Firebase
const db = firebase.firestore();

// Modal

const modal = document.querySelector(".modal");

const showModal = () => modal.classList.remove("modal__hidden");
const closeModal = () => modal.classList.add("modal__hidden");

// Register Box Modal

const boxRegisterSignup = document.querySelector("#box__register-signup");

boxRegisterSignup.addEventListener("click", (e) => {
  e.preventDefault();
  showModal();
});


// FORM LOG IN

const formLogIn = document.querySelector("#logInForm");

const getFormLogInData = (e) => {
  e.preventDefault();
  const username = formLogIn.username.value.lenght;
  console.log(username);
  const password = formLogIn.password.value;
  console.log(password.lenght);

  const credentials = {
    username,
    password,
  };
//   if (form.id === "logInForm") {
    logInUser(credentials);

//   } else if (form.id === "signUpForm") {
//     signUpUser(credentials);
//   }
};


// FORM SIGN UP

const formSignUp = document.querySelector("#signUpForm");

const getFormSignUpData = (e) => {
  e.preventDefault();

  const username = formSignUp.usernameUp.value;
  console.log(username);
  const password = formSignUp.passwordUp.value;

  const credentials = {
    username,
    password,
  };

const signUpBtn = document.querySelector('.form-box__button');
  if (passwordUp.lenght > 6){
    signUpBtn.classList.add('form-box__buttonBlue')
  };
    signUpUser(credentials);
};

formLogIn.addEventListener('submit', getFormLogInData)
formSignUp.addEventListener("submit", getFormSignUpData);

// BUTTON CHANGE COLOR IF PASSWORD VALUE LENGHT >= 6

const changeBtnColor = () => {
    const moreBlueBtn = document.querySelector('.form-box__button');
  if (formLogIn.password.value.lenght >= 6){
    moreBlueBtn.classList.add('form-box__buttonBlue')
  }else if (formSignUp.passwordUp.value.lenght > 6) {
    moreBlueBtn.classList.add('form-box__buttonBlue')
  }
};

formLogIn.addEventListener('keyup', changeBtnColor);
formSignUp.addEventListener('keyup', changeBtnColor)

// document.querySelectorAll('form').forEach(btn => {
//     btn.addEventListener('keyup', changeBtnColor)
// });


// FIREBASE AUTH

const signUpUser = (cred) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(cred.username, cred.password)
    .then(token => {
      console.log(token);
      formSignUp.reset();
      signOutUser();
      setTimeout(closeModal, 2000);
    })
    .catch((err) => {
      console.log("error");
      alert(err.message)
    });
};

const signOutUser = (cred) => {
  firebase.auth().signOut();
};

const logInUser = (cred) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(cred.username, cred.password)
    .then((cred) => {
      console.log(cred);
    })
    .catch((err) => {
      console.log(err);
      alert(err.message);
      alert("error");
    });
};
