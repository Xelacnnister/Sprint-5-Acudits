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
// Declare & initiate const jokeApiUrl to store the api url
const jokeApiUrl = "https://icanhazdadjoke.com/";
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
            //log the result of response
            console.log(response);
            //return the data to avoid errors with the type
            return data;
        });
        //return the data to avoid errors with the type
        return respData;
    });
}
