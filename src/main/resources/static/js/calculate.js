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

var i = 0;

function hist(grading){
//add number of students to each grade - accurate to histogram
    var length = grading.length; 
    for (; i < length; i++){
        if (grading[i] >= aplus){
            a1.textContent += '0';
        } 
        else if(grading[i] >= a){
            a2.textContent +='0';
        }
        else if(grading[i] >= aminus){
            a3.textContent +='0';
        }
        else if(grades[i] >= bplus){
            b1.textContent +='0';
        }
        else if(grading[i] >= b){
            b2.textContent +='0';
        }
        else if(grading[i] >= bminus){
            b3.textContent +='0';
        }
        else if(grading[i] >= cplus){
            c1.textContent +='0';
        }
        else if(grading[i] >= c){
            c2.textContent +='0';
        }
        else if(grading[i] >= cminus){
            c3.textContent +='0';
        }
        else if(grading[i] >= d){
            d1.textContent +='0';
        }
        else{ 
            f1.textContent +='0';
        }
    }
    return
}

hist(grades);

//get user-inputted grade on submit button click
var button = document.querySelector('input[value="Submit"]');
// modify error message and input border colour on error
var error = document.getElementsByClassName('error')[0];
var error2 = document.getElementsByClassName('error2')[0];
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
                //update histogram
                grades.push(newgrade);
                hist(grades);
                inputbox.style.border = "1px solid black";
                error.textContent = "";
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

//readjust grade bounds A+
var gradeaplus = document.getElementById('a+');
gradeaplus.addEventListener("keypress", gradea1);

//function for adjusting A+ bounds 
function gradea1(evt){
    // check when enter is pressed
    if (evt.key === "Enter") {
      // Cancel the default action
      evt.preventDefault();
      //check for valid grade adjustment
      var gradea1 = document.getElementById('a+').value;
      var lowerbound = document.getElementById('a').value;
      var upperbound = 100;
      if (isNaN(gradea1)){
          document.getElementById('a+').style.border = "2px solid red";
          error2.textContent = "Invalid input.";
      }
      else{
          if (isValid(gradea1)){
              if (lowerbound < gradea1 && gradea1 < upperbound){
                  parseFloat(gradea1);
                  //set new grade bound
                  aplus = gradea1;
                  //update histogram
                  hist(grades);
                  document.getElementById('a+').style.border = "1px solid black";
                  error2.textContent = "";
              }
              else{
                  document.getElementById('a+').style.border = "2px solid red";
                  error2.textContent = "Invalid input.";
              }
          }
          else{
              document.getElementById('a+').style.border = "2px solid red";
  
          }
      }
    }
  }

//readjust grade bounds A
var gradea = document.getElementById('a');
gradea.addEventListener("keypress", gradea2);

//function for adjusting A bounds 
function gradea2(evt){
    // check when enter is pressed
    if (evt.key === "Enter") {
      // Cancel the default action
      evt.preventDefault();
      //check for valid grade adjustment
      var gradea2 = document.getElementById('a').value;
      var lowerbound = document.getElementById('a-').value;
      var upperbound = document.getElementById('a+').value;

    //update to next error div box
      var error3 = document.getElementsByClassName('error2')[1];
      if (isNaN(gradea2)){
          document.getElementById('a').style.border = "2px solid red";
          error3.textContent = "Invalid input.";
      }
      else{
          if (isValid(gradea2)){
              if (lowerbound < gradea2 && gradea2 < upperbound){
                  parseFloat(gradea2);
                  //set new grade bound
                  aplus = gradea2;
                  //update histogram
                  hist(grades);
                  document.getElementById('a').style.border = "1px solid black";
                  error3.textContent = "";
              }
              else{
                  document.getElementById('a').style.border = "2px solid red";
                  error3.textContent = "Invalid input.";
              }
          }
          else{
              document.getElementById('a').style.border = "2px solid red";
  
          }
      }
    }
  }

//readjust grade bounds A-
var gradeaminus = document.getElementById('a-');
gradeaminus.addEventListener("keypress", gradea3);

//function for adjusting A- bounds 
function gradea3(evt){
    // check when enter is pressed
    if (evt.key === "Enter") {
      // Cancel the default action
      evt.preventDefault();
      //check for valid grade adjustment
      var gradea3 = document.getElementById('a-').value;
      var lowerbound = document.getElementById('b+').value;
      var upperbound = document.getElementById('a').value;

      //update to next error div box
      var error4 = document.getElementsByClassName('error2')[2];
      if (isNaN(gradea3)){
          document.getElementById('a-').style.border = "2px solid red";
          error4.textContent = "Invalid input.";
      }
      else{
          if (isValid(gradea3)){
              if (lowerbound < gradea3 && gradea3 < upperbound){
                  parseFloat(gradea3);
                  //set new grade bound
                  aminus = gradea3;
                  //update histogram
                  hist(grades);
                  document.getElementById('a-').style.border = "1px solid black";
                  error4.textContent = "";
              }
              else{
                  document.getElementById('a-').style.border = "2px solid red";
                  error4.textContent = "Invalid input.";
              }
          }
          else{
              document.getElementById('a-').style.border = "2px solid red";
  
          }
      }
    }
  }

