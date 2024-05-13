// To ensure and show that all files are connected:
console.log("Connected...Running...");

// Declaration of Variables outside Functions:
let imageUrl;

// Function to initialize and execute the Background removing service:
function removeBackground(){

    // To show that the button has been clicked and the function should be running:
    console.log("Background Removal function should be running...");

    //Declaration of variables:
    const inputtedPhoto = document.querySelector('.imageWithNoEdits');
    const imageFile = inputtedPhoto.files[0];

    console.log(imageFile);

    const formData = new FormData();
    formData.append('image_file', imageFile);
    formData.append('size', 'auto');

    // Assigning my API Key value to a variable:
    const apiKey = 'T6Qu2VfTc3eCR8xPVCooatK6';

    // Calling the API:
    fetch('https://api.remove.bg/v1.0/removebg',{
        method:'POST',
        headers: {
        'X-Api-Key': apiKey
     },
     body: formData
    })
    .then(function(reponse){
            return reponse.blob()
    })
    // Displaying the Edited Image File: 
    .then(function(blob){
            console.log(blob);
            const url = URL.createObjectURL(blob);
            imageURL = url;
            const img = document.createElement('img');
            img.src = url;
            const editedDiv = document.querySelector('.newImage');
            editedDiv.appendChild(img);
            const wrapping = document.querySelector('.wrapping');
            wrapping.appendChild(editedDiv);
            document.body.appendChild(wrapping);

            document.querySelector('.wrapping').setAttribute("style", "height: 100%;");
    })
    .catch();
}   

// Function to Download the Edited Image File:
function downloadImage(){

    // To show that the Downloading Function should be Running:
    console.log("The Downloading Edited Image Function should be Running...");


    var editedImageLink = document.createElement('a'); //<a></a>
    editedImageLink.href = imageURL;
    editedImageLink.download = 'removedBackground.png';
    document.body.appendChild(editedImageLink);

    editedImageLink.click();

    document.body.removeChild(editedImageLink);
}