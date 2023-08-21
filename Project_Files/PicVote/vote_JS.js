console.log("CONNECTED...");

//The Array of Images:
let Images = [
    "MultiMedia/AWNA2115.JPG",
    "MultiMedia/FPVA1887.JPG",
    "MultiMedia/FRLT7945.JPG",
    "MultiMedia/FSOL8248.JPG",
    "Multimedia/GDCV3995.JPG",
    "MultiMedia/HBQI9266.JPG",
    "MultiMedia/HMAI0261.JPG",
    "MultiMedia/ISIO1683.JPG",
    "MultiMedia/JRLD2298.JPG",
    "MultiMedia/KAFV1853.JPG",
    "MultiMedia/LGET0718.JPG",
    "MultiMedia/LHHF5004.JPG",
    "MultiMedia/TGZU3581.JPG",
    "MultiMedia/UYOV8054.JPG",
    "MultiMedia/VPFE6873.JPG",
    "MultiMedia/WISG4606.JPG",
    "MultiMedia/WNSK1055.JPG",
    "MultiMedia/WSDT8474.JPG"
];
console.log(Images);

//Creates the Table-Data Elements: 
let td1 = document.createElement("td");
let td2 = document.createElement("td");

//Creates an Image Element:
let img1 = document.createElement("img");
let img2 = document.createElement("img");

img1.addEventListener("click", click1);
img2.addEventListener("click", click2);

//Function to Generate Random Images and Manipulate the DOM and load Images on Re-Fresh:
function RandomImage()
{
    //Image 1:
    let src1 = Images[Math.floor(Math.random()*Images.length)];
    img1.setAttribute("src", src1);
    td1.appendChild(img1);
    document.body.appendChild(td1);

    //Image 2:
    let src2 = Images[Math.floor(Math.random()*Images.length)];
    img2.setAttribute("src", src2);
    td2.appendChild(img2);
    document.body.appendChild(td2);

    //If condition looking to see if the Image Sources are the same:
    if (src1 === src2)
    {
        console.log("error...Images are the same!!!");

    }
}

//Function to Manipulate the Image1 DOM if Image2 is Clicked (Not Working):
function click2(event)
{
    //Image 1:
    let src1 = Images[Math.floor(Math.random()*Images.length)];
    img1.setAttribute("src", src1);
    td1.appendChild(img1);
    document.body.appendChild(td1);
}

//Function to Manipulate the Image2 DOM if Image1 is Clicked (Working):
function click1(event)
{
    //Image 2:
    let src2 = Images[Math.floor(Math.random()*Images.length)];
    img2.setAttribute("src", src2);
    td2.appendChild(img2);
    document.body.appendChild(td2);
}
