let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }   
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " active";
  
  slideIndex++;
  if (slideIndex >= slides.length) {slideIndex = 0;} 
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput"); 

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest')
}


let current_index = 1;


let locaties = [
    {//0
        "titel":"noordelijk ingang scheepvaart museum",
        "image":"img/interactieveroutefotos/ingang/1.jpg",
        "directions":{
            "noord": 4,
            "oost": 1,
            "zuid": 2,
            "west": 3
        }
    },
    {//1
        "titel":"oostelijk ingang scheepvaart museum",
        "image":"img/interactieveroutefotos/ingang/2.jpg",
        "directions":{
            "noord": 0,
            "oost": 5,
            "zuid": 2,
            "west": 3
        }
    },
    {//2
        "titel":"zuidelijk ingang scheepvaart museum",
        "image":"img/interactieveroutefotos/ingang/3.jpg",
        "directions":{
            "noord": 0,
            "oost": 1,
            "zuid": 13,
            "west": 3

        }
    },
    {//3
        "titel":"westelijk ingang scheepvaart museum",
        "image":"img/interactieveroutefotos/ingang/4.jpg",
        "directions":{
            "noord": 0,
            "oost": 1,
            "zuid": 2,
            "west": 6
        }
    },
    {//4
        "titel":"de ingang naar de yacht modellen",
        "image":"img/interactieveroutefotos/kamer9/0.jpg",
        "directions":{
            "noord": 0,
            "oost": 7,
        }
    },
    {//5
        "titel":"het begin van de globe kamer",
        "image":"img/interactieveroutefotos/kamer0/0.jpg",
        "directions":{
            "noord": 1,
            "zuid": 8,
        }
    },
    {//6
        "titel":"de gang naar de Willem van Gelde tentoonstelling",
        "image":"img/interactieveroutefotos/kamer3/0.jpg",
        "directions":{
            "noord": 9,
            "oost": 3,
            "zuid": 12,
        }
    },
    {//7
        "titel":"jachtmodellen",
        "image":"img/interactieveroutefotos/kamer9/1.jpg",
        "directions":{
            "west": 4,
            "oost": 11
        }
    },
    {//8
        "titel":"een oude globe",
        "image":"img/interactieveroutefotos/kamer0/7.jpg",
        "directions":{
            "noord":10,
            "oost": 5
        }
    },
    {//9
        "titel":"de Willem van Gelde tentoonstelling",
        "image":"img/interactieveroutefotos/kamer3/2.jpg",
        "directions":{
            "noord": 6,
        }
    },
    {//10
        "titel":"drie schilderijen van oude veldslagen op zee",
        "image":"img/interactieveroutefotos/kamer0/9.jpg",
        "directions":{
            "oost": 5
        }
    },
    {//11
        "titel":"nog meer yacht modellen",
        "image":"img/interactieveroutefotos/kamer9/2.jpg",
        "directions":{
            "west": 7
        }
    },
    {//12
        "titel":"een schets genaamd 'vloet op de rede'",
        "image":"img/interactieveroutefotos/kamer3/6.jpg",
        "directions":{
            "zuid": 6,
        }
    },
    {//13
        "titel":"",
        "image":"img/interactieveroutefotos/ingang/0.jpg",
        "directions":{
            "noord": 2
        }
    },
];

function show(index){
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
    current_index = index;
    //knoppen opnieuw berekenen
    updateDirections();
}
function updateDirections(){
    //haal de mogelijke directions op voor de current_index
    let possible = locaties[current_index].directions;
    // zet de direction keys in een aparte variabele
    let possible_keys = Object.keys(possible);
    //zet de keys van de buttons in een aparte variable
    let button_keys = Object.keys(directionButtons);
    console.log(possible_keys)
    //zet eerst alle knoppen uit
    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }
    //zet nu de mogelijke knoppen(directions) aan
    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    }
}
function getInput(){
    show(myInput.value)
    myInput.value = "";
    myInput.focus();
}
function goDirection(richting){
    let punt_index = locaties[current_index].directions[richting];
    show(punt_index);
}
show(0)