const cardDefault = document.querySelector('.card__default');
const cardSuccess = document.querySelector('.card__success');
const options = document.querySelectorAll('.option');
const submit = document.querySelector('.submit');
const userRating = document.querySelector('.user__rating');
let selected = ''

options.forEach(option => {
    option.addEventListener('click', () => {
        removeSelected()
        selected = option.innerHTML
        console.log(selected)
        option.classList.add('selected')
    })
})

submit.addEventListener('click', () => {
    cardDefault.classList.add('hidden')
    cardSuccess.classList.remove('hidden')
    userRating.textContent = `You selected ${selected} out of 5`
})

function removeSelected() {
    options.forEach(option => {
        option.classList.remove("selected")
    })
}