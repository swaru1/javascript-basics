/* Write a function list that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'. An empty array should return an empty string.

Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'. */

function list(arr) {
    let last = arr[arr.length - 1]; 
    arr.pop();  // remove last element
    let newarr = arr.join(', '); 
    console.log(newarr + " and " + last);
}

list(['huey', 'dewey', 'louie']);