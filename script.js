const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {

    filterButtons.forEach(function (b) {
      b.classList.remove("bg-blue-500", "text-white");
      b.classList.add("text-gray-600", "border", "border-gray-300");
    });

    btn.classList.add("bg-blue-500", "text-white");
    btn.classList.remove("text-gray-600", "border", "border-gray-300");

    let activeFilter = btn.innerText.toLowerCase();
    renderCards(activeFilter);
  });
});

function renderCards(activeFilter) {

  let numOfJobs = document.getElementById('num-of-jobs')
  if(activeFilter === "interview")
  {
     numOfJobs.innerText = document.getElementById('interview-count').innerText
  }
  else if(activeFilter === 'rejected')
  {
      numOfJobs.innerText = document.getElementById('rejected-count').innerText
  }
  else 
  {
     numOfJobs.innerText = document.getElementById('total-jobs').innerText
  }
  const allCards = document.querySelectorAll(".card");
  let visibleCount = 0;

  allCards.forEach(function (card) {
    const cardStatus = card.dataset.status;

    if (activeFilter === "all" || cardStatus === activeFilter) {
      card.classList.remove("hidden");
      visibleCount++;
    } else {
      card.classList.add("hidden");
    }
  });

  const emptyCard = document.getElementById("empty-card");
  if (visibleCount === 0) {
    emptyCard.classList.remove("hidden");
  } else {
    emptyCard.classList.add("hidden");
  }
}

function updateStatus(btn, newStatus) {
  const card = btn.closest(".card");   
  const oldStatus = card.dataset.status;  

  if (oldStatus === "interview") changeCount("interview-count", -1);
  if (oldStatus === "rejected")  changeCount("rejected-count",  -1);
  if (newStatus === "interview") changeCount("interview-count", +1);
  if (newStatus === "rejected")  changeCount("rejected-count",  +1);

  card.dataset.status = newStatus;

  card.querySelectorAll(".bg-blue-50, .bg-green-50, .bg-red-50").forEach(function(badge) {
    badge.classList.add("hidden");
  });
  if (newStatus === "interview") card.querySelector(".bg-green-50").classList.remove("hidden");
  if (newStatus === "rejected")  card.querySelector(".bg-red-50").classList.remove("hidden");
  const activeBtn = document.querySelector(".filter-btn.bg-blue-500");
  renderCards(activeBtn.innerText.toLowerCase());
  
}

function changeCount(id, amount) {
  const el = document.getElementById(id);
  el.innerText = parseInt(el.innerText) + amount;
}

function deleteCard(btn) {
  const card = btn.closest(".card");
  const oldStatus = card.dataset.status;

  changeCount("total-jobs", -1);
  if (oldStatus === "interview") changeCount("interview-count", -1);
  if (oldStatus === "rejected")  changeCount("rejected-count",  -1);

  const jobsEl = document.getElementById("num-of-jobs");
  jobsEl.innerText = parseInt(jobsEl.innerText) - 1;

  card.remove();

  const activeBtn = document.querySelector(".filter-btn.bg-blue-500");
   renderCards(activeBtn.innerText.toLowerCase());
}