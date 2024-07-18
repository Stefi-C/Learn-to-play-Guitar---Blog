   //menu
   const list = document.querySelectorAll('.list');

   function activeLink(){
       list.forEach((item) =>
       item.classList.remove('active'));
       this.classList.add('active');
   }
   list.forEach((item) =>
   item.addEventListener('click', activeLink));

 //highlight scroll menu 
const sections = document.querySelectorAll ('section');
window.addEventListener("scroll", () => {
 let current = window.pageYOffset;
 sections.forEach((section) => {
   const sectionTop = section.offsetTop;
   const sectionHeight = section.clientHeight; 
   if (pageYOffset >= sectionTop - 150) {
     current = section.getAttribute("id");
   }
 });

 list.forEach((li) => {
   li.classList.remove("active");
   if (li.classList.contains(current)) {
     li.classList.add("active");
   }
 });
});



   //learn more button
   function myFunction() {
 var dots = document.getElementById("dots");
 var moreText = document.getElementById("more");
 var btnText = document.getElementById("myBtn");

 if (dots.style.display === "none") {
   dots.style.display = "inline";
   btnText.innerHTML = "Read more";
   moreText.style.display = "none";
 } else {
   dots.style.display = "none";
   btnText.innerHTML = "Read less";
   moreText.style.display = "inline";
 }
}

//menu button

menuBtn = document.querySelector('#menu-btn');
menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
  if(menu.style.right == "-500px"){
    menu.style.right = "0"
    menuBtn.style.right = "415px";
    menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'
  }else{
    menu.style.right = "-500px";
    menuBtn.style.right = "5px";
    menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>'
  }
})

//chord/fingers button

chordsBtn = document.querySelector(".chords-btn");
chords = document.querySelector("#gizmos1");
fingers = document.querySelector("#gizmos2");

chordsBtn.addEventListener('click', function(){
  if(chords.style.display == "block"){
    chords.style.display = "none";
    fingers.style.display = "block";
    console.log('chords');
  }else if(fingers.style.display == "block"){
    fingers.style.display = "none";
    chords.style.display = "block";
    console.log('fingers');
  }
})