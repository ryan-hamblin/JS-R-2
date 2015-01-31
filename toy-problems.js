/* Make sure you do these last */


/*
Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14
*/

 Write a function that takes in a string and replaces all the "X" values with the "Y" values.

 fn("xxyyxx") => "yyxxyy"


var xInverseY = function(str) {
	var inptStr = prompt("enter a string ");
	var inpaArr = inpStr.split('');
	for(var i = 0; i < inpArr.length; i++){
		if(inpArr === 'x'){
			inpArr.splice(i, 1, 'y');
		}
	}
	var final = inpArr.join('');
		console.log(final);
}

//recursion

var fn = function(str){
	if(str.length <= 1){
		if(str[0] === 'x'){
			return 'y'; //need a base case
		}else {
			return str;
		}
	}
	if(str[0] === 'x'){
		return 'y' + fn(str.slice(1));
	}else {
		return str[0] + fn(str.slice(1));
	}
}


/*
Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/


/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/





/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/


/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/


/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
