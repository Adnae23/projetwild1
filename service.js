const btnCreche = document.querySelector('#btnCreche')
const sectionCreche = document.querySelector('#sectCreche')
const btnClose = document.querySelectorAll('#close')
btnCreche.addEventListener('click', function() {
    sectionCreche.style.display = "block"
})
for(let i=0; i<btnClose.length; i++){
    btnClose[i].addEventListener('click', function() {
    sectionCreche.style.display = "none"
})}


const sectionEcole = document.getElementById('sectEcole')
const btnEcole = document.getElementById('btnEcole')
btnEcole.addEventListener('click', function() {
    sectionEcole.style.display = "block"
})
for(let i=0; i<btnClose.length; i++){
    btnClose[i].addEventListener('click', function() {
    sectionEcole.style.display = "none"
})}


const sectionCommerces = document.getElementById("sectCommerces")
const btnCommerces = document.getElementById("btnCommerces")
btnCommerces.addEventListener('click', function() {
    sectionCommerces.style.display = "block"
})
for(let i=0; i<btnClose.length; i++){
    btnClose[i].addEventListener('click', function() {
    sectionCommerces.style.display = "none"
})}



const sectionMedical = document.getElementById("sectMedical")
const btnMedical = document.getElementById("btnMedical")
btnMedical.addEventListener('click', function() {
    sectionMedical.style.display = "block"
})
for(let i=0; i<btnClose.length; i++){
    btnClose[i].addEventListener('click', function() {
        sectionMedical.style.display = "none"
})}