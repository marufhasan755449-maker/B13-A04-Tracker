const filteredSection = document.getElementById("filtered-section");
const totalEl = document.getElementById("total");
const interviewEl = document.getElementById("interview");
const rejectedEl = document.getElementById("rejected");
const jobCountEl = document.getElementById("job-count");

const allBtn = document.getElementById("all-total-btn");
const interviewBtn = document.getElementById("all-interview-btn");
const rejectedBtn = document.getElementById("all-rejected-btn");

let currentTab = "all";


function updateCounts() {

  const allCards = document.querySelectorAll("#allcards > div");
  const interviewCards = document.querySelectorAll(".status-interview");
  const rejectedCards = document.querySelectorAll(".status-rejected");

  totalEl.innerText = allCards.length;
  interviewEl.innerText = interviewCards.length;
  rejectedEl.innerText = rejectedCards.length;

  jobCountEl.innerText = getVisibleCards().length;
}


function getVisibleCards() {
  return Array.from(document.querySelectorAll("#allcards > div"))
    .filter(card => card.style.display !== "none");
}

function setActiveButton(type) {

  allBtn.classList.remove("btn-primary");
  interviewBtn.classList.remove("btn-primary");
  rejectedBtn.classList.remove("btn-primary");

  allBtn.classList.add("btn-outline");
  interviewBtn.classList.add("btn-outline");
  rejectedBtn.classList.add("btn-outline");

  if (type === "all") {
    allBtn.classList.remove("btn-outline");
    allBtn.classList.add("btn-primary");
  }

  if (type === "interview") {
    interviewBtn.classList.remove("btn-outline");
    interviewBtn.classList.add("btn-primary");
  }

  if (type === "rejected") {
    rejectedBtn.classList.remove("btn-outline");
    rejectedBtn.classList.add("btn-primary");
  }
}

function showTab(type) {

  currentTab = type;
  setActiveButton(type);

  const cards = document.querySelectorAll("#allcards > div");
  let visibleCount = 0;

  cards.forEach(card => {

    if (type === "all") {
      card.style.display = "flex";
      visibleCount++;
    }

    else if (type === "interview") {
      if (card.classList.contains("status-interview")) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    }

    else if (type === "rejected") {
      if (card.classList.contains("status-rejected")) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    }

  });

  jobCountEl.innerText = visibleCount;

  
  if (visibleCount === 0) {
    filteredSection.classList.remove("hidden");
  } else {
    filteredSection.classList.add("hidden");
  }
}


document.addEventListener("click", function (e) {

  
  if (e.target.classList.contains("interview-btn")) {

    const card = e.target.closest("div.flex");

    card.classList.remove("status-rejected");
    card.classList.add("status-interview");

    card.querySelector(".applied").innerText = "Interview";
    card.querySelector(".applied").classList.remove("bg-[#EEF4FF]");
    card.querySelector(".applied").classList.add("bg-green-100");

    updateCounts();
    showTab(currentTab);
  }

  
  if (e.target.classList.contains("rejected-btn")) {

    const card = e.target.closest("div.flex");

    card.classList.remove("status-interview");
    card.classList.add("status-rejected");

    card.querySelector(".applied").innerText = "Rejected";
    card.querySelector(".applied").classList.remove("bg-[#EEF4FF]");
    card.querySelector(".applied").classList.add("bg-red-100");

    updateCounts();
    showTab(currentTab);
  }

  
  if (e.target.closest(".btn-delete")) {

    e.preventDefault();

    const card = e.target.closest("div.flex");

    card.remove();

    updateCounts();
    showTab(currentTab);
  }

});

allBtn.addEventListener("click", () => showTab("all"));
interviewBtn.addEventListener("click", () => showTab("interview"));
rejectedBtn.addEventListener("click", () => showTab("rejected"));


updateCounts();
showTab("all");