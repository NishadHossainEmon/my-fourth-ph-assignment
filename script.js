const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    buttons.forEach(function (b) {
      b.classList.remove("bg-blue-500", "text-white");
      b.classList.add("text-gray-600", "border", "border-gray-300");
    });
    btn.classList.add("bg-blue-500", "text-white");
    btn.classList.remove("text-gray-600", "border", "border-gray-300");

    let jobCards = document.getElementById('job-cards')
    let emptyCard = document.getElementById('empty-card')
    if(btn.innerText == "Interview" || btn.innerText == "Rejected")
    {
        jobCards.classList.add('hidden')
        emptyCard.classList.remove('hidden')
    }
    else
    {   
        jobCards.classList.remove('hidden')
        emptyCard.classList.add('hidden')
    }
  });
});


