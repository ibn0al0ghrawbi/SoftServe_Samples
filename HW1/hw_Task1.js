
function countDuplicates(input){
	input = input.toLowerCase();

		let checkString ='';
		let duplicates = new Set();

		const inputLength = input.length;

		for(let i = 0; i < inputLength; i++){
    
  		if(checkString.includes(input[i])){
    		duplicates.add(input[i]);
        
		  } else if (!checkString.includes(input[i]))
      {
    		checkString += input[i];
  		}
	}
	return duplicates.size;
}

console.log(countDuplicates("abcde"));
console.log(countDuplicates("aabbcde"));
console.log(countDuplicates("aabBcde"));
console.log(countDuplicates("indivisibility"));
console.log(countDuplicates("Indivisibilities"));
console.log(countDuplicates("aA11"));
console.log(countDuplicates("ABBA"));


