// function ValidateEmail(mail) 
// {
//  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
//   {
//     alert("Valid Email");
//   }
//     alert("You have entered an invalid email address!")
    
// }

// ValidateEmail("khalid@gmail")

// function phonenumber(inputtxt)
// {
//   var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//   if(inputtxt.match(phoneno))
//         {
//       alert("Correct");
//         }
//       else
//         {
//         alert("Incorrect");
        
//         }
// }

// phonenumber("(123) 456-7890")

var str = "That is like so not cool, I was like totally mad.";
var cleanStr = str.replace(/like/g, "");

alert(cleanStr)