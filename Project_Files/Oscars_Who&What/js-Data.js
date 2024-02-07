//Show that the JavaScript File is Connected to the HTML Files:
console.log("Connected...Running...");

//////////////////////////////////////////////////////////////////////////

// Object of the Nomination Categories and the Films within them:
let NominationCategories = [
    {
       "Category": "Actor In a Leading Role",
       "Nominees": [
        {
           "Actor": "Bradley Cooper",
           "Film": "Maestro" 
        },
        {
            "Actor": "Colman Domingo",
            "Film": "Rustin"
        },
        {
            "Actor": "Paul Giamatti",
            "Film": "The Holdovers"
        },
        {
            "Actor": "Cillian Murphy",
            "Film": "Oppenheimer"
        },
        {
            "Actor": "Jeffrey Wright",
            "Film": "American Fiction"
        }
       ],
    },
    {
        "Category": "Actor In a Supporting Role",
        "Nominees": [
        {
            "Actor": "Sterling K. Brown",
            "Film": "American Fiction"
        },
        {
            "Actor": "Robert De Niro",
            "Film": "Killers of the Flower Moon"
        },
        {
            "Actor": "Robert Downey Jr",
            "Film": "Oppenheimer"
        },
        {
            "Actor": "Ryan Gosling",
            "Film": "Barbie"
        },
        {
            "Actor": "Mark Ruffalo",
            "Film": "Poor Things"
        }
        ],
    },
    {
        "Category": "Actress in a Leading Role",
        "Nominees": [
        {
            "Actress": "Annette Benning",
            "Film": "Nyad"
        },
        {
            "Actress": "Lily Gladstone",
            "Film": "Killers of the Flower Moon"
        },
        {
            "Actress": "Sandra Huller",
            "Film": "Anatomy of a Fall"
        },
        {
            "Actress": "Carey Mulligan",
            "Film": "Maestro"
        },
        {
            "Actress": "Emma Stone",
            "Film": "Poor Things"
        }
        ],
    },
    {
        "Category": "Actress in a Supporting Role",
        "Nominees": [
        {
            "Actress": "Emily Blunt",
            "Film": "Oppenheimer"
        },
        {
            "Actress": "Danielle Brooks",
            "Film": "The Color Purple"
        },
        {
            "Actress": "America Ferrera",
            "Film": "Barbie"
        },
        {
            "Actress": "Jodie Foster",
            "Film": "Nyad"
        },
        {
            "Actress": "Da'vine Joy Randolph",
            "Film": "The Holdovers"
        }
        ],
    },
    {
        "Category": "Animated Feature Film",
        "Nominees": [
        {
            "Film": "The Boy and the Heron"
        },
        {
            "Film": "Elemental"
        },
        {
            "Film": "Nimona"
        },
        {
            "Film": "Robot Dreams"
        },
        {
            "Film": "Spider-Man: Across the Spider-Verse"
        }
        ],
    },
    {
        "Category": "Cinematography",
        "Nominees": [
        {
            "Film": "El Conde"
        },
        {
            "Film": "Killers of the Flower Moon"
        },
        {
            "Film": "Maestro"
        },
        {
            "Film": "Oppenheimer"
        },
        {
            "Film": "Poor Things"
        }
        ],
    },
    {
        "Category": "Costume Design",
        "Nominees": [
        {
            "Film": "Barbie"
        },
        {
            "Film": "Killers of the Flower Moon"
        },
        {
            "Film": "Napoleon"
        },
        {
            "Film": "Oppenheimer"
        },
        {
            "Film": "Poor Things"
        }
        ],
    },
    {
        "Category": "Directing",
        "Nominees": [
        {
            "Film": "Anatomy of a Fall",
            "Director": "Justine Triet"
        },
        {
            "Film": "Killers of the Flower Moon",
            "Director": "Martin Scorsese"
        },
        {
            "Film": "Oppenheimer",
            "Director": "Christopher Nolan"
        },
        {
            "Film": "Poor Things",
            "Director": "Yorgos Lanthimos"
        },
        {
            "Film": "The Zone of Interest",
            "Director": "Jonathan Glazer"
        }
        ],
    },
    {
        "Category": "Documentary Feature Film",
        "Nominees": [
        {
            "Film": "Bobi Wine: The People's President"
        },
        {
            "Film": "The Eternal Memory"
        },
        {
            "Film": "Four Daughters"
        },
        {
            "Film": "To Kill a Tiger"
        },
        {
            "Film": "20 Days in Mariupol"
        }
        ],
    },
    {
        "Category": "Documentary Short Film",
        "Nominees": [
        {
            "Film": "The ABCs of Book Banning"
        },
        {
            "Film": "The Barber of Little Rock"
        },
        {
            "Film": "Island in Between"
        },
        {
            "Film": "The Last Repair Shop"
        },
        {
            "Film": "Nai Nai & Wai Po"
        }
        ],
    },
    {
        "Category": "Film Editing",
        "Nominees": [
        {
            "Film": "Anatomy of a Fall"
        },
        {
            "Film": "The Holdovers"
        },
        {
            "Film": "Killers of the Flower Moon"
        },
        {
            "Film": "Oppenheimer"
        },
        {
            "Film": "Poor Things"
        }
        ],
    },
    {
        "Category": "International Feature Film",
        "Nominees": [
        {
            "Film": "Io Capitano",
            "Country": "Italy"
        },
        {
            "Film": "Perfect Days",
            "Country": "Japan"
        },
        {
            "Film": "Society of the Snow",
            "Country": "Spain"
        },
        {
            "Film": "The Teachers' Lounge",
            "Country": "Germany"
        },
        {
            "Film": "The Zone of Interest",
            "Country": "United Kingdom"
        }
        ],
    },
    {
        "Category": "Make Up and Hair Styling",
        "Nominees": [
        {
            "Film": "Golda"
        },
        {
            "Film": "Maestro"
        },
        {
            "Film": "Oppenheimer"
        },
        {
            "Film": "Poor Things"
        },
        {
            "Film": "Society of the Snow"
        }
        ],
    },
    {
        "Category": "Music (Original Score)",
        "Nominees": [
        {
            "Film": "American Fiction",
            "Composer": "Laura Karpman"
        },
        {
            "Film": "Indiana Jones and the Dial of Desiny",
            "Composer": "John Williams"
        },
        {
            "Film": "Killers of the Flower Moon",
            "Composer": "Robbie Robertson"
        },
        {
            "Film": "Oppenheimer",
            "Composer": "Ludwig Goransson"
        },
        {
            "Film": "Poor Things",
            "Composer": "Jerskin Fendrix"
        }
        ],
    },
    {
        "Category": "Music (Original Song)",
        "Nominees": [
        {
            "Song": "The Fire Inside",
            "Film": "Flamin' Hot"
        },
        {
            "Song": "I'm Just Ken",
            "Film": "Barbie"
        },
        {
            "Song": "It Never Went Away",
            "Film": "American Symphony"
        },
        {
            "Song": "Wahzhazhe (A Song for my People)",
            "Film": "Killers of the Flower Moon"
        },
        {
            "Song": "What was I Made For?",
            "Film": "Barbie"
        }
        ],
    },
    {
        "Category": "Best Motion Picture",
        "Nominees": [
        {
            "Film": "American Fiction"
        },
        {
            "Film": "Anatomy of a Fall"
        },
        {
            "Film": "Barbie"
        },
        {
            "Film": "The Holdovers"
        },
        {
            "Film": "Killers of the Flower Moon"
        },
        {
            "Film": "Maestro"
        },
        {
            "Film": "Oppenheimer"
        },
        {
            "Film": "Past Lives"
        },
        {
            "Film": "Poor Things"
        },
        {
            "Film": "The Zone of Interest"
        }
        ],
    },
    {
        "Category": "Production Design",
        "Nominees": [
        {
            "Film": "Barbie"
        },
        {
            "Film": "Killers of the Flower Moon"
        },
        {
            "Film": "Napoleon"
        },
        {
            "Film": "Oppenheimer"
        },
        {
            "Film": "Poor Things"
        }
        ],
    },
    {
        "Category": "Animated Short Film",
        "Nominees": [
        {
            "Film": "Letter to a Pig"
        },
        {
            "Film": "Ninety-Five Senses"
        },
        {
            "Film": "Our Uniform"
        },
        {
            "Film": "Pachyderme"
        },
        {
            "Film": "War is Over! Inspired by the Music of John & Yoko"
        }
        ],
    },
    {
        "Category": "Live-Action Short Film",
        "Nominees": [
        {
            "Film": "The After"
        },
        {
            "Film": "Invincible"
        },
        {
            "Film": "Knight of Fortune"
        },
        {
            "Film": "Red, White and Blue"
        },
        {
            "Film": "The Wonderful Story of Henry Sugar"
        }
        ],
    },
    {
        "Categoty": "Sound",
        "Nominees": [
        {
            "Film": "The Creator"
        },
        {
            "Film": "Maestro"
        },
        {
            "Film": "Mission Impossible - Dead Reckoning Part One"
        },
        {
            "Film": "Oppenheimer"
        },
        {
            "Film": "The Zone of Interest"
        }
        ],
    },
    {
        "Category": "Visual Effects",
        "Nominees": [
        {
            "Film": "The Creator"
        },
        {
            "Film": "Godzilla Minus One"
        },
        {
            "Film": "Guardians of the Galaxy Vol. 3"
        },
        {
            "Film": "Mission Impossible - Dead Reckoning Part One"
        },
        {
            "Film": "Napoleon"
        }
        ],
    },
    {
        "Category": "Writing (Adapted Screenplay)",
        "Nominees": [
        {
            "Film": "American Fiction"
        },
        {
            "Film": "Barbie"
        },
        {
            "Film": "Oppenheimer"
        },
        {
            "Film": "Poor Things"
        },
        {
            "Film": "The Zone of Interest"
        }
        ],
    },
    {
        "Category": "Writing (Original Screenplay)",
        "Nominees": [
        {
            "Film": "Anatomy of a Fall"
        },
        {
            "Film": "The Holdovers"
        },
        {
            "Film": "Maestro"
        },
        {
            "Film": "May December"
        },
        {
            "Film": "Past Lives"
        }
    ]
    }
];

