// import functions and grab DOM elements
const sumInput1 = document.getElementById("sum-input-1");
const sumInput2 = document.getElementById("sum-input-2");
const sumButton = document.getElementById("sum-button");
const addResults = document.getElementById("answer");

const subInput1 = document.getElementById("sub-input-1");
const subInput2 = document.getElementById("sub-input-2");
const subButton = document.getElementById("sub-button");
const subResults = document.getElementById("answer");

const multInput1 = document.getElementById("mult-input-1");
const multInput2 = document.getElementById("mult-input-2");
const multButton = document.getElementById("mult-button");
const multResults = document.getElementById("answer");

const divInput1 = document.getElementById("div-input-1");
const divInput2 = document.getElementById("div-input-2");
const divButton = document.getElementById("div-button");
const divResults = document.getElementById("answer");


// initialize state

// set event listeners to update state and DOM
sumButton.addEventListener('click', () => {
    const value1 = Number(sumInput1.value);
    const value2 = Number(sumInput2.value);

    

    //const value1AsNumber = Number(value1);

   // console.log(value1AsNumber, value2AsNumber);

    const sum = value1 + value2;

 //   console.log(sum)

    addResults.textContent = sum;
});

subButton.addEventListener('click', () => {
    const value1 = Number(subInput1.value);
    const value2 = Number(subInput2.value);

    console.log(value1, value2);

    //const value1AsNumber = Number(value1);

   // console.log(value1AsNumber, value2AsNumber);

    const sub = value1 - value2;

 //   console.log(sum)

    subResults.textContent = sub;
});

multButton.addEventListener('click', () => {
    const value1 = Number(multInput1.value);
    const value2 = Number(multInput2.value);

    console.log(value1, value2);

    //const value1AsNumber = Number(value1);

   // console.log(value1AsNumber, value2AsNumber);

    const mult = value1 * value2;

 //   console.log(sum)

    multResults.textContent = mult;
});

divButton.addEventListener('click', () => {
    const value1 = Number(divInput1.value);
    const value2 = Number(divInput2.value);

    console.log(value1, value2);

    //const value1AsNumber = Number(value1);

   // console.log(value1AsNumber, value2AsNumber);

    const div = value1 / value2;

 //   console.log(sum)

    divResults.textContent = div;
});