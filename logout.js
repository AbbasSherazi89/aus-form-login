let logout=document.getElementById('logout');

logout.addEventListener('click', ()=>{

    localStorage.setItem('isLoggedIn', 'false');

    window.location.href="login.html"
});