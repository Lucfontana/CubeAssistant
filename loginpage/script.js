
function validateForm() {
    let text;
    let username = document.forms["myForm"]["username"].value;
    let password = document.forms["myForm"]["password"].value;
    if (username === "" || password === "") {
        alert("Name or password must be filled out");
        return false;
    } else {
        if (username.length < 8 || username.length > 20) {
            alert("Username must be between 8 and 20 characters");
            return false;
        }
        if (password.length < 8 || password.length > 20) {
            alert("Password must be between 8 and 20 characters");
            return false;
        }
        let textUser = "Your username is: " + username;
        let textPass = "Your password is: " + password;
        document.getElementById("tUser").innerHTML = textUser;
        document.getElementById("tPass").innerHTML = textPass;
        return false; // Previene que el formulario se envie
    }
}
