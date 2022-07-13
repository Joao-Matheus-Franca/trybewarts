const botaoEnviarHeader = document.getElementById('submit-header');
const emailHeader = document.getElementById('email-header');
const passwordHeader = document.getElementById('password-header');

function enviaHeader(evento) {
  if (emailHeader.value === 'tryber@teste.com' && passwordHeader.value === '123456') {
    evento.preventDefault();
    window.alert('Olá, Tryber!');
  } else {
    evento.preventDefault();
    window.alert('Email ou senha inválidos.');
  }
}

botaoEnviarHeader.addEventListener('click', enviaHeader);
const button = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
function desativar() {
  button.disabled = true;
}
window.onload = desativar;
function ativar() {
  if (checkbox.checked === true) {
    button.disabled = false;
  } else if (checkbox.checked === false) {
    button.disabled = true;
  }
}
checkbox.addEventListener('click', ativar);
