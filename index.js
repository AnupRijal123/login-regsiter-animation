const registerButtonDom = document.getElementById('register-button');
const contentContainerDom = document.querySelector('.content-container');
const loginButtonDom = document.getElementById('login-button');


registerButtonDom.onclick = function regsiterButtonClicked() {
    contentContainerDom.classList.add('register-clicked');
}

loginButtonDom.onclick = function () {
    contentContainerDom.classList.add('login-clicked');

    setTimeout(() => {
        contentContainerDom.classList.remove('register-clicked');
        contentContainerDom.classList.remove('login-clicked');
    }, 400);



}