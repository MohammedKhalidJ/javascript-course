var companyDetails = {
    companyName: "Prokarma",
    Year: "2021",
    location: "Mexico",
    getNameLocation: function() {
        return `${this.companyName} ${this.location}`
    }
}

var helperFunc = function(Program, course) {
    console.log(this.getNameLocation() + `${Program} ${course}`);
};

helperFunc.call(companyDetails,"ITP", "javascript");
helperFunc.apply(companyDetails,["ITP", "javascript"]);