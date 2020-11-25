"use strict";

/*
Final project CIS 370
 going to the races
 * Date - 11/14/20
 * @author Helen Lee
 */
 
 
 
 const circles = 
 document.querySelectorAll('.circle');
 let activeLight = 0;
 
 setInterval(changeLight, 1000);
 
 function changeLight(){
 circles[activeLight].className = 'circle';
 activeLight++;
 
	if(activeLight >2) {
		activeLight = 0;
	}
	
  const currentLight = circles[activeLight];
	
	
	
currentLight.classList.add(currentLight.getAttribute('color'));

	
 }
 /*
 function myMove() {
  var elem = document.getElementById("vampire");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 250) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
 }
*/






