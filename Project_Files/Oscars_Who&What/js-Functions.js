
// Function to retreive and return the Films in the Chosen Category:
function searchViaCategory(){
    console.log("Search By Category function should be running...");
    
    // Getting the Category Value:
    const category = document.querySelector(".categoryOptions select");
    console.log(category.value);
    console.log("");

    // DOM Maniputlation for Displaying the relative data based on search:
    
    let wrapping = document.querySelector(".wrapping");
    let resultDiv = document.createElement("div");
        resultDiv.setAttribute("class", "results");
        let results = document.querySelector(".results");
    let resultsHeader = document.createElement("h4");
    let headerText = document.createTextNode(category.value);
 
    //Displaying the Category:

    resultsHeader.appendChild(headerText);
    resultDiv.appendChild(resultsHeader);
    wrapping.appendChild(resultDiv);
    document.body.appendChild(wrapping);

    // Creating the list of relative search results from the searched category:
    // NOTE: Using the wrapping and resultDiv Divs from the header.

    let ul = document.createElement("ul");

    // Getting the Data from the Objects:

    // Category Value = Actor In a Leading Role:
    if (category.value === "Actor In a Leading Role")
    {
        console.log(NominationCategories[0].Nominees.length);
        
        for (let i = 0; i < NominationCategories[0].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[0].Nominees[i].Film);
            console.log("Actor: " + NominationCategories[0].Nominees[i].Actor);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[0].Nominees[i].Actor + "(" + NominationCategories[0].Nominees[i].Film + ")");

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Actor In a Supporting Role:
    if (category.value === "Actor In a Supporting Role")
    {
        console.log(NominationCategories[1].Nominees.length);
            
        for (let i = 0; i < NominationCategories[1].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[1].Nominees[i].Film);
            console.log("Actor: " + NominationCategories[1].Nominees[i].Actor);
    
            let li = document.createElement("li");
    
            let liText = document.createTextNode(NominationCategories[1].Nominees[i].Actor + "(" + NominationCategories[1].Nominees[i].Film + ")");
    
            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Actress In a Leading Role:
    if (category.value === "Actress In a Leading Role")
    {
        console.log(NominationCategories[2].Nominees.length);
        
        for (let i = 0; i < NominationCategories[2].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[2].Nominees[i].Film);
            console.log("Actress: " + NominationCategories[2].Nominees[i].Actress);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[2].Nominees[i].Actress + "(" + NominationCategories[2].Nominees[i].Film + ")");

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }
        
    // Category Value = Actress In a Supporting Role:
    if (category.value === "Actress In a Supporting Role")
    {
        console.log(NominationCategories[3].Nominees.length);
        
        for (let i = 0; i < NominationCategories[3].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[3].Nominees[i].Film);
            console.log("Actress: " + NominationCategories[3].Nominees[i].Actress);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[3].Nominees[i].Actress + "(" + NominationCategories[3].Nominees[i].Film + ")");

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Animated Feature Film:
    if (category.value === "Animated Feature Film")
    {
        console.log(NominationCategories[4].Nominees.length);
        
        for (let i = 0; i < NominationCategories[4].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[4].Nominees[i].Film);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[4].Nominees[i].Film);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Cinematography:
    if (category.value === "Cinematography")
    {
        console.log(NominationCategories[5].Nominees.length);
            
        for (let i = 0; i < NominationCategories[5].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[5].Nominees[i].Film);
    
            let li = document.createElement("li");
    
            let liText = document.createTextNode(NominationCategories[5].Nominees[i].Film);
    
            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Costume Design:
    if (category.value === "Costume Design")
    {
        console.log(NominationCategories[6].Nominees.length);
        
        for (let i = 0; i < NominationCategories[6].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[6].Nominees[i].Film);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[6].Nominees[i].Film);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Directing:
    if (category.value === "Directing")
    {
        console.log(NominationCategories[7].Nominees.length);
        
        for (let i = 0; i < NominationCategories[7].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[7].Nominees[i].Film);
            console.log("Director: " + NominationCategories[7].Nominees[i].Director);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[7].Nominees[i].Director + "(" + NominationCategories[7].Nominees[i].Film + ")");

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Documentary Feature Film:
    if (category.value === "Documentary Feature Film")
    {
        console.log(NominationCategories[8].Nominees.length);
        
        for (let i = 0; i < NominationCategories[8].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[8].Nominees[i].Film);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[8].Nominees[i].Film);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Documentary Short Film:
    if (category.value === "Documentary Short Film")
    {
        console.log(NominationCategories[9].Nominees.length);
        
        for (let i = 0; i < NominationCategories[9].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[9].Nominees[i].Film);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[9].Nominees[i].Film);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Film Editing:
    if (category.value === "Film Editing")
    {
        console.log(NominationCategories[10].Nominees.length);
        
        for (let i = 0; i < NominationCategories[10].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[10].Nominees[i].Film);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[10].Nominees[i].Film);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = International Feature Film:
    if (category.value === "International Feature Film")
    {
        console.log(NominationCategories[11].Nominees.length);
        
        for (let i = 0; i < NominationCategories[11].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[11].Nominees[i].Film);
            console.log("Country: " + NominationCategories[11].Nominees[i].Country);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[11].Nominees[i].Film + "(" + NominationCategories[11].Nominees[i].Country + ")");

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Make Up and Hair Styling:
    if (category.value === "Make Up and Hair Styling")
    {
        console.log(NominationCategories[12].Nominees.length);
        
        for (let i = 0; i < NominationCategories[12].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[12].Nominees[i].Film);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[12].Nominees[i].Film);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }


    // Category Value = Music (Original Score):
    if (category.value === "Music (Original Score)")
    {
        console.log(NominationCategories[13].Nominees.length);
        
        for (let i = 0; i < NominationCategories[13].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[13].Nominees[i].Film);
            console.log("Composer: " + NominationCategories[13].Nominees[i].Composer);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[13].Nominees[i].Composer + "(" + NominationCategories[13].Nominees[i].Film + ")");

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Music (Original Song):
    if (category.value === "Music (Original Song)")
    {
        console.log(NominationCategories[14].Nominees.length);
        
        for (let i = 0; i < NominationCategories[14].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[14].Nominees[i].Film);
            console.log("Song: " + NominationCategories[14].Nominees[i].Song);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[14].Nominees[i].Song + "(" + NominationCategories[14].Nominees[i].Film + ")");

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Best Motion Picture:
    if (category.value === "Best Motion Picture")
    {
        console.log(NominationCategories[15].Nominees.length);
        
        for (let i = 0; i < NominationCategories[15].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[15].Nominees[i].Film);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[15].Nominees[i].Film);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }
    
    // Category Value = Production Design:
    if (category.value === "Production Design")
    {
        console.log(NominationCategories[16].Nominees.length);
        
        for (let i = 0; i < NominationCategories[16].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[16].Nominees[i].Film);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[16].Nominees[i].Film);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Animated Short Film:
    if (category.value === "Animated Short Film")
    {
        console.log(NominationCategories[17].Nominees.length);
        
        for (let i = 0; i < NominationCategories[17].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[17].Nominees[i].Film);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[17].Nominees[i].Film);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Live-Action Short Film:
    if (category.value === "Live-Action Short Film")
    {
        console.log(NominationCategories[18].Nominees.length);
        
        for (let i = 0; i < NominationCategories[18].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[18].Nominees[i].Film);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[18].Nominees[i].Film);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Sound:
    if (category.value === "Sound")
    {
        console.log(NominationCategories[19].Nominees.length);
        
        for (let i = 0; i < NominationCategories[19].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[19].Nominees[i].Film);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[19].Nominees[i].Film);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Visual Effects:
    if (category.value === "Visual Effects")
    {
        console.log(NominationCategories[20].Nominees.length);
        
        for (let i = 0; i < NominationCategories[20].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[20].Nominees[i].Film);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[20].Nominees[i].Film);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Writing (Adapted Screenplay):
    if (category.value === "Writing (Adapted Screenplay)")
    {
        console.log(NominationCategories[21].Nominees.length);
        
        for (let i = 0; i < NominationCategories[21].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[21].Nominees[i].Film);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[21].Nominees[i].Film);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Category Value = Writing (Original Screenplay):
    if (category.value === "Writing (Original Screenplay)")
    {

        console.log(NominationCategories[22].Nominees.length);
        
        for (let i = 0; i < NominationCategories[22].Nominees.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominationCategories[22].Nominees[i].Film);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominationCategories[22].Nominees[i].Film);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }
}

