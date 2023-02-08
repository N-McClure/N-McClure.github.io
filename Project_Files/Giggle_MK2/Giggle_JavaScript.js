//Functions To Validate Input and Other Fun Things...I Hope:

//Function to Validate if the User's Credential Inputs Matches and is Valid on the Log-In page:
function credentialMatch()
{
    //Input from Text Boxes = Variables:
    let x = document.forms["Fill it Up"]["PassWord"].value;
    let y = document.forms["Fill it Up"]["ConfirmPassWord"].value;
    let z = document.forms["Fill it Up"]["Email"].value;

    //The Comparison:
    if (x === y)
    {
        //Nested IF statements to check Length:
        var length = x.length;
        //Check the Length:
        if (length >= 8)
        {
            return true;
        }
        else if (length < 8)
        {
            alert("Password Input does NOT follow the minimum Length.");
            return false;
        }
    }
    else
    {
        alert("Password and Confirmation Password Input DON'T Match.");
        return false;
    }

    //Check E-Mail Domain:
    let FunnyDomain = "@GiggleSearch.ca";

    if (z.include(FunnyDomain))
    {
        //E-Mail Valid as a Giggle Account:
        return true;
    }
    else
    {
        alert("Not an @GiggleSearch E-Mail address");
        return false;
    }

}

//Function to Read and Search Based on the User's Search Query:
function FindJokes()
{
    //Input in the Joke Search Bar = Variables:
    let x = document.forms["SearchSomething"]["Joke_Search"].value;

    var search = x.toLowerCase();
    if (x === null)
    {
        alert("Please Fill the Box. Empty Search is Invalid.");
        return false;
    }

    //The Searching of Related Links:

    //The Search to Page with the Links Based on Search Query Input:
    let searchPage = ("https://www.google.com/search?q=" + search + " jokes");
    this.currentPage = searchPage;
    //open(currentPage);

    //The Scraping Part of the Function:
    //No Idea What I am Doing...Help!

    const citationLinks = document.getElementsByTagName("button");

    for (let i = 0; i < citationLinks.length; i++)
    {
       console.log(citationLinks[i].value); 
    }

    open(currentPage);
    
}

//Function to Replace / Add Text to the <p> element of the Joke_Result Page:
function AddText()
{
    //document.getElementById("temp_Results").remove();

    const para = document.createElement("p"); //Element <p>.
    const node = document.createTextNode("Replace...Test");
    para.appendChild(node);

    const element = document.getElementById("temp_Results");
    element.appendChild(para);

}

