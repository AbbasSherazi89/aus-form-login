document
  .getElementById("log-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pass").value;

    let regUser = JSON.parse(localStorage.getItem("userdetails"));
    // console.log(regUser);
    let user = regUser.find((val) => val.email === email && val.pwd === pwd);
    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.assign("welcome.html");
    } else {
      alert("Login Unsuccessful");
    }
  });
