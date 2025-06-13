// To ensure and show that all files are connected:
console.log("Connected...Running...");

//The Array containing the Images:
let images = [
    "multimedia/im1.jpg",
    "multimedia/im2.jpg",
    "multimedia/im3.jpg",
    "multimedia/im4.jpg",
    "multimedia/im5.jpg",
    "multimedia/im6.jpg",
    "multimedia/im7.jpg",
    "multimedia/im8.jpg",
    "multimedia/im9.jpg",
    "multimedia/im10.jpg",
    "multimedia/im11.jpg",
    "multimedia/im12.jpg",
    "multimedia/im13.jpg",
    "multimedia/im14.jpg",
    "multimedia/im15.jpg",
    "multimedia/im16.jpg",
    "multimedia/im17.jpg",
    "multimedia/im18.jpg",
    "multimedia/im19.jpg",
    "multimedia/im20.jpg",
    "multimedia/im21.jpg",
    "multimedia/im22.jpg",
    "multimedia/im23.jpg",
    "multimedia/im24.jpg",
    "multimedia/im25.jpg",
    "multimedia/im26.jpg",
    "multimedia/im27.jpg",
    "multimedia/im18.png",
    "multimedia/im29.jpg",
    "multimedia/im30.jpg",
    "multimedia/im31.jpg",

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
}
