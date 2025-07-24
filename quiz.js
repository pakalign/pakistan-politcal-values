const parties = ["PTI","PML-N","PPP","JI","MQM","TLP","JUI-F","ANP","BAP","BNP(M)","Bajwa","Asim Munir"];
const scales = {
  "Strongly Agree":2,
  "Agree":1,
  "Neutral":0,
  "Disagree":-1,
  "Strongly Disagree":-2
};
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
  { statement: "Religious content in textbooks should be expanded to make youth more morally upright", scores: {"PTI":0,"PML-N":1,"PPP":0,"JI":2,"MQM":0,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Women should not appear without hijab on national television", scores: {"PTI":-1,"PML-N":0,"PPP":-1,"JI":1,"MQM":0,"TLP":2,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "People from any sect or religion should be allowed to hold top government positions", scores: {"PTI":1,"PML-N":1,"PPP":2,"JI":-1,"MQM":1,"TLP":-1,"JUI-F":-1,"ANP":1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Madrassas should be brought under full government regulation, including background checks on clerics", scores: {"PTI":1,"PML-N":1,"PPP":1,"JI":-1,"MQM":1,"TLP":-1,"JUI-F":-1,"ANP":1,"BAP":1,"BNP(M)":0,"Bajwa":1,"Asim Munir":1} },
  { statement: "The state should fund Islamic education over secular education", scores: {"PTI":0,"PML-N":0,"PPP":-1,"JI":2,"MQM":0,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "The role of religion in government should be reduced to ensure minority rights", scores: {"PTI":0,"PML-N":0,"PPP":1,"JI":-2,"MQM":0,"TLP":-2,"JUI-F":-2,"ANP":2,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Military intervention is justified if politicians are corrupt or incompetent", scores: {"PTI":-1,"PML-N":0,"PPP":-1,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":1,"Asim Munir":2} },
  { statement: "A single strong leader is better for Pakistan than multiple political parties", scores: {"PTI":-1,"PML-N":-1,"PPP":-1,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":1,"Asim Munir":1} },
  { statement: "The judiciary protects the powerful more than the common citizen", scores: {"PTI":1,"PML-N":1,"PPP":1,"JI":1,"MQM":1,"TLP":1,"JUI-F":1,"ANP":1,"BAP":1,"BNP(M)":1,"Bajwa":0,"Asim Munir":0} },
  { statement: "Political dynasties (Sharif, Bhutto, etc.) are better than military rule", scores: {"PTI":-1,"PML-N":1,"PPP":1,"JI":-1,"MQM":-1,"TLP":-1,"JUI-F":-1,"ANP":-1,"BAP":-1,"BNP(M)":-1,"Bajwa":-1,"Asim Munir":-1} },
  { statement: "Corruption should be punished even if it destabilizes the political system", scores: {"PTI":1,"PML-N":1,"PPP":1,"JI":2,"MQM":1,"TLP":1,"JUI-F":1,"ANP":1,"BAP":1,"BNP(M)":1,"Bajwa":0,"Asim Munir":0} },
  { statement: "Media outlets that criticize state institutions should be shut down", scores: {"PTI":-1,"PML-N":-1,"PPP":-1,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":1,"Asim Munir":2} },
  { statement: "Politicians should be banned from running for office if they’ve been arrested even if not convicted", scores: {"PTI":-1,"PML-N":-1,"PPP":-1,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":1,"Asim Munir":1} },
  { statement: "Pakistan is not ready for full democracy; stability should come first", scores: {"PTI":0,"PML-N":0,"PPP":-1,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":1,"Asim Munir":2} },
  { statement: "Urdu should remain the only official language of Pakistan", scores: {"PTI":0,"PML-N":1,"PPP":0,"JI":0,"MQM":-1,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":-1,"Bajwa":0,"Asim Munir":0} },
  { statement: "Muhajirs, Baloch, Pashtuns etc are treated unfairly by the state", scores: {"PTI":0,"PML-N":0,"PPP":1,"JI":0,"MQM":1,"TLP":0,"JUI-F":0,"ANP":2,"BAP":2,"BNP(M)":2,"Bajwa":0,"Asim Munir":0} },
  { statement: "Speaking Punjabi or Sindhi or any language other than Urdu at school or work should be discouraged to promote unity", scores: {"PTI":0,"PML-N":1,"PPP":0,"JI":0,"MQM":-1,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":-1,"Bajwa":0,"Asim Munir":0} },
  { statement: "Ethnic quotas in jobs and universities should be abolished in favor of merit only", scores: {"PTI":1,"PML-N":1,"PPP":1,"JI":0,"MQM":0,"TLP":0,"JUI-F":0,"ANP":-1,"BAP":0,"BNP(M)":-1,"Bajwa":0,"Asim Munir":0} },
  { statement: "National identity should come before regional or tribal identity", scores: {"PTI":1,"PML-N":1,"PPP":1,"JI":1,"MQM":1,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":-1,"Bajwa":1,"Asim Munir":1} },
  { statement: "Only those loyal to the ideology of Pakistan should be allowed to hold government office", scores: {"PTI":1,"PML-N":1,"PPP":0,"JI":2,"MQM":1,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":1,"Asim Munir":1} },
  { statement: "People who openly criticize Pakistan’s military or founding principles are not truly Pakistani", scores: {"PTI":0,"PML-N":1,"PPP":0,"JI":2,"MQM":0,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":2,"Asim Munir":2} },
  { statement: "Pakistan should recognize Israel if it benefits our economy and global position", scores: {"PTI":-1,"PML-N":-1,"PPP":-1,"JI":-2,"MQM":-1,"TLP":-2,"JUI-F":-2,"ANP":0,"BAP":0,"BNP(M)":0,"Bajwa":-1,"Asim Munir":-1} },
  { statement: "The U.S. is a bigger threat to Pakistan than India", scores: {"PTI":0,"PML-N":0,"PPP":0,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "China’s growing influence in Pakistan is a form of economic colonization", scores: {"PTI":0,"PML-N":-1,"PPP":-1,"JI":-1,"MQM":0,"TLP":-1,"JUI-F":-1,"ANP":0,"BAP":0,"BNP(M)":0,"Bajwa":-1,"Asim Munir":-1} },
  { statement: "Military strength is more important than diplomacy in dealing with India", scores: {"PTI":-1,"PML-N":0,"PPP":0,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":1,"Asim Munir":2} },
  { statement: "It was wrong for Pakistan to support the Taliban in Afghanistan", scores: {"PTI":0,"PML-N":0,"PPP":1,"JI":-1,"MQM":0,"TLP":-1,"JUI-F":-1,"ANP":1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Muslim countries like Saudi Arabia should not interfere in our internal politics", scores: {"PTI":1,"PML-N":1,"PPP":1,"JI":0,"MQM":1,"TLP":0,"JUI-F":0,"ANP":1,"BAP":1,"BNP(M)":1,"Bajwa":0,"Asim Munir":0} },
  { statement: "Pakistan should cut off ties with any country that insults Islam, no matter the economic cost", scores: {"PTI":0,"PML-N":0,"PPP":-1,"JI":2,"MQM":0,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "It’s acceptable for the military or ISI to monitor citizens for national security", scores: {"PTI":0,"PML-N":0,"PPP":0,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":2,"Asim Munir":2} },
  { statement: "News channels that question the army or judiciary should be banned", scores: {"PTI":-1,"PML-N":-1,"PPP":-1,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":2,"Asim Munir":2} },
  { statement: "The police should be allowed to use force freely against protesters and political workers", scores: {"PTI":-1,"PML-N":0,"PPP":-1,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":1,"Asim Munir":2} },
  { statement: "Transgender and LGBTQ+ people should not receive special legal protections in Pakistan", scores: {"PTI":0,"PML-N":0,"PPP":-1,"JI":2,"MQM":0,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Social media platforms that allow criticism of Islam should be banned nationwide", scores: {"PTI":-1,"PML-N":0,"PPP":-1,"JI":2,"MQM":0,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Students who protest against the government should be expelled from universities", scores: {"PTI":-1,"PML-N":-1,"PPP":-1,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":1,"Asim Munir":2} },
  { statement: "Student unions and protests should be allowed in universities", scores: {"PTI":1,"PML-N":1,"PPP":1,"JI":-1,"MQM":1,"TLP":-1,"JUI-F":-1,"ANP":2,"BAP":0,"BNP(M)":1,"Bajwa":-1,"Asim Munir":-1} },
  { statement: "Civil rights matter, but they must be suspended during times of national crisis", scores: {"PTI":0,"PML-N":0,"PPP":-1,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":1,"Asim Munir":2} },
  { statement: "Religious laws should take priority over human rights laws when they conflict", scores: {"PTI":0,"PML-N":0,"PPP":-1,"JI":2,"MQM":0,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "A woman's primary role should be as a mother and homemaker", scores: {"PTI":-1,"PML-N":0,"PPP":-1,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Girls and boys should be educated in separate schools", scores: {"PTI":-1,"PML-N":0,"PPP":-1,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Feminism is a Western agenda that does not fit Pakistani values", scores: {"PTI":0,"PML-N":0,"PPP":-1,"JI":2,"MQM":0,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "A woman should be allowed to become Prime Minister or Army Chief", scores: {"PTI":1,"PML-N":1,"PPP":2,"JI":-1,"MQM":1,"TLP":-1,"JUI-F":-1,"ANP":1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Parents should have the right to choose who their daughter marries", scores: {"PTI":0,"PML-N":0,"PPP":0,"JI":2,"MQM":0,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Moral policing on TV and social media is necessary to protect society", scores: {"PTI":0,"PML-N":0,"PPP":-1,"JI":2,"MQM":0,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "School textbooks should promote Islamic values over Western concepts", scores: {"PTI":0,"PML-N":0,"PPP":-1,"JI":2,"MQM":0,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Student unions lead to violence and should remain banned", scores: {"PTI":-1,"PML-N":0,"PPP":-1,"JI":1,"MQM":0,"TLP":1,"JUI-F":1,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":1,"Asim Munir":1} },
  { statement: "The government should focus more on religious education than modern science", scores: {"PTI":0,"PML-N":0,"PPP":-1,"JI":2,"MQM":0,"TLP":2,"JUI-F":2,"ANP":-1,"BAP":0,"BNP(M)":0,"Bajwa":0,"Asim Munir":0} },
  { statement: "Every child in Pakistan should be required to attend a registered school, not just madrassas", scores: {"PTI":1,"PML-N":1,"PPP":2,"JI":-1,"MQM":1,"TLP":-1,"JUI-F":-1,"ANP":1,"BAP":1,"BNP(M)":1,"Bajwa":1,"Asim Munir":1} },
  { statement: "The state should offer free university education only to those with top academic performance", scores: {"PTI":1,"PML-N":1,"PPP":1,"JI":0,"MQM":1,"TLP":0,"JUI-F":0,"ANP":0,"BAP":1,"BNP(M)":1,"Bajwa":0,"Asim Munir":0} },
  { statement: "Civic education (democracy, constitution) should be mandatory in all schools", scores: {"PTI":1,"PML-N":1,"PPP":2,"JI":-1,"MQM":1,"TLP":-1,"JUI-F":-1,"ANP":1,"BAP":1,"BNP(M)":1,"Bajwa":0,"Asim Munir":0} }
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
