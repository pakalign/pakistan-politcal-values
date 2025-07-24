const parties = ["PTI","PML-N","PPP","JI","MQM","TLP","JUI-F","ANP","BAP","BNP(M)","Bajwa","Asim Munir"];
const scales = {
  "Strongly Agree":2,
  "Agree":1,
  "Neutral":0,
  "Disagree":-1,
  "Strongly Disagree":-2
};
const questions = [
  { 
    statement: "The government should provide free healthcare and education to all, even if it means raising taxes", 
    scores: {"PTI":1,"PML-N":1,"PPP":2,"JI":-1,"MQM":0,"TLP":-1,"JUI-F":-1,"ANP":1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} 
  }
  // Add more questions here!
];

let current = 0;
let userAnswers = Array(questions.length).fill(null);

const form = document.getElementById('quizForm');
const resultsDiv = document.getElementById('results');
const submitBtn = document.getElementById('submitBtn');

// Add a progress display
const progressDiv = document.createElement('div');
progressDiv.id = "progress";
progressDiv.style.marginBottom = "1.5em";
form.parentNode.insertBefore(progressDiv, form);

function renderQuestion(index) {
  progressDiv.innerHTML = `<strong>Question ${index+1} of ${questions.length}</strong>`;
  form.innerHTML = "";

  const q = questions[index];
  const div = document.createElement('div');
  div.className = "question";
  div.innerHTML = `<p>${index+1}. ${q.statement}</p>` +
    Object.keys(scales).map(option =>
      `<label>
        <input type="radio" name="q${index}" value="${option}" ${userAnswers[index] === scales[option] ? "checked" : ""}>
        ${option}
      </label>`
    ).join(" ");

  form.appendChild(div);

  // Add navigation buttons
  const navDiv = document.createElement('div');
  navDiv.style.marginTop = "1em";
  if (index > 0) {
    const backBtn = document.createElement('button');
    backBtn.textContent = "Previous";
    backBtn.type = "button";
    backBtn.onclick = function() {
      saveAnswer();
      current -= 1;
      renderQuestion(current);
    };
    navDiv.appendChild(backBtn);
  }
  if (index < questions.length - 1) {
    const nextBtn = document.createElement('button');
    nextBtn.textContent = "Next";
    nextBtn.type = "button";
    nextBtn.style.marginLeft = "1em";
    nextBtn.onclick = function() {
      if (saveAnswer()) {
        current += 1;
        renderQuestion(current);
      } else {
        alert('Please select an answer!');
      }
    };
    navDiv.appendChild(nextBtn);
    submitBtn.style.display = "none";
  } else {
    submitBtn.style.display = "inline-block";
  }
  form.appendChild(navDiv);
}

function saveAnswer() {
  const selected = form.querySelector('input[name="q'+current+'"]:checked');
  if (!selected) return false;
  userAnswers[current] = scales[selected.value];
  return true;
}

submitBtn.onclick = function(e) {
  e.preventDefault();
  if (!saveAnswer()) {
    alert('Please answer the last question!');
    return;
  }
  // Calculate results
  const scores = {};
  for (const party of parties) scores[party] = 0;
  questions.forEach((q, i) => {
    for (const party of parties) {
      scores[party] += (2 - Math.abs(userAnswers[i] - q.scores[party]));
    }
  });
  const maxScore = questions.length * 2;
  const results = Object.entries(scores)
    .sort((a,b)=>b[1]-a[1])
    .map(([party, score]) =>
      `<li>${party}: ${(score/maxScore*100).toFixed(1)}%</li>`
    ).join("");
  resultsDiv.innerHTML =
    `<h2>Your Closest Alignment:</h2><ul>${results}</ul>`;
  form.style.display = "none";
  progressDiv.style.display = "none";
  submitBtn.style.display = "none";
};

renderQuestion(current);
