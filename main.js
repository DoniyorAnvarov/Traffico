let headerNavMenu = document.querySelector('.nav__menu');
let headerNavLine = document.querySelector('.nav__line');
let headerList = document.querySelector('.nav__list');
let headerForm = document.querySelector('.form')

headerNavLine.addEventListener('click', function (e) {
   this.classList.toggle('active');
   headerForm.classList.toggle('active');
   headerList.classList.toggle('active');
   headerNavMenu.classList.toggle('active');
})

class Text {

   constructor(obj) {
 
     this.h1 = document.querySelector(obj.el) /* h1 */
     this.txt = this.h1.innerHTML
     this.h1.innerHTML = ''
     this.str()
   }
 
   str(x = 0) {
     this.h1.innerHTML += this.txt[x]
     x++
 
     if (x < this.txt.length) {
       setTimeout(() => {
         this.str(x)
       }, 50);
 
     }
 
   }
 
 }
 
 const text = new Text({
   el: 'h1',
 })
 
 const text3 = new Text({
 
   el: '.main_text',
 
 })

 const text4 = new Text({
 
   el: '.main_routr',
 
 })
 
 const text5 = new Text({
 
   el: '.main_when',
 
 })

 const text6 = new Text({
 
   el: '.main_faq',
 
 })

 const text7 = new Text({
 
   el: '.main_and',
 
 })

 const text8 = new Text({
 
   el: '.main_us',
 
 })

 const text9 = new Text({
 
   el: '.main_awesome',
 
 })

 const text10 = new Text({
 
   el: '.foother_text',
 
 })

 const text11 = new Text({
 
   el: '.main_text',
 
 })

 const text12 = new Text({
 
   el: '.main_link ',
 
 })

 const text13 = new Text({
 
  el: '.foother_copyright',

})


const text14 = new Text({
 
  el: '.main_item',

})

const text15 = new Text({
 
  el: '.main_card',

})