//JOKES API data response interface
interface JokeResponse {
    id: string;
    joke: string;
    status: number
}
//CHUCK NORRIS JOKES API data response interface
interface ChuckNorrisJokeResponse {
    categories: [];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
}

//reportAcudits interface
interface ReportAcudits {
    joke?: string | null,
    score: number,
    date: string
}
//Location API data response interface
interface LocationResponse {
    city: string,
    postal_code: string
}

// Acces the jokeButton & adds an event listener to it to execute the getJoke()
document.querySelector("#jokeButton")?.addEventListener("click", getJoke);

//Store the valoration buttons acces in valorationButton1, 2, 3 variables
const valorationButton1: HTMLButtonElement | null = document.querySelector('#button1');
const valorationButton2: HTMLButtonElement | null = document.querySelector('#button2');
const valorationButton3: HTMLButtonElement | null = document.querySelector('#button3');

//Store the valoration text acces in valorationText variable
const valorationText: HTMLParagraphElement | null = document.querySelector('.valorationText');
// let weather: string | undefined = document.getElementById("weather")?.innerHTML;

//Reach the HTML element where the result of the response will be output
let HTMLResponse: HTMLElement | null = document.querySelector("#output");
//Declare const reportAcudits as an array of objects following the interface ReportAcudits
const reportAcudits: Array<ReportAcudits> = []
//Declare locationCP to store and acces later the Users city & postal code
const locationCP: Array<string> = []

let iconCode: string;
let iconResult: string | PromiseLike<string>


// Declare & initiate const jokeApiUrl to store the api url
const jokeApiUrl: string = "https://icanhazdadjoke.com/";
// Declare & initiate const chuckNorrisJokeApiUrl to store the api url
const chuckNorrisJokeApiUrl: string = "https://api.chucknorris.io/jokes/random";
//Declare & initiate const locationUrl to store the api url
const locationUrl = "https://ipgeolocation.abstractapi.com/v1/?api_key=898f29b2e1834fc68b8c2deb60e498ff&ip_address=&fields=postal_code,city"
// const weatherApiUrl = "https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/"
// const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${locationCP[0]},es&units=metric&lang=sp&appid=0c8a9f191b124cf45772ce4a41d2ecd0`
const weatherApiKey = "0c8a9f191b124cf45772ce4a41d2ecd0"


//Declare the function _reportAcudits, wich will be activated by the onclick event on the HTML buttons & will recive the _score on activation
const _reportAcudits = (_score: number): Array<ReportAcudits> => {
    //Declare and initiate the variables joke, score, todaysDate & date
    const joke = document.querySelector("#output")?.textContent;
    const score = _score;
    //create new Date() and assign it to todaysDate
    const todaysDate = new Date()
    //Transform todaysDate in ISO format & assign it to date
    const date = todaysDate.toISOString();

    //Use the stored variables as param and push them to reportAcudits
    reportAcudits.push({joke, score, date});

    //On valoration add .d-none bootstrap class to the valoration text and buttons, so the undisplay
    valorationText?.classList.add('d-none');

    valorationButton1?.classList.add('d-none');
    valorationButton2?.classList.add('d-none');
    valorationButton3?.classList.add('d-none');

    //Log the actualized reportAcudits string
    console.log(reportAcudits);

    return reportAcudits;
};

//Declare async function getJoke() and type it as Promise<JokeResponse>
async function getDadJoke(): Promise<JokeResponse>{
    //Declare & initiate let respData so we can return it at the end of the function to avoid errors betwen the type of the function and the value returned
    let respData: JokeResponse = {
        id: "string",
        joke: "string",
        status: 0
    };
    //fetch to the API. Use the jokeApiUrl to get the url. Apply the GET method & the headers to acces the API data
    await fetch(jokeApiUrl, { 
        method: "GET",
        headers: {'Accept': 'application/json'} })
        //Transform the string response to json format, so it becomes readable
        .then((resp): Promise<JokeResponse> => resp.json())
        .then((data): JokeResponse  => {
            respData = data;
            // Declare the const response to store the result of getJoke(). Assign data.joke to it
            const response = data.joke;

            //Assign data.joke to HTMLResponse!.innerHTML as a string. Use ! on HTMLResponse to avoid errors with it being possibly null
            HTMLResponse!.innerHTML = `${data.joke}`;

            //Removes the .d-none bootstrap class from the buttons, making them display again
            valorationText?.classList.remove('d-none');
            valorationButton1?.classList.remove('d-none');
            valorationButton2?.classList.remove('d-none');
            valorationButton3?.classList.remove('d-none');
        
            //log the result of response
            console.log(response);
            //return the data to avoid errors with the type
            return data
        })
        //return the respData to avoid errors with the type
        return respData
}

