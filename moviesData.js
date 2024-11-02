const actionMovies = [
    {
        name: "Dune",
        description: "A mythic and epic adventure set in the far future, Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a noble family destined for greatness. As malevolent forces threaten his family and homeworld, Paul journeys to the most dangerous planet in the universe, Arrakis, to ensure the future of his people.",
        director: "Denis Villeneuve",
        genre: "Sci-Fi",
        releaseDate: "2021-10-21",
        language: "English",
        imdbRating: 8.3,
        categoryId: 1
    },  
    {
        name: "The Batman",
        description: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a new threat known as The Riddler.",
        director: "Matt Reeves",
        genre: "Action, Crime, Mystery",
        releaseDate: "2022-03-04",
        language: "English",
        imdbRating: 7.8,
        categoryId: 1
    },
    {
        name: "Everything Everywhere All At Once",
        description: "An aging Chinese immigrant is swept up in an insane multiverse adventure, where she alone can save the world by exploring other universes and connecting with alternate versions of herself.",
        director: "Daniels",
        genre: "Action, Comedy, Sci-Fi",
        releaseDate: "2022-03-11",
        language: "English",
        imdbRating: 8.1,
        categoryId: 1
    },
    {
        name: "Top Gun: Maverick",
        description: "After more than thirty years of service as one of the Navy's top aviators, Pete \"Maverick\" Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. When he finds himself training a detachment of Top Gun graduates for a specialized mission the likes of which no pilot has ever seen, Maverick encounters Lt. Bradley Bradshaw, the son of Maverick's late friend and Radar Intercept Officer, Lt. Nick Bradshaw, who died in the line of duty.",
        director: "Joseph Kosinski",
        genre: "Action, Drama",
        releaseDate: "2022-05-27",
        language: "English",
        imdbRating: 8.4,
        categoryId: 1
    },
    {
        name: "Avatar: The Way of Water",
        description: "Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the victories they achieve.",
        director: "James Cameron",
        genre: "Action, Adventure, Fantasy",
        releaseDate: "2022-12-16",
        language: "English",
        imdbRating: 7.8,
        categoryId: 1
    },
    {
        name: "John Wick: Chapter 4",
        description: "John Wick uncovers a path to defeating the High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.",
        director: "Chad Stahelski",
        genre: "Action, Crime, Thriller",
        releaseDate: "2023-03-24",
        language: "English",
        imdbRating: 7.8,
        categoryId: 1
    },
    {
        name: "Mission: Impossible - Dead Reckoning Part One",
        description: "Ethan Hunt and the IMF team embark on their most dangerous mission yet, tracing a terrifying new weapon that threatens all of humanity.",
        director: "Christopher McQuarrie",
        genre: "Action, Adventure, Thriller",
        releaseDate: "2023-07-12",
        language: "English",
        imdbRating: 7.8,
        categoryId: 1
    },
    {
        name: "Oppenheimer",
        description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        director: "Christopher Nolan",
        genre: "Biography, Drama, History",
        releaseDate: "2023-07-21",
        language: "English",
        imdbRating: 8.1,
        categoryId: 1
    },
    {
        name: "Fast X",
        description: "Dominic Toretto and his family are forced to confront the ghosts of the past, as a terrifying threat emerges from the shadows to shatter their world.",
        director: "Louis Leterrier",
        genre: "Action, Crime, Thriller",
        releaseDate: "2023-05-19",
        language: "English",
        imdbRating: 6.8,
        categoryId: 1
    },
    {
        name: "Scream VI",
        description: "The survivors of the Ghostface killings leave Woodsboro behind and start a new chapter in New York City.",
        director: "Matt Bettinelli-Olpin, Tyler Gillett",
        genre: "Horror, Mystery, Thriller",
        releaseDate: "2023-03-10",
        language: "English",
        imdbRating: 6.9,
        categoryId: 1
    }
];

