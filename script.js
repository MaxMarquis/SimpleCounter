const increaseButtonElement = document.querySelector('.counter__button--increase');
const decreaseButtonElement = document.querySelector('.counter__button--decrease');
const counterValueElement = document.querySelector('.counter__value');
const counterResetElement = document.querySelector('.counter__reset')

increaseButtonElement.addEventListener('click', function() {
    // Get current value of counter
    const currentValue = counterValueElement.textContent;
    // convert value to number type
    const currentValueAsNumber = +currentValue;
    // Increment by 1
    const newValue = currentValueAsNumber + 1; 
    // Set counter element with new value
    counterValueElement.textContent = newValue;
})

decreaseButtonElement.addEventListener('click', function () {
    const currentValue = counterValueElement.textContent;
    const currentValueAsNumber = +currentValue;
    if (currentValueAsNumber > 0) {
        const decreasedValue = currentValueAsNumber - 1;
        counterValueElement.textContent = decreasedValue;
    }
})

counterResetElement.addEventListener('click', function(){
    counterValueElement.textContent = 0;
})