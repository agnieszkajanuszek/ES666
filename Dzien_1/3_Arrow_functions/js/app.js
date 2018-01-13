//zadanie 0
var Students = function(students) {
	this.names = students;
  	this.numberOfLetters = [];
};


Students.prototype.countLetters = function() {
	this.names.forEach((name) => {
	this.numberOfLetters.push(name.length)
	});
}

var students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log(students.numberOfLetters);

//zadanie 1
let helloWord = () => console.log("Hello Word");
helloWord();
//zadanie 2
let multiply = a => { return a * 2;
}
console.log(multiply(9));
//zadanie 3
let biggerNumber = (a,b) => {
  if(a > b) {
    return a;
  }
  return b;
}
console.log(biggerNumber(9,122));
//zadanie 4
const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ]
const getSecondMaxNumber=array => {
  const sortedArray = array.sort((a,b)=>b-a);
  return sortedArray[1]; //index 1 od tablicy
}
console.log(getSecondMaxNumber(arr1)); //49
//zadanie 5
(x => console.log(x))(1);
//zadanie 6
const hello = (end = 5) => {  //nie musi tu byc =5, moze byc samo end
  let counter=0;

  const handler=setInterval(()=> { //handler po to, zeby moc zastopowac funkcje
    counter++;
    console.log("Hello", counter);
    if (counter === end){
      clearInterval(handler);
    }
  },1000);
}
hello(2);
// const intervalHandler=setInterval(()=>{},123)
// clearInterval(intervalHandler); //funkcja gotowa w JS
//zadanie 7
const App = function() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = this.websites.map(el=>"https://" + el + ".pl");
  $(".menu").find("a").each((i, aElement)=> aElement.href=this.links[i]);
}


App.prototype.generateLinks = function() {

}


let app = new App();
app.generateLinks();
console.log(app.links)
//zadanie 8
const dog = {
    type: "Mammal",
    name: "",
    setName: (newName) => {
        this.name = newName;
    }
}

dog.setName("Reksio");
console.log(dog.name);
