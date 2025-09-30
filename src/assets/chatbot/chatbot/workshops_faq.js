// workshops_faq.js
const workshopsFaq = [
  // ================================
  // 1. Workshop Charges / Free ya Paid
  // ================================
  {
    question: "Workshop free hai ya uske liye charges hote hain?",
    keywords: [
      "kya workshop free hai ya charges hain",
      "workshop free hoti hai ya paid",
      "workshop ke charges kitne hote hain",
      "is workshop free of cost ya paid hai",
      "workshop cost ya charges details"
    ],
    answer: "Kuch workshops free hoti hain aur kuch paid, yeh depend karta hai school ke saath agreement par."
  },
  {
    question: "1–2 din ka workshop complimentary hota hai ya paid?",
    keywords: [
      "1-2 din ka workshop free hai ya paid",
      "short workshop complimentary hai",
      "demo 1 ya 2 din ka workshop paid hai",
      "trial workshop paid hota hai ya free"
    ],
    answer: "Short workshops complimentary bhi ho sakti hain aur paid bhi, yeh school ke plan par depend karta hai."
  },
  {
    question: "Kya school ko workshop organize karne ke liye kuch invest karna padega?",
    keywords: [
      "school ko workshop ke liye invest karna hoga",
      "school investment requirement workshop",
      "kya school ko paisa lagana padega",
      "school ki zimmedari workshop ke kharche"
    ],
    answer: "Usually school ko sirf basic facilities provide karni hoti hain, major investment ki zaroorat nahi hoti."
  },
  {
    question: "Students se directly charges liye jate hain ya school se?",
    keywords: [
      "students se charges liye jate hain ya school se",
      "workshop payment model students ya school",
      "fees students direct dete hain ya school",
      "workshop cost kis tarah collect hoti hai"
    ],
    answer: "Charges dono model par ho sakte hain: directly students se ya school ke through."
  },
  {
    question: "Agar workshop free hai to company ko faida kaise hoga?",
    keywords: [
      "free workshop me company ko kya faida",
      "workshop free hone par benefit company ko",
      "agar workshop free hai to profit kaise",
      "company ka fayda free workshop me"
    ],
    answer: "Free workshops se students ko awareness milti hai aur baad mein wo paid courses ke liye enroll karte hain."
  },
  {
    question: "Free workshop ke saath koi hidden cost hoti hai?",
    keywords: [
      "free workshop me hidden charges hain kya",
      "hidden cost free workshop ke sath",
      "kya free workshop me extra fees hoti hai",
      "hidden payment free workshop"
    ],
    answer: "Nahi, free workshops ke saath hidden cost nahi hoti."
  },
  {
    question: "Demo workshop paid hota hai ya free trial ke taur pe hota hai?",
    keywords: [
      "demo workshop free hai ya paid",
      "trial workshop free hota hai",
      "demo session free hai ya charges hote hain",
      "demo workshop cost details"
    ],
    answer: "Demo workshops mostly free trial hote hain."
  },
  {
    question: "School ko koi management fee deni hoti hai?",
    keywords: [
      "school ko management fee deni hoti hai",
      "management charges school se liye jate hain",
      "workshop me management cost school ka",
      "school ko extra management fee pay karni hoti hai"
    ],
    answer: "School ko management fee deni hoti hai ya nahi, yeh agreement par depend karta hai."
  },
  {
    question: "Workshop ke liye venue aur equipment ka kharcha kis ka hota hai?",
    keywords: [
      "venue aur equipment ka kharcha school ya company",
      "workshop ke liye projector kaun provide karega",
      "venue cost workshop me kis ka hota hai",
      "equipment cost workshop management"
    ],
    answer: "Venue aur equipment ka kharcha school provide karta hai, company instructors aur content deti hai."
  },
  {
    question: "Free workshop ke baad paid course mandatory hota hai ya optional?",
    keywords: [
      "free workshop ke baad paid course lena zaroori hai",
      "paid course mandatory hai ya optional",
      "free session ke baad paid enroll karna hai kya",
      "workshop ke baad paid course compulsion"
    ],
    answer: "Paid course optional hota hai, student ki marzi hoti hai join kare ya nahi."
  },

  // ================================
  // 2. Profit Sharing (50/50 System)
  // ================================
  {
    question: "50% profit sharing ka system practically kaise kaam karta hai?",
    keywords: [
      "50 percent profit sharing system",
      "profit kaise divide hota hai",
      "school aur company ka hissa kaise",
      "profit sharing practical example"
    ],
    answer: "Jo students enroll karte hain unki fees ka 50% school aur 50% company ko milta hai."
  },
  {
    question: "School ka hissa kis tarah transfer hota hai?",
    keywords: [
      "school ka hissa kaise milta hai",
      "payment transfer school ko kaise hota hai",
      "school ko apna share kis tarah milta hai",
      "profit transfer to school"
    ],
    answer: "School ka hissa direct transfer ya account ke through diya jata hai."
  },
  {
    question: "Profit sharing monthly hoti hai ya har batch ke baad?",
    keywords: [
      "profit sharing monthly ya batch wise",
      "school ka share har batch ke baad",
      "monthly profit share hota hai kya",
      "profit share frequency"
    ],
    answer: "Profit sharing har batch ke baad clear ki jati hai."
  },
  {
    question: "Agar kam students enroll ho to school ka profit kam hoga?",
    keywords: [
      "kam students enroll hone par profit kam",
      "school profit depend karta hai students par",
      "kam enrollment me profit school ka",
      "profit kam students ke case me"
    ],
    answer: "Haan, jitne zyada students enroll karte hain utna zyada school ka profit hota hai."
  },
  {
    question: "School ka share fixed hai ya negotiable?",
    keywords: [
      "school ka share fixed hai",
      "school ka percentage negotiable hai kya",
      "profit sharing ratio negotiable hai",
      "fixed ya negotiable school share"
    ],
    answer: "School ka share usually fixed hota hai lekin negotiation possible hai."
  },
  {
    question: "Agreement sign hota hai ya sirf verbal understanding hoti hai?",
    keywords: [
      "agreement sign hota hai ya verbal",
      "formal contract hota hai kya",
      "sirf verbal samjhota hota hai workshop",
      "agreement requirement profit sharing"
    ],
    answer: "Formal agreement sign hota hai taake transparency ho."
  },
  {
    question: "Agar students fees na dein to school ka hissa kaise milega?",
    keywords: [
      "agar student fees na de to kya hoga",
      "school ka hissa fees unpaid hone par",
      "non payment par profit sharing",
      "students fees pending hone par share"
    ],
    answer: "Profit sharing sirf received payments par hoti hai."
  },
  {
    question: "Profit ke calculation kaise hoti hai (gross ya net)?",
    keywords: [
      "profit calculation gross ya net",
      "profit kaise calculate hota hai",
      "fees gross ya net par share hota hai",
      "profit sharing calculation method"
    ],
    answer: "Profit calculation net received fees par hoti hai."
  },
  {
    question: "School ko advance kuch diya jata hai ya sirf baad mein?",
    keywords: [
      "school ko advance payment milti hai kya",
      "advance share diya jata hai ya baad me",
      "profit ka advance milta hai kya",
      "school ko pehle payment milti hai"
    ],
    answer: "School ko advance nahi milta, hamesha students enrollment ke baad hissa diya jata hai."
  },
  {
    question: "School apna hissa track kaise kar sakta hai?",
    keywords: [
      "school apna share track kaise kare",
      "profit sharing record school ko milta hai",
      "fee collection report school",
      "school apna hissa kaise check kare"
    ],
    answer: "School ko regular reports aur fee collection ka record share kiya jata hai."
  },

  // ================================
  // 3. Students Related
  // ================================
  {
    question: "Workshop ke liye minimum kitne students required hote hain?",
    keywords: [
      "minimum students requirement workshop",
      "kitne students workshop ke liye chahiye",
      "minimum enrollment workshop",
      "kam se kam students workshop"
    ],
    answer: "Workshop organize karne ke liye minimum 20–25 students required hote hain."
  },
  {
    question: "Maximum students ki limit hoti hai?",
    keywords: [
      "maximum students workshop limit",
      "student limit workshop",
      "kitne students max workshop",
      "workshop me maximum enrollment"
    ],
    answer: "Haan, quality maintain karne ke liye maximum limit rakhi jati hai."
  },
  {
    question: "Agar kuch students interested na ho to kya unpe force hoga?",
    keywords: [
      "students interested na ho to kya force",
      "kya students ko forcefully enroll karte ho",
      "workshop me student force",
      "non interested students ke liye workshop"
    ],
    answer: "Nahi, students ko force nahi kiya jata, sirf interested students hi join karte hain."
  },
  {
    question: "Workshop sirf college students ke liye hai ya school level ke liye bhi?",
    keywords: [
      "workshop school aur college ke liye hai",
      "school level students workshop",
      "college students hi eligible hain kya",
      "workshop kis level ke students ke liye"
    ],
    answer: "Workshops school aur college dono levels ke students ke liye organize ki ja sakti hain."
  },
  {
    question: "Kya arts/background ke students bhi join kar sakte hain?",
    keywords: [
      "arts background students join kar sakte hain",
      "non technical students workshop join",
      "commerce ya arts students eligible workshop",
      "any background students join workshop"
    ],
    answer: "Haan, arts ya kisi bhi background ke students join kar sakte hain."
  },
  {
    question: "Workshop ke liye prerequisites hote hain?",
    keywords: [
      "workshop prerequisites kya hain",
      "requirements before workshop",
      "eligibility criteria workshop",
      "pre required skills workshop"
    ],
    answer: "Workshop ke liye basic prerequisites clear kar diye jate hain, jo topic ke hisaab se vary karte hain."
  },
  {
    question: "Attendance compulsory hoti hai ya optional?",
    keywords: [
      "attendance compulsory hai workshop",
      "attendance optional hai kya",
      "workshop attendance requirement",
      "student attendance compulsory"
    ],
    answer: "Attendance compulsory hoti hai taake learning complete ho."
  },
  {
    question: "Students ko workshop ke baad enrollment ke liye motivate kaise karte ho?",
    keywords: [
      "students ko motivate kaise karte ho",
      "workshop ke baad students encourage",
      "enrollment ke liye motivation",
      "students ko inspire enrollment"
    ],
    answer: "Students ko career benefits aur practical exposure ke zariye motivate kiya jata hai."
  },
  {
    question: "Agar ek student drop kar de to fees ka kya hoga?",
    keywords: [
      "student drop kar de to fees refund",
      "dropout student fee policy",
      "agar student chhod de to payment",
      "workshop fees refund policy"
    ],
    answer: "Drop karne par fee refund policy depend karti hai jo agreement me likhi hoti hai."
  },
  {
    question: "Kya students ko scholarships bhi milti hain?",
    keywords: [
      "students scholarships workshop",
      "scholarship ya discount workshop",
      "aid students ke liye workshop",
      "financial assistance workshop"
    ],
    answer: "Haan, students ko scholarships aur discounts diye jate hain."
  },

  // ================================
  // 4. Management Concerns
  // ================================
  {
    question: "Workshop organize karne ke liye school ko kya responsibilities leni hongi?",
    keywords: [
      "school responsibilities workshop",
      "workshop management school ka role",
      "school ko kya karna hoga workshop",
      "responsibilities of school workshop"
    ],
    answer: "School ko sirf venue aur student coordination ki responsibility leni hoti hai."
  },
  {
    question: "Venue aur projector provide karna school ka kaam hai ya company ka?",
    keywords: [
      "venue aur projector kis ka responsibility",
      "projector aur hall school provide karega",
      "venue arrangement workshop",
      "equipment responsibility school company"
    ],
    answer: "Venue aur projector usually school provide karta hai."
  },
  {
    question: "Teachers ko bhi training di jati hai ya sirf students ko?",
    keywords: [
      "teachers ko training milti hai kya",
      "teacher training workshop",
      "only students ya teachers bhi training",
      "faculty training included workshop"
    ],
    answer: "Teachers ke liye bhi training sessions arrange kiye ja sakte hain."
  },
  {
    question: "Workshop ki duration fix hai ya flexible?",
    keywords: [
      "workshop duration fix hai ya flexible",
      "time duration workshop",
      "workshop kitne din ki hoti hai",
      "flexibility in workshop duration"
    ],
    answer: "Workshop ki duration fix hoti hai lekin school ke schedule ke hisaab se flexible banayi ja sakti hai."
  },
  {
    question: "Agar ek din school mein holiday ho jaye to workshop shift hoga?",
    keywords: [
      "holiday hone par workshop reschedule",
      "school holiday workshop adjustment",
      "agar chutti ho to workshop ka kya",
      "workshop postpone due to holiday"
    ],
    answer: "Haan, workshop school ki availability ke mutabiq shift ho jata hai."
  },
  {
    question: "Discipline aur student management ka zimma kis ka hoga?",
    keywords: [
      "discipline responsibility kis ki hai",
      "student management workshop school",
      "discipline maintain kaun karega",
      "school ya company discipline"
    ],
    answer: "Discipline aur student management ka zimma school ka hota hai."
  },
  {
    question: "Workshop ke liye special permission chahi hoti hai?",
    keywords: [
      "special permission workshop ke liye",
      "school approval ya permission workshop",
      "government ya school permission workshop",
      "permission requirement workshop"
    ],
    answer: "School ki policy ke hisaab se special permission chahi ho sakti hai."
  },
  {
    question: "Agar parent complain kare to uska jawab kaun dega?",
    keywords: [
      "parent complain workshop",
      "complaint ka jawab kaun dega",
      "parent issues workshop",
      "school ya company parent complaint"
    ],
    answer: "Parent complaints ka jawab school aur company milkar dete hain."
  },
  {
    question: "Company ke instructors verified hote hain ya fresh graduates?",
    keywords: [
      "company instructors verified hain kya",
      "fresh graduates trainers",
      "experienced instructors workshop",
      "teacher qualification workshop"
    ],
    answer: "Company ke instructors verified aur experienced hote hain."
  },
  {
    question: "Kya workshop ke baad feedback report school ko di jati hai?",
    keywords: [
      "feedback report school ko di jati hai",
      "workshop feedback school",
      "school ko report milti hai kya",
      "feedback after workshop"
    ],
    answer: "Haan, workshop ke baad feedback report school ko provide ki jati hai."
  },

  // ================================
  // 5. Risk & Benefits
  // ================================
  {
    question: "Agar students enroll na karein to school ka loss to nahi hoga?",
    keywords: [
      "students enroll na karein to school ka loss",
      "enrollment na hone par risk school",
      "school ka nuksaaan if no enrollment",
      "workshop failure loss school"
    ],
    answer: "Nahi, agar students enroll na karein to school ko financial loss nahi hota."
  },
  {
    question: "Is scheme se school ki reputation par kya asar padega?",
    keywords: [
      "scheme ka reputation par asar",
      "school reputation workshop",
      "scheme effect school image",
      "workshop impact reputation"
    ],
    answer: "Yeh scheme school ki reputation enhance karti hai kyunki students ko naye skills milte hain."
  },
  {
    question: "School ke liye is model ka sabse bada faida kya hai?",
    keywords: [
      "school ke liye sabse bada faida",
      "model ka benefit school",
      "school ke advantages is scheme se",
      "school ka fayda workshop model"
    ],
    answer: "School ke liye sabse bada faida yeh hai ke students ke liye extra learning opportunities create hoti hain."
  },
  {
    question: "Agar workshop fail ho jaye to backup plan kya hota hai?",
    keywords: [
      "workshop fail hone par backup plan",
      "failure of workshop ka solution",
      "backup session workshop",
      "alternate plan workshop"
    ],
    answer: "Workshop fail hone ki surat mein alternate sessions arrange kiye jate hain."
  },
  {
    question: "Long-term mein school aur company dono ko kya benefits milte hain?",
    keywords: [
      "long term benefits school aur company",
      "future benefits workshop model",
      "partnership ka long term fayda",
      "school aur company dono ke liye benefits"
    ],
    answer: "Dono parties ko long-term reputation, revenue aur partnerships ka faida hota hai."
  },
    
  {
    question: "Agar students enroll na karein to school ka loss to nahi hoga?",
    keywords: [
      "students enroll na karein to school ka loss",
      "agar students enroll na karein to loss hoga",
      "school ka loss agar enrollments na ho"
    ],
    answer: "Nahi, agar students enroll na karein to school ko financial loss nahi hota."
  },
  {
    question: "Is scheme se school ki reputation par kya asar padega?",
    keywords: [
      "scheme se school ki reputation ka asar",
      "scheme reputation par kya effect dalegi",
      "school ki reputation scheme ka impact"
    ],
    answer: "Yeh scheme school ki reputation enhance karti hai kyunki students ko naye skills milte hain."
  },
  {
    question: "School ke liye is model ka sabse bada faida kya hai?",
    keywords: [
      "school ke liye model ka faida",
      "is model ka sabse bada faida school ke liye",
      "school ko model ka kya benefit hai"
    ],
    answer: "School ke liye sabse bada faida yeh hai ke students ke liye extra learning opportunities create hoti hain."
  },
  {
    question: "Agar workshop fail ho jaye to backup plan kya hota hai?",
    keywords: [
      "workshop fail ho jaye to backup plan",
      "agar workshop fail ho to kya hoga",
      "backup plan workshop fail hone par"
    ],
    answer: "Workshop fail hone ki surat mein alternate sessions arrange kiye jate hain."
  },
  {
    question: "Long-term mein school aur company dono ko kya benefits milte hain?",
    keywords: [
      "long term mein school aur company ke benefits",
      "long term benefits school aur company",
      "school aur company ko long term mein kya faida hai"
    ],
    answer: "Dono parties ko long-term reputation, revenue aur partnerships ka faida hota hai."
  },
  {
    question: "Parents ko kaise convince kiya jata hai?",
    keywords: [
      "parents ko convince kaise karte hain",
      "parents ko convince karne ka tarika",
      "kaise parents ko samjhaya jata hai"
    ],
    answer: "Parents ko benefits aur future career scope samjha kar convince kiya jata hai."
  },
  {
    question: "Company kitne arse tak partnership maintain karti hai?",
    keywords: [
      "company partnership kitne time tak",
      "partnership ka duration company",
      "kitne arse tak company partnership karti hai"
    ],
    answer: "Partnership ka duration agreement aur performance par depend karta hai."
  },
  {
    question: "School ko advertisement mein credit milta hai ya sirf company ka naam aata hai?",
    keywords: [
      "school ko advertisement mein credit",
      "advertisement mein school ka naam aata hai",
      "sirf company ka naam advertisement mein hota hai"
    ],
    answer: "Advertisement mein school aur company dono ka naam include kiya jata hai."
  },
  {
    question: "Workshop ka record (photos/videos) share kiya jata hai school ke sath?",
    keywords: [
      "workshop ka record school ke sath share",
      "photos videos workshop school ko dete hain",
      "record school ke sath share kiya jata hai"
    ],
    answer: "Haan, workshop ka record school ke sath share kiya jata hai."
  },
  {
    question: "School aur company ke darmiyan relation ek-time ka hota hai ya future mein repeat ho sakta hai?",
    keywords: [
      "school aur company relation ek time ya repeat",
      "relation future mein repeat ho sakta hai",
      "school company ka relation ek-time ka hota hai"
    ],
    answer: "Relation ek-time ka bhi ho sakta hai aur long-term repeatable partnership bhi."
  }
];

export default workshopsFaq;
