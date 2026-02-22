let interviweList =[];
let rejectedList =[];


let totalCount = document.getElementById('total')
let interviweCount = document.getElementById('Interview')
let rejectedCount =document.getElementById('rejected')
const allcardsCount = document.getElementById("allcards")

function calculateCount (){
totalCount.innerText =allcardsCount.children.length;
interviweCount.innerText =interviweList.length;
rejectedCount.innerText =rejectedList.length;

}
calculateCount()