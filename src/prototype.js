function company() {
    this.name = "PK";
    this.year = 2021;
}

company.prototype.empoyees = 100;

var compObj1 = new company();
console.log(compObj1.empoyees);

var compObj2 = new company();
console.log(compObj2.empoyees);

console.log(typeof company);



console.log(compObj1);