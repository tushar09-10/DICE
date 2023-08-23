/*var p1=prompt("Enter the name of first player:");
var p2=prompt("Enter the name of Second player:");
document.querySelector(".pl1").textContent=(p1);
document.querySelector(".pl2").textContent=(p2);*/
var v1=Math.floor(((Math.random())*6)+1);
var v2=Math.floor(((Math.random())*6)+1);
document.querySelector(".img1").setAttribute("src" ,( "images/dice"+v1+".png"));
document.querySelector(".img2").setAttribute("src" ,( "images/dice"+v2+".png"));
var ans;
if(v1>v2){ 
    document.querySelector("h1").innerHTML=('🏆 Player 1 Wins' );
}
else if(v1<v2){ 
    document.querySelector("h1").innerHTML=('Player 2 Wins 🏆');
}
else
document.querySelector("h1").innerHTML=("Tie");















/*
document.querySelector(".result").innerHTML=(p1+" Wins");
document.querySelector("h2").style.color="#4ECCA3";
document.querySelector("h2").style.textAlign="center";
document.querySelector("h2").style.fontSize="3rem";
document.querySelector("h2").style.fontFamily="cursive";*/