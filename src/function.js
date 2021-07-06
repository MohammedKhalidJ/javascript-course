// console.log(funcname('value1', 'value2', 5, true, null, undefined));
// funcname('value1', 'value2', 5, true, null, undefined)
// function funcname(...parm) {
    // parm.map(function(data, index) {console.log(data + ' ' + index)});
    //code goes here
    //parm can be processed here
    // return `${parm[0]} is set.`;
// }

// let funcname = function(...parm) {
// //parm.map(function(data, index) {console.log(data + ' ' + index)});
//     //code goes here
//     //parm can be processed here
//     return `${parm[0]} is set.`;
// }


// function company() {
//     let comp = "Prokarma"
//     alert(comp);
// }

// let changeCompany = company;

// company();
// changeCompany();

function agreement(question, yes, no) {
    let text = (question && yes && no) ?? "Please provide the param.";
    if(typeof text !== 'function'){
        return alert(text);
    }

    if(confirm(question)){
        yes();
    } else {
        no();
    }
}

// let agree = () => alert("Agreed");
function agree() {
    alert("Agreed.");
}

// let cancel = () => alert("Cancelled");
function cancel() {
    alert("Cancelled.");
}

agreement("Do you agree?", agree, cancel);

