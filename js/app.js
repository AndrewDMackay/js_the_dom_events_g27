
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

});

const handleButtonClick = function (){
  // console.log('Button has been clicked');
  const resultParagraph = document.querySelector('#button-result');
  resultParagraph.textContent = 'That button has definitley been clicked';
}

const handleInput = function (){
  // console.log('Input has been typed in');
  // 1. Get value from the input..
  // 2. Update the paragraph text..
  
}