const indianMovies = [
    {
        name: "Pushpa: The Rise",
        description: "A powerful and stylish action film set in the red sanders forests of Andhra Pradesh.",
        director: "Sukumar",
        genre: "Action, Drama",
        language: "Telugu",
        imdbRating: 8.2,
        releaseDate: "2021-12-17",
        categoryId: 1
    },
    {
        name: "RRR",
        description: "A fictional story about two Indian revolutionaries, Alluri Sitarama Raju and Komaram Bheem.",
        director: "S. S. Rajamouli",
        genre: "Action, Period Drama",
        language: "Telugu",
        imdbRating: 8.8,
        releaseDate: "2022-03-25",
        categoryId: 1
    },
    {
        name: "Kantara",
        description: "A rural drama exploring the conflict between nature, tradition, and modernity.",
        director: "Rishab Shetty",
        genre: "Drama, Fantasy",
        language: "Kannada",
        imdbRating: 8.5,
        releaseDate: "2022-10-14",
        categoryId: 1
    },
    {
        name: "Vikram Vedha",
        description: "A neo-noir action thriller based on the Indian folktale Vikram and Betaal.",
        director: "Pushkar-Gayathri",
        genre: "Action, Crime, Thriller",
        language: "Hindi",
        imdbRating: 7.8,
        releaseDate: "2022-09-30",
        categoryId: 1
    },
    {
        name: "The Kashmir Files",
        description: "A historical drama based on the exodus of Kashmiri Hindus from the Kashmir Valley in the 1990s.",
        director: "Vivek Agnihotri",
        genre: "Drama, History",
        language: "Hindi",
        imdbRating: 8.3,
        releaseDate: "2022-03-11",
        categoryId: 1
    },
    {
        name: "Gangubai Kathiawadi",
        description: "A biographical crime drama based on the life of Gangubai Kothewali, a prominent figure in Kamathipura.",
        director: "Sanjay Leela Bhansali",
        genre: "Drama, Crime",
        language: "Hindi",
        imdbRating: 7.2,
        releaseDate: "2022-02-25",
        categoryId: 1
    },
    {
        name: "Drishyam 2",
        description: "A suspense thriller about a family man who goes to extreme lengths to protect his family.",
        director: "Jeethu Joseph",
        genre: "Thriller, Mystery",
        language: "Malayalam",
        imdbRating: 8.4,
        releaseDate: "2022-12-16",
        categoryId: 1
    },
    {
        name: "Bheeshma Parvam",
        description: "A period drama based on the life of a powerful feudal lord in Kerala.",
        director: "Amal Neerad",
        genre: "Drama, Period",
        language: "Malayalam",
        imdbRating: 7.9,
        releaseDate: "2022-03-11",
        categoryId: 1
    },
    {
        name: "Jai Bhim",
        description: "A legal drama based on a true story of a tribal man fighting for justice.",
        director: "T. J. Gnanavel",
        genre: "Drama, Legal",
        language: "Tamil",
        imdbRating: 8.8,
        releaseDate: "2021-11-02",
        categoryId: 1
    },
    {
        name: "Soorarai Pottru",
        description: "A biographical drama based on the life of Captain G. R. Gopinath, the founder of Air Deccan.",
        director: "Sudha Kongara",
        genre: "Drama, Biography",
        language: "Tamil",
        imdbRating: 8.5,
        releaseDate: "2020-11-12",
        categoryId: 1
    }
];

const comedyMovies = [
    {
        name: "Cirkus",
        description: "A comedy film with a circus backdrop.",
        director: "Rohit Shetty",
        genre: "Comedy",
        language: "Hindi",
        imdbRating: 5.8,
        releaseDate: "2022-12-23",
        categoryId: 2
    },
    {
        name: "Bhediya",
        description: "A horror-comedy film about a man who turns into a werewolf.",
        director: "Amar Kaushik",
        genre: "Horror Comedy",
        language: "Hindi",
        imdbRating: 6.8,
        releaseDate: "2022-11-25",
        categoryId: 2
    },
    {
        name: "Drishyam 2",
        description: "A suspense thriller with comedic elements about a family man who goes to extreme lengths to protect his family.",
        director: "Jeethu Joseph",
        genre: "Thriller, Comedy",
        language: "Malayalam",
        imdbRating: 8.4,
        releaseDate: "2022-12-16",
        categoryId: 2
    },
    {
        name: "Thank God",
        description: "A comedy-drama film about a man who gets a second chance at life.",
        director: "Indra Kumar",
        genre: "Comedy, Drama",
        language: "Hindi",
        imdbRating: 5.2,
        releaseDate: "2022-10-25",
        categoryId: 2
    },
    {
        name: "Selfiee",
        description: "A comedy film about a superstar who switches lives with a common man.",
        director: "Raj Mehta",
        genre: "Comedy",
        language: "Hindi",
        imdbRating: 5.1,
        releaseDate: "2023-02-24",
        categoryId: 2
    },
    {
        name: "Kisi Ka Bhai Kisi Ki Jaan",
        description: "A comedy-action film about a man who protects his family.",
        director: "Farhad Samji",
        genre: "Comedy, Action",
        language: "Hindi",
        imdbRating: 4.9,
        releaseDate: "2023-04-21",
        categoryId: 2
    },
    {
        name: "Fukrey 3",
        description: "A comedy film about four friends who get into hilarious adventures.",
        director: "Mrighdeep Singh Lamba",
        genre: "Comedy",
        language: "Hindi",
        imdbRating: 7.2,
        releaseDate: "2023-09-08",
        categoryId: 2
    },
    {
        name: "Dream Girl 2",
        description: "A comedy film about a man who can mimic female voices.",
        director: "Raaj Shaandilyaa",
        genre: "Comedy",
        language: "Hindi",
        imdbRating: 7.1,
        releaseDate: "2023-07-07",
        categoryId: 2
    },
    {
        name: "Tu Jhoothi Main Makkaar",
        description: "A romantic comedy film about a couple who play mind games with each other.",
        director: "Luv Ranjan",
        genre: "Romance, Comedy",
        language: "Hindi",
        imdbRating: 6.8,
        releaseDate: "2023-03-08",
        categoryId: 2
    },
    {
        name: "Shehzada",
        description: "A comedy-action film about a man who switches lives with his lookalike.",
        director: "Rohit Dhawan",
        genre: "Comedy, Action",
        language: "Hindi",
        imdbRating: 5.4,
        releaseDate: "2023-02-17",
        categoryId: 2
    }
];

