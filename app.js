// import functions and grab DOM elements
const sumInput1 = document.getElementById("sum-input-1");
const sumInput2 = document.getElementById("sum-input-2");
const sumButton = document.getElementById("sum-button");

// initialize state

// set event listeners to update state and DOM
sumButton.addEventListener('click', () => {
    const value1 = sumInput1.value1;
    const value2 = sumInput2.value2;

    console.log(value1, value2);

    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);

    console.log(typeof value1AsNumber, typeof value2AsNumber);

    const sum = value1AsNumber + value2AsNumber;

    console.log(sum)

    addResults.textContent = sum;
});
