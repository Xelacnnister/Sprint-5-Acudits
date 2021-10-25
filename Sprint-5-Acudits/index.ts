//API data response interface
interface JokeResponse {
    id: string;
    joke: string;
    status: number
}

// Acces the jokeButton & adds an event listener to it to execute the getJoke()
document.querySelector("#jokeButton")?.addEventListener("click", getJoke);

// Declare & initiate const jokeApiUrl to store the api url
const jokeApiUrl: string = "https://icanhazdadjoke.com/";
//Reach the HTML element where the result of the response will be output
let HTMLResponse: HTMLElement | null = document.querySelector("#output");

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
            //log the result of response
            console.log(response);
            //return the data to avoid errors with the type
            return data
        })
        //return the data to avoid errors with the type
        return respData
}
