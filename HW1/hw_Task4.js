function reorderSentence(input){
	
  input.trim();
  
	if(input.length === 0){
  	return '';
  }
  
  const unsortedSentence = input.split(' ');
	const countWords = unsortedSentence.length;  
  
  const sortedSentence = [ ];
	
  
  
  for(let i = 1; i <= countWords; i++){
  	
    unsortedSentence.map(element => {
  	if(element.includes(i)){
    	sortedSentence.splice( i-1, 0, element);
    } 
  });
  }
  
  return sortedSentence.join(' ');
}
 
console.log(reorderSentence('4of Fo1r pe6ople g3ood th5e the2'));
