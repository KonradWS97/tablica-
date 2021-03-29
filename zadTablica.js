let tab=[11, 23, 44, 33, 22,]
console.log(tab[0])
console.log(tab[1])
console.log(tab[2])
console.log(tab[3])
console.log(tab[4])
console.log(tab.length-1)
var dlugosc=tab.length
let el=document.getElementById("eTablicy")
var ullist=document.getElementById("lista")

for(var i= 0 ;i<dlugosc; i++)
{
 console.log(tab[i])
 let newElement = document.createElement('li')
 let maketxt=document.createTextNode(tab[i])
 ullist.appendChild(newElement).appendChild(maketxt)
 
 
 
}

let s=document.getElementById("eTablicy")
for(const eltab of tab)
{   
    console.log(eltab)
    s.innerHTMLL=(eltab.innerText)

}
const tabs=document.querySelectorAll('.przycisk');
let pokarz=document.getElementById("eTablicy")
let wszystko=document.getElementById("cala")
for(const wartoscTablicy of tabs)
{
    console.log(wartoscTablicy)
    wartoscTablicy.addEventListener("click", function(ladujWartosc)
    {
    let v =(ladujWartosc.target.innerText)
     pokarz.innerHTML=tab[v]
     wszystko.innerText=(tab)
    })
}