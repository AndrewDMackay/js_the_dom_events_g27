
// Events..

// Requires three steps..

// [ 1. ] Which element is dispatching the event..

// [ 2. ] What is the event..

// [ 3. ] What code should be extended..


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const button = document.querySelector('#button');
  button.addEventListener("click", handleButtonClick);

  const textInput = document.querySelector("#input");
  textInput.addEventListener('input', handleInput)

  const select = document.querySelector("#select");
  select.addEventListener('change', handleSelectChange)
});

const handleButtonClick = function (){
  // console.log('Button has been clicked');
  const resultParagraph = document.querySelector('#button-result');
  resultParagraph.textContent = 'That button has definitley been clicked';
}

const handleInput = function (event){
  // console.log(event);
  // console.log('Input has been typed in');

  // 1. Get value from the input..
  let inputValue = event.target.value;

  // 2. Update the paragraph text..
  const resultParagraph = document.querySelector('#input-result');
  resultParagraph.textContent = `You typed: ${inputValue}`;
}

// Task..

// Add an event listener to the select element that listens for the change event.. 
// Passing in the callback handleSelectChange, which you haven't written yet.

// Write the callback handleSelectChange so that it updates the paragraph text.. 
// Below the select to be "You went with:" followed by the value of the selected option.

// Hint.. Log the event object to check how to get the value from the select

const handleSelectChange = function (event){
  // console.log(event);

  // 1. Get value from the input..
  // let changeSelected = event.target.value;
  // You can do the above in the second line below, within the `back ticks`..

  // 2. Update the paragraph text..
  const resultParagraph = document.querySelector('#select-result');
  resultParagraph.textContent = `You : ${event.target.value}`;
}