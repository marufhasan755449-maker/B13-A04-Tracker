let interviweList =[];
let rejectedList =[];


let totalCount = document.getElementById('total')
let interviweCount = document.getElementById('Interview')
let rejectedCount =document.getElementById('rejected')

const allTotalBtn = getElementById('all-btn');
const allInterviewBtn =getElementById('all-interview');
const allRejectedBtn = getElementById('all-rejected')


const allcardsCount = document.getElementById("allcards")
const mainCalculate = document.querySelector('main')

function calculateCount (){
totalCount.innerText =allcardsCount.children.length;
interviweCount.innerText =interviweList.length;
rejectedCount.innerText =rejectedList.length;

}
calculateCount()

function toggleStyle(id){
     allTotalBtn.classList.add('bg-white,text-white')
    allInterviewBtn.classList.remove('bg-white' ,'text-gray')
    allRejectedBtn.classList. remove('bg-white' ,'text-gray')


    allTotalBtn.classList.remove('bg-[#3B82F6]' ,'text-white')
    allInterviewBtn.classList.remove('bg-[#3B82F6]' ,'text-white')
    allRejectedBtn.classList. remove('bg-[#3B82F6]' ,'text-white')
    console.log(id)
    const selected = document.getElementById(id)
    console.log(selected)

    selected.classList.remove
}