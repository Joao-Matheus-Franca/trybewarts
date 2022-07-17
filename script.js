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

const textarea = document.getElementById('textarea');
const count = document.getElementById('counter');

function counter() {
  count.innerText = 500 - textarea.value.length;
}

textarea.addEventListener('keyup', counter);

function reboot(event) {
  event.preventDefault();
}

button.addEventListener('click', reboot);

const main = document.querySelector('.main');
const result = document.createElement('section');
result.id = 'form-data';

const name = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
const family01 = document.getElementById('frontend');
const family02 = document.getElementById('backend');
const family03 = document.getElementById('fullstack');
const content = document.getElementsByClassName('subject');
const radio = document.getElementsByClassName('radio');

function changeHeader() {
  document.getElementById('evaluation-form').style.display = 'none';
  const info01 = document.createElement('p');
  info01.innerText = `Nome: ${name.value} ${lastName.value}`;
  result.appendChild(info01);
  const info02 = document.createElement('p');
  info02.innerText = `Email: ${email.value}`;
  result.appendChild(info02);
  const info03 = document.createElement('p');
  info03.innerText = `Casa: ${house.value}`;
  result.appendChild(info03);
  main.appendChild(result);
}

button.addEventListener('click', changeHeader);

function changeMain() {
  const info04 = document.createElement('p');
  if (family01.checked === true) {
    info04.innerText = `Família: ${family01.value}`;
  } else if (family02.checked === true) {
    info04.innerText = `Família: ${family02.value}`;
  } else if (family03.checked === true) {
    info04.innerText = `Família: ${family03.value}`;
  }
  result.appendChild(info04);
}

button.addEventListener('click', changeMain);

function contents() {
  const info05 = document.createElement('p');
  const array = [];
  for (let i = 0; i < content.length; i += 1) {
    if (content[i].checked === true) {
      array.push(content[i].value);
    }
  }
  const frase = array.join(', ');
  info05.innerText = `Matérias: ${frase}`;
  result.appendChild(info05);
}

button.addEventListener('click', contents);

function rate() {
  const info06 = document.createElement('p');
  const info07 = document.createElement('p');
  for (let i = 0; i < radio.length; i += 1) {
    if (radio[i].checked === true) {
      info06.innerText = `Avaliação: ${radio[i].value}`;
    }
  }
  info07.innerText = `Observações: ${textarea.value}`;
  result.appendChild(info06);
  result.appendChild(info07);
}

button.addEventListener('click', rate);
