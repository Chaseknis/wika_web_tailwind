var counter =document.querySelector("#translators");
var database =document.querySelector("#database");

let count = 1;
setInterval(() => {
    if (count < 900) {
        count++;
        counter.innerText = count + "+";
    }
}, 1)

setTimeout (() => {
    database.innerText = "Database of translators";
}, 4515)


var counters =document.querySelector("#accuracy");
var databases =document.querySelector("#rate");

let counts = 1;
setInterval(() => {
    if (counts < 100) {
        counts++;
        counters.innerText = counts + "%";
    }
}, 1)

setTimeout (() => {
    databases.innerText = "Accuracy Rate";
}, 451.5)


var counterz =document.querySelector("#languages");
var databasez =document.querySelector("#lnggs");

let countz = 1;
setInterval(() => {
    if (countz < 125) {
        countz++;
        counterz.innerText = countz + "%";
    }
}, 1)

setTimeout(() => {
    databasez.innerText = "Languages Worldwide";
}, 551.5);


const scriptURL = 'https://script.google.com/macros/s/AKfycbybw3kLDod-OFtuzzjIDSoFQBX7Bu0s9ySH4-SPsgGcH4WgHQkDf_cRFwtKy228kB0u/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById('msg')
      
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank you for subscribing to our newsletter!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 2000)
            form.reset()

        })
        .catch(error => console.error('Error!', error.message))
});

window.onbeforeunload = () => {
  for(const form of document.querySelector('#form')) {
    form.reset();
  }
}
