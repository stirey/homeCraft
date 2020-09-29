// const baseURLCalendar = 'https://calendarific.com/api/v2/holidays?api_key=c66acffd47f7ffb23cd4e22d2193c206892e919b&country=US&year=2020';

const baseURLWeather = 'http://api.airvisual.com/v2/nearest_city?key=df20241f-ec59-4331-8ad9-60d27a8e43d3'

const baseURLWordnik = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=o91c9esom44pnug9onne62wrvn50i1u091cgh37pvhlhk2043';


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemer"]; 

fetch(baseURLWeather)
    .then(result => result.json())
//the next .then is captureing what is being captured from the previous .then
    .then(json => displayWeather(json));

function displayWeather(json){
        console.log(json);
        let n = json.data.city;
        let s = json.data.state;
        let celsius= json.data.current.weather["tp"];
        convertToF(celsius);

        document.getElementById("cityState").innerHTML = `${n}, ${s}`; 
    }

function convertToF(celsius) {
        let fahrenheit = celsius * 9/5 + 32
        document.getElementById("weather").innerHTML = `${fahrenheit} Degrees Fahrenheit` ;

        if (fahrenheit >= 45) {
            let x = "Let's take a walk together!";
            document.getElementById("icon").innerHTML = x;
        } else {
            let x = "It's cold outside! Let's make hot chocolate!"
            document.getElementById("icon").innerHTML = x;
        };
    }

//TODAYs DATE FUNCTION
function findDate() {
    let a = new Date();
    let c = new Date();
    let d = c.getDate();
    let e = new Date();
    let f = e.getFullYear();
    document.getElementById("date").innerHTML = `${months[a.getMonth()]} ${d}, ${f}`; //using string interpolation to piece the date together from find date function  
}
findDate()       



//Dictionary API
fetch(baseURLWordnik) //this is fetching the data then it looks for something that is chained to it which is the .then. the response from the api is captured in the .then.
    .then(result => result.json())
    //the next .then is captureing what is being captured from the previous .then
    .then(json => displayWordData(json));


function displayWordData(json){
        console.log(json);   
        let word = json.word;
        let definition = json.definitions[0].text;
        document.getElementById("randomWord").innerHTML = word;
        document.getElementById("definition").innerHTML = definition;
        let note = json.note;
        document.getElementById("note").innerHTML = note;
     }

    //  https://www.youtube.com/watch?v=qWjEUO8C3LY

   
    

 

























    


