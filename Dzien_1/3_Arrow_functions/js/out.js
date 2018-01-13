/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//zadanie 0
var Students = function Students(students) {
  this.names = students;
  this.numberOfLetters = [];
};

Students.prototype.countLetters = function () {
  var _this = this;

  this.names.forEach(function (name) {
    _this.numberOfLetters.push(name.length);
  });
};

var students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log(students.numberOfLetters);

//zadanie 1
var helloWord = function helloWord() {
  return console.log("Hello Word");
};
helloWord();
//zadanie 2
var multiply = function multiply(a) {
  return a * 2;
};
console.log(multiply(9));
//zadanie 3
var biggerNumber = function biggerNumber(a, b) {
  if (a > b) {
    return a;
  }
  return b;
};
console.log(biggerNumber(9, 122));
//zadanie 4
var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9];
var getSecondMaxNumber = function getSecondMaxNumber(array) {
  var sortedArray = array.sort(function (a, b) {
    return b - a;
  });
  return sortedArray[1]; //index 1 od tablicy
};
console.log(getSecondMaxNumber(arr1)); //49
//zadanie 5
(function (x) {
  return console.log(x);
})(1);
//zadanie 6
var hello = function hello() {
  var end = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  //nie musi tu byc =5, moze byc samo end
  var counter = 0;

  var handler = setInterval(function () {
    //handler po to, zeby moc zastopowac funkcje
    counter++;
    console.log("Hello", counter);
    if (counter === end) {
      clearInterval(handler);
    }
  }, 1000);
};
hello(2);
// const intervalHandler=setInterval(()=>{},123)
// clearInterval(intervalHandler); //funkcja gotowa w JS
//zadanie 7
var App = function App() {
  var _this2 = this;

  this.websites = ['onet', 'wp', 'facebook'];
  this.links = this.websites.map(function (el) {
    return "https://" + el + ".pl";
  });
  $(".menu").find("a").each(function (i, aElement) {
    return aElement.href = _this2.links[i];
  });
};

App.prototype.generateLinks = function () {};

var app = new App();
app.generateLinks();
console.log(app.links);
//zadanie 8
var dog = {
  type: "Mammal",
  name: "",
  setName: function setName(newName) {
    undefined.name = newName;
  }
};

dog.setName("Reksio");
console.log(dog.name);

/***/ })
/******/ ]);