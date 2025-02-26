let input = document.getElementById("input");
let button = document.getElementById("button");
let result = document.getElementById("result");

button.onclick = getSum;



/**
 * TODO: this function will execute when the button is clicked. Retrieve the current value in the input box,
 * use a for loop to get the sum of all numbers between 0 and that number, not including the final number, and then
 * display the result by setting the inner text of the "result" element to the result.
 *  So, the result would be 1 when val = 2
 *                          3 when val = 3
 *                      and 6 when val = 4.
 *
 * Notice that the syntax of a for loop would be different, because the variable 'i' would be declared with a 'let'.
 * the rest is the same however - for(let i = 0; i < val; i++){ // code here }
 *
 * The line val = parseInt(input.value) is provided, because otherwise JavaScript will parse the input value as a
 * String rather than Number. The rest is up to you.
 *
 * You can read more about for loops here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * 
 */
function getSum(){
    let val = parseInt(input.value);
    let sum = 0; // Initialize the sum variable

    // Use a for loop to calculate the sum of numbers from 0 to val (not including val)
    for (let i = 0; i < val; i++) {
        sum += i; // Add i to the sum
    }

    // Display the result in the result element
    result.innerText = sum; 
}


/* OPTIONAL PRACTICE: If you want more practice later, try using console.log(customInput) to print the values of each
    for loop iteration into the developer console of your browser. */
