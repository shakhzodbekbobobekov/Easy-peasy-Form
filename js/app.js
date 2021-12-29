//Selectors
const fName = document.querySelector('form #fName')
const age = document.querySelector('form #age')
const isMarried = document.querySelector('form #isMarried')

const btnSubmit = document.querySelector('.btnSubmit')
const btnCancel = document.querySelector('.btnCancel')

const message = document.querySelector('.message')

const fNameText = document.querySelector('.fName')
const ageText = document.querySelector('.age')
const isMarriedText = document.querySelector('.isMarried')

//Event Lesteners
fName.addEventListener( 'input', function(e) {
    fNameText.innerHTML = `📝 Name: ${e.target.value}`;
})