"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
// Acces the jokeButton & adds an event listener to it to execute the getJoke()
(_a = document.querySelector("#jokeButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", getJoke);
//Store the valoration buttons acces in valorationButton1, 2, 3 variables
const valorationButton1 = document.querySelector('#button1');
const valorationButton2 = document.querySelector('#button2');
const valorationButton3 = document.querySelector('#button3');
//Store the valoration text acces in valorationText variable
const valorationText = document.querySelector('.valorationText');
// let weather: string | undefined = document.getElementById("weather")?.innerHTML;
//Reach the HTML element where the result of the response will be output
let HTMLResponse = document.querySelector("#output");
//Declare const reportAcudits as an array of objects following the interface ReportAcudits
const reportAcudits = [];
//Declare locationCP to store and acces later the Users city & postal code
const locationCP = [];
// Declare & initiate const jokeApiUrl to store the api url
const jokeApiUrl = "https://icanhazdadjoke.com/";
//Declare & initiate const locationUrl to store the api url
const locationUrl = "https://ipgeolocation.abstractapi.com/v1/?api_key=898f29b2e1834fc68b8c2deb60e498ff&ip_address=&fields=postal_code,city";
// const weatherApiUrl = "https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/"
// const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${locationCP[0]},es&units=metric&lang=sp&appid=0c8a9f191b124cf45772ce4a41d2ecd0`
const weatherApiKey = "0c8a9f191b124cf45772ce4a41d2ecd0";
//Declare the function _reportAcudits, wich will be activated by the onclick event on the HTML buttons & will recive the _score on activation
const _reportAcudits = (_score) => {
    var _a;
    //Declare and initiate the variables joke, score, todaysDate & date
    const joke = (_a = document.querySelector("#output")) === null || _a === void 0 ? void 0 : _a.textContent;
    const score = _score;
    //create new Date() and assign it to todaysDate
    const todaysDate = new Date();
    //Transform todaysDate in ISO format & assign it to date
    const date = todaysDate.toISOString();
    //Use the stored variables as param and push them to reportAcudits
    reportAcudits.push({ joke, score, date });
    //On valoration add .d-none bootstrap class to the valoration text and buttons, so the undisplay
    valorationText === null || valorationText === void 0 ? void 0 : valorationText.classList.add('d-none');
    valorationButton1 === null || valorationButton1 === void 0 ? void 0 : valorationButton1.classList.add('d-none');
    valorationButton2 === null || valorationButton2 === void 0 ? void 0 : valorationButton2.classList.add('d-none');
    valorationButton3 === null || valorationButton3 === void 0 ? void 0 : valorationButton3.classList.add('d-none');
    //Log the actualized reportAcudits string
    console.log(reportAcudits);
    return reportAcudits;
};
//Declare async function getJoke() and type it as Promise<JokeResponse>
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        //Declare & initiate let respData so we can return it at the end of the function to avoid errors betwen the type of the function and the value returned
        let respData = {
            id: "string",
            joke: "string",
            status: 0
        };
        //fetch to the API. Use the jokeApiUrl to get the url. Apply the GET method & the headers to acces the API data
        yield fetch(jokeApiUrl, {
            method: "GET",
            headers: { 'Accept': 'application/json' }
        })
            //Transform the string response to json format, so it becomes readable
            .then((resp) => resp.json())
            .then((data) => {
            respData = data;
            // Declare the const response to store the result of getJoke(). Assign data.joke to it
            const response = data.joke;
            //Assign data.joke to HTMLResponse!.innerHTML as a string. Use ! on HTMLResponse to avoid errors with it being possibly null
            HTMLResponse.innerHTML = `${data.joke}`;
            //Removes the .d-none bootstrap class from the buttons, making them display again
            valorationText === null || valorationText === void 0 ? void 0 : valorationText.classList.remove('d-none');
            valorationButton1 === null || valorationButton1 === void 0 ? void 0 : valorationButton1.classList.remove('d-none');
            valorationButton2 === null || valorationButton2 === void 0 ? void 0 : valorationButton2.classList.remove('d-none');
            valorationButton3 === null || valorationButton3 === void 0 ? void 0 : valorationButton3.classList.remove('d-none');
            //log the result of response
            console.log(response);
            //return the data to avoid errors with the type
            return data;
        });
        //return the respData to avoid errors with the type
        return respData;
    });
}
//Declare async function getLocation() and type it as Promise<string[]>
function getLocation() {
    return __awaiter(this, void 0, void 0, function* () {
        //fetch to the API. Use the locationUrl to get the url. Apply the GET method to acces the API data
        yield fetch(locationUrl, {
            method: "GET",
        })
            //Transform the string response to json format, so it becomes readable
            .then((resp) => resp.json())
            .then((data) => {
            //Store the data obtained in locationCP
            locationCP.push(data.postal_code, data.city);
            console.log(locationCP);
            console.log(locationCP[0].toString());
            function getWeather() {
                return __awaiter(this, void 0, void 0, function* () {
                    yield fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${locationCP[0]},es&units=metric&lang=sp&appid=0c8a9f191b124cf45772ce4a41d2ecd0`, {
                        method: "GET"
                    })
                        .then((resp) => resp.json())
                        .then((data) => {
                        document.getElementById("weather").innerHTML = `${data.weather[0].main} | ${data.main.temp}º`;
                        console.log(document.getElementById("weather").innerHTML);
                    });
                    return document.getElementById("weather").innerHTML;
                });
            }
            getWeather();
            //return the data to avoid errors with the type
            return data;
        });
        //return the locationCP to avoid errors with the type
        return locationCP;
    });
}
//Call the function to execute it on init
getLocation();
