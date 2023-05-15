# iAviary
## Your source for Eggspert Collection Management

iAviary allows any aviculturist to keep track of their collection through a responsive database design. Add, edit, and remove birds from your collection. By selecting an individual from you collection, you can view and update that individuals information, record daily notes, and add weights which then can be viewed in a graph.

Our species database is growing daily, but feel free to reach out with specific requests.


### Who is it for?

Any aviculturist or bird hobbyist looking to keep track of their collection.


### Why do I need it?

Can't remember a band number or which bird is which?<BR>
Concerned about weights and bird health?<BR>
Would you like to keep track of medications, enrichment, and more?<br>

Then iAviary is for you! This simple application is here to help you keep track of each specimen in your collection through info cards, notes and weights! There is also a limited capability to reach out to other users by leaving a message on the front page -ask questions, submit a trade or species request and more. 

### Technolgies Used

![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Git](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white) ![JSON Server](https://img.shields.io/badge/JSON_Server%20-%232a2e2a.svg?&style=for-the-badge&logo=JSON&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VSCode%20-%23007ACC.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Boostrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) ![Chart Js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

### Demo of Application

Click <a href="https://www.loom.com/share/4b974a91d0fe447cabf5d8f8fdc89c41">here</a> for a narrated demo

### Getting Started

*First, a note about authentication...*
This application uses mock authentication which is purely for demonstration purposes. Therefore the login code written here is completely insecure and would never be implemented in a professional application.

### Setup

1.  Clone this repository
2.  ```cd``` into the directory
3.  Install the necessary packages<br>
• ```npm install```<br>
• ```npm install react-bootstrap bootstrap```<br>
• ```npm install chart.js react-chartjs-2 ```<br>
• ```npm install json-server```
4.  ```mkdir api``` and ```touch database.json``` to create the database
5.  Copy and paste sample api below into the database
6.  Run ```json-server database.json -p 8088 -w``` from the api directory
7.  In a separate terminal, run npm start from the repository directory


### Sample API

You can copy and paste sample data to get an idea of how this app can be used

<details><summary>Click for Sample Data</summary>
<p>

```sh

{
  "users": [
    {
      "id": 1,
      "name": "Laura Furnivall",
      "aviaryName": "Paradise Tree",
      "aboutInfo": "Egg-spert, Parrot Tamer, Lover of Books",
      "interests": "Vultures, Egg Incubation, Coding",
      "address": "Smyrna, TN",
      "email": "laura@laura.com",
      "isAdmin": true
    },
    {
      "id": 2,
      "name": "Joe Degrauw",
      "aviaryName": "Patriot Birds",
      "aboutInfo": "40 years of experience in avian husbandry and hand-rearing.",
      "interests": "Loggerhead Shrikes, America, Parrot Feet Pics",
      "address": "Joelton, TN",
      "email": "joe@joe.com",
      "isAdmin": false
    },
    {
      "id": 3,
      "name": "Ashley Gwaltney",
      "aviaryName": "Lorikeet Landing",
      "aboutInfo": "Lorikeet Supervisor at the Nashville Zoo.",
      "interests": "Lorikeets, Murder Mysteries, Wheel of Time",
      "address": "Murfreesboro, TN",
      "email": "ashley@ashley.com",
      "isAdmin": false
    },
    {
      "email": "bird@bird.com",
      "name": "Birdy McBird",
      "aviaryName": "Bird is the Word",
      "address": "Bird, SD",
      "aboutInfo": "Obsession is my game, birds are the aim. ",
      "interests": "Birds, birds, birds!",
      "isAdmin": false,
      "id": 4
    },
    {
      "email": "user@demo.com",
      "name": "Demo User",
      "aviaryName": "Demo Aviary",
      "address": "Demo, DE",
      "aboutInfo": "Sample about statement!",
      "interests": "Showing you how the site functions!",
      "isAdmin": false,
      "id": 5
    },
    {
      "email": "admin@demo.com",
      "name": "Admin Demo",
      "aviaryName": "Admin Demo Aviary",
      "address": "Demo, DE",
      "aboutInfo": "Demo about statement!",
      "interests": "Here to show you how the admin site works!",
      "isAdmin": true,
      "id": 6
    }
  ],
  "birds": [
    {
      "id": 1,
      "userId": 1,
      "speciesId": "5",
      "img": "https://images.pexels.com/photos/133400/pexels-photo-133400.jpeg",
      "name": "Gibby",
      "genderId": 2,
      "identifiers": "Missing toe, silver band on right foot.  ",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "1999-05-31",
      "gender": {
        "id": 2,
        "gender": "Female"
      },
      "species": {
        "id": 5,
        "img": "./assets/Amelia.jpg",
        "commonName": "Rainbow Lorikeet",
        "scientificName": "Trichoglossus moluccanus",
        "description": "This charasmatic species of parrots is endemic to Australia and the surrounding islands. Although they travel in flocks, they will often pair off and defend their territory with vicious tenacity."
      }
    },
    {
      "id": 2,
      "userId": 1,
      "speciesId": 1,
      "img": "../assets/Weber.jpg",
      "name": "George",
      "genderId": 2,
      "identifiers": "Metal band on left leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "2000-11-15",
      "species": {
        "id": 1,
        "img": "./assets/Melon.jpg",
        "commonName": "Weber's Lorikeet ",
        "scientificName": "Trichoglossus weberi",
        "description": "The weber's lorikeet is endemic to the Indonesian island of Flores. Unlike other members of the Trichoglossus family, the Weber's lorikeet is predominately green in plumage with a paler green chest and collar."
      },
      "gender": {
        "id": 2,
        "gender": "Female"
      }
    },
    {
      "id": 3,
      "userId": 1,
      "speciesId": 1,
      "img": "../assets/Ditty.jpg",
      "name": "Lil' Ditty",
      "genderId": 1,
      "identifiers": "Green Right Leg Band, Yellow Left Leg Band",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "2015-03-03",
      "species": {
        "id": 1,
        "img": "./assets/Melon.jpg",
        "commonName": "Weber's Lorikeet ",
        "scientificName": "Trichoglossus weberi",
        "description": "The weber's lorikeet is endemic to the Indonesian island of Flores. Unlike other members of the Trichoglossus family, the Weber's lorikeet is predominately green in plumage with a paler green chest and collar."
      },
      "gender": {
        "id": 1,
        "gender": "Male"
      }
    },
    {
      "id": 5,
      "userId": 1,
      "speciesId": 8,
      "img": "https://upload.wikimedia.org/wikipedia/commons/9/9c/African_Grey_Parrot_%28Psittacus_erithacus%294.jpg",
      "name": "Sorcha",
      "genderId": 2,
      "identifiers": "Red tail, grey body, the sweetest little dream bird.",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "January 1st 2023"
    },
    {
      "id": 6,
      "userId": 1,
      "speciesId": 4,
      "img": "../assets/Majesty.jpg",
      "name": "Her Majesty",
      "genderId": 2,
      "identifiers": "Funky feet!",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "2017-06-14",
      "species": {
        "id": 4,
        "img": "./assets/Majesty.jpg",
        "commonName": "Blue-headed Lorikeet",
        "scientificName": "Trichoglossus moluccanus",
        "description": "This species of lorikeet is no longer recognized as a subspecies of the Rainbow lorikeet, but the heart of and personality of the bird is vastly different and therefore is still formally recognized in my heart."
      },
      "gender": {
        "id": 2,
        "gender": "Female"
      }
    },
    {
      "id": 7,
      "userId": 2,
      "speciesId": 2,
      "img": "https://upload.wikimedia.org/wikipedia/commons/7/73/Lanius_ludovicianus_-Texas_-USA-8-4c.jpg",
      "name": "Portia",
      "genderId": 2,
      "identifiers": "Metal band - JD5001",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "March 25th 2022",
      "species": {
        "id": 2,
        "img": "https://www.thelandbetween.ca/wp-content/uploads/bb-plugin/cache/ShrikeID-square.png",
        "commonName": "Loggerhead Shrike",
        "scientificName": "Lanius ludovicianus",
        "description": "This songbird is commonly referenced as the murder bird as Loggerhead Shrikes are well known for their hunting habits of impaling their food on barbed wire, branches or other sharp pointy objects."
      },
      "gender": {
        "id": 2,
        "gender": "Female"
      }
    },
    {
      "id": 8,
      "userId": 2,
      "speciesId": 2,
      "img": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Loggerhead_Shrike_florida_RWD6.jpg",
      "name": "Charlize",
      "genderId": 2,
      "identifiers": "Metal band - JD5002",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "April 30th 2021",
      "species": {
        "id": 2,
        "img": "https://www.thelandbetween.ca/wp-content/uploads/bb-plugin/cache/ShrikeID-square.png",
        "commonName": "Loggerhead Shrike",
        "scientificName": "Lanius ludovicianus",
        "description": "This songbird is commonly referenced as the murder bird as Loggerhead Shrikes are well known for their hunting habits of impaling their food on barbed wire, branches or other sharp pointy objects."
      },
      "gender": {
        "id": 2,
        "gender": "Female"
      }
    },
    {
      "id": 9,
      "userId": 2,
      "speciesId": 2,
      "img": "https://live.staticflickr.com/2391/2076310677_e4f76b2d77_b.jpg",
      "name": "Hector",
      "genderId": 1,
      "identifiers": "Metal band - JD5003",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "March 17th 2020",
      "species": {
        "id": 2,
        "img": "https://www.thelandbetween.ca/wp-content/uploads/bb-plugin/cache/ShrikeID-square.png",
        "commonName": "Loggerhead Shrike",
        "scientificName": "Lanius ludovicianus",
        "description": "This songbird is commonly referenced as the murder bird as Loggerhead Shrikes are well known for their hunting habits of impaling their food on barbed wire, branches or other sharp pointy objects."
      },
      "gender": {
        "id": 1,
        "gender": "Male"
      }
    },
    {
      "id": 10,
      "userId": 2,
      "speciesId": 2,
      "img": "https://live.staticflickr.com/2307/2270544304_4441543db8_b.jpg",
      "name": "Lector",
      "genderId": 1,
      "identifiers": "Metal band - JD5004",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "February 28th 2021",
      "species": {
        "id": 2,
        "img": "https://www.thelandbetween.ca/wp-content/uploads/bb-plugin/cache/ShrikeID-square.png",
        "commonName": "Loggerhead Shrike",
        "scientificName": "Lanius ludovicianus",
        "description": "This songbird is commonly referenced as the murder bird as Loggerhead Shrikes are well known for their hunting habits of impaling their food on barbed wire, branches or other sharp pointy objects."
      },
      "gender": {
        "id": 1,
        "gender": "Male"
      }
    },
    {
      "id": 11,
      "userId": 2,
      "speciesId": 9,
      "img": "data:image/jpeg;base64,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",
      "name": "Lady",
      "genderId": 2,
      "identifiers": "Female plummage, bald spot under right eye",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "December 5th 2005",
      "species": {
        "id": 9,
        "img": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Struthio_camelus_-Cape_May_Zoo%2C_New_Jersey%2C_USA-8a.jpg",
        "commonName": "Ostrich",
        "scientificName": "Struthio camelus",
        "description": "A large flightless bird with the ability to run up to 43.5 mph. Ostriches are sexually dimorphic, with males have black plumage and females have grey. Realistically not the best private collection animal... "
      },
      "gender": {
        "id": 2,
        "gender": "Female"
      }
    },
    {
      "id": 12,
      "userId": 2,
      "speciesId": 9,
      "img": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/221510801/1800",
      "name": "Darling",
      "genderId": 2,
      "identifiers": "Female plumage, white feathers on left wing",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "December 6th 2005",
      "species": {
        "id": 9,
        "img": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Struthio_camelus_-Cape_May_Zoo%2C_New_Jersey%2C_USA-8a.jpg",
        "commonName": "Ostrich",
        "scientificName": "Struthio camelus",
        "description": "A large flightless bird with the ability to run up to 43.5 mph. Ostriches are sexually dimorphic, with males have black plumage and females have grey. Realistically not the best private collection animal... "
      },
      "gender": {
        "id": 2,
        "gender": "Female"
      }
    },
    {
      "id": 13,
      "userId": 2,
      "speciesId": 9,
      "img": "https://live.staticflickr.com/2705/4541091801_3c9c6cbea1_b.jpg",
      "name": "Horatio",
      "genderId": 1,
      "identifiers": "Male plummage",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "August 9th 2010",
      "species": {
        "id": 9,
        "img": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Struthio_camelus_-Cape_May_Zoo%2C_New_Jersey%2C_USA-8a.jpg",
        "commonName": "Ostrich",
        "scientificName": "Struthio camelus",
        "description": "A large flightless bird with the ability to run up to 43.5 mph. Ostriches are sexually dimorphic, with males have black plumage and females have grey. Realistically not the best private collection animal... "
      },
      "gender": {
        "id": 1,
        "gender": "Male"
      }
    },
    {
      "id": 14,
      "userId": 2,
      "speciesId": 10,
      "img": "https://live.staticflickr.com/8379/8480269330_2a2e584f1a_c.jpg",
      "name": "Margaret",
      "genderId": 2,
      "identifiers": "Yellow band on left leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "July 11th 2019",
      "species": {
        "id": 10,
        "img": "https://live.staticflickr.com/8379/8480269330_2a2e584f1a_c.jpg",
        "commonName": "Blue-bellied Roller",
        "scientificName": "Coracias cyanogaster",
        "description": "A large bird with a dark brown of tan head, neck and breast. The remainder of the plumage is notable variations of a deep blue with hints of cyan. Enjoys the delectable diet of insects."
      },
      "gender": {
        "id": 2,
        "gender": "Female"
      }
    },
    {
      "id": 15,
      "userId": 2,
      "speciesId": 10,
      "img": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Blue-bellied_Roller%2C_Lemon_Creek%2C_Gambia_%2818557646382%29.jpg",
      "name": "Teresa",
      "genderId": 2,
      "identifiers": "Red band on left leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "June 7th 2018",
      "species": {
        "id": 10,
        "img": "https://live.staticflickr.com/8379/8480269330_2a2e584f1a_c.jpg",
        "commonName": "Blue-bellied Roller",
        "scientificName": "Coracias cyanogaster",
        "description": "A large bird with a dark brown of tan head, neck and breast. The remainder of the plumage is notable variations of a deep blue with hints of cyan. Enjoys the delectable diet of insects."
      },
      "gender": {
        "id": 2,
        "gender": "Female"
      }
    },
    {
      "id": 16,
      "userId": 2,
      "speciesId": 10,
      "img": "https://upload.wikimedia.org/wikipedia/commons/6/68/Blue-bellied_Roller_RWD.jpg",
      "name": "Michael",
      "genderId": 1,
      "identifiers": "Green band on left leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "June 5th 2019",
      "species": {
        "id": 10,
        "img": "https://live.staticflickr.com/8379/8480269330_2a2e584f1a_c.jpg",
        "commonName": "Blue-bellied Roller",
        "scientificName": "Coracias cyanogaster",
        "description": "A large bird with a dark brown of tan head, neck and breast. The remainder of the plumage is notable variations of a deep blue with hints of cyan. Enjoys the delectable diet of insects."
      },
      "gender": {
        "id": 1,
        "gender": "Male"
      }
    },
    {
      "id": 17,
      "userId": 2,
      "speciesId": 10,
      "img": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Blue-bellied_Roller_001.jpg",
      "name": "Billy",
      "genderId": 1,
      "identifiers": "Blue band on left leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "2022-06-02",
      "species": {
        "id": 10,
        "img": "https://live.staticflickr.com/8379/8480269330_2a2e584f1a_c.jpg",
        "commonName": "Blue-bellied Roller",
        "scientificName": "Coracias cyanogaster",
        "description": "A large bird with a dark brown of tan head, neck and breast. The remainder of the plumage is notable variations of a deep blue with hints of cyan. Enjoys the delectable diet of insects."
      },
      "gender": {
        "id": 1,
        "gender": "Male"
      }
    },
    {
      "id": 18,
      "userId": 3,
      "speciesId": 1,
      "img": "../assets/Melon.jpg",
      "name": "Melon",
      "genderId": 1,
      "identifiers": "Blue band on left leg, orange band on right leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "May 1st 2017",
      "species": {
        "id": 1,
        "img": "./assets/Melon.jpg",
        "commonName": "Weber's Lorikeet ",
        "scientificName": "Trichoglossus weberi",
        "description": "The weber's lorikeet is endemic to the Indonesian island of Flores. Unlike other members of the Trichoglossus family, the Weber's lorikeet is predominately green in plumage with a paler green chest and collar."
      },
      "gender": {
        "id": 1,
        "gender": "Male"
      }
    },
    {
      "id": 19,
      "userId": 3,
      "speciesId": 1,
      "img": "../assets/Skipper.jpg",
      "name": "Skipper",
      "genderId": 2,
      "identifiers": "Blue band on left leg, purple band on right leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "June 18th 2017",
      "species": {
        "id": 1,
        "img": "./assets/Melon.jpg",
        "commonName": "Weber's Lorikeet ",
        "scientificName": "Trichoglossus weberi",
        "description": "The weber's lorikeet is endemic to the Indonesian island of Flores. Unlike other members of the Trichoglossus family, the Weber's lorikeet is predominately green in plumage with a paler green chest and collar."
      },
      "gender": {
        "id": 2,
        "gender": "Female"
      }
    },
    {
      "id": 20,
      "userId": 3,
      "speciesId": 5,
      "img": "",
      "name": "Rey",
      "genderId": 1,
      "identifiers": "Purple band on left leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "March 14th 2019"
    },
    {
      "id": 21,
      "userId": 3,
      "speciesId": 5,
      "img": "",
      "name": "Fifteen",
      "genderId": 1,
      "identifiers": "Metal Band on right leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "July 7th 2006"
    },
    {
      "id": 22,
      "userId": 3,
      "speciesId": 5,
      "img": "",
      "name": "Lovey",
      "genderId": 2,
      "identifiers": "Yellow band on right leg, blue band on left leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "May 10th 2015"
    },
    {
      "id": 23,
      "userId": 3,
      "speciesId": 6,
      "img": "",
      "name": "Fang",
      "genderId": 1,
      "identifiers": "Lime band on Left, Red band on Right",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "January 10th 2014"
    },
    {
      "id": 24,
      "userId": 3,
      "speciesId": 6,
      "img": "",
      "name": "Thistle",
      "genderId": 2,
      "identifiers": "Lime band on left, purple band on Right",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "February 15th 2015"
    },
    {
      "id": 25,
      "userId": 3,
      "speciesId": 7,
      "img": "./assets/Goldies1.jpg",
      "name": "Minnie",
      "genderId": 2,
      "identifiers": "Bald except for wings, head and tail.",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "March 13h 2010"
    },
    {
      "id": 26,
      "userId": 3,
      "speciesId": 7,
      "img": "./assets/Goldies1.jpg",
      "name": "Jimmy",
      "genderId": 1,
      "identifiers": "Metal band on left leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "March 5th 2011"
    },
    {
      "id": 27,
      "userId": 3,
      "speciesId": 7,
      "img": "./assets/Goldies2.jpg",
      "name": "Ricky",
      "genderId": 1,
      "identifiers": "Red band on left leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "March 5th 2011"
    },
    {
      "id": 28,
      "userId": 3,
      "speciesId": 6,
      "img": "./assets/Jason.jpg",
      "name": "Jason",
      "genderId": 1,
      "identifiers": "Purple coloration instead of green",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "May 6th 2007"
    },
    {
      "id": 29,
      "userId": 3,
      "speciesId": 6,
      "img": "",
      "name": "Beastie",
      "genderId": 2,
      "identifiers": "Blue band on left leg, purple band on right leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "May 15th 2014"
    },
    {
      "id": 30,
      "userId": 3,
      "speciesId": 6,
      "img": "./assets/GreenNape.jpg",
      "name": "Nessie",
      "genderId": 2,
      "identifiers": "Grey band on left leg, pink band on right leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "June 11th 2015"
    },
    {
      "id": 31,
      "userId": 1,
      "speciesId": "5",
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Rainbow_Lorikeet_-_AndrewMercer_IMG08212.jpg",
      "name": "Lovey",
      "genderId": 2,
      "identifiers": "Yellow band on right leg, blue band on left leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "June 11th 2015",
      "species": {
        "id": 5,
        "img": "./assets/Amelia.jpg",
        "commonName": "Rainbow Lorikeet",
        "scientificName": "Trichoglossus moluccanus",
        "description": "This charasmatic species of parrots is endemic to Australia and the surrounding islands. Although they travel in flocks, they will often pair off and defend their territory with vicious tenacity."
      },
      "gender": {
        "id": 2,
        "gender": "Female"
      }
    },
    {
      "id": 32,
      "userId": 1,
      "speciesId": 4,
      "img": "../assets/Flappy.jpg",
      "name": "Flappy",
      "genderId": 2,
      "identifiers": "Funky feet, Purple band on left leg, pink band on right leg",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "2014-06-24",
      "species": {
        "id": 4,
        "img": "./assets/Majesty.jpg",
        "commonName": "Blue-headed Lorikeet",
        "scientificName": "Trichoglossus moluccanus",
        "description": "This species of lorikeet is no longer recognized as a subspecies of the Rainbow lorikeet, but the heart of and personality of the bird is vastly different and therefore is still formally recognized in my heart."
      },
      "gender": {
        "id": 2,
        "gender": "Female"
      }
    },
    {
      "id": 33,
      "userId": 1,
      "speciesId": 4,
      "img": "https://img-aws.ehowcdn.com/700x/www.onlyinyourstate.com/wp-content/uploads/2022/04/lorikeet3.jpg",
      "name": "Millie",
      "genderId": 2,
      "identifiers": "Funky feet, red and grey bands",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "2023-04-03"
    },
    {
      "userId": 1,
      "speciesId": "5",
      "img": "https://denverzoo.org/wp-content/uploads/2020/03/lorikeetwebfeature.jpg",
      "name": "Swainy",
      "genderId": 1,
      "identifiers": "Double blue bands",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "2022-06-21",
      "id": 34
    },
    {
      "userId": 1,
      "speciesId": "13",
      "img": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Black_shumen_female.jpg",
      "name": "Henrietta",
      "genderId": 2,
      "identifiers": "Silver Band, Right leg \"LF0001\"",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "2023-03-02",
      "id": 35,
      "species": {
        "commonName": "Black Star Chicken",
        "scientificName": "Gallus gallus domesticus",
        "img": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Black_shumen_female.jpg",
        "description": "Predominately black in color, this chicken is also referred to as a sex-link chicken. This simply means that at birth, the males and females are easily distinguished apart.  They are also well known for the ir egg production.",
        "id": 13
      },
      "gender": {
        "id": 2,
        "gender": "Female"
      }
    },
    {
      "userId": 1,
      "speciesId": 15,
      "img": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Pearl_cockatiel.JPG",
      "name": "Louie",
      "genderId": 2,
      "identifiers": "Silver Band, \"LF1005\"",
      "isEgg": false,
      "isDeceased": false,
      "hatchDay": "2023-03-01",
      "id": 36
    }
  ],
  "genders": [
    {
      "id": 1,
      "gender": "Male"
    },
    {
      "id": 2,
      "gender": "Female"
    },
    {
      "id": 3,
      "gender": "Unknown"
    }
  ],
  "species": [
    {
      "id": 1,
      "img": "./assets/Melon.jpg",
      "commonName": "Weber's Lorikeet ",
      "scientificName": "Trichoglossus weberi",
      "description": "The weber's lorikeet is endemic to the Indonesian island of Flores. Unlike other members of the Trichoglossus family, the Weber's lorikeet is predominately green in plumage with a paler green chest and collar."
    },
    {
      "id": 2,
      "img": "https://www.thelandbetween.ca/wp-content/uploads/bb-plugin/cache/ShrikeID-square.png",
      "commonName": "Loggerhead Shrike",
      "scientificName": "Lanius ludovicianus",
      "description": "This songbird is commonly referenced as the murder bird as Loggerhead Shrikes are well known for their hunting habits of impaling their food on barbed wire, branches or other sharp pointy objects."
    },
    {
      "id": 3,
      "img": "https://live.staticflickr.com/65535/50907797088_13cf1d3ef0_b.jpg",
      "commonName": "Turkey Vulture",
      "scientificName": "Cathartes aura",
      "description": "This vulture species is characterized by a bald red head and dark plumage with the underwings being a light grey. They are a scavenger species and hold the great responsibility of cleaning up our world."
    },
    {
      "id": 4,
      "img": "./assets/Majesty.jpg",
      "commonName": "Blue-headed Lorikeet",
      "scientificName": "Trichoglossus moluccanus",
      "description": "This species of lorikeet is no longer recognized as a subspecies of the Rainbow lorikeet, but the heart of and personality of the bird is vastly different and therefore is still formally recognized in my heart."
    },
    {
      "id": 5,
      "img": "./assets/Amelia.jpg",
      "commonName": "Rainbow Lorikeet",
      "scientificName": "Trichoglossus moluccanus",
      "description": "This charasmatic species of parrots is endemic to Australia and the surrounding islands. Although they travel in flocks, they will often pair off and defend their territory with vicious tenacity."
    },
    {
      "id": 6,
      "img": "https://www.publicdomainpictures.net/pictures/320000/nahled/lorikeet-rainbow-parrot.jpg",
      "commonName": "Green-naped Lorikeet",
      "scientificName": "Trichoglossus haematodus",
      "description": "Also known as the coconut lorikeet, it is endemic to Australia and the surrounding islands. Physically it is a bit more robust then it's rainbow lorikeet cousin and has green belly, red scalloped chest and a deep blue head. "
    },
    {
      "id": 7,
      "img": "./assets/Goldies2.jpg",
      "commonName": "Goldies Lorikeet",
      "scientificName": "Psitteuteles goldiei",
      "description": "Informally known as a flying tiny watermelon, this species is a nuisance and rather annoying. But they have they have the heart of a hawk but also the brains of a scarecrow.\n\n\n"
    },
    {
      "id": 8,
      "img": "https://c0.wallpaperflare.com/preview/76/792/1005/african-grey-parrot-animal-animal-photography-close-up.jpg",
      "commonName": "African Grey Parrot",
      "scientificName": "Psittacus erithacus",
      "description": "Also known as the grey parrot or Congo grey parrot, it is a medium sized predominately grey parrot known for it's ability to mimic human speech. It's lifespan is upwards of 50-60 years."
    },
    {
      "id": 9,
      "img": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Struthio_camelus_-Cape_May_Zoo%2C_New_Jersey%2C_USA-8a.jpg",
      "commonName": "Ostrich",
      "scientificName": "Struthio camelus",
      "description": "A large flightless bird with the ability to run up to 43.5 mph. Ostriches are sexually dimorphic, with males have black plumage and females have grey. Realistically not the best private collection animal... "
    },
    {
      "id": 10,
      "img": "https://live.staticflickr.com/8379/8480269330_2a2e584f1a_c.jpg",
      "commonName": "Blue-bellied Roller",
      "scientificName": "Coracias cyanogaster",
      "description": "A large bird with a dark brown of tan head, neck and breast. The remainder of the plumage is notable variations of a deep blue with hints of cyan. Enjoys the delectable diet of insects."
    },
    {
      "commonName": "Hyacinth macaw",
      "scientificName": "Anodorhynchus hyacinthinus",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Hyacinth_macaw_%28Anodorhynchus_hyacinthinus%29_in_flight.JPG/791px-Hyacinth_macaw_%28Anodorhynchus_hyacinthinus%29_in_flight.JPG?20200823194514",
      "description": "Native to central and south America. The hyacinth macaw is the largest flying parrot. It is easily recognized due to its large size and deep blue coloration and yellow around the eyes. ",
      "id": 11
    },
    {
      "commonName": "Red-crested turaco",
      "scientificName": "Tauraco erythrolophus",
      "img": "https://live.staticflickr.com/1473/24617831965_69e53e4ef2_b.jpg",
      "description": "Characterized by it's shimmering green plumage and white face and pinkish-red crest, the red-crested turaco is frugivore endemic to western Angola. It's call sounds similar to that of a monkey (thanks Wikipedia!)",
      "id": 12
    },
    {
      "commonName": "Black Star Chicken",
      "scientificName": "Gallus gallus domesticus",
      "img": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Black_shumen_female.jpg",
      "description": "Predominately black in color, this chicken is also referred to as a sex-link chicken. This simply means that at birth, the males and females are easily distinguished apart.  They are also well known for their egg production.",
      "id": 13
    },
    {
      "commonName": "Rosenberg Lorikeet",
      "scientificName": "Trichoglossus rosenbergii",
      "img": "../assets/Rosenberg.jpg",
      "description": "Also known as the Biak Lorikeet, it is characterized by its deep blue chest and belly, with red scallops and neon green neck. They are a more smaller more portly lorikeet species but easily have one of the best personalities.",
      "id": 14
    },
    {
      "commonName": "Cockatiel",
      "scientificName": "Nymphicus hollandicus",
      "img": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Pearl_cockatiel.JPG",
      "description": "With an average lifespan of 10-15 years, these cheeky parrots are small and well known for being a great starter parrot for pet owners. The are characterized by their orange cheeks and emotional crest.",
      "id": 15
    }
  ],
  "notes": [
    {
      "id": 1,
      "birdId": 1,
      "typeId": 1,
      "note": "Was seen taking a very enthusiastic bath today.",
      "date": "2023-03-01"
    },
    {
      "id": 2,
      "birdId": 1,
      "typeId": 3,
      "note": "Was given watermelon.",
      "date": "2023-04-01"
    },
    {
      "id": 2,
      "birdId": 2,
      "typeId": 5,
      "note": "Given Enrofloxacin today.",
      "date": "2023-04-01"
    },
    {
      "birdId": "1",
      "typeId": "2",
      "note": "Moved to new enclosure. ",
      "date": "2023-04-28",
      "id": 3
    },
    {
      "birdId": "35",
      "typeId": "2",
      "note": "Brought in the fold of Paradise Tree. Welcome young Chicken!",
      "date": "2023-04-28",
      "id": 4
    },
    {
      "birdId": "35",
      "typeId": "3",
      "note": "Was given food scraps from dinner. She loved it!",
      "date": "2023-04-28",
      "id": 5
    },
    {
      "birdId": "1",
      "typeId": "3",
      "note": "Gave shredded paper in enclosure.",
      "date": "2023-04-28",
      "id": 6
    },
    {
      "birdId": "5",
      "typeId": "3",
      "note": "Given newspaper. ",
      "date": "2023-05-01",
      "id": 7
    }
  ],
  "types": [
    {
      "id": 1,
      "type": "Behavioral"
    },
    {
      "id": 2,
      "type": "Management"
    },
    {
      "id": 3,
      "type": "Enrichment"
    },
    {
      "id": 4,
      "type": "Reproduction"
    },
    {
      "id": 5,
      "type": "Medical"
    }
  ],
  "weights": [
    {
      "id": 1,
      "birdId": 1,
      "weight": 150,
      "date": "2023-04-01"
    },
    {
      "id": 2,
      "birdId": 1,
      "weight": 145,
      "date": "2023-04-07"
    },
    {
      "id": 3,
      "birdId": 1,
      "weight": 153,
      "date": "2023-04-14"
    },
    {
      "id": 4,
      "birdId": 1,
      "weight": 150,
      "date": "2023-04-21"
    },
    {
      "id": 5,
      "birdId": 1,
      "weight": 160,
      "date": "2023-04-28"
    },
    {
      "id": 6,
      "birdId": 1,
      "weight": 150,
      "date": "2023-05-01"
    },
    {
      "birdId": 2,
      "weight": 130,
      "date": "2023-05-01",
      "id": 7
    },
    {
      "birdId": 2,
      "weight": "132",
      "date": "2023-05-02",
      "id": 8
    },
    {
      "birdId": 36,
      "weight": "125",
      "date": "2023-03-18",
      "id": 9
    },
    {
      "birdId": 36,
      "weight": "128",
      "date": "2023-03-25",
      "id": 10
    },
    {
      "birdId": 36,
      "weight": "135",
      "date": "2023-04-01",
      "id": 11
    },
    {
      "birdId": 36,
      "weight": "131",
      "date": "2023-04-08",
      "id": 12
    },
    {
      "birdId": 36,
      "weight": "135",
      "date": "2023-04-15",
      "id": 13
    },
    {
      "birdId": 36,
      "weight": "137",
      "date": "2023-04-22",
      "id": 14
    },
    {
      "birdId": 36,
      "weight": "133",
      "date": "2023-04-29",
      "id": 15
    },
    {
      "birdId": 1,
      "weight": "150",
      "date": "2023-02-08",
      "id": 16
    },
    {
      "birdId": 1,
      "weight": "148",
      "date": "2023-02-15",
      "id": 17
    }
  ],
  "messages": [
    {
      "userId": 1,
      "subjectId": "4",
      "message": "Looking to trade lorikeets for chicken species.",
      "id": 1
    },
    {
      "userId": 2,
      "subjectId": "3",
      "message": "Would love to see more ratite species!",
      "id": 2
    },
    {
      "userId": 4,
      "subjectId": "1",
      "message": "Parrot feet pics???",
      "id": 3
    },
    {
      "userId": 3,
      "subjectId": "2",
      "message": "URGENT! How to assist hatch an egg?",
      "id": 4
    },
    {
      "userId": 1,
      "subjectId": 5,
      "message": "Added new species to the database: cockatiel, Rosenberg lorikeet, black star chicken, red-crested turaco, Hyacinth macaw, blue-bellied roller, ostrich, African grey parrot, Goldie's lorikeet, green-naped lorikeet, rainbow lorikeet, blue-headed lorikeet, turkey vulture, loggerhead shrike, and Weber's lorikeet",
      "id": 5
    },
    {
      "userId": 1,
      "subjectId": 5,
      "message": "Please do not request feet pics from other users, your account will be deleted...",
      "id": 6
    },
    {
      "userId": 2,
      "subjectId": "1",
      "message": "Can we have a user directory? ",
      "id": 7
    }
  ],
  "subjects": [
    {
      "id": 1,
      "subject": "General",
      "adminType": false
    },
    {
      "id": 2,
      "subject": "Queries",
      "adminType": false
    },
    {
      "id": 3,
      "subject": "Species Request",
      "adminType": false
    },
    {
      "id": 4,
      "subject": "Trade Request",
      "adminType": false
    },
    {
      "id": 5,
      "subject": "Admin Updates",
      "adminType": true
    }
  ]
}

```
</p>
</details><br>

### Entering the Site

Once the site launches, register by clicking on the "Not a member yet?" link.

Fill in the required information on the form. 
    Admins and users can add messages to the front page and update their individual profiles. 
    Users can add, edit and delete birds into their aviary, as well as add and delete notes or weights.
    Admins can delete any messages of any user and more importantly add, edit or delete species in the database. <br>

Demo User Credentials<br>
    User:   user@demo.com<br>
    Admin:  admin@demo.com

Once logged in, you will be directed to the Home Page which displays a welcome message, admin updates, and user messages. From this page you can navigate to Collection Management, Species Database, Profile or Logout. 

• Collection Management - Displays birds in that users collection. It offers the ability on that page to search, add, or remove birds in your collection. By clicking the info button a bird card you will be directed to that birds page which will display tabs representing their information, notes pertaining to that bird, and weights pertaining to that bird. 

• Species Database - Displays species within the database. Users can search for specific species if needed. 

• Profile - Offers the user the ability to view or edit their information. 


### To test functionality:

#### As an Admin:

1. On home page, as an admin user, verify you can delete and add both update or regular messages.
2. Click on Collection Management, verify that only those birds in your collection are present if you have any. 
3. In search bar, type name of bird you are searching for and verify that it shows up. When search bar is cleared, all of your birds should repopulate. 
4. Click on the button "Add a Bird or Egg". Verify that a modal pops up, fill in the necessary fields and click Add to Collection. Once a bird is added, it should show up in your collection. 
5. Verify by clicking on remove, the bird is instantly removed from your collection.
6. By clicking on the info button on one of your birds cards, you should be taken to a page specifically dedicated to that bird with tabs indicated information, notes, and weights.
7. On the information tab, you should be able to view your birds inforamtion and edit it. 
8. On the notes tabs, you should be able view notes about your bird and add notes. Verify that a new note populates once added. 
9. On the weights tab, you should be able to view weights, add a new weight, and also vew the weight trends. Clicking on the weight trends button will allow a modal to pop open showing a line chart of weights overtime.
10. From here, click on Species Database within the navbar. Verify that species cards populate on the page.
11. Verify that you can search the database by common name and that when the search field is empty, the species repopulate. 
12. As an admin user, verify that you can add a new species to the database, edit said species, or remove them. 
13. From here, click on the Profile link within the navbar. Verify that your profile inforamtion shows.
14. Verify you can edit your information.
15. From here logout! Your iAviary experience is complete.
 

#### As a User

1. On home page, as a user verify you can add a message and that you can only delete a message you've created.
2. Click on Collection Management, verify that only those birds in your collection are present if you have any. 
3. In search bar, type name of bird you are searching for and verify that it shows up. When search bar is cleared, all of your birds should repopulate. 
4. Click on the button "Add a Bird or Egg". Verify that a modal pops up, fill in the necessary fields and click Add to Collection. Once a bird is added, it should show up in your collection. 
5. Verify by clicking on remove, the bird is instantly removed from your collection.
6. By clicking on the info button on one of your birds cards, you should be taken to a page specifically dedicated to that bird with tabs indicated information, notes, and weights.
7. On the information tab, you should be able to view your birds inforamtion and edit it. 
8. On the notes tabs, you should be able view notes about your bird and add notes. Verify that a new note populates once added. 
9. On the weights tab, you should be able to view weights, add a new weight, and also vew the weight trends. Clicking on the weight trends button will allow a modal to pop open showing a line chart of weights overtime.
10. From here, click on Species Database within the navbar. Verify that species cards populate on the page.
11. As a user, verify that you can search the database by common name and that when the search field is empty, the species repopulate.
12. From here, click on the Profile link within the navbar. Verify that your profile inforamtion shows.
13. Verify you can edit your information.
14. From here logout! Your iAviary experience is complete. 

### Difficulties and Challenges

1. Becoming competent with React and fully comprehending the skills and vocabulary that we've been learning. 
2. Teaching myself Bootstrap and Chart.js
3. Attempting to do it all, when I don't know it all yet. 

### Lessons Learned

1. Ask for help, that's what your instructors and teammates are there for. 
2. Challenge yourself, but know your limitations. 
3. If you're reusing code... turn it into it's own component. I wish I had known this sooner and I would have refactored a lot of it. 

### How this Application was Developed

1. Created a database.
2. Established the app and set up the basic framework (npm install)
3. Set up the login and register page, which also included the views components.
4. Created the navbar.
4. Once the stage was set for the application, I broke it down into areas of focus. I startred with Collection Management and got my bird cards to list by user, added a form for adding and editing birds, and the capability to remove them as well.
5. I moved onto the species database afterwards, and got the species to list with their information. I set it so only admin could create, edit or delete species. 
6. Finally, I added a profile element that would allow the user to view and edit their profile. 
7. Reached MVP, started working on CSS.
8. Worked on stretch goals: added search bars to both the collection management and species database page. Turned some forms into Modals utilizing Boostrap. Changed the bird edit button into an info button and created a whole new view where the user can seen the bird information, edit the bird information, add notes and weights. And finally... taught myself Chart.js and created a line graph out of the bird weights. 
9. Spruced up the home page. 
10. Goals for future adjustments:<br> 
• User database, with admin control to remove users. <br>
• Add more species. <br>
• Users can edit their messages. <br>
• Search messages by subject.<br>
• Learn how to paginate with bootstrap, apply that to the messages component.<br>
• Adjust the species info to more realistic and useful information, perhaps add a link out to learn more. 

### Planning

#### Wireframe

![iAviary (1)](https://user-images.githubusercontent.com/122993299/236244645-de9128dd-9a3d-4017-a90a-6145e892ec26.jpg)

#### ERD

![iAviaryERD](https://user-images.githubusercontent.com/122993299/236244715-504fbec3-cc75-45e2-9561-daa05db32d2d.jpg)

#### Proposal

<a href="https://docs.google.com/document/d/1Bi7QjG2LDypM9j_Jb0mkQebqi_aKHxTT4Zxehvba_2k/edit?usp=sharing" target="_blank">Link to Capstone Proposal</a>

### Created by: Laura Furnivall
<a href="https://github.com/laurafurnivall" target="_blank"><img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white" alt="Laura Furnivall GitHub" style="height: auto !important;width: auto !important;" /></a> <a href="https://www.linkedin.com/in/laurafurnivall/" target="_blank"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="Laura Furnivall LinkedIn" style="height: auto !important;width: auto !important;" /></a>
