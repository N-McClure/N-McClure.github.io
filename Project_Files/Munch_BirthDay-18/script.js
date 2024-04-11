// To show that all Files are connected and working:
console.log("Connected...Running...");

// Function to confirm user is >= 18:
function welcomeMunch() {
    let enterdAge = document.forms["getInfo"]["age"].value;

    //Access to main is Denied:
    if (enterdAge < 18)
    {
        alert("Too Young to view site.");
    }
    //Access to main is Granted:
    if (enterdAge >= 18)
    {
        open("index.html");
    }
}