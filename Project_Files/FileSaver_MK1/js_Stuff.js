// To show that the files are Connected:
console.log("Connected...Running...");

//Constant Variables:
const textarea = document.querySelector("textarea");
const inputFileName = document.querySelector(".fileName input");
const inputFileType = document.querySelector(".typeOptions select");
const button = document.querySelector(".saveFile");

// Event Listener to see if the Save Button has been Clicked:
button.addEventListener("click", () => {
    console.log("Save Button has been clicked.");
    const blob = new Blob([textarea.value],{type: inputFileType.value});
    const fileUrl = URL.createObjectURL(blob);

    //Creates a Link for the New File:
    const fileLink = document.createElement("a");
    fileLink.download = inputFileName.value;
    fileLink.href = fileUrl;
    fileLink.click();
});