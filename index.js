const bill = document.querySelector(".bill-input");
const people = document.querySelector(".people-input");
const buttons = document.querySelectorAll(".percentage-box button");
const customButton = document.querySelector(".custom-button");
const errorMessage = document.querySelector(".message .red");
const result_tip = document.querySelector("#result-tip");
const result_total = document.querySelector("#result-total");
const buttonReset = document.querySelector("#button-reset");
let tipSelected;

buttons.forEach(btn=>{
    btn.addEventListener("click", e=>{       
        buttons.forEach(btn => {
            btn.classList.remove("active");
           
        })
        e.target.classList.add("active");
        customButton.value = "";
        tipSelected = e.target.value;
        calc();
    })    
})
customButton.oninput = function(){
    buttons.forEach(btn => {
        btn.classList.remove("active");       
    })
    tipSelected=customButton.value;    
    calc();
}
people.oninput = function(){    
    if(people.value <=0){
        people.classList.add("invalid"); 
        errorMessage.classList.remove("hidden");
    }
    else{
        people.classList.remove("invalid");
        errorMessage.classList.add("hidden");
    }   
    calc();
}
buttonReset.addEventListener('click',e=>{
    reset();
})
function calc(){
   let tipPerPerson = (bill.value*tipSelected*0.01)/people.value;
   let totalPerPerson =(bill.value/people.value)+tipPerPerson;
   
   if(tipPerPerson>=0&&totalPerPerson>=0){
    result_tip.innerText = tipPerPerson.toFixed(2);
    result_total.innerText = totalPerPerson.toFixed(2);
   }
   else{
    result_tip.innerText = '0.00';
    result_total.innerText = '0.00'
   }
}
function reset(){
    buttons.forEach(btn => {
        btn.classList.remove("active");
       
    })
    customButton.value ="";
    result_tip.innerText = '0.00';
    result_total.innerText = '0.00';
    bill.value = "";
    people.value = "";
    people.classList.remove("invalid");
    errorMessage.classList.add("hidden");
}