//////////////////////////////////////////////////////////////////////////

// Object of the Nominated Films and the Categories they are within:
let NominatedFilms = [
    {
       "Film": "Oppenheimer",
       "Nominations": [
        {
            "Award": "Best Motion Picture",
        },
        {
            "Award": "Actor In a Leading Role(Cillian Murphy)"
        },
        {
            "Award": "Actor In a Supporting Role(Robert Downey Jr)"
        },
        {
            "Award": "Actress In a Supporting Role(Emily Blunt)"
        },
        {
            "Award": "Cinematography"
        },
        {
            "Award": "Costume Design"
        },
        {
            "Award": "Original Score"
        },
        {
            "Award": "Production Design"
        },
        {
            "Award": "Editing"
        },
        {
            "Award": "Sound"
        },
        {
            "Award": "Make Up and Hair Styling"
        },
        {
            "Award": "Directing"
        }
       ],
    },
    {
        "Film": "Killers of the Flower Moon",
        "Nominations": [
        {
            "Award": "Best Motion Picture"
        },
        {
            "Award": "Actor In a Supporting Role(Robert De Niro)"
        },
        {
            "Award": "Actress In a Leading Role(Lily Gladstone)"
        },
        {
            "Award": "Costume Design"
        },
        {
            "Award": "Music (Original Song)"
        },
        {
            "Award": "Music (Original Score)"
        },
        {
            "Award": "Production Design"
        },
        {
            "Award": "Editing"
        },
        {
            "Award": "Cinematography"
        },
        {
            "Award": "Directing"
        }
        ],
    },
    {
        "Film": "Poor Things",
        "Nominations": [
        {
            "Award": "Best Motion Picture"
        },
        {
            "Award": "Actress In a Leading Role(Emma Stone)"
        },
        {
            "Award": "Actor In a Supporting Role(Mark Ruffalo)"
        },
        {
            "Award": "Directing"
        },
        {
            "Award": "Music (Original Scor)"
        },
        {
            "Award": "Cinematography"
        },
        {
            "Award": "Writing (Adapted Screenplay)"
        },
        {
            "Award": "Production Design"
        },
        {
            "Award": "Costume Design"
        },
        {
            "Award": "Make Up and Hair Styling"
        },
        {
            "Award": "Editing"
        }
        ],
    },
    {
        "Film": "Barbie",
        "Nominations": [
        {
            "Award": "Best Motion Picture"
        },
        {
            "Award": "Actor In a Supporting Role(Ryan Gosling)"
        },
        {
            "Award": "Actress In a Supporting Role(America Ferrera)"
        },
        {
            "Award": "Music (Original Song)"
        },
        {
            "Award": "Writing (Adapted Screenplay)"
        },
        {
            "Award": "Production Design"
        },
        {
            "Award": "Costume Design"
        }
        ],
    },
    {
        "Film": "Maestro",
        "Nominations": [
        {
            "Award": "Best Motion Picture"
        },
        {
            "Award": "Actor In a Leading Role(Bradley Cooper)"
        },
        {
            "Award": "Actress In a Leading Role(Carey Mulligan)"
        },
        {
            "Award": "Writing (Original Screenplay)"
        },
        {
            "Award": "Sound"
        },
        {
            "Award": "Cinematography"
        },
        {
            "Award": "Make Up and Hair Styling"
        }
        ],
    },
    {
        "Film": "American Fiction",
        "Nominations": [
        {
            "Award": "Best Motion Picture"
        },
        {
            "Award": "Actor In a Leading Role(Jeffrey Wright)"
        },
        {
            "Award": "Actor In a Supporting Role(Sterling K. Brown)"
        },
        {
            "Award": "Music (Original Score)"
        },
        {
            "Award": "Writing (Adapted Screenplay)"
        }
        ],
    },
    {
        "Film": "Anatomy of a Fall",
        "Nominations": [
        {
            "Award": "Best Motion Picture"
        },
        {
            "Award": "Actress In a Leading Role(Sandra Huller)"
        },
        {
            "Award": "Directing"
        },
        {
            "Award": "Editing"
        },
        {
            "Award": "Writing (Original Screenplay)"
        }
        ],
    },
    {
        "Film": "The Holdovers",
        "Nominations": [
        {
            "Award": "Best Motion Picture"
        },
        {
            "Award": "Actor In a Leading Role(Paul Giamatti)"
        },
        {
            "Award": "Actress In a Supporting Role(Da'vine Joy Randolph)"
        },
        {
            "Award": "Editing"
        },
        {
            "Award": "Writing (Original Screenplay)"
        }
        ],
    },
    {
        "Film": "The Zone of Interest",
        "Nominations": [
        {
            "Award": "Best Motion Picture"
        },
        {
            "Award": "International Feature Film"
        },
        {
            "Award": "Sound"
        },
        {
            "Award": "Directing"
        },
        {
            "Award": "Writing (Adapted Screenplay)"
        }
        ],
    },
    {
        "Film": "Rustin",
        "Nominations": [
        {
            "Award": "Actor In a Leading Role(Colman Domingo)"
        }
        ],
    },
    {
        "Film": "Nyad",
        "Nominations": [
        {
            "Award": "Actress In a Leading Role(Annette Benning)"
        },
        {
            "Award": "Actress In a Supporting Role(Jodie Foster)"
        }
        ],
    },
    {
        "Film": "The Color Purple",
        "Nominations": [
        {
            "Award": "Actress In a Supporting Role(Danielle Brooks)"
        }
        ],
    },
    {
        "Film": "Past Lives",
        "Nominations": [
        {
            "Award": "Best Motion Picture"
        },
        {
            "Award": "Writing (Original Screenplay)"
        }
        ],
    },
    {
        "Film": "May December",
        "Nominations": [
        {
            "Award": "Writing (Original Screenplay)"
        }
        ],
    },
    {
        "Film": "El Conde",
        "Nominations": [
        {
            "Award": "Cinematography"
        }
        ],
    },
    {
        "Film": "Napoleon",
        "Nominations": [
        {
            "Award": "Visual Effects"
        },
        {
            "Award": "Production Design"
        },
        {
            "Award": "Costume Design"
        }
        ],
    },
    {
        "Film": "Mission Impossible - Dead Reckoning Part One",
        "Nominations": [
        {
            "Award": "Sound"
        },
        {
            "Award": "Visual Effects"
        }
        ],
    },
    {
        "Film": "The Creator",
        "Nominations": [
        {
            "Award": "Sound"
        },
        {
            "Award": "Visual Effects"
        }
        ],
    },
    {
        "Film": "Golda",
        "Nominations": [
        {
            "Award": "Make Up and Hair Styling"
        }
        ],
    },
    {
        "Film": "Society of The Snow",
        "Nominations": [
        {
            "Award": "International Feature Film"
        },
        {
            "Award": "Make Up and Hair Styling"
        }
        ],
    },
    {
        "Film": "Indiana Jones and the Dial of Destiny",
        "Nominations": [
        {
            "Award": "Music (Original Score)"
        }
        ],
    },
    {
        "Film": "American Symphony",
        "Nominations": [
        {
            "Award": "Music (Original Song)"
        }
        ],
    },
    {
        "Film": "Flamin' Hot",
        "Nominations": [
        {
            "Award": "Music (Original Song)"
        }
        ],
    },
    {
        "Film": "Godzilla Minus One",
        "Nominations": [
        {
            "Award": "Visual Effects"
        }
        ],
    },
    {
        "Film": "Guardians of the Galaxy Vol.3",
        "Nominations": [
        {
            "Award": "Visual Effects"
        }
        ],
    },
    {
        "Film": "20 Days in Mariupol",
        "Nominations": [
        {
            "Award": "Documentary Feature Film"
        }
        ],
    },
    {
        "Film": "Four Daughters",
        "Nominations": [
        {
            "Award": "Documentary Feature Film"
        }
        ],
    },
    {
        "Film": "To Kill a Tiger",
        "Nominations": [
        {
            "Award": "Documentary Feature Film"
        }
        ],
    },
    {
        "Film": "Bobi Wine: The People's President",
        "Nominations": [
        {
            "Award": "Documentary Feature Film"
        }
        ],
    },
    {
        "Film": "The Eternal Memory",
        "Nominations": [
        {
            "Award": "Documentary Feature Film"
        }
        ],
    },
    {
        "Film": "Elemental",
        "Nominations": [
        {
            "Award": "Animated Feature Film"
        }
        ],
    },
    {
        "Film": "Robot Dreams",
        "Nominations": [
        {
            "Award": "Animated Feature Film"
        }
        ],
    },
    {
        "Film": "The Boy and the Heron",
        "Nominations": [
        {
            "Award": "Animated Feature Film"
        }
        ],
    },
    {
        "Film": "Nimona",
        "Nominations": [
        {
            "Award": "Animated Feature Film"
        }
        ],
    },
    {
        "Film": "Spider-Man: Across the Spider-Verse",
        "Nominations": [
        {
            "Award": "Animated Feature Film"
        }
        ],
    },
    {
        "Film": "Letter to a Pig",
        "Nominations": [
        {
            "Award": "Animated Short Film"
        }
        ],
    },
    {
        "Film": "Our Uniform",
        "Nominations": [
        {
            "Award": "Animated Short Film"
        }
        ],
    },
    {
        "Film": "War is Over! Inspired by the Music of John & Yoko",
        "Nominations": [
        {
            "Award": "Animated Short Film"
        }
        ],
    },
    {
        "Film": "Ninety-Five Senses",
        "Nominations": [
        {
            "Award": "Animated Short Film"
        }
        ],
    },
    {
        "Film": "Pachyderme",
        "Nominations": [
        {
           "Award": "Animated Short Film" 
        }
        ],
    },
    {
        "Film": "Invincible",
        "Nominations": [
        {
            "Award": "Live Action Short Film"
        }
        ],
    },
    {
        "Film": "Red, White and Blue",
        "Nominations": [
        {
            "Award": "Live Action Short Film"
        }
        ],
    },
    {
        "Film": "The Wonderful Story of Henry Sugar",
        "Nominations": [
        {
            "Award": "Live Action Short Film"
        }
        ],
    },
    {
        "Film": "Knight of Fortune",
        "Nominations": [
        {
            "Award": "Live Action Short Film"
        }
        ],
    },
    {
        "Film": "The After",
        "Nominations": [
        {
            "Award": "Live Action Short Film"
        }
        ],
    },
    {
        "Film": "Island in Between",
        "Nominations": [
        {
            "Award": "Documentary Short Film"
        }
        ],
    },
    {
        "Film": "The ABCs of Book Banning",
        "Nominations": [
        {
            "Award": "Documentary Short Film"
        }
        ],
    },
    {
        "Film": "The Last Repair Shop",
        "Nominations": [
        {
            "Award": "Documentary Short Film"
        }
        ],
    },
    {
        "Film": "Nai Nai & Wai Po",
        "Nominations": [
        {
            "Award": "Documentary Short Film"
        }
        ],
    },
    {
        "Film": "The Barber of Little Rock",
        "Nominations": [
        {
            "Award": "Documentary Short Film"
        }
        ],
    },
    {
        "Film": "Io Capitano",
        "Nominations": [
        {
            "Award": "International Feature Film"
        }
        ],
    },
    {
        "Film": "Perfect Days",
        "Nominations": [
        {
            "Award": "International Feature Film"
        }
        ],
    },
    {
        "Film": "The Teachers' Lounge",
        "Nominations": [
        {
            "Award": "International Feature Film"
        }
        ]
    }
];

