// To Ensure all Files are Connected:
console.log("Connected...Running...");

// Defining Variables:
let defaultValue = 0;
let defaultShown = "0";
let previousOperation;

const screen = document.querySelector(".outputScreen");

// Function Activated when Buttons are Clicked:
function buttonClicked(value){
    if (isNaN(value)){
        useSymbol(value);
    }
    else{
        useNumber(value);
    }

    screen.innerText = defaultShown;
}

// Function to Utilize Symbol Chosen:
function useSymbol(symbol){
    // NOTE: Using Switch Cases b/c for the Oscars2024 app I built used Hundreds of If Statements and it SUCKED!
    switch(symbol){
        case 'C':
            defaultShown = '0';
            defaultValue = 0;
            break;
        case '=':
            if(previousOperation === null){
                return
            }
            flushOperation(parseInt(defaultShown));
            previousOperation = null;
            defaultShown = defaultValue;
            defaultValue = 0;
            break;
        case '←':
            if(defaultShown.length === 1){
                defaultShown = 0;
            }
            else{
                defaultShown = defaultShown.substring(0, defaultShown.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            doTheMath(symbol);
            break;
    }
}

// Function to do the Calculatios:
function doTheMath(symbol) {
    if(defaultShown === '0'){
        return;
    }

    const intDefault = parseInt(defaultShown);

    if(defaultValue === 0){
        defaultValue = intDefault;
    }
    else{
        flushOperation(intDefault);
    }
    previousOperation = symbol;
    defaultShown = '0';
}

function flushOperation(intDefault){
    if(previousOperation === "+"){
        defaultValue += intDefault;
    }
    if(previousOperation === "−"){
        defaultValue -= intDefault;
    }
    if(previousOperation === "×"){
        defaultValue *= intDefault;
    }
    if(previousOperation === "÷"){
        defaultValue /= intDefault;
    }
}

function useNumber(numberString){
    if(defaultShown === "0"){
        defaultShown = numberString;
    }
    else{
        defaultShown += numberString;
    }
}

// Function to Initialize:
function initialize(){
    // Getting the buttons to do stuff when pressed::
    document.querySelector(".inputButtons")
    .addEventListener('click', function(event){
        buttonClicked(event.target.innerText);
    })
}

initialize();