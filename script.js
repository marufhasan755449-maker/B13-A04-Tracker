let interviweList =[];
let rejectedList =[];


let totalCount = document.getElementById('total')
let interviweCount = document.getElementById('interview')
let rejectedCount =document.getElementById('rejected')

const allTotalBtn =document.getElementById('all-total-btn');
const allInterviewBtn = document.getElementById('all-interview-btn');
const allRejectedBtn = document.getElementById('all-rejected-btn')


const allcardsCount = document.getElementById("allcards")
const mainCalculate = document.querySelector('main')

function calculateCount (){
totalCount.innerText =allcardsCount.children.length;
interviweCount.innerText =interviweList.length;
rejectedCount.innerText =rejectedList.length;

}
calculateCount()

function toggleStyle(id){
     allTotalBtn.classList.remove('bg-[#3B82F6]' ,'text-white')
     allTotalBtn.classList.add('bg-white','text-gray-500')
    allInterviewBtn.classList.remove('bg-[#3B82F6]' ,'text-white')
    allInterviewBtn.classList.add('bg-white' ,'text-gray-500')
    allRejectedBtn.classList.remove('bg-[#3B82F6]' ,'text-white')
    allRejectedBtn.classList.add('bg-white' ,'text-gray-500')

   
   
    const selected = document.getElementById(id);
    if(selected){
      selected.classList.remove('bg-white','text-gray-500');
      selected.classList.add('bg-[#3b82f6]','text-white')
    }
}


mainCalculate.addEventListener('click' ,function (event){
   const parentNode = event.target.parentNode.parentNode;
   const mobile = parentNode.querySelector('.mobile').innerText
   const native = parentNode.querySelector('.native').innerText
   const remote = parentNode.querySelector('.remote').innerText
   const applied = parentNode.querySelector('.applied').innerText
   const build = parentNode.querySelector('.build').innerText
console.log(mobile,native,remote,applied,build);

})
