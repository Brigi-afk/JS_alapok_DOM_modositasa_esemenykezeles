window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
   
});

function elemekElerese1() {
    const f1ELEM=document.querySelectorAll("section h2")[0]
    console.log(f1ELEM.innerHTML)
}   
function elemekElerese2() {
    let f2ELEM=document.getElementById("ide")
    f2ELEM.innerHTML="<p>Jó reggelt!</p>"
}

function elemekElerese3(){
    const f3ELEM=document.querySelectorAll(".ide")[0]
    f3ELEM.innerHTML="<p>Jó reggelt!</p>"
}

function elemekElerese4(){
    const listaElem=document.querySelectorAll(".lista")[0]
    let szoveg="<ul>"
    for (let index = 0; index < 5; index++) {
        let szam = Math.floor(Math.random()*21+10)
        szoveg += `<li>${szam}</li>`
    }
    szoveg += "</ul>"
    listaElem.innerHTML=szoveg
}
