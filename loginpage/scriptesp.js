
function validateForm() {
    let text;
    let username = document.forms["myForm"]["username"].value;
    let password = document.forms["myForm"]["password"].value;
    if (username === "" || password === "") {
        alert("El nombre o la contraseña deben ser rellenados");
        return false;
    } else {
        if (username.length < 8 || username.length > 20) {
            alert("El nombre debe tener entre 8 y 20 caracteres");
            return false;
        }
        if (password.length < 8 || password.length > 20) {
            alert("La contraseña debe tener entre 8 y 20 caracteres.");
            return false;
        }
        let textUser = "Tu usuario es: " + username;
        let textPass = "Tu contraseña es: " + password;
        document.getElementById("tUser").innerHTML = textUser;
        document.getElementById("tPass").innerHTML = textPass;
        return false; // Previene que el formulario se envie
    }
}
