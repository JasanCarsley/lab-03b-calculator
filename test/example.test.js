// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {addNumbers} from '../math.js';
import {subNumbers} from '../math.js';
import {multNumbers} from '../math.js';
import {divNumbers} from '../math.js';

const test = QUnit.test;

test('test should add two numbers together', (expect) => {
    const input1 = 2
    const input2 = 2
    
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addNumbers(input1, input2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('test should subtract two numbers', (expect) => {
    const input1 = 2
    const input2 = 2
    
    const expected = 0;
 
    const actual = subNumbers(input1, input2);

    expect.equal(actual, expected);
});

test('test should multiply two numbers', (expect) => {
    const input1 = 2
    const input2 = 3

    const expected = 6

    const actual = multNumbers(input1, input2);

    expect.equal(actual, expected)
});

test('test should divide two numbers', (expect) => {
    const input1 = 6
    const input2 = 3

    const expected = 2

    const actual = divNumbers(input1, input2);

    expect.equal(actual, expected)
});