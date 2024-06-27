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