// ps
let containerDiv = creatediv("div","class","container mt-xxl-5 mb-5");
let rowDiv= creatediv("div","class","row");
let colDiv= creatediv("div","class","col-lg-5 col-xxl-6 mt-5 mx-auto");
let cardDiv= creatediv("div","class","card","id","calculator");
let cardHeaderDiv= creatediv("div","class","card-header");
let cardBodyDiv= creatediv("div","class","card-body","id","keyboard");
 containerDiv.append(rowDiv);
 rowDiv.append(colDiv);
 colDiv.append(cardDiv);
 cardDiv.append(cardHeaderDiv,cardBodyDiv);
 document.body.append(containerDiv);

//input box 
 let input = document.createElement("input");
 input.setAttribute("type","text");
 input.setAttribute("placeholder","0");
 input.setAttribute("class","form-control");
 input.setAttribute("id","result");
 input.disabled=true; 
 cardHeaderDiv.append(input);

 //all buttons

let button1 = createButtons("button","class","operator","id","clear","C","onclick","clr()");
let button2 = createButtons("button","class","operator","id","backspace","D","onclick","del()");
let button3 = createButtons("button","class","operator","id","%","%","onclick","calculate('%')");
let button4 = createButtons("button","class","operator","id","/","&#247;","onclick","calculate('/')");
let button5 = createButtons("button","class","number","id","7","7","onclick","calculate(7)");
let button6 = createButtons("button","class","number","id","8","8","onclick","calculate(8)");
let button7 = createButtons("button","class","number","id","9","9","onclick","calculate(9)");
let button8 = createButtons("button","class","operator","id","*","&times","onclick","calculate('*')");
let button9 = createButtons("button","class","number","id","4","4","onclick","calculate(4)");
let button10 = createButtons("button","class","number","id","5","5","onclick","calculate(5)");
let button11= createButtons("button","class","number","id","6","6","onclick","calculate(6)");
let button12= createButtons("button","class","operator","id","-","-","onclick","calculate('-')");
let button13= createButtons("button","class","number","id","1","1","onclick","calculate(1)");
let button14 = createButtons("button","class","number","id","2","2","onclick","calculate(2)");
let button15 = createButtons("button","class","number","id","3","3","onclick","calculate(3)");
let button16 = createButtons("button","class","operator","id","+","+","onclick","calculate('+')");
let button18= createButtons("button","class","number","id","0","0","onclick","calculate(0)");
let button19= createButtons("button","class","operator","id",".",".","onclick","calculate('.')");
let button20= createButtons("button","class","operator equal","id","=","=","onclick","Result()");
cardBodyDiv.append(button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,button14,button15,button16,button18,button19,button20);


//function for creating the div

function creatediv(tagname,classtag,classname,idatt,idname){
   let div = document.createElement(tagname);
   div.setAttribute(classtag,classname);
   div.setAttribute(idatt,idname)
   return div;
}

//function for creating the buttons

function createButtons(tagname,classtag,classname,idatt,idname,content,att,fn){
  
let button = document.createElement(tagname);
 button.setAttribute(classtag,classname);
 button.setAttribute(idatt,idname);
 button.setAttribute(att,fn);
 button.innerHTML=content;
 return button;
}

// -------------------------------------------->Creating Function for functioning calculator<-----------------------------------------------------------

var result = document.getElementById("result");

let calculate=(number)=>{
result.value+=number;
}

let Result=()=>{

try {
   result.value = Number.isInteger(eval(result.value)) ? eval(result.value) : eval(result.value).toFixed(2);
   }
    catch (error) {
     alert("Only numbers are allowed")
     result.value = " ";
   }

}
 
   
function clr(){
result.value = " ";
}

function del(){
   result.value= result.value.slice(0,-1);
}