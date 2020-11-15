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
 
 setInterval(changeLight, onclick);
 
 function changeLight(){
 circles[activeLight].className = 'circle';
 activeLight++;
 
	
	
currentLight.classList.add(currentLight.getAttribute('color'));

	
 }