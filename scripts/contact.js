// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
var submit= document.getElementById("submit-button");
var content_page= document.getElementById("contact-page");
function change_content(){
    content_page.style.fontSize="24px";
    content_page.innerHTML= '<p>Thank you for your message!</p>';
}
submit.addEventListener('click', change_content);
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

