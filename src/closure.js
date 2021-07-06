this.name = "OuterPK";
function CmpDetails() {
    let name = "Prokarma";
    let noOfEmployees = "600";
    let location = "Mexico";

    return function() {
        let developers = 100;
        return name;
    }
}

let company = CmpDetails();

console.log(company());