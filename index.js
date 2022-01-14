//div idée de séjour
const btnSejour = document.querySelector('#btnSejour')
const divIdeeSejour = document.querySelector('#divIdeeSejour')
const btnClose = document.querySelectorAll('.close')
btnSejour.addEventListener('click', function() {
    divIdeeSejour.style.display = "block"
})
for(let i=0; i<btnClose.length; i++){
    btnClose[i].addEventListener('click', function() {
    divIdeeSejour.style.display = "none"
})}

//div evenement en cours
const btnEvent = document.querySelector('#btnEvent')
const divEvent = document.querySelector('#divEvent')
btnEvent.addEventListener('click', function() {
    divEvent.style.display = "block"
})
for(let i=0; i<btnClose.length; i++){
    btnClose[i].addEventListener('click', function() {
        divEvent.style.display = "none"
})}

//div boite à idée
const btnBoite = document.querySelector('#btnBoite')
const divBoiteIdee = document.querySelector("#divBoiteIdee")
const btnCloseBi = document.querySelectorAll('#closeBi')
btnBoite.addEventListener('click', function() {
    divBoiteIdee.style.display = "block"
})
for(let i=0; i<btnCloseBi.length; i++){
    btnCloseBi[i].addEventListener('click', function() {
        divBoiteIdee.style.display = "none"
})}

//ajouter une idée dans la boite à idée via prompt//
const btnAjouter = document.querySelector('#ajouter')
const newIdeeUser = document.getElementById("newIdeeUser")

btnAjouter.addEventListener('click', function() {
    const user = prompt("Quelle idée souhaitez vous indiquer ?")

    if (user != null){
        const newPara = document.createElement("p")
        newIdeeUser.appendChild(newPara)
        newPara.innerHTML = user
    }
})
