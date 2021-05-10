//console.log(funcname('value1', 'value2', 5, true, null, undefined));

// function funcname(...parm) {
//     //parm.map(function(data, index) {console.log(data + ' ' + index)});
//     //code goes here
//     //parm can be processed here
//     return `${parm[0]} is set.`;
// }

// let funcname = function(...parm) {
// //parm.map(function(data, index) {console.log(data + ' ' + index)});
//     //code goes here
//     //parm can be processed here
//     return `${parm[0]} is set.`;
// }


// function company() {
//     alert("prokarma");
// }

// let changeCompany = company;

// company();
// changeCompany();

function agreement(question, yes, no) {
    if(confirm(question)){
        yes();
    } else {
        no();
    }
}

let agree = () => alert("Agreed");
// function agree() {
//     alert("Agreed.");
// }

let cancel = () => alert("Cancelled");
// function cancel() {
//     alert("Cancelled.");
// }

agreement("Do you agree", agree, cancel);

