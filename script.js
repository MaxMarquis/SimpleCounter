const buttonsElement = document.querySelector('.counter__buttons');
const increaseButtonElement = document.querySelector('.counter__button--increase');
const decreaseButtonElement = document.querySelector('.counter__button--decrease');
const counterValueElement = document.querySelector('.counter__value');
const counterResetElement = document.querySelector('.counter__reset')
const counterTitleElement = document.querySelector('.counter__title');
const counterElement = document.querySelector('.counter');

const incrementCounter = () => {
    // Get current value of counter
    const currentValue = counterValueElement.textContent;
    // convert value to number type
    const currentValueAsNumber = +currentValue;
    // Increment by 1
    let newValue = currentValueAsNumber + 1; 
    //  if newValue is greater than 10, set it to 10, otherwise keep it like that
    if (newValue > 10) {
        newValue = 10
        counterElement.classList.add('counter--limit');
        counterTitleElement.innerHTML = "Limit! Buy <b>PRO</b> for > 10";
        increaseButtonElement.disabled = true;
        decreaseButtonElement.disabled = true;
    }
    // Set counter
    counterValueElement.textContent = newValue;
    // Unfocus button
    increaseButtonElement.blur();
}

increaseButtonElement.addEventListener('click', incrementCounter)
document.addEventListener("keydown", incrementCounter)

decreaseButtonElement.addEventListener('click', () => {
    const currentValue = counterValueElement.textContent;
    const currentValueAsNumber = +currentValue;
    let decreasedValue = currentValueAsNumber - 1;
    decreasedValue < 0 ? decreasedValue = 0 : decreasedValue;
    counterValueElement.textContent = decreasedValue;
    decreaseButtonElement.blur();
})

counterResetElement.addEventListener('click', () =>{
    counterValueElement.textContent = 0;
    counterTitleElement.innerHTML = "Simple Counter";
    counterElement.classList.remove('counter--limit')
    increaseButtonElement.disabled = false;
    decreaseButtonElement.disabled = false;
    counterResetElement.blur();
})