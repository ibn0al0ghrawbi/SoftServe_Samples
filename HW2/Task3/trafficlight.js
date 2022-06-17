document.getElementById("switchColor").onclick = switchColor;
document.getElementById("stopLight").onclick = clearCounter;

let countClicks = 0;

function switchColor(){

//document.getElementById('clicks').innerHTML = countClicks; //counting Clicks for Testpurposes

	if(countClicks % 3 == 0){
  	clear();
    document.getElementById('redLight').style.backgroundColor = "red";
		countClicks++;
    
  
  } else if (countClicks % 3 == 1){
  	clear();
    document.getElementById('yellowLight').style.backgroundColor = 'yellow';
    countClicks++;
  
  } else if (countClicks % 3 == 2){
  	clear();
    document.getElementById('greenLight').style.backgroundColor = 'green';
    countClicks++;
  
  }
}

function clear(){

	document.getElementById('redLight').style.backgroundColor = 'grey';
  document.getElementById('yellowLight').style.backgroundColor = 'grey';
  document.getElementById('greenLight').style.backgroundColor = 'grey';
}

function clearCounter(){
	clear();
  countClicks = 0;
}
