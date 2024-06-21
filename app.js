const displayEl = document.querySelector('.display');

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      //console.log(event.target.innerText);
      switch(event.target.innerText) {
        case 'C':
          displayEl.innerText = '';
          break;
        case '=':
          displayEl.innerText = eval(displayEl.innerText);
          break;
        default:
          displayEl.textContent += event.target.innerText;
      }
    });
});

const calculator = document.querySelector('#calculator');
calculator.addEventListener('click', (event) => {
    console.log(event.target.innerText);
    
});

  
  