const
  keyCodeP = document.querySelector('#keyCode'),
  keyCodeDiv = document.querySelector('.key-code'),
  pressedKeyText = document.querySelector('#pressedKeyText'),
  logsP = document.querySelector('#logs');

let logs = [];

document.body.addEventListener('keydown', e => {
  keyCodeDiv.removeAttribute('hidden')
  if(e.keyCode != 32){
    pressedKeyText.innerHTML = `<p id="pressedKeyText">You pressed <span class="key-color">${e.key}</span></p>`;
    keyCodeP.textContent = e.keyCode;
  } else {
    pressedKeyText.innerHTML = `<p id="pressedKeyText">You pressed <span class="key-color">Space</span></p>`;
    keyCodeP.textContent = e.keyCode;
  }

  if(e.keyCode === 8 || logs[0] === " ") logs.pop();
  if(e.keyCode === 32) logs.push(' ');
  else if(e.keyCode === 8 || e.key.length > 1);
  else { logs.push(e.key)};

  logsP.textContent = logs.join("");
  console.log(logs);
})


