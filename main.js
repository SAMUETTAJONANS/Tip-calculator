//Initializing and assigning variable names to dom objects
let bill_input = document.getElementById('bill');
let people_input = document.getElementById('people');
let total_display = document.getElementById('total');
let tip_display = document.getElementById('tip_amount');
let tip_inputs = document.querySelectorAll('.btn');
let custom_input = document.getElementById('custom');
let reset_btn = document.getElementById("reset");
reset_btn.addEventListener('click',(reset))

//SETTING STORAGE VALUES OF INPUTS TO ZERO(0)
let tip_value = people_value = bill_value = 0;

//ADDING INPUT EVENT LISTENERS TO BILL, PERSON AND CUSTOM TIP FIELDS
//STORE VALUES IN STORAGE VARIABLES ABOVE
//THEN CALL CALCULATE FUNCTION
bill_input.addEventListener('input', (e) => {
    bill_value = e.target.value;
    calcTip();
})

custom_input.addEventListener('input', (e) => {
    tip_value=e.target.value;
    calcTip();
})

people_input.addEventListener('input', (e) => {
    people_value= e.target.value;
    
    calcTip();
});


//ADDING CLICK LISTENERS TO TIP BUTTONS AND STORING VALUE IN STORAGE VARIABLES
tip_inputs.forEach( tip_input => {
    tip_input.addEventListener('click', (e)=>{
        tip_inputs.forEach(tip_input => {
            tip_input.classList.remove("btn_active");
        })
        e.target.classList.add("btn_active");
    
        tip_value = parseInt(e.target.id);
    
        calcTip();
    })  
});




//RESET FUNCTION CLEARS ALL STORAGE VALUES, RESETS STYLING AND CLEARS FIELDS
function reset(){
    tip_value = bill_value = people_value = 0;
    bill_input.value = custom_input.value = people_input.value = '';
    tip_inputs.forEach(tip_input => {
        tip_input.classList.remove("btn_active");
    })
    tip_display.innerHTML = total_display.innerHTML = "$0.00";
    
    reset_btn.style.cursor = "not-allowed"
    reset_btn.style.backgroundColor = "#5e7a7d";

}


//CALCULATION OF TIP AMOUNT AND TOTAL AMOUNT, WITH ACTIVATING RESET BUTTON
function calcTip(){
    if(tip_value && people_value && bill_value){

        let tipAmount = ((tip_value/100) * bill_value)/people_value;
        
        let totalAmount = (bill_value/people_value) + tipAmount;

        
        tipAmount = Math.round(tipAmount * 100 / 100).toFixed(2)

        totalAmount = Math.round(totalAmount * 100 / 100).toFixed(2)

        tip_display.innerHTML = "$"+ tipAmount;
        total_display.innerHTML = "$"+totalAmount;

        reset_btn.style.backgroundColor = "#26c0ab";
        reset_btn.disabled = false;
        reset_btn.style.cursor = "pointer"
    }
}