//////////////////////////////////////////////////////////////////////////

// Function to Search for the relative Nomination Categories based on the User Searched Film title:
function searchViaTitle(){
    console.log("Search by Title function should be running...");

    // Getting the Inputted Title Value:
    const filmTitle = document.querySelector(".filmName input");
    console.log(filmTitle.value);
    console.log("");

    // DOM Maniputlation for Displaying the relative data based on search:
    let wrapping = document.querySelector(".wrapping");
    let resultDiv = document.createElement("div");
        resultDiv.setAttribute("class", "results");
        let results = document.querySelector(".results");
    let resultsHeader = document.createElement("h4");
    let headerText = document.createTextNode(filmTitle.value);

    //Displaying the Film:
    resultsHeader.appendChild(headerText);
    resultDiv.appendChild(resultsHeader);
    wrapping.appendChild(resultDiv);
    document.body.appendChild(wrapping);

    let ul = document.createElement("ul");


    // Searched Film Title === Oppenheimer:
    if(filmTitle.value === "Oppenheimer"){
        for (let i = 0; i < NominatedFilms[0].Nominations.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominatedFilms[0].Nominations[0].Award);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[0].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Killers of the Flower Moon:
    if(filmTitle.value === "Killers of the Flower Moon"){
        for (let i = 0; i < NominatedFilms[1].Nominations.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominatedFilms[1].Nominations[1].Award);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[1].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Poor Things:
    if(filmTitle.value === "Poor Things"){
        for (let i = 0; i < NominatedFilms[2].Nominations.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominatedFilms[2].Nominations[2].Award);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[2].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Barbie:
    if(filmTitle.value === "Barbie"){
        for (let i = 0; i < NominatedFilms[3].Nominations.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominatedFilms[3].Nominations[3].Award);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[3].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Maestro:
    if(filmTitle.value === "Maestro"){
        for (let i = 0; i < NominatedFilms[4].Nominations.length; i++)
        {
            // Writing the retreived data to the console:
            console.log("Film: " + NominatedFilms[4].Nominations[4].Award);

            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[4].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === American Fiction:
    if(filmTitle.value === "American Fiction"){
        for (let i = 0; i < NominatedFilms[5].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[5].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Anatomy of a Fall:
    if(filmTitle.value === "Anatomy of a Fall"){
        for (let i = 0; i < NominatedFilms[6].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[6].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === The Holdovers:
    if(filmTitle.value === "The Holdovers"){
        for (let i = 0; i < NominatedFilms[7].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[7].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === The Zone of Interest:
    if(filmTitle.value === "The Zone of Interest"){
        for (let i = 0; i < NominatedFilms[8].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[8].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Rustin:
    if(filmTitle.value === "Rustin"){
        for (let i = 0; i < NominatedFilms[9].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[9].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Nyad:
    if(filmTitle.value === "Nyad"){
        for (let i = 0; i < NominatedFilms[10].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[10].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === The Color Purple:
    if(filmTitle.value === "The Color Purple"){
        for (let i = 0; i < NominatedFilms[11].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[11].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Past Lives:
    if(filmTitle.value === "Past Lives"){
        for (let i = 0; i < NominatedFilms[12].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[12].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === May December:
    if(filmTitle.value === "May December"){
        for (let i = 0; i < NominatedFilms[13].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[13].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === El Conde:
    if(filmTitle.value === "El Conde"){
        for (let i = 0; i < NominatedFilms[14].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[14].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Napoleon:
    if(filmTitle.value === "Napoleon"){
        for (let i = 0; i < NominatedFilms[15].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[15].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Mission Impossible - Dead Reckoning Part One:
    if(filmTitle.value === "Mission Impossible - Dead Reckoning Part One"){
        for (let i = 0; i < NominatedFilms[16].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[16].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === The Creator:
    if(filmTitle.value === "The Creator"){
        for (let i = 0; i < NominatedFilms[17].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[17].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Golda:
    if(filmTitle.value === "Golda"){
        for (let i = 0; i < NominatedFilms[18].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[18].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Society of the Snow:
    if(filmTitle.value === "Society of the Snow"){
        for (let i = 0; i < NominatedFilms[19].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[19].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Indiana Jones and the Dial of Destiny:
    if(filmTitle.value === "Indiana Jones and the Dial of Destiny"){
        for (let i = 0; i < NominatedFilms[20].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[20].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === American Symphony:
    if(filmTitle.value === "American Symphony"){
        for (let i = 0; i < NominatedFilms[21].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[21].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Flamin' Hot:
    if(filmTitle.value === "Flamin' Hot"){
        for (let i = 0; i < NominatedFilms[22].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[22].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Godzilla Minus One:
    if(filmTitle.value === "Godzilla Minus One"){
        for (let i = 0; i < NominatedFilms[23].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[23].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Guardians of the Galaxy Vol.3:
    if(filmTitle.value === "Guardians of the Galaxy Vol.3"){
        for (let i = 0; i < NominatedFilms[24].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[24].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === 20 Days in Mariupol:
    if(filmTitle.value === "20 Days in Mariupol"){
        for (let i = 0; i < NominatedFilms[25].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[25].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Four Daughters:
    if(filmTitle.value === "Four Daughters"){
        for (let i = 0; i < NominatedFilms[26].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[26].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === To Kill a Tiger:
    if(filmTitle.value === "To Kill a Tiger"){
        for (let i = 0; i < NominatedFilms[27].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[27].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Bobi Wine: The People's President:
    if(filmTitle.value === "Bobi Wine: The People's President"){
        for (let i = 0; i < NominatedFilms[28].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[28].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === The Eternal Memory:
    if(filmTitle.value === "The Eternal Memory"){
        for (let i = 0; i < NominatedFilms[29].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[29].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Elemental:
    if(filmTitle.value === "Elemental"){
        for (let i = 0; i < NominatedFilms[30].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[30].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Robot Dreams:
    if(filmTitle.value === "Robot Dreams"){
        for (let i = 0; i < NominatedFilms[31].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[31].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === The Boy and the Heron:
    if(filmTitle.value === "The Boy and the Heron"){
        for (let i = 0; i < NominatedFilms[32].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[32].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Nimona:
    if(filmTitle.value === "Nimona"){
        for (let i = 0; i < NominatedFilms[33].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[33].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Spider-Man: Across the Spider-Verse:
    if(filmTitle.value === "Spider-Man: Across the Spider-Verse"){
        for (let i = 0; i < NominatedFilms[34].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[34].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Letter to a Pig:
    if(filmTitle.value === "Letter to a Pig"){
        for (let i = 0; i < NominatedFilms[35].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[35].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Our Uniform:
    if(filmTitle.value === "Our Uniform"){
        for (let i = 0; i < NominatedFilms[36].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[36].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === War is Over! Inspired by the Music of John & Yoko:
    if(filmTitle.value === "War is Over! Inspired by the Music of John & Yoko"){
        for (let i = 0; i < NominatedFilms[37].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[37].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Ninety-Five Senses:
    if(filmTitle.value === "Ninety-Five Senses"){
        for (let i = 0; i < NominatedFilms[38].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[38].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Pachyderme:
    if(filmTitle.value === "Pachyderme"){
        for (let i = 0; i < NominatedFilms[39].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[39].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Invincible:
    if(filmTitle.value === "Invincible"){
        for (let i = 0; i < NominatedFilms[40].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[40].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Red, White and Blue:
    if(filmTitle.value === "Red, White and Blue"){
        for (let i = 0; i < NominatedFilms[41].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[41].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === The Wonderful Story of Henry Sugar:
    if(filmTitle.value === "The Wonderful Story of Henry Sugar"){
        for (let i = 0; i < NominatedFilms[42].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[42].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Knight of Fortune:
    if(filmTitle.value === "Knight of Fortune"){
        for (let i = 0; i < NominatedFilms[43].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[43].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === The After:
    if(filmTitle.value === "The After"){
        for (let i = 0; i < NominatedFilms[44].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[44].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Island in Between:
    if(filmTitle.value === "Island in Between"){
        for (let i = 0; i < NominatedFilms[45].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[45].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === The ABCs pf Book Banning:
    if(filmTitle.value === "The ABCs of Book Banning"){
        for (let i = 0; i < NominatedFilms[46].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[46].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === The Last Repair Shop:
    if(filmTitle.value === "The Last Repair Shop"){
        for (let i = 0; i < NominatedFilms[47].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[47].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Nai Nai & Wai Po:
    if(filmTitle.value === "Nai Nai & Wai Po"){
        for (let i = 0; i < NominatedFilms[48].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[48].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === The Barber of Little Rock:
    if(filmTitle.value === "The Barber of Little Rock"){
        for (let i = 0; i < NominatedFilms[49].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[49].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Io Capitano:
    if(filmTitle.value === "Io Capitano"){
        for (let i = 0; i < NominatedFilms[50].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[50].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === Perfect Days:
    if(filmTitle.value === "Perfect Days"){
        for (let i = 0; i < NominatedFilms[51].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[51].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }

    // Searched Film Title === The Teachers' Lounge:
    if(filmTitle.value === "The Teachers' Lounge"){
        for (let i = 0; i < NominatedFilms[52].Nominations.length; i++)
        {
            let li = document.createElement("li");

            let liText = document.createTextNode(NominatedFilms[52].Nominations[i].Award);

            li.appendChild(liText);
            ul.appendChild(li);
            resultDiv.appendChild(ul);
            wrapping.appendChild(resultDiv);
            document.body.appendChild(wrapping);
        }
    }
}