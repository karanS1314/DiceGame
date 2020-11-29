var rn1 = Math.floor((Math.random()*6)+1);
var di1 = "images/dice"+rn1+".png";
var i1 = document.querySelectorAll("img")[0];
i1.setAttribute("src",di1);

var rn2 = Math.floor((Math.random()*6)+1);
var di2 = "images/dice"+rn1+".png";
var i2 = document.querySelectorAll("img")[0];
i2.setAttribute("src",di1);

if(rn1>rn2){
  document.querySelector("h1").innerHTML = "RUHI WINS";
}
else if (rn2>rn1) {
  document.querySelector("h1").innerHTML = "KARAN WINS";
}
else {
  document.querySelector("h1").innerHTML = "DRAW BENCHOD";
}
