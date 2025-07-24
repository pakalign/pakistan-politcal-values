const parties = ["PTI","PML-N","PPP","JI","MQM","TLP","JUI-F","ANP","BAP","BNP(M)","Bajwa","Asim Munir"];
const scales = {
  "Strongly Agree":2,
  "Agree":1,
  "Neutral":0,
  "Disagree":-1,
  "Strongly Disagree":-2
};
// Questions
const questions = [
  { statement: "The government should provide free healthcare and education to all, even if it means raising taxes", scores: {"PTI":1,"PML-N":1,"PPP":2,"JI":-1,"MQM":0,"TLP":-1,"JUI-F":-1,"ANP":1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Prices of fuel, gas, and electricity should be kept low through subsidies even if it increases Pakistan's debt", scores: {"PTI":1,"PML-N":1,"PPP":1,"JI":0,"MQM":1,"TLP":0,"JUI-F":0,"ANP":0,"BAP":1,"BNP(M)":1,"Bajwa":0,"Asim Munir":0} },
  { statement: "The government should focus more on creating jobs than fighting inflation", scores: {"PTI":1,"PML-N":1,"PPP":1,"JI":0,"MQM":1,"TLP":0,"JUI-F":0,"ANP":1,"BAP":1,"BNP(M)":1,"Bajwa":0,"Asim Munir":0} },
  { statement: "Corruption is a problem, but foreign interference and economic dependency are bigger threats", scores: {"PTI":0,"PML-N":1,"PPP":0,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":0,"BAP":0,"BNP(M)":0,"Bajwa":1,"Asim Munir":1} },
  { statement: "Wealthy landowners and industrialists should face higher taxes even if they create jobs", scores: {"PTI":1,"PML-N":0,"PPP":1,"JI":1,"MQM":0,"TLP":0,"JUI-F":0,"ANP":1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Large state-owned enterprises (like PIA, WAPDA) should be privatized if they can't a profit within 5 years", scores: {"PTI":1,"PML-N":1,"PPP":-1,"JI":-1,"MQM":1,"TLP":-1,"JUI-F":-1,"ANP":-1,"BAP":1,"BNP(M)":0,"Bajwa":1,"Asim Munir":1} },
  { statement: "Monthly government handouts (Ehsaas, BISP) should only go to people who are working or actively job-seeking", scores: {"PTI":1,"PML-N":0,"PPP":-1,"JI":-1,"MQM":0,"TLP":-1,"JUI-F":-1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "The government should stop spending on welfare and focus entirely on economic growth", scores: {"PTI":-1,"PML-N":-1,"PPP":-2,"JI":-2,"MQM":-1,"TLP":-1,"JUI-F":-1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Blasphemy laws should be enforced even if they are sometimes misused", scores: {"PTI":0,"PML-N":1,"PPP":0,"JI":2,"MQM":0,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Ahmadis should not be allowed to call themselves Muslim in Pakistan", scores: {"PTI":0,"PML-N":1,"PPP":0,"JI":2,"MQM":0,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  // (Add more statements here, or ask for the full list if needed!)
];

const form = document.getElementById('quizForm');
questions.forEach((q, i) => {
  const div = document.createElement('div');
  div.className = "question";
  div.innerHTML = `<p>${i+1}. ${q.statement}</p>` +
    Object.keys(scales).map(option =>
      `<label>
        <input type="radio" name="q${i}" value="${option}" required>
        ${option}
      </label>`
    ).join(" ");
  form.appendChild(div);
});

document.getElementById('submitBtn').onclick = function(e) {
  e.preventDefault();
  const userAnswers = [];
  for (let i = 0; i < questions.length; i++) {
    const selected = form.querySelector('input[name="q'+i+'"]:checked');
    if (!selected) {
      alert('Please answer all questions!');
      return;
    }
    userAnswers.push(scales[selected.value]);
  }
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
  document.getElementById('results').innerHTML =
    `<h2>Your Closest Alignment:</h2><ul>${results}</ul>`;
};
