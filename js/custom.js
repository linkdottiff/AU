let card = document.querySelectorAll('.cardx');
let cardimg = document.querySelectorAll('.imgx');
let cardtext = document.querySelectorAll('.card-text');
let cardlist = document.querySelectorAll('.card-list');
let email = document.querySelector('#email');
let submitBtn = document.querySelector('.submit');
let x = window.matchMedia("(width: 1024px)");

for(let i=0; i<cardimg.length; i++){
  cardimg[i].addEventListener("mouseover", function(){
       if(i === 0){
        card[i].style.height = "280px";
        cardlist[i].style.opacity = 1;
      }else if(i === 1){
        card[i].style.height = "190px";
        cardlist[i].style.opacity = 1;
      }else if(x.matches){
        card[i].style.height = "220px";
      }else{
        card[i].style.height = "195px";
      }
      cardtext[i].style.opacity = 1;
      cardimg[i].style.filter = "grayscale(0)";
  });
  cardimg[i].addEventListener("mouseleave", function(){
      if( i === 0 || i === 1){
        cardlist[i].style.opacity = 0;
      }
      card[i].style.height = "0px"; 
      cardtext[i].style.opacity = 0; 
      cardimg[i].style.filter = "grayscale(100)";
  });
}

for(let i=0; i<cardimg.length; i++){
  card[i].addEventListener("mouseover", function(){
      if(i === 0){      
        card[i].style.height = "280px";
        cardlist[i].style.opacity = 1; 
      }else if(i === 1){
        card[i].style.height = "190px";
        cardlist[i].style.opacity = 1;
      }else if(x.matches){
        card[i].style.height = "220px";
      }else{
        card[i].style.height = "195px";
      }
      cardtext[i].style.opacity = 1;
      cardimg[i].style.filter = "grayscale(0)";
  });
  card[i].addEventListener("mouseleave", function(){
      if( i === 0 || i === 1){
        cardlist[i].style.opacity = 0;
      }
      card[i].style.height = "0px"; 
      cardtext[i].style.opacity = 0; 
      cardimg[i].style.filter = "grayscale(100)";
  });
}

submitBtn.addEventListener('click', function(){

    if(email.value.length > 5 && email.value.includes("@") && email.value.includes(".")){
    }else{
      event.preventDefault();
    }

});
