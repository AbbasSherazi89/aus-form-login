let storeValues = [];

let myName = document.getElementById("name");
let myEmail = document.getElementById("email");
let myPassword = document.getElementById("pass");

document
  .getElementById("reg-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // get values from inputs
    let name = myName.value;
    let email = myEmail.value;
    let pwd = myPassword.value;

    // save in local storage

    let userDetails = {
      name: name,
      email: email,
      pwd: pwd,
    };
    
      // Check if users array already exists in local storage
    let storedUsers = JSON.parse(localStorage.getItem("userdetails"));
    storeValues.push(userDetails);
    // Store the updated array back in local storage
    localStorage.setItem("userdetails", JSON.stringify(storeValues));
    window.location.href = "login.html";
    let existingUser = storedUsers?.find((val) => val.email === email);

    if (existingUser) {
      // event.preventDefault();
      alert("User already registered.");
    } else {
      storeValues.push(userDetails);
      localStorage.setItem("userdetails", JSON.stringify(storeValues));
      window.location.href = "login.html";
    }
  });



