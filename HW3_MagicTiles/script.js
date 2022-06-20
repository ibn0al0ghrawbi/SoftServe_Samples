
document.getElementById("start").onclick = runColorFiller; //start button to run
const pageBody = document.querySelector("body");  //search body for the colorpicker

const coordinatesArray = [];  //init array for the pixel-tiles coordinates
let keyCounter = 1; //init counter for the IDs of the pixel-tiles


function getId(colorDiv){ //get the id of the tiles onClick
const pickedColor =     window.getComputedStyle(document.getElementById(colorDiv.id)).getPropertyValue('background-color'); //compute the color of the selected tile from background-color attribute
  // console.log(pickedColor) //test purposes
 pageBody.setAttribute("style", `background-color: ${pickedColor}` ); //set computed color for page body
}



function fillCoordinatesArray() { //divide the borderPanel into 10x10 tiles with 60px X 60px each
  
  for(let x = 0; x <600; x+=60){
    for(let y = 0; y<600; y+=60){
      coordinatesArray.push(  //each tile has an unique id which is calculated just by the counter
      {
        "key": keyCounter,
        "x-co": x,
        "y-co": y,
      })
      keyCounter++;
    }
  }
}

//is called in Colorgrid
function chooseRandomTile(){ //choose random tile from array and remove it to avoid duplicates

  let i = (Math.random() * coordinatesArray.length) | 0;
	let removedObject = coordinatesArray[i];  //save the calculated object for the return before removing it
	coordinatesArray.splice(i, 1);
  return removedObject;
}


function colorGrid(){ 
  let randomHsl = `hsla(${Math.random() * 360}, 100%, 70%, 1)`; //calculate random color
  let obj = chooseRandomTile();
  const node = document.querySelector(".wrapper"); //calculate div where colorpixel-divs will be added
  //wrapper is needed as a placeholder to add the tiles to the right place (borderPanel as parent)
  
	//console.log('here', obj.key,obj['x-co'], obj['y-co'], randomHsl); //test-purposes
  
  let newColorDiv = document.createElement('div');  //create div
  newColorDiv.classList.add("color-pixel");         //add class
  newColorDiv.setAttribute("id", obj.key);          //add calculated id
  newColorDiv.setAttribute("style", `background-color: ${randomHsl}; top: ${obj['x-co']}px; left: ${obj['y-co']}px`); //add styles with calculated color + calulcated random location in grid
  newColorDiv.setAttribute("onclick", "getId(this)"); //add onclick event for the colorpicker
  node.parentNode.insertBefore(newColorDiv, node.nextSibling); //add into the borderPanel
  /*final form is something like: 
  <div class="color-pixel" id="7" style="background-color: hsla(329.8075215878973, 100%, 70%, 1); top: 0px; left: 360px" onclick="getId(this)"></div> 
  */
  
  //console.log(document.body.outerHTML); //test-purposes

  
}


//this function is called by async function
function computeColorFields(){
   return new Promise((resolve, reject) => {
     //will run colorGrid each 1sec where the tile will be computed
         const timerId = setInterval(colorGrid, 100); 
          setTimeout(() => {
           clearInterval(timerId);
            resolve('Completed!'); //return this once its finished
          }, 10000) //will run 100 sec
      })
  
}


//the is the 'run'-function which will be called by Startbutton
async function runColorFiller(){
   //console.log('Before promise call.')
   fillCoordinatesArray(); //calculate and fill the structures
    
  //create 'Completed!'-div and add after programm has finished
   const node = document.querySelector(".borderPanel");
   let newColorDiv = document.createElement('div');    
    
  // Awaits the computeColorFields-function to complete
        const result = await computeColorFields()  //result receives 'Completed'
        let newContent = document.createTextNode(result); //create text node with result
       
  
        //console.log('Promise resolved: ' + result) //test-purposes
                
  			newColorDiv.classList.add("finisher"); //add class to div
        newColorDiv.appendChild(newContent)    //add result-text to div
        node.parentNode.insertBefore(newColorDiv, node.nextSibling); //add div into html
  
        //final form will be: <div class="finisher">Completed!</div> + classes in css file
  
}