//Declare async function getJoke() and type it as Promise<JokeResponse>
async function getChuckNorrisJoke(): Promise<ChuckNorrisJokeResponse>{
    //Declare & initiate let respData so we can return it at the end of the function to avoid errors betwen the type of the function and the value returned
    let respData: ChuckNorrisJokeResponse = {
        categories: [],
        created_at: "string",
        icon_url: "string",
        id: "string",
        updated_at: "string",
        url: "string",
        value: "string"
    };
    //fetch to the API. Use the jokeApiUrl to get the url. Apply the GET method & the headers to acces the API data
    await fetch(chuckNorrisJokeApiUrl, { 
        method: "GET",
        })
        //Transform the string response to json format, so it becomes readable
        .then((resp): Promise<ChuckNorrisJokeResponse> => resp.json())
        .then((data): ChuckNorrisJokeResponse  => {
            respData = data;
            // Declare the const response to store the result of getChuckNorrisJoke(). Assign data.joke to it
            const response = data.value;

            //Assign data.joke to HTMLResponse!.innerHTML as a string. Use ! on HTMLResponse to avoid errors with it being possibly null
            HTMLResponse!.innerHTML = `${data.value}`;

            //Removes the .d-none bootstrap class from the buttons, making them display again
            valorationText?.classList.remove('d-none');
            valorationButton1?.classList.remove('d-none');
            valorationButton2?.classList.remove('d-none');
            valorationButton3?.classList.remove('d-none');
        
            //log the result of response
            console.log(response);
            //return the data to avoid errors with the type
            return data
        })
        //return the respData to avoid errors with the type
        return respData
}

//Declare async function getLocation() and type it as Promise<string[]>
async function getLocation(): Promise<string[]> {
    //fetch to the API. Use the locationUrl to get the url. Apply the GET method to acces the API data
    await fetch ( locationUrl, {
        method: "GET",
    })
    //Transform the string response to json format, so it becomes readable
    .then((resp): Promise<LocationResponse> => resp.json())
    .then((data): LocationResponse => {
        //Store the data obtained in locationCP
        locationCP.push(data.postal_code, data.city)
        console.log(locationCP);
        console.log(locationCP[0].toString());

        async function getWeather(): Promise<string | undefined>{
            await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${locationCP[0]},es&units=metric&lang=sp&appid=0c8a9f191b124cf45772ce4a41d2ecd0`, {
                method: "GET"
            })
            .then((resp) => resp.json())
            .then((data) => {
                //ICON
                iconCode = data.weather[0].icon;
                console.log(iconCode);
                
                const icon = document.getElementById('icon');
                icon!.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}.png`);
                document.getElementById("temperature")!.innerHTML = `${data.main.temp}º`;

                console.log(document.getElementById("weather")!.innerHTML);
                
            })
            return document.getElementById("weather")!.innerHTML
        }
// https://openweathermap.org/weather-conditions MIRAR PARA LOS ICONOS   
        getWeather();
        //return the data to avoid errors with the type
        return data
    })
    //return the locationCP to avoid errors with the type
    return locationCP
}

//Call the function to execute it on init
getLocation();

function getJoke(): string {
    const random = Math.random()

    if(random <= 0.5){
        getDadJoke()
        console.log(random);
        
        return "dadJoke"
    }else{
        getChuckNorrisJoke()
        console.log(random);

        return "chuckNorrisJoke"
    }
    
}
