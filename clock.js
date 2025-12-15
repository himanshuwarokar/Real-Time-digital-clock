 
 const clock = document.getElementsByClassName("clock");
 
 console.log(clock);

setInterval(function(){
    let date = new Date();
    clock[0].innerHTML = date.toLocaleTimeString();
    // clock query can return the htmlcollectin thats why i can use clock[0].innertext
},1000);
