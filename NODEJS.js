/*let lol = document.getElementById('lol')
let lolbtn = document.getElementById('lolbtn')

lolbtn.onclick = function(){
    lol.classList.remove("hidden")
}*/



let updown = document.getElementById('updown')


document.body.onscroll = function(){
if( scrollY >= '300' ){
    updown.classList.remove("hidden")
 }
 if( scrollY < '300' ){
     updown.classList.add("hidden")
  }
}

if( scrollY < '0' ){
    updown.classList.remove("hidden")
  }