//readjust grade bounds B+
var gradebplus = document.getElementById('b+');
gradebplus.addEventListener("keypress", gradeb1);

//function for adjusting B+ bounds 
function gradeb1(evt){
    // check when enter is pressed
    if (evt.key === "Enter") {
      // Cancel the default action
      evt.preventDefault();
      //check for valid grade adjustment
      var gradeb1 = document.getElementById('b+').value;
      var lowerbound = document.getElementById('b').value;
      var upperbound = document.getElementById('a-').value;
      //update to next error div box
      var error5 = document.getElementsByClassName('error2')[3];
      if (isNaN(gradeb1)){
          document.getElementById('b+').style.border = "2px solid red";
          error5.textContent = "Invalid input.";
      }
      else{
          if (isValid(gradeb1)){
              if (lowerbound < gradeb1 && gradeb1 < upperbound){
                  parseFloat(gradeb1);
                  //set new grade bound
                  bplus = gradeb1;
                  //update histogram
                  hist(grades);
                  document.getElementById('b+').style.border = "1px solid black";
                  error5.textContent = "";
              }
              else{
                  document.getElementById('b+').style.border = "2px solid red";
                  error5.textContent = "Invalid input.";
              }
          }
          else{
              document.getElementById('b+').style.border = "2px solid red";
  
          }
      }
    }
  }

  //readjust grade bounds B
var gradeb = document.getElementById('b');
gradeb.addEventListener("keypress", gradeb2);

//function for adjusting B bounds 
function gradeb2(evt){
    // check when enter is pressed
    if (evt.key === "Enter") {
      // Cancel the default action
      evt.preventDefault();
      //check for valid grade adjustment
      var gradeb2 = document.getElementById('b').value;
      var lowerbound = document.getElementById('b-').value;
      var upperbound = document.getElementById('b+').value;
      //update to next error div box
      var error6 = document.getElementsByClassName('error2')[4];
      if (isNaN(gradeb2)){
          document.getElementById('b').style.border = "2px solid red";
          error6.textContent = "Invalid input.";
      }
      else{
          if (isValid(gradeb2)){
              if (lowerbound < gradeb2 && gradeb2 < upperbound){
                  parseFloat(gradeb2);
                  //set new grade bound
                  b = gradeb2;
                  //update histogram
                  hist(grades);
                  document.getElementById('b').style.border = "1px solid black";
                  error6.textContent = "";
              }
              else{
                  document.getElementById('b').style.border = "2px solid red";
                  error6.textContent = "Invalid input.";
              }
          }
          else{
              document.getElementById('b').style.border = "2px solid red";
  
          }
      }
    }
  }

//readjust grade bounds B-
var gradebminus = document.getElementById('b-');
gradebminus.addEventListener("keypress", gradeb3);

//function for adjusting B- bounds 
function gradeb3(evt){
    // check when enter is pressed
    if (evt.key === "Enter") {
      // Cancel the default action
      evt.preventDefault();
      //check for valid grade adjustment
      var gradeb3 = document.getElementById('b-').value;
      var lowerbound = document.getElementById('c+').value;
      var upperbound = document.getElementById('b').value;
      //update to next error div box
      var error7 = document.getElementsByClassName('error2')[5];
      if (isNaN(gradeb3)){
          document.getElementById('b-').style.border = "2px solid red";
          error7.textContent = "Invalid input.";
      }
      else{
          if (isValid(gradeb3)){
              if (lowerbound < gradeb3 && gradeb3 < upperbound){
                  parseFloat(gradeb3);
                  //set new grade bound
                  bminus = gradeb3;
                  //update histogram
                  hist(grades);
                  document.getElementById('b-').style.border = "1px solid black";
                  error7.textContent = "";
              }
              else{
                  document.getElementById('b-').style.border = "2px solid red";
                  error7.textContent = "Invalid input.";
              }
          }
          else{
              document.getElementById('b-').style.border = "2px solid red";
  
          }
      }
    }
  }

//readjust grade bounds C+
var gradecplus = document.getElementById('c+');
gradecplus.addEventListener("keypress", gradec1);

