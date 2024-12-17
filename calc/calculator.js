var input1;
var input2;

var _input = "inputText";
var _answer = "answerText";
var _expression = "expressionText";
var _add = "addButton";
var _subtract = "subButton";
var _multiply = "multButton";
var _divide = "divButton";

var opperand = "none";

function setInput(id, text){
    document.getElementById(id).value = text
}

function setText(id, text){
    document.getElementById(id).innerText = text
}

function getInput(id){
    return(document.getElementById(id).value)
}

function getText(id){
    return(document.getElementById(id).innerText)
}

function simpleMath(input1, input2, opperand){
  if(opperand == "+"){
    return(input1+input2);
  } 
  else if(opperand == "-"){
    return(input1-input2);
  }
  else if(opperand == "*"){
    return(input1*input2);
  }
  else if(opperand == "/"){
    return(input1/input2);
  }
}

function addText(id, value){
  var expression = getText(id);
  expression += value;
  setText(id, expression);
}

function enter(){
    if(opperand != "none"){
      if(input1 == "none"){
        setText(_expression, "");
        input1 = input2;
        addText(_expression, input1);
      }
      addText(_expression, opperand);
      input2 = Number(getInput(_input));
      addText(_expression, input2);
      input2 = simpleMath(input1, input2, opperand);
      if(input2 % 2 == 0){
        setText(_answer, input2 + "\nWhich is even");
      } else {
        setText(_answer, input2);
      }
      
      input1 = "none";
      opperand = "none";
      setInput(_input, "");
    } else {
      setText(_expression, "");
      input1 = Number(getInput(_input));
      addText(_expression, input1);
      setInput(_input, "");
    }
}

function submit(){
  if(getInput(_input) != ""){
    enter();
  }
};

function addClick(){
  opperand = "+";
};

function subClick(){
  opperand = "-";
};

function multClick(){
  opperand = "*";
};

function divClick(){
  opperand = "/";
};