function validateForm() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validação do nome
    if (name === "") {
        document.getElementById('nameError').style.display = 'block';
        return false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Validação da senha
    if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return false;
    }

    return true;
}
