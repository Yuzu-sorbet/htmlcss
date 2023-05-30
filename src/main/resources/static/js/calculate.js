//variables declared 

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

//variables for how many in each grade
var a1 = 0;
var a2 = 0;
var a3 = 0;
var b1 = 0;
var b2 = 0;
var b3 = 0;
var c1 = 0;
var c2 = 0;
var c3 = 0;
var d1 = 0;
var f1 = 0;

// add number of students to each grade - accurate to histogram 
var length = grades.length;
for (var i=0; i <= length; i++){
    if (grades[i] >= aplus) a1++;
    else if (grades[i] >= a) a2++;
    else if (grades[i] >= aminus) a3++;
    else if (grades[i] >= bplus) b1++;
    else if (grades[i] >= b) b2++;
    else if (grades[i] >= bminus) b3++;
    else if (grades[i] >= cplus) c1++;
    else if (grades[i] >= c) c2++;
    else if (grades[i] >= cminus) c3++;
    else if (grades[i] >= d) d1++;
    else if (grades[i] >= f) f1++;
}


//get user-inputted grade on submit button click
var button = document.querySelector('input[value="Submit"]');
button.addEventListener('click', function(evt){
    evt.preventDefault()
    var newgrade = document.getElementsByClassName('newgrade')[0].value
    if (isNaN(newgrade)){
        
        document.getElementsByClassName('newgrade')[0].style.border = "2px solid red";
        //add error message later 
        var error = document.getElementsByClassName('error')[0].textContent += "Invalid input. Please enter integer/float values.";
    }

    else{
        if (isValid(newgrade)){
            //if input is float - add to array
            if (parseFloat(newgrade)){
                grades.push(newgrade);
                console.log('Success');
            }
        }
    }
})

//upper lower bounds on grades
function isValid(grade){
    if (0 <= grade && grade <= 100){
        return true 
    }
    return false
}

