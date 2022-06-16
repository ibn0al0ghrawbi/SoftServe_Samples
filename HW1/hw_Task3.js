
function findDNAComponent(input){
	
  const inputLength = input.length;
  
  let oppositeDNA = '';
  
  for(let i = 0; i < inputLength; i++){
  	switch(input[i]){
    	case 'A': oppositeDNA += 'T';
      break;
      
      case 'T': oppositeDNA += 'A';
      break;
      
      case 'C': oppositeDNA += 'G';
      break;
      
      case 'G': oppositeDNA += 'C'
      break;
      
    }
    
  }
  return oppositeDNA;
}

console.log(findDNAComponent('ATTGC'));
