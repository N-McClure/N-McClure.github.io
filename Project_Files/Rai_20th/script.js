// To ensure and show that all files are connected:
console.log("Connected...Running...");

var x = document.getElementById("my_audio"); 

function playAudio() { 
  x.play(); 
} 

//The Array containing the Images:
let images = [
    "images/FullSizeRender.jpeg",
    "images/group_Party.jpeg",
    "images/IMG_0146.jpeg",
    "images/IMG_2533.jpeg",
    "images/IMG_2594.jpeg",
    "images/IMG_2622.jpeg",
    "images/IMG_2633.jpeg",
    "images/IMG_3003.jpeg",
    "images/IMG_3550.jpeg",
    "images/IMG_7886.jpeg",
    "images/IMG_7950.jpeg",
    "images/IMG_7962.jpeg",
    "images/IMG_9221.jpeg",
    "images/IMG_9320.jpeg",
    "images/IMG_9573.jpeg",
    "images/IMG_9640.jpeg",
    "images/IMG_9716.jpeg"
];

// Elements created outside the Function to manipulate the DOM and Generate the Image:
const img = document.createElement("img");

// The Random Photo Generation Function:
function generateImage(event)
{
    let imageSrc = images[Math.floor(Math.random() * images.length)];
    img.setAttribute("src", imageSrc);

    console.log(imageSrc);

    const imgDiv = document.querySelector('.generatedImage');
    const wrapping = document.querySelector('.wrapping');
    
    imgDiv.appendChild(img);
    wrapping.appendChild(imgDiv);
    document.body.appendChild(wrapping);

    document.querySelector('.wrapping').setAttribute("style", "height: 100%;");

    playAudio();
}