const sciFiMovies = [
    {
        name: "Dune",
        description: "A mythic and epic adventure set in the far future.",
        director: "Denis Villeneuve",
        genre: "Sci-Fi",
        language: "English",
        imdbRating: 8.3,
        releaseDate: "2021-10-21",
        categoryId: 3
    },
    {
        name: "Everything Everywhere All At Once",
        description: "An aging Chinese immigrant is swept up in an insane multiverse adventure.",
        director: "Daniels",
        genre: "Sci-Fi, Comedy, Action",
        language: "English",
        imdbRating: 8.1,
        releaseDate: "2022-03-11",
        categoryId: 3
    },
    {
        name: "Nope",
        description: "Residents of a lonely gulch in California witness a strange and shocking discovery.",
        director: "Jordan Peele",
        genre: "Sci-Fi, Horror, Mystery",
        language: "English",
        imdbRating: 7.1,
        releaseDate: "2022-07-22",
        categoryId: 3
    },
    {
        name: "Avatar: The Way of Water",
        description: "Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family.",
        director: "James Cameron",
        genre: "Sci-Fi, Action, Adventure",
        language: "English",
        imdbRating: 7.8,
        releaseDate: "2022-12-16",
        categoryId: 3
    },
    {
        name: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        director: "Christopher Nolan",
        genre: "Sci-Fi, Adventure, Drama",
        language: "English",
        imdbRating: 8.6,
        releaseDate: "2014-11-07",
        categoryId: 3
    },
    {
        name: "Inception",
        description: "A thief who steals corporate secrets through use of dream-sharing technology is given a final chance at redemption.",
        director: "Christopher Nolan",
        genre: "Sci-Fi, Action, Thriller",
        language: "English",
        imdbRating: 8.8,
        releaseDate: "2010-07-16",
        categoryId: 3
    },
    {
        name: "Blade Runner 2049",
        description: "A new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge society into chaos.",
        director: "Denis Villeneuve",
        genre: "Sci-Fi, Mystery, Thriller",
        language: "English",
        imdbRating: 8.1,
        releaseDate: "2017-10-06",
        categoryId: 3
    },
    {
        name: "Arrival",
        description: "A linguist is tasked with communicating with extraterrestrial visitors.",
        director: "Denis Villeneuve",
        genre: "Sci-Fi, Drama, Mystery",
        language: "English",
        imdbRating: 8.0,
        releaseDate: "2016-11-11",
        categoryId: 3
    },
    {
        name: "Prometheus",
        description: "A team of explorers discover a clue to the origins of humanity on Earth, leading them on a dangerous expedition to the darkest corners of the universe.",
        director: "Ridley Scott",
        genre: "Sci-Fi, Horror, Mystery",
        language: "English",
        imdbRating: 7.9,
        releaseDate: "2012-06-08",
        categoryId: 3
    },
    {
        name: "Ad Astra",
        description: "An astronaut travels to the outer edges of the solar system to find his missing father and unravel a mystery that threatens the survival of humanity.",
        director: "James Gray",
        genre: "Sci-Fi, Drama, Mystery",
        language: "English",
        imdbRating: 7.4,
        releaseDate: "2019-09-20",
        categoryId: 3
    }
];