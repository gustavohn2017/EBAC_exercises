const nomeInput = document.getElementById('nome');

nomeInput.addEventListener('input', function () {
    const nomeValue = this.value;
    const regex = /^[a-zA-ZÀ-ÿ\s]+$/;

    if (!regex.test(nomeValue)) {
        this.validaInput('"Nome" possui caracteres inválidos. ');
    } else {
        this.validaInput('');
    }
});