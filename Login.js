function login() {
    //Takes user input from text input box with id name, stores it as variable nameUser
    const nameUser = document.querySelector("#name");
    //local storage object allows developers to store key-value pairs in web browser, setItem makes item
    localStorage.setItem("userName", nameUser.value);
    //Changes current URL to that of Play.html
    window.location.href = "Play.html";
}