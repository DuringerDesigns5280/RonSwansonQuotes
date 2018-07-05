const apiURL = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
const apiRon = 'ron.json' 



getQuote()
getPicture()
function getQuote() {
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        console.log(data[0])
        const ron = data[0]	
        let li = document.createElement('li')
        let p = document.createElement('p')
        let quotes = document.querySelector('#quotes')
        quotes.innerHTML = ''
        li.appendChild(p)
        quotes.appendChild(li)
        p.textContent = data[0]
    
    })
}


function getPicture() {
    fetch(apiRon)
    .then(response => response.json())
    .then(ronData => {
        console.log(ronData)
        var randomIndex = getRandomInt(ronData.length - 1);
        console.log(ronData[0])
        const ronIMG = ronData[randomIndex].imageURL
        let li = document.createElement('li')
        let img = document.createElement('img')
        let pic = document.getElementById('pic')
        pic.innerHTML = ''
        li.appendChild(img)
        document.querySelector('#pic').appendChild(li)
        img.src = ronIMG
    })
}

// grab button from DOM 
// attach event listener to button 
// event.handler for button click 

var button = document.querySelector('#button')
console.log(button)
button.addEventListener('click', function(event) {
     event.preventDefault()
     getQuote()
     getPicture()
    
})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  
  // Inside button click event handler
  var randomIndex = getRandomInt(4);
  // expected output: 0, 1 or 2
  var newRonObject = JSON[randomIndex]
 
  
