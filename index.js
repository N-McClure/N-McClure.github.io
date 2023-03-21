//Show that JS File is Connected:
console.log("RUNNING...");

//For the Visit Counter:
function websiteVisits(response)
{
    document.querySelector("#visits").textContent = response.value;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

function showSlides(n) 
{
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
