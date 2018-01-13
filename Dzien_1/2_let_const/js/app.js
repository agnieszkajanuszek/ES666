//zadanie 0
for (var i=0;i<5; i++){
  console.log(i);
}



for (let i=0;i<5; i++){
  console.log(i);
}
//gdy tu napisze tutaj console log i to nie zadziala, bo jest poza pętlą

//gdy let bedzie globalny to console.log poza petlą zadziała

var i=2
function f(){
  var i=1;
  console.log(i)

}
f();
console.log(i) // == 2 bo cosnole log jest poza funckja, a i=2 jest zmienna globalna, dlatego sie tutaj wyswietli

//zadanie 1
//I. Sprawdź najpierw zasięg let
//  {
//      //A1 - wypisuję zmienną numbers przed deklaracją
//      //Wynik w konsoli to TODO: żaden, ponieważ skrypt czyta się od gory do dolu, a zmienna nie byla powyzaj zadeklarowana
//      //Dlaczego taki wynik? TODO:
//      console.log(numbers);
//
//      let numbers = [2,3, 4];
//      //A2 - wypisuję zmienną numbers po deklaracji
//      //Wynik w konsoli to TODO: 2,3,4
//      //Dlaczego taki wynik? TODO: dziala, bo zmienna w bloku, CL w bloku poniżej
//      console.log(numbers);
//  }
//
//  //A3 - wypisuję zmienną numbers za blokiem
//  //Wynik w konsoli to TODO: żaden
//  //Dlaczego taki wynik? TODO: bo nie mam adeklarowanej zmiennej globalej numbers
//  console.log(numbers);
//
//
//
// //II. Sprawdź teraz  zasięg const
// {
//     //A1 - wypisuję zmienną PI przed deklaracją
//     //Wynik w konsoli to TODO: nic
//     //Dlaczego taki wynik? TODO: to samo, co powyżej w nr 1
//     console.log(Pi);
//
//     const PI = 3.14;
//     //A2 - wypisuję zmienną PI po deklaracji
//     //Wynik w konsoli to TODO: 3.14
//     //Dlaczego taki wynik? TODO: wyswietli się bo w bloku
//     console.log(PI);
// }
//
// //A3 - wypisuję zmienną PI za blokiem
// //Wynik w konsoli to TODO: błąd
// //Dlaczego taki wynik? TODO: bo poza blokiem
// console.log(PI);

//zadanie 2

let character = "księżniczka";
let timeOfDay = "dzień";
const lover = 'Shrek';

{
    let timeOfDay = "noc";
    let character = "ogrzyca";
    console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
    // TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.
}

console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
// TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.

//zadanie 3

for ( var i=0; i< 10; i++){
  console.log(i); //wypisuje od 1-10
}
console.log(i); //wypisuje tylko 10

// for ( let j=0; j< 10; j++){
//   console.log(j);
// }
// console.log(j); //not defined

//zadanie 4


//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = "Agata";
// const name="Agnieszka" cosnt caaly czas trzyma wartosc pierwonejt zmiennej


//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1,2,3,4];


//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
    name: "Puszek",
    skill: "killing"
}
// zadanie 5
