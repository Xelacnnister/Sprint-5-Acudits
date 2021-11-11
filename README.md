# Sprint-5-Acudits
Practica APIs

* Objetivo *
En esta pequeña app se pretende poner en práctica los conocimientos necesarios para usar una o varias APIs. 

* La app *
La app muestra un icono del tiempo que hace en la localización del usuari, así como la temperatura en el borde arriba-izquierdo. 
Ambos obtenidos de la API: https://www.abstractapi.com/ip-geolocation-api.

Luego encontramos un texto "Preparat per riure?" y un boton "Següent acuddit" dentro de un fondo svg en forma de blob.

Pulsar el boton hará una llamada aleatoria a una de las 2 siguientes APIs: 
https://icanhazdadjoke.com/ - https://api.chucknorris.io/jokes/random 
y se mostrará por pantalla uno de los chistes.

Así mismo, se desplegaran 3 botones en forma de icono de "caritas" "triste", "neutra" y "contenta" para medir la satisfacción del chiste.
Al pulsar una de las 3 caritas se le dará una puntuación al chiste de 1, 2 o 3 respectivamente segun la carita pulsada, y desaparecerán los botones.
Esa valoración se guardará junto al chiste en cuestión y la fecha de su valoración en formato ISO (https://www.w3schools.com/Jsref/jsref_toisostring.asp) en una array de objetos. 
Adicionalmente ese array de objetos se mostra por consola.
