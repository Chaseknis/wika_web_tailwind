var counter =document.querySelector("#translators");
var database =document.querySelector("#database");

let count = 1;
setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
}, 1)

setTimeout (() => {
    database.innerText = "Database of translators";
}, 4515)


/*function sendEmail() {
    Email.send({
        SecureToken : "b774f7d8-85a5-45d5-9680-f34070b4a90e",
        To : 'info@wikatranslate.com',
        From : document.getElementById("email").value,
        Subject : "New Contact form inquiry",
        Body : "Name: " + document.getElementById("name").value 
        + "<br> Phone Number: " + document.getElementById("phone").value 
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Your message has been sent successfully, we will get back to you in less than 10mins")
    );
}*/
