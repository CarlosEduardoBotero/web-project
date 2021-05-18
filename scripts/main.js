const myHeading = document.querySelector('h1');
myHeading.textContent = 'hello world';

document.querySelector('h1').onclick = function () {
    alert('ouch, stop poking me!')
}

 let myImages = document.querySelector('img')

 myImages.onclick = function () {
     let mySrc = myImages.getAttribute('src');
     if (mySrc === 'images/firefox.jpg') {
         myImages.setAttribute ('src' , 'images/sterling.jpg');
     } else {
         myImages.setAttribute ('src' , 'images/firefox.jpg');
     }
 }

 let myButton = document.querySelector('button');
 let myHeading = document.querySelector('h1');
 
 function setUserName() {
   let myName = prompt('Please enter your name.');
   if(!myName) {
     setUserName();
   } else {
     localStorage.setItem('name', myName);
     myHeading.innerHTML = 'Mozilla is cool, ' + myName;
   }
 }
 
 if(!localStorage.getItem('name')) {
   setUserName();
 } else {
   let storedName = localStorage.getItem('name');
   myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
 }
 
 myButton.onclick = function() {
   setUserName();
 }