/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var dayCounter= 0;
var daily_rate= 35;
var total_cost= 0;
var total_cost_string= document.getElementById("calculated-cost");
var full_button= document.getElementById("full");
var half_button= document.getElementById("half");
var clear_button= document.getElementById("clear-button");
var monday= document.getElementById("monday");
var tuesday= document.getElementById("tuesday");
var wednesday= document.getElementById("wednesday");
var thursday= document.getElementById("thursday");
var friday= document.getElementById("friday");
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function monday_selected(){
   if(!monday.classList.contains("clicked")){ 
      dayCounter++;   
      monday.classList.add("clicked");
   }
   else 
      monday.classList.add("clicked");
   recalculate();
}
function tuesday_selected(){
   if(!tuesday.classList.contains("clicked")){ 
      dayCounter++;   
      tuesday.classList.add("clicked");
   }
   else 
      tuesday.classList.add("clicked");
   recalculate();
}
function wednesday_selected(){
   if(!wednesday.classList.contains("clicked")){ 
      dayCounter++;   
      wednesday.classList.add("clicked");
   }
   else 
      wednesday.classList.add("clicked");
   recalculate();
}
function thursday_selected(){
   if(!thursday.classList.contains("clicked")){ 
      dayCounter++;   
      thursday.classList.add("clicked");
   }
   else 
      thursday.classList.add("clicked");
   recalculate();
}
function friday_selected(){
   if(!friday.classList.contains("clicked")){ 
      dayCounter++;   
      friday.classList.add("clicked");
   }
   else 
      friday.classList.add("clicked");
   recalculate();
}
monday.addEventListener("click", monday_selected);
tuesday.addEventListener("click", tuesday_selected);
wednesday.addEventListener("click", wednesday_selected);
thursday.addEventListener("click", thursday_selected);
friday.addEventListener("click", friday_selected);
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clear(){
   dayCounter= 0;
   total_cost_string.innerHTML="0";
   monday.classList.remove("clicked");
   tuesday.classList.remove("clicked");
   wednesday.classList.remove("clicked");
   thursday.classList.remove("clicked");
   friday.classList.remove("clicked");

}
clear_button.addEventListener("click", clear);
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfday_rate(){
   daily_rate = 20;
   full_button.classList.remove("clicked");
   half_button.classList.add("clicked");
   recalculate();
}
half_button.addEventListener("click", halfday_rate);
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullday_rate(){
   daily_rate = 35;
   half_button.classList.remove("clicked");
   full_button.classList.add("clicked");
   recalculate();
}
full_button.addEventListener("click", fullday_rate);
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate(){
   if (daily_rate == 20){
      total_cost= dayCounter*20;
      console.log(total_cost);
      total_cost_string.innerHTML= total_cost.toString();
   }
   else{
      total_cost= dayCounter*35;
      console.log(total_cost);
      total_cost_string.innerHTML= total_cost.toString();
   }
}