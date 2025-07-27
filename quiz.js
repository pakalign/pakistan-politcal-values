const leaders = [
  "Imran Khan",
  "Nawaz Sharif",
  "Bilawal Bhutto",
  "Siraj ul Haq",
  "Khalid Maqbool Siddiqui",
  "Saad Rizvi",
  "Fazlur Rehman",
  "Asfandyar Wali Khan",
  "Abdul Quddus Bizenjo",
  "Akhtar Mengal",
  "Qamar Javed Bajwa",
  "Asim Munir"
];

const scales = {
  "Strongly Agree":2,
  "Agree":1,
  "Neutral":0,
  "Disagree":-1,
  "Strongly Disagree":-2
};

const questions = [
  { statement: "The government should provide free healthcare and education to all, even if it means raising taxes", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":2,"Siraj ul Haq":-1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":-1,"Fazlur Rehman":-1,"Asfandyar Wali Khan":1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Prices of fuel, gas, and electricity should be kept low through subsidies even if it increases Pakistan's debt", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":1,"Siraj ul Haq":0,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":0,"Fazlur Rehman":0,"Asfandyar Wali Khan":0,"Abdul Quddus Bizenjo":1,"Akhtar Mengal":1,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "The government should focus more on creating jobs than fighting inflation", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":1,"Siraj ul Haq":0,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":0,"Fazlur Rehman":0,"Asfandyar Wali Khan":1,"Abdul Quddus Bizenjo":1,"Akhtar Mengal":1,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Corruption is a problem, but foreign interference and economic dependency are bigger threats", scores: {"Imran Khan":0,"Nawaz Sharif":1,"Bilawal Bhutto":0,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":0,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":1,"Asim Munir":1} },
  { statement: "Wealthy landowners and industrialists should face higher taxes even if they create jobs", scores: {"Imran Khan":1,"Nawaz Sharif":0,"Bilawal Bhutto":1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":0,"Fazlur Rehman":0,"Asfandyar Wali Khan":1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Large state-owned enterprises (like PIA, WAPDA) should be privatized if they can't a profit within 5 years", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":-1,"Siraj ul Haq":-1,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":-1,"Fazlur Rehman":-1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":1,"Akhtar Mengal":0,"Qamar Javed Bajwa":1,"Asim Munir":1} },
  { statement: "Monthly government handouts (Ehsaas, BISP) should only go to people who are working or actively job-seeking", scores: {"Imran Khan":1,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":-1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":-1,"Fazlur Rehman":-1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "The government should stop spending on welfare and focus entirely on economic growth", scores: {"Imran Khan":-1,"Nawaz Sharif":-1,"Bilawal Bhutto":-2,"Siraj ul Haq":-2,"Khalid Maqbool Siddiqui":-1,"Saad Rizvi":-1,"Fazlur Rehman":-1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Blasphemy laws should be enforced even if they are sometimes misused", scores: {"Imran Khan":0,"Nawaz Sharif":1,"Bilawal Bhutto":0,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Ahmadis should not be allowed to call themselves Muslim in Pakistan", scores: {"Imran Khan":0,"Nawaz Sharif":1,"Bilawal Bhutto":0,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Religious content in textbooks should be expanded to make youth more morally upright", scores: {"Imran Khan":0,"Nawaz Sharif":1,"Bilawal Bhutto":0,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Women should not appear without hijab on national television", scores: {"Imran Khan":-1,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "People from any sect or religion should be allowed to hold top government positions", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":2,"Siraj ul Haq":-1,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":-1,"Fazlur Rehman":-1,"Asfandyar Wali Khan":1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Madrassas should be brought under full government regulation, including background checks on clerics", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":1,"Siraj ul Haq":-1,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":-1,"Fazlur Rehman":-1,"Asfandyar Wali Khan":1,"Abdul Quddus Bizenjo":1,"Akhtar Mengal":0,"Qamar Javed Bajwa":1,"Asim Munir":1} },
  { statement: "The state should fund Islamic education over secular education", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "The role of religion in government should be reduced to ensure minority rights", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":1,"Siraj ul Haq":-2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":-2,"Fazlur Rehman":-2,"Asfandyar Wali Khan":2,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Military intervention is justified if politicians are corrupt or incompetent", scores: {"Imran Khan":-1,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":1,"Asim Munir":2} },
  { statement: "A single strong leader is better for Pakistan than multiple political parties", scores: {"Imran Khan":-1,"Nawaz Sharif":-1,"Bilawal Bhutto":-1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":1,"Asim Munir":1} },
  { statement: "The judiciary protects the powerful more than the common citizen", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":1,"Abdul Quddus Bizenjo":1,"Akhtar Mengal":1,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Political dynasties (Sharif, Bhutto, etc.) are better than military rule", scores: {"Imran Khan":-1,"Nawaz Sharif":1,"Bilawal Bhutto":1,"Siraj ul Haq":-1,"Khalid Maqbool Siddiqui":-1,"Saad Rizvi":-1,"Fazlur Rehman":-1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":-1,"Akhtar Mengal":-1,"Qamar Javed Bajwa":-1,"Asim Munir":-1} },
  { statement: "Corruption should be punished even if it destabilizes the political system", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":1,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":1,"Abdul Quddus Bizenjo":1,"Akhtar Mengal":1,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Media outlets that criticize state institutions should be shut down", scores: {"Imran Khan":-1,"Nawaz Sharif":-1,"Bilawal Bhutto":-1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":1,"Asim Munir":2} },
  { statement: "Politicians should be banned from running for office if they’ve been arrested even if not convicted", scores: {"Imran Khan":-1,"Nawaz Sharif":-1,"Bilawal Bhutto":-1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":1,"Asim Munir":1} },
  { statement: "Pakistan is not ready for full democracy; stability should come first", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":1,"Asim Munir":2} },
  { statement: "Urdu should remain the only official language of Pakistan", scores: {"Imran Khan":0,"Nawaz Sharif":1,"Bilawal Bhutto":0,"Siraj ul Haq":0,"Khalid Maqbool Siddiqui":-1,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":-1,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Muhajirs, Baloch, Pashtuns etc are treated unfairly by the state", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":1,"Siraj ul Haq":0,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":0,"Fazlur Rehman":0,"Asfandyar Wali Khan":2,"Abdul Quddus Bizenjo":2,"Akhtar Mengal":2,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Speaking Punjabi or Sindhi or any language other than Urdu at school or work should be discouraged to promote unity", scores: {"Imran Khan":0,"Nawaz Sharif":1,"Bilawal Bhutto":0,"Siraj ul Haq":0,"Khalid Maqbool Siddiqui":-1,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":-1,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Ethnic quotas in jobs and universities should be abolished in favor of merit only", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":1,"Siraj ul Haq":0,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":0,"Fazlur Rehman":0,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":-1,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "National identity should come before regional or tribal identity", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":-1,"Qamar Javed Bajwa":1,"Asim Munir":1} },
  { statement: "Only those loyal to the ideology of Pakistan should be allowed to hold government office", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":0,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":1,"Asim Munir":1} },
  { statement: "People who openly criticize Pakistan’s military or founding principles are not truly Pakistani", scores: {"Imran Khan":0,"Nawaz Sharif":1,"Bilawal Bhutto":0,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":2,"Asim Munir":2} },
  { statement: "Pakistan should recognize Israel if it benefits our economy and global position", scores: {"Imran Khan":-1,"Nawaz Sharif":-1,"Bilawal Bhutto":-1,"Siraj ul Haq":-2,"Khalid Maqbool Siddiqui":-1,"Saad Rizvi":-2,"Fazlur Rehman":-2,"Asfandyar Wali Khan":0,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":-1,"Asim Munir":-1} },
  { statement: "The U.S. is a bigger threat to Pakistan than India", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":0,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "China’s growing influence in Pakistan is a form of economic colonization", scores: {"Imran Khan":0,"Nawaz Sharif":-1,"Bilawal Bhutto":-1,"Siraj ul Haq":-1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":-1,"Fazlur Rehman":-1,"Asfandyar Wali Khan":0,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":-1,"Asim Munir":-1} },
  { statement: "Military strength is more important than diplomacy in dealing with India", scores: {"Imran Khan":-1,"Nawaz Sharif":0,"Bilawal Bhutto":0,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":1,"Asim Munir":2} },
  { statement: "It was wrong for Pakistan to support the Taliban in Afghanistan", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":1,"Siraj ul Haq":-1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":-1,"Fazlur Rehman":-1,"Asfandyar Wali Khan":1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Muslim countries like Saudi Arabia should not interfere in our internal politics", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":1,"Siraj ul Haq":0,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":0,"Fazlur Rehman":0,"Asfandyar Wali Khan":1,"Abdul Quddus Bizenjo":1,"Akhtar Mengal":1,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Pakistan should cut off ties with any country that insults Islam, no matter the economic cost", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "It’s acceptable for the military or ISI to monitor citizens for national security", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":0,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":2,"Asim Munir":2} },
  { statement: "News channels that question the army or judiciary should be banned", scores: {"Imran Khan":-1,"Nawaz Sharif":-1,"Bilawal Bhutto":-1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":2,"Asim Munir":2} },
  { statement: "The police should be allowed to use force freely against protesters and political workers", scores: {"Imran Khan":-1,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":1,"Asim Munir":2} },
  { statement: "Transgender and LGBTQ+ people should not receive special legal protections in Pakistan", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Social media platforms that allow criticism of Islam should be banned nationwide", scores: {"Imran Khan":-1,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Students who protest against the government should be expelled from universities", scores: {"Imran Khan":-1,"Nawaz Sharif":-1,"Bilawal Bhutto":-1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":1,"Asim Munir":2} },
  { statement: "Student unions and protests should be allowed in universities", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":1,"Siraj ul Haq":-1,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":-1,"Fazlur Rehman":-1,"Asfandyar Wali Khan":2,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":1,"Qamar Javed Bajwa":-1,"Asim Munir":-1} },
  { statement: "Civil rights matter, but they must be suspended during times of national crisis", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":1,"Asim Munir":2} },
  { statement: "Religious laws should take priority over human rights laws when they conflict", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "A woman's primary role should be as a mother and homemaker", scores: {"Imran Khan":-1,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Girls and boys should be educated in separate schools", scores: {"Imran Khan":-1,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Feminism is a Western agenda that does not fit Pakistani values", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "A woman should be allowed to become Prime Minister or Army Chief", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":2,"Siraj ul Haq":-1,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":-1,"Fazlur Rehman":-1,"Asfandyar Wali Khan":1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Parents should have the right to choose who their daughter marries", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":0,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Moral policing on TV and social media is necessary to protect society", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "School textbooks should promote Islamic values over Western concepts", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Student unions lead to violence and should remain banned", scores: {"Imran Khan":-1,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":1,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":1,"Fazlur Rehman":1,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":1,"Asim Munir":1} },
  { statement: "The government should focus more on religious education than modern science", scores: {"Imran Khan":0,"Nawaz Sharif":0,"Bilawal Bhutto":-1,"Siraj ul Haq":2,"Khalid Maqbool Siddiqui":0,"Saad Rizvi":2,"Fazlur Rehman":2,"Asfandyar Wali Khan":-1,"Abdul Quddus Bizenjo":0,"Akhtar Mengal":0,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Every child in Pakistan should be required to attend a registered school, not just madrassas", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":2,"Siraj ul Haq":-1,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":-1,"Fazlur Rehman":-1,"Asfandyar Wali Khan":1,"Abdul Quddus Bizenjo":1,"Akhtar Mengal":1,"Qamar Javed Bajwa":1,"Asim Munir":1} },
  { statement: "The state should offer free university education only to those with top academic performance", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":1,"Siraj ul Haq":0,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":0,"Fazlur Rehman":0,"Asfandyar Wali Khan":0,"Abdul Quddus Bizenjo":1,"Akhtar Mengal":1,"Qamar Javed Bajwa":0,"Asim Munir":0} },
  { statement: "Civic education (democracy, constitution) should be mandatory in all schools", scores: {"Imran Khan":1,"Nawaz Sharif":1,"Bilawal Bhutto":2,"Siraj ul Haq":-1,"Khalid Maqbool Siddiqui":1,"Saad Rizvi":-1,"Fazlur Rehman":-1,"Asfandyar Wali Khan":1,"Abdul Quddus Bizenjo":1,"Akhtar Mengal":1,"Qamar Javed Bajwa":0,"Asim Munir":0} }
];

// Color map for leaders
const leaderColors = {
  "Imran Khan":"#008000",
  "Nawaz Sharif":"#212529",
  "Bilawal Bhutto":"#e4002b",
  "Siraj ul Haq":"#006c9a",
  "Khalid Maqbool Siddiqui":"#d50032",
  "Saad Rizvi":"#ffd600",
  "Fazlur Rehman":"#ff9800",
  "Asfandyar Wali Khan":"#c62828",
  "Abdul Quddus Bizenjo":"#00bcd4",
  "Akhtar Mengal":"#795548",
  "Qamar Javed Bajwa":"#485563",
  "Asim Munir":"#1565c0"
};

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
  progressDiv.innerHTML = `<strong style="color:#fff;background:#0077ff;padding:0.5em 1em;border-radius:20px;">Question ${index+1} of ${questions.length}</strong>`;
  form.innerHTML = "";

  const q = questions[index];
  const div = document.createElement('div');
  div.className = "question";
  div.style.border = "2px solid #0077ff";
  div.style.background = "#f0f6ff";
  div.style.borderRadius = "15px";
  div.style.padding = "1.2em";
  div.style.marginBottom = "1em";
  div.innerHTML = `<p style="font-size:1.17em;color:#222;">${index+1}. ${q.statement}</p>` +
    Object.keys(scales).map(option =>
      `<label style="display:inline-block;margin-right:1em;color:#0077ff;background:#eaffff;border-radius:8px;padding:0.2em 0.7em;">
        <input type="radio" name="q${index}" value="${option}" style="accent-color:#0077ff;" ${userAnswers[index] === scales[option] ? "checked" : ""}>
        <span style="color:#222;">${option}</span>
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
    backBtn.style.background = "#ffb347";
    backBtn.style.color = "#222";
    backBtn.style.border = "none";
    backBtn.style.borderRadius = "8px";
    backBtn.style.padding = "0.5em 1.5em";
    backBtn.style.fontWeight = "bold";
    backBtn.style.marginRight = "1em";
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
    nextBtn.style.background = "#00c853";
    nextBtn.style.color = "#fff";
    nextBtn.style.border = "none";
    nextBtn.style.borderRadius = "8px";
    nextBtn.style.padding = "0.5em 1.5em";
    nextBtn.style.fontWeight = "bold";
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
    submitBtn.style.background = "#0077ff";
    submitBtn.style.color = "#fff";
    submitBtn.style.border = "none";
    submitBtn.style.borderRadius = "8px";
    submitBtn.style.padding = "0.7em 2em";
    submitBtn.style.fontWeight = "bold";
    submitBtn.style.marginTop = "1em";
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
  for (const leader of leaders) scores[leader] = 0;
  questions.forEach((q, i) => {
    for (const leader of leaders) {
      scores[leader] += (2 - Math.abs(userAnswers[i] - q.scores[leader]));
    }
  });
  const maxScore = questions.length * 2;
  const results = Object.entries(scores)
    .sort((a,b)=>b[1]-a[1])
    .map(([leader, score], i) =>
      `<li style="margin-bottom:0.5em;font-weight:${i==0?"bold":"normal"};font-size:${i==0?"1.15em":"1em"};background:${leaderColors[leader]+"33"};color:${leaderColors[leader]};border-radius:8px;padding:0.4em 1.2em;">
        ${leader}: ${(score/maxScore*100).toFixed(1)}%
      </li>`
    ).join("");
  resultsDiv.innerHTML =
    `<h2 style="color:#0077ff;">Your Closest Alignment:</h2><ul style="list-style:none;padding:0;">${results}</ul>`;
  form.style.display = "none";
  progressDiv.style.display = "none";
  submitBtn.style.display = "none";
};

renderQuestion(current);
