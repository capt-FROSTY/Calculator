let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == '√') {
            buttonText = 'Math.sqrt';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        
        else if (buttonText === 'CE') {
            screen.value = screenValue.substring(0, screen.value.length - 1);
        }
    
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }   
        
    })
}
