//API data response interface
interface JokeResponse {
    id: string;
    joke: string;
    status: number
}
//reportAcudits interface
interface ReportAcudits {
    joke?: string | null,
    score: number,
    date: string
}

// Acces the jokeButton & adds an event listener to it to execute the getJoke()
document.querySelector("#jokeButton")?.addEventListener("click", getJoke);

//Store the valoration buttons acces in valorationButton1, 2, 3 variables
const valorationButton1: HTMLButtonElement | null = document.querySelector('#button1');
const valorationButton2: HTMLButtonElement | null = document.querySelector('#button2');
const valorationButton3: HTMLButtonElement | null = document.querySelector('#button3');

//Store the valoration text acces in valorationText variable
const valorationText = document.querySelector('.valorationText');

// Declare & initiate const jokeApiUrl to store the api url
const jokeApiUrl: string = "https://icanhazdadjoke.com/";
//Reach the HTML element where the result of the response will be output
let HTMLResponse: HTMLElement | null = document.querySelector("#output");
//Declare const reportAcudits as an array of objects following the interface ReportAcudits
const reportAcudits: Array<ReportAcudits> = []

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
async function getJoke(): Promise<JokeResponse>{
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
        //return the data to avoid errors with the type
        return respData
}
