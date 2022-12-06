const form = document.getElementById('form')
const username = document.getElementById('username')
const login = document.getElementById('login')
const email = document.getElementById('email')
const password= document.getElementById('password')
const passconfirmation = document.getElementById('passconfirmation')

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});
function checkInputs() {
    const usernameValue = username.value;
    const loginValue = login.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passconfirmationValue = passconfirmation.value;

    if (usernameValue === '') {
        setErrorFor(username, "Todos os campos são obrigatórios");
    } else if (usernameValue.length <10){
        setErrorFor(username, "Precisa ter no mínimo 10 caracteres");
    } else {
        setSuccessFor(username);
    }
    if (loginValue ==='') {
        setErrorFor (login, "Todos os campos são obrigatórios");
    } else if (loginValue.length>10){
        setErrorFor(login, "Precisa ter no máximo 10 caracteres");
    } else{
        setSuccessFor(login);
    }
    if (emailValue === ''){
        setErrorFor(email, "Todos os campos são obrigatórios");
    } else if (!checkEmail(emailValue)){
        setErrorFor(email, "Insira um Email válido!");
    } else {
        setSuccessFor(email);
    }
    if  (passwordValue === ""){
        setErrorFor(password, "Todos os campos são obrigatórios");
    } else {
        setSuccessFor(password);
    }
    if (passconfirmationValue ===''){
        setErrorFor(passconfirmation, "Todos os campos são obrigatórios");
    } else if (passconfirmationValue != passwordValue){
        setErrorFor(passconfirmation, "As senhas não conferem");
    } else {
        setSuccessFor(passconfirmation);
    }
}
function setErrorFor (input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //Adicionar a mensagem de erro
    small.innerText = message;

    //Adicionar a classe de erro
    formControl.className = 'form-control error';

}
function setSuccessFor(input, message){
    const formControl = input.parentElement;
 
    //Adicionar a classe de sucesso
    formControl.className = 'form-control success';

}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }



