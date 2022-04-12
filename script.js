window.addEventListener("load", init);
var kepTomb=["kepek/kep1.jpg","kepek/kep2.jpg","kepek/kep3.jpg", "kepek/kep4.jpg", "kepek/kep5.jpg", "kepek/kep6.jpg", "kepek/kep7.jpg", "kepek/kep8.jpg", "kepek/kep9.jpg", "kepek/kep10.jpg", "kepek/kep11.jpg", "kepek/kep12.jpg", "kepek/kep13.jpg", "kepek/kep14.jpg", "kepek/kep15.jpg", "kepek/kep16.jpg", "kepek/kep17.jpg", "kepek/kep18.jpg", "kepek/kep19.jpg", "kepek/kep20.jpg"];


function $(elem) {
return document.querySelectorAll(elem);
}

function init() {

const galeria=ID("galeria");
let txt=""
/*for (let index = 0; index < kepTomb.length; index++) {
txt+='

src="${kepTomb[index]} alt="szorny"
'
}
galeria.innerHTML=txt;
*/
kepTomb.forEach(function (elem, index) {
txt+=`<div><img id="${index}"> src="${keptomb[index]} alt="szorny">`
})
galeria.innerHTML=txt;

const kepElemTomb=document.querySelectorAll("galeria div img");
console.log(kepElemTomb);
kepElemTomb.forEach(function(elem){
elem.addEventListener("click",megfordít)
})

}
const kivalasztottTomb
function megfordít() {
console.log(event.target)
let aktualisElem=Number(event.target.id);
event.target.src=kepTomb(aktualisElem);
kivalasztottTomb.push(aktualisElem);

console.log(kivalasztottTomb);
if (kivalasztottTomb.length===2) {
setTimeout(function(){
kivalasztottTomb.forEach(function(elem){
document.getElementById(elem).src=hatter;
})
kivalasztottTomb.splice(0);
})

}else{
kivalasztottTomb.forEach(function(elem){
document.getElementById(elem).style.display="none";
});
}
}