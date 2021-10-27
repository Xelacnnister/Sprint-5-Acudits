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
// Declare & initiate const jokeApiUrl to store the api url
const jokeApiUrl = "https://icanhazdadjoke.com/";
//Reach the HTML element where the result of the response will be output
let HTMLResponse = document.querySelector("#output");
//Declare const reportAcudits as an array of objects following the interface ReportAcudits
const reportAcudits = [];
//Declare the function _reportAcudits, wich will be activated by the onclick event on the HTML buttons & will recive the _score on activation
const _reportAcudits = (_score) => {
    var _a;
    //Declare and initiate the variables joke, score, todaysDate & date
    const joke = (_a = document.querySelector("#output")) === null || _a === void 0 ? void 0 : _a.textContent;
    let score = _score;
    const todaysDate = new Date();
    const date = todaysDate.toISOString();
    reportAcudits.push({ joke, score, date });
    valorationText === null || valorationText === void 0 ? void 0 : valorationText.classList.add('d-none');
    valorationButton1 === null || valorationButton1 === void 0 ? void 0 : valorationButton1.classList.add('d-none');
    valorationButton2 === null || valorationButton2 === void 0 ? void 0 : valorationButton2.classList.add('d-none');
    valorationButton3 === null || valorationButton3 === void 0 ? void 0 : valorationButton3.classList.add('d-none');
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
        //return the data to avoid errors with the type
        return respData;
    });
}
