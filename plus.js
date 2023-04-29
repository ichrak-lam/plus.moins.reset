
var plus=document.getElementById('plus') 
var moins=document.getElementById('moin') 
var reset=document.getElementById('reset') 
var number=document.getElementById('number') 
var i=0 ;
function pluss(){
    i++;
    if(i>0){
    number.style.color="red"
    }
    number.innerHTML=i
}
function moinss(){
    i--;
    if(i<0){
        number.style.color="blue"
        }
    number.innerHTML=i
}
function resett(){
    i=0;
    number.innerHTML=i
    number.style.color="black"

}
plus.addEventListener('click',pluss)
moins.addEventListener('click',moinss)
reset.addEventListener('click',resett)
