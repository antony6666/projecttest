declare module "index.json" {
  const value: any;
  export default value;
}


function avancement() {
  var ava = document.getElementById("avancement");
  var prc = document.getElementById("pourcentage");
  prc.innerHTML = "question numéro " + ava.value ;
}

avancement(); //Initialisation

function modif(val) {
  var ava = document.getElementById("avancement");
  if((ava.value+val)<=ava.max && (ava.value+val)>0) {
     ava.value += val;
  }
  avancement();
}
function avancement() {
  var ava = document.getElementById("avancement");
  var prc = document.getElementById("pourcentage");
  prc.innerHTML = "question numéro " + ava.value ;
}

avancement(); //Initialisation

function modif(val) {
  var ava = document.getElementById("avancement");
  if((ava.value+val)<=ava.max && (ava.value+val)>0) {
     ava.value += val;
  }
  avancement();
}

var canvas=document.getElementById('mon_canvas');
var context=canvas.getContext('2d');
	

function choixprop(form3) {
if (form3.choix[0].checked) { alert("Vous avez choisi la proposition " + form3.choix[0].value) };
if (form3.choix[1].checked) { alert("Vous avez choisi la proposition " + form3.choix[1].value) };
if (form3.choix[2].checked) { alert("Vous avez choisi la proposition " + form3.choix[2].value) };
}



