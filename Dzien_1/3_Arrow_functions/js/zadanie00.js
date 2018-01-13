var Students = function(students) {
	this.names = students;
  	this.numberOfLetters = [];
};


Students.prototype.countLetters = function() {
	this.name.forEach((name) => {
	this.numberOfLetters.push(name.length)
	});
}

var students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log(students.numberOfLetters);
