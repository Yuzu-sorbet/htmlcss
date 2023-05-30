//grades array
var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

// variables for each grade
var max = document.getElementById('max').value;
var aplus = document.getElementById('a+').value;
var a = document.getElementById('a').value;
var aminus = document.getElementById('a-').value;
var bplus = document.getElementById('b+').value;
var b = document.getElementById('b').value;
var bminus = document.getElementById('b-').value;
var cplus = document.getElementById('c+').value;
var c = document.getElementById('c').value;
var cminus = document.getElementById('c-').value;
var d = document.getElementById('d').value;
var f = document.getElementById('f').value;

//variables for how many of each letter grade in histogram
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var d1 = document.getElementById('d1');
var f1 = document.getElementById('f1');

var length = grades.length;

function hist(){
//add number of students to each grade - accurate to histogram 
    for (var i=0; i <= length; i++){
        if (grades[i] >= aplus){
            a1.textContent += '❑';
        } 
        else if (grades[i] >= a){
            a2.textContent +='❑';
            console.log('activated a');
        }
        else if (grades[i] >= aminus){
            a3.textContent +='❑';
            console.log(grades[i]);
        }
        else if (grades[i] >= bplus){
            b1.textContent +='❑';
            console.log('activated b+');
        }
        else if (grades[i] >= b){
            b2.textContent +='❑';
            console.log('activated b');
        }
        else if (grades[i] >= bminus){
            b3.textContent +='❑';
            console.log('activated b-');
        }
        else if (grades[i] >= cplus){
            c1.textContent +='❑';
            console.log('activated c+');
        }
        else if (grades[i] >= c){
            c2.textContent +='❑';
            console.log('activated c');
        }
        else if (grades[i] >= cminus){
            c3.textContent +='❑';
            console.log('activated c-');
        }
        else if (grades[i] >= d){
            d1.textContent +='❑';
            console.log('activated d');
        }
        else if (grades[i] >= f){
            f1.textContent +='❑';
            console.log('activated f');
        }
    }
}

//get user-inputted grade on submit button click
var button = document.querySelector('input[value="Submit"]');
// modify error message and input border colour on error
var error = document.getElementsByClassName('error')[0];
var inputbox = document.getElementsByClassName('newgrade')[0]
button.addEventListener('click', function(evt){
    evt.preventDefault()
    var newgrade = document.getElementsByClassName('newgrade')[0].value
    if (isNaN(newgrade)){
        inputbox.style.border = "2px solid red";
        error.textContent = "Invalid input. Please enter integer/float values.";
    }

    else{
        if (isValid(newgrade)){
            if (parseFloat(newgrade)){
                grades.push(newgrade);
                inputbox.style.border = "1px solid black";
                error.textContent = "";
                //update histogram
                hist();
            }
        }
        else{
            inputbox.style.border = "2px solid red";
            error.textContent = "Invalid input. Please enter integer/float values between 0 and 100.";
        }
    }
})


//upper + lower bounds on grades
function isValid(grade){
    if (0 <= grade && grade <= 100){
        return true 
    }
    return false
}

