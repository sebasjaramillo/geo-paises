let afri=document.getElementById('af');
let asi=document.getElementById("as");
let eur=document.getElementById("eu");
let oce=document.getElementById("oc");
let ame=document.getElementById("am");
let boton1=document.querySelector(".auno")
let boton2=document.querySelector(".ados")
let boton3=document.querySelector(".atres")
let botona1=document.querySelector(".asuno")
let botona2=document.querySelector(".asdos")
let botona3=document.querySelector(".astres")
let cerr=document.querySelector(".cerr")
let img=document.querySelector('.img')

function africa(){
   boton1.style.visibility="visible"
   boton2.style.visibility="visible"
   boton3.style.visibility="visible"
   botona1.style.visibility="hidden"
    botona2.style.visibility="hidden"
    botona3.style.visibility="hidden"
    cerr.style.visibility="visible"

}
function cerrar(){
    boton1.style.visibility="hidden"
   boton2.style.visibility="hidden"
   boton3.style.visibility="hidden"
   botona1.style.visibility="hidden"
   botona2.style.visibility="hidden"
   botona3.style.visibility="hidden"
   cerr.style.visibility="hidden"

}
function asia(){
    botona1.style.visibility="visible"
    botona2.style.visibility="visible"
    botona3.style.visibility="visible"
    boton1.style.visibility="hidden"
   boton2.style.visibility="hidden"
   boton3.style.visibility="hidden"
   cerr.style.visibility="visible"
 
 
}

afri.addEventListener('click',africa)
asi.addEventListener('click',asia)
cerr.addEventListener('click',cerrar)