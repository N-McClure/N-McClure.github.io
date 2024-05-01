// To ensure that all files are connected and running:
console.log("Connected...Running...");

// Getting constant values and variables:
const dropdown = document.querySelectorAll("form select");
const fromType = document.querySelector(".from select");
const toType = document.querySelector(".to select");
const formButton = document.querySelector("form button");

for (let i = 0; i < dropdown.length; i++){
    // Setting defaults in the inputs:
    for(let currencyCode in country_list){
        let selected = i == 0 ? currencyCode == "CAD" ? "selected" : "" :currencyCode == "USD" ? "selected" : "";
        let option  = `<option calue="${currencyCode}" ${selected}>${currencyCode}</option> `
        dropdown[i].insertAdjacentHTML("beforeEnd", option);
    }

    // Adds an Event Listener to the dropdown menus to see if they are changed from the defaults:
    dropdown[i].addEventListener("change", e=>{
        generateFlag(e.target);
    });
}

// Function to Generate the Flag associated with chosen currency:
function generateFlag(element){
    for (let countryCode in country_list){
        if (countryCode == element.value){
            let image = element.parentElement.querySelector("img");
            image.src = `https://flagcdn.com/48x36/${country_list[countryCode].toLowerCase()}.png`;
        }
    }
}

// Adds an Event Listener to the button in the form to execute the conversion function when the button is clicked:
formButton.addEventListener("click", e =>{
    e.preventDefault();
    getConversion(); 
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", ()=>{
    let tempCode = fromType.value;
    fromType.value = toType.value;
    toType.value = tempCode;
    generateFlag(fromType);
    generateFlag(toType);
    getConversion();
})

// Function to do the Currency Conversion:
function getConversion(){
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .converting");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/4c4d2d80c14756f969d66066/latest/${fromType.value}`;
    console.log(url);
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toType.value];
        let totalExRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerText = `${amountVal} ${fromType.value} = ${totalExRate} ${toType.value}`;
    }).catch(() =>{
        exchangeRateTxt.innerText = "Oops!...Looks like something went Wrong :(";
    });
}