//function for adjusting C+ bounds 
function gradec1(evt){
    // check when enter is pressed
    if (evt.key === "Enter") {
      // Cancel the default action
      evt.preventDefault();
      //check for valid grade adjustment
      var gradec1 = document.getElementById('c+').value;
      var lowerbound = document.getElementById('c').value;
      var upperbound = document.getElementById('b-').value;
      //update to next error div box
      var error8 = document.getElementsByClassName('error2')[6];
      if (isNaN(gradec1)){
          document.getElementById('c+').style.border = "2px solid red";
          error8.textContent = "Invalid input.";
      }
      else{
          if (isValid(gradec1)){
              if (lowerbound < gradec1 && gradec1 < upperbound){
                  parseFloat(gradec1);
                  //set new grade bound
                  cplus = gradec1;
                  //update histogram
                  hist(grades);
                  document.getElementById('c+').style.border = "1px solid black";
                  error8.textContent = "";
              }
              else{
                  document.getElementById('c+').style.border = "2px solid red";
                  error8.textContent = "Invalid input.";
              }
          }
          else{
              document.getElementById('c+').style.border = "2px solid red";
  
          }
      }
    }
  }

//readjust grade bounds C
var gradec = document.getElementById('c');
gradec.addEventListener("keypress", gradec2);

//function for adjusting C bounds 
function gradec2(evt){
    // check when enter is pressed
    if (evt.key === "Enter") {
      // Cancel the default action
      evt.preventDefault();
      //check for valid grade adjustment
      var gradec2 = document.getElementById('c').value;
      var lowerbound = document.getElementById('c-').value;
      var upperbound = document.getElementById('c+').value;
      //update to next error div box
      var error9 = document.getElementsByClassName('error2')[7];
      if (isNaN(gradec2)){
          document.getElementById('c').style.border = "2px solid red";
          error9.textContent = "Invalid input.";
      }
      else{
          if (isValid(gradec2)){
              if (lowerbound < gradec2 && gradec2 < upperbound){
                  parseFloat(gradec2);
                  //set new grade bound
                  c = gradec2;
                  //update histogram
                  hist(grades);
                  document.getElementById('c').style.border = "1px solid black";
                  error9.textContent = "";
              }
              else{
                  document.getElementById('c').style.border = "2px solid red";
                  error9.textContent = "Invalid input.";
              }
          }
          else{
              document.getElementById('c').style.border = "2px solid red";
  
          }
      }
    }
  }

  //readjust grade bounds C-
var gradecminus = document.getElementById('c-');
gradecminus.addEventListener("keypress", gradec3);

//function for adjusting C- bounds 
function gradec3(evt){
    // check when enter is pressed
    if (evt.key === "Enter") {
      // Cancel the default action
      evt.preventDefault();
      //check for valid grade adjustment
      var gradec3 = document.getElementById('c-').value;
      var lowerbound = document.getElementById('d').value;
      var upperbound = document.getElementById('c').value;
      //update to next error div box
      var error10 = document.getElementsByClassName('error2')[8];
      if (isNaN(gradec3)){
          document.getElementById('c-').style.border = "2px solid red";
          error10.textContent = "Invalid input.";
      }
      else{
          if (isValid(gradec3)){
              if (lowerbound < gradec3 && gradec3 < upperbound){
                  parseFloat(gradec3);
                  //set new grade bound
                  cminus = gradec3;
                  //update histogram
                  hist(grades);
                  document.getElementById('c-').style.border = "1px solid black";
                  error10.textContent = "";
              }
              else{
                  document.getElementById('c-').style.border = "2px solid red";
                  error10.textContent = "Invalid input.";
              }
          }
          else{
              document.getElementById('c-').style.border = "2px solid red";
  
          }
      }
    }
  }

//readjust grade bounds D
var graded = document.getElementById('d');
graded.addEventListener("keypress", graded1);

//function for adjusting D bounds 
function graded1(evt){
    // check when enter is pressed
    if (evt.key === "Enter") {
      // Cancel the default action
      evt.preventDefault();
      //check for valid grade adjustment
      var graded1 = document.getElementById('d').value;
      var lowerbound = document.getElementById('f').value;
      var upperbound = document.getElementById('c-').value;
      //update to next error div box
      var error11 = document.getElementsByClassName('error2')[9];
      if (isNaN(graded1)){
          document.getElementById('d').style.border = "2px solid red";
          error11.textContent = "Invalid input.";
      }
      else{
          if (isValid(graded1)){
              if (lowerbound < graded1 && graded1 < upperbound){
                  parseFloat(graded1);
                  //set new grade bound
                  d = graded1;
                  //update histogram
                  hist(grades);
                  document.getElementById('d').style.border = "1px solid black";
                  error11.textContent = "";
              }
              else{
                  document.getElementById('d').style.border = "2px solid red";
                  error11.textContent = "Invalid input.";
              }
          }
          else{
              document.getElementById('d').style.border = "2px solid red";
  
          }
      }
    }
  }