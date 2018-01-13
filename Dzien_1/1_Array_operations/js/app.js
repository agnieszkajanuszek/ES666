//zadanie 0
var cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
var namesLengths=cities.map(function(value){ //index i tablica nas nie interesuja, bo tylko dlugosc chcemy sprawdzic
  return value.length;
});
console.log(namesLengths);

//zadanie 1
function randomize(param1, param2, callback) { //param1=from, param2=to
  if(typeof callback !== "function"){
    return undefined;
  }
  var randomValue=Math.random()*(param2 - param1)+param1;
  var result=Math.round(randomValue);
  callback(result);//funkcja która jest zwracana po zakończeniu innej funkcji, funkcja w funkcji, która wywołuje inna funkcję

}
randomize(5,10, function(result){ //function(result) to mój callback
  console.log(result);
});
//zadanie 2
var animals = ["cat", "shrimp", "giraffe"];
animals.forEach(function(element){
  console.log(element);
})
//lub zdefiniowac te funkcja pod zmienna i ja wywolac poza funkcja

//zadanie 3
var years = [1995, 1856, 2014, 1987];

function birthDate(element, index, array) {
  return 2017 - element;
}
var result = years.map(birthDate);
console.log(result);

//lub
var ages=years.map(function(birthDate){
  var currentYear=2017;
  var age=currentYear-birthDate;
  return age

})
console.log(ages);
//lub
var countAge=function(years){
  return (new Date().getFullYear()-years)
}
var ages=years.map(countAge);
console.log(ages);

//zadanie 4
var numbers= [1,2,3,4];
function sum(prev, curr){
  return prev+curr;
}
function multiply(prev, curr){
  return prev*curr;
}
var sumResult=numbers.reduce(sum);
console.log(sumResult);
var multResult=numbers.reduce(multiply);
console.log(multResult);
