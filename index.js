function getHistory() {
   return document.getElementById("history-value").innerText;
}
//alert(getHistory());
//(1) To print history value of the calculator
function printHistory(num){
  document.getElementById("history-value").innerText=num;
}
//printHistory(9+9);//Try this

function getOutput(){
  return document.getElementById("output-value").innerText;
}
//alert(getOutput());
//{1)To print the output values on the calculator output
function printOutput(num){
  if (num==""){ //If a number is null value is passed here, it's output will also be null
    document.getElementById("output-value").innerText=num;
    
  }
  else{ //else if a number is placed in the output, it should result in a formatted value
  document.getElementById("output-value").innerText=getFormattedNumber(num);//The getFormattedNumber method helps to convert toString so we can have a value with separted commas  E.G 1,000
  }
 }
//Let's create a function called getFormattedNumber(num), so we can print a number as the value
function getFormattedNumber(num){
  var n = Number(num);           //created a variable called n and assign the num value to it.
  var value = n.toLocaleString("en");  // brought out our n value in other to convert it to string. The en value specifies what language depending on the country and that specifies english.
  return value;
}
//printOutput("123546");//Try this
function reverseNumberFormat(num){ //Reversing the string value that was converted already back to the a number
  return Number(num.replace(/,/g,''));
 
}
//alert(reverseNumberFormat(getOutput()));

//operators
var operators = document.getElementsByClassName("operator");
 for(var i =0; i<operators.length;i++){ //recheck when you get home.It is to make the operators functional 
   operators[i].addEventListener('click',function(){
    //alert("The operator clicked;"+ this.id);
       if(this.id=="clear"){
        printHistory("");
        printOutput("");
       }
       if(this.id=="backspace"){ //To make the backspace key fuctional
         var output=reverseNumberFormat(getOutput()).toString();
         if(output){//if output has a value
         output= output.substr(0,output.length-1);//To ensure the values are backspaced one at a time
         printOutput(output);
        }
       }
       else{
        var output=getOutput();
        var history=getHistory();//created history variable
        if(output!=""){
           output=reverseNumberFormat(output);
           history=history + output; // assign the history variable to another history variable + an output  so that as the values or keys are being clicked on the keyboard and an operator is clicked as well it immedately moves to the history input 
           if(this.id=="="){
            var result=eval(history); //the result to be evaluated
            printOutput(result);//print result
            printHistory("");
           }
           else{
            history=history+this.id; //calling the hisotry value
            printHistory(history);
            printOutput("");
           }
         }
       }
   });
 }
 //Numbers  
 var Numbers = document.getElementsByClassName("number");
 for(var i =0; i<Numbers.length;i++){ //It is to make the operators functional 
  Numbers[i].addEventListener('click',function(){
    //alert("The number clicked;"+ this.id);
        var output=reverseNumberFormat(getOutput()); //Here we used the reverseNumberFormat to call the function getOutput to get the output value ofthe number
        if (output!=NaN){ //if output is a number
          output=output+this.id; //Here we called the variable we created already and reassigned an output plus the id for the class(number)so any number clicked will be called
          printOutput(output);
        }
   })
 }









