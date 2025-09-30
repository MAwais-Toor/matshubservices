// courses_faq.js
const coursesFaq = [
  // 1. Fee Structure
  {
    question: "Course ki duration aur fee structure kya hai?",
    keywords: ["course duration details", "fee structure information", "charges of course", "duration and fee"],
    answer: "Hamare courses ki duration aur fee structure course type par depend karta hai. Exact details ke liye: Awais's answer ---"
  },
  {
    question: "Yeh course kitne months ka hota hai aur charges kitne hote hain?",
    keywords: ["course kitne months ka", "course ke charges kya hain", "course duration aur charges", "monthly course charges"],
    answer: "Course ki duration aur charges alag-alag hote hain, jo course aap choose karte ho uske hisaab se. Awais's answer ---"
  },
  {
    question: "Aap log short aur long courses ki fee alag rakhte ho?",
    keywords: ["short course ki fee", "long course ki fee", "short aur long fee difference", "different charges for short and long"],
    answer: "Haan, short aur long courses ki fee structure alag hota hai kyunki unka content aur duration different hota hai."
  },
  {
    question: "Workshop free hota hai ya uske bhi charges hain?",
    keywords: ["workshop free hai", "workshop charges kya hain", "workshop paid hai", "free or paid workshop"],
    answer: "Kuch workshops free hoti hain aur kuch paid, yeh depend karta hai workshop ke type aur duration par. Awais's answer ---"
  },
  {
    question: "Course ke liye installment option available hai?",
    keywords: ["installment option available", "fee installment plan", "payment by installment", "installment facility for course"],
    answer: "Haan, students ki asaani ke liye installment option bhi available hota hai."
  },
  {
    question: "Agar student afford na kar sake to discount milta hai?",
    keywords: ["student discount available", "scholarship or discount", "discount for students", "special discount for needy students"],
    answer: "Jo students afford nahi kar pate unke liye special discounts ya scholarship options consider kiye jate hain."
  },
  {
    question: "Per month charges kitne bante hain?",
    keywords: ["monthly course fee", "per month charges", "course monthly cost", "monthly installment fee"],
    answer: "Per month charges course ki total fee aur duration ke hisaab se calculate hote hain. Awais's answer ---"
  },
  {
    question: "Certificate course aur full course ki fee same hoti hai ya alag?",
    keywords: ["certificate course fee", "full course fee", "certificate vs full course charges", "difference in course fee"],
    answer: "Certificate aur full course ki fee alag hoti hai kyunki unka content aur duration different hota hai."
  },
  {
    question: "Initial registration fee hoti hai ya direct full payment?",
    keywords: ["registration fee required", "initial registration charges", "direct full payment", "advance registration cost"],
    answer: "Usually ek small registration fee hoti hai, baaki fee installments ya full payment mein adjust hoti hai. Awais's answer ---"
  },
  {
    question: "Hidden charges bhi hote hain ya jo batao wahi final hota hai?",
    keywords: ["any hidden charges", "extra fee applicable", "final cost only", "no hidden charges"],
    answer: "Hamare courses mein koi hidden charges nahi hote. Jo fee pehle batayi jati hai wahi final hoti hai."
  },

  // 2. Certification
  {
    question: "Course complete karne ke baad certificate milta hai?",
    keywords: ["certificate after course", "completion certificate provide", "certificate on finishing course", "course ke baad certificate"],
    answer: "Haan, course successfully complete karne ke baad certificate provide kiya jata hai."
  },
  {
    question: "Certificate government approved hota hai ya company ka?",
    keywords: ["government approved certificate", "company issued certificate", "official certificate details", "recognized certificate"],
    answer: "Certificate officially hamari company ka hota hai, government approval ke liye: Awais's answer ---"
  },
  {
    question: "Certificate online verify ho sakta hai?",
    keywords: ["certificate verification online", "verify certificate digitally", "online certificate check", "certificate authenticity online"],
    answer: "Haan, certificate online verify karne ka system available hota hai."
  },
  {
    question: "Certification free hai ya alag charges hote hain?",
    keywords: ["free certification included", "extra charges for certificate", "paid certification option", "certificate fee details"],
    answer: "Course ke andar certification included hota hai. Kabhi kabhi extra charges ho sakte hain for special certificates. Awais's answer ---"
  },
  {
    question: "Workshop attend karne walon ko bhi certificate milega?",
    keywords: ["workshop attendance certificate", "participation certificate workshop", "certificate for workshop attendees"],
    answer: "Short workshops ke liye participation certificate provide kiya jata hai."
  },
  {
    question: "Certificate ka value freelancing platforms par hoga?",
    keywords: ["certificate for freelancing profile", "freelancing platforms recognition", "certificate value freelancing"],
    answer: "Haan, certificate freelancing profiles par value add karta hai aur clients ke trust build karta hai."
  },
  {
    question: "Agar student fail ho jaye to certificate milega?",
    keywords: ["certificate if fail", "fail student certificate", "no certificate for fail", "student failed course certificate"],
    answer: "Nahi, certificate sirf successful completion par issue hota hai."
  },
  {
    question: "Course ke saath internship certificate bhi provide karte ho?",
    keywords: ["internship certificate available", "internship with course", "extra internship certificate", "certificate for internship program"],
    answer: "Kuch specific programs ke saath internship certificates bhi diye jate hain."
  },
  {
    question: "Certificate physical (printed) milta hai ya digital?",
    keywords: ["physical printed certificate", "digital certificate available", "certificate format options", "certificate soft copy hard copy"],
    answer: "Certificate dono formats mein mil sakta hai, digital aur printed. Awais's answer ---"
  },
  {
    question: "Kya certificate international level par valid hai?",
    keywords: ["international certificate recognition", "certificate valid globally", "certificate accepted internationally"],
    answer: "Certificate international level par recognition rakhta hai lekin validity market aur clients par depend karti hai."
  },

  // 3. Mode of Classes
  {
    question: "Classes online hoti hain ya physical?",
    keywords: ["online classes available", "physical classes option", "class mode details", "offline or online classes"],
    answer: "Hamari classes dono modes mein available hoti hain: online aur physical."
  },
  {
    question: "Online courses live hote hain ya recorded lectures?",
    keywords: ["online classes live", "recorded lectures online", "live or recorded classes", "course recordings availability"],
    answer: "Online courses mein live sessions aur recorded lectures dono options available hain."
  },
  {
    question: "Agar class miss ho jaye to recording milti hai?",
    keywords: ["missed class recording", "recording of lecture", "class recording provided", "missed lecture access"],
    answer: "Haan, class miss hone par recording provide ki jati hai."
  },
  {
    question: "Offline classes kin cities mein hoti hain?",
    keywords: ["offline classes cities", "physical classes location", "classes available in which cities"],
    answer: "Offline classes kin kin cities mein hoti hain, iske liye: Awais's answer ---"
  },
  {
    question: "Online class ke liye special software chahiye ya normal Zoom/Meet chalega?",
    keywords: ["zoom classes", "google meet classes", "special software required or not", "online class platform"],
    answer: "Normal Zoom/Google Meet software hi kaafi hota hai, special software ki zaroorat nahi."
  },
  {
    question: "Students ke liye flexible timing available hai?",
    keywords: ["flexible timings classes", "student flexible schedule", "class timing options"],
    answer: "Haan, students ki convenience ke liye flexible timings offer kiye jate hain."
  },
  {
    question: "Group classes hoti hain ya one-to-one sessions bhi possible hain?",
    keywords: ["group classes option", "one to one sessions", "class format group or individual"],
    answer: "Dono options available hote hain: group classes aur one-to-one sessions."
  },
  {
    question: "Agar student travel kare to class join kar sakta hai?",
    keywords: ["attend class while travelling", "class join during travel", "student travelling online class"],
    answer: "Online classes ki wajah se student kahin se bhi join kar sakta hai."
  },
  {
    question: "Classes English mein hoti hain ya Urdu mein?",
    keywords: ["classes in English", "classes in Urdu", "class language options", "urdu or english lectures"],
    answer: "Classes English aur Urdu dono languages mein hoti hain, taake students easily samajh saken."
  },
  {
    question: "Evening batch bhi hota hai ya sirf morning?",
    keywords: ["evening batch classes", "morning classes option", "batch timings details"],
    answer: "Haan, evening aur morning dono batches available hote hain."
  },

  // 4. Course Content & Skills
  {
    question: "Course ke andar kya topics cover hote hain?",
    keywords: ["course topics covered", "syllabus content details", "topics included in course"],
    answer: "Course ke topics relevant industry skills aur practical knowledge cover karte hain. Awais's answer ---"
  },
  {
    question: "Shopify/WordPress course mein sirf basic sikhate ho ya advanced bhi?",
    keywords: ["shopify course details", "wordpress advanced course", "basic and advanced course options"],
    answer: "Dono options available hain: basic aur advanced level training."
  },
  {
    question: "Custom coding mein kaunsi languages sikhayi jati hain?",
    keywords: ["coding languages taught", "custom coding course languages", "languages included in coding course"],
    answer: "Coding courses mein HTML, CSS, JavaScript aur frameworks sikhaye jate hain. Awais's answer ---"
  },
  {
    question: "Syllabus fix hai ya time-to-time update hota hai?",
    keywords: ["syllabus updated regularly", "fixed or updated syllabus", "course content update"],
    answer: "Syllabus regularly update hota hai taake latest trends cover kiye ja saken."
  },
  {
    question: "Real-world projects bhi karwaye jate hain?",
    keywords: ["real world projects included", "practical project training", "live projects course"],
    answer: "Haan, students ko real-world projects par practice karwaya jata hai."
  },
  {
    question: "Freelancing sikhate ho ya sirf development?",
    keywords: ["freelancing training included", "development training course", "freelancing and development both"],
    answer: "Freelancing aur development dono training provide ki jati hai."
  },
  {
    question: "Practical assignments hote hain ya sirf theory?",
    keywords: ["practical assignments included", "only theory or practical", "assignments in course"],
    answer: "Har course mein practical assignments included hote hain."
  },
  {
    question: "Workshop mein basic introduction hi hota hai ya coding practice bhi?",
    keywords: ["workshop includes coding practice", "workshop basic introduction", "workshop practical coding"],
    answer: "Workshop mein basic concepts aur coding practice dono shamil hote hain."
  },
  {
    question: "Students ko job preparation bhi karwate ho?",
    keywords: ["job preparation guidance", "job interview training", "career preparation support"],
    answer: "Haan, job interviews aur preparation ke liye guidance provide ki jati hai."
  },
  {
    question: "Course ke end par final project hota hai ya test?",
    keywords: ["final project course", "assessment test end of course", "final evaluation project or test"],
    answer: "Course ke end par final project aur assessment test hota hai."
  },

  // 5. Career & Support
  {
    question: "Course complete karne ke baad job support milti hai?",
    keywords: ["job support after course", "career support course", "placement support available"],
    answer: "Haan, students ko job support aur career guidance milta hai."
  },
  {
    question: "Freelancing clients find karne mein help karte ho?",
    keywords: ["help finding freelancing clients", "freelancing support provided", "clients guidance freelancing"],
    answer: "Haan, students ko freelancing clients find karne ke liye tips aur strategy di jati hai."
  },
  {
    question: "Resume/CV banane ka guidance dete ho?",
    keywords: ["resume building support", "CV making guidance", "resume tips for students"],
    answer: "Haan, resume aur CV banane ka proper guidance provide kiya jata hai."
  },
  {
    question: "Internship ka option available hai?",
    keywords: ["internship available with course", "internship opportunity provided", "internship option for students"],
    answer: "Haan, internship opportunities select students ko provide ki jati hain."
  },
  {
    question: "Alumni group ya community join karne ka chance hota hai?",
    keywords: ["alumni group join", "student community join", "community support after course"],
    answer: "Haan, students ko alumni community group join karne ka option milta hai."
  },
  {
    question: "Course complete karne ke baad support kitne months tak milta hai?",
    keywords: ["support duration after course", "post course support months", "course support validity"],
    answer: "Support limited time tak free hoti hai, phir extended support option hota hai. Awais's answer ---"
  },
  {
    question: "Agar student ko samajh na aaye to revision classes hoti hain?",
    keywords: ["revision classes for students", "extra classes if not understood", "supportive revision classes"],
    answer: "Haan, students ke liye revision classes bhi hoti hain."
  },
  {
    question: "Kya students ko projects par feedback milta hai?",
    keywords: ["project feedback for students", "assignment feedback provided", "feedback system for students"],
    answer: "Haan, har project aur assignment par feedback diya jata hai."
  },
  {
    question: "Career counseling sessions included hote hain?",
    keywords: ["career counseling available", "career sessions course", "career guidance support"],
    answer: "Haan, career counseling sessions courses ka hissa hote hain."
  },
  {
    question: "Kya apne company mein top students ko hire bhi karte ho?",
    keywords: ["hire top students", "company hires students", "job opportunity for top students"],
    answer: "Haan, top performing students ko company mein hire karne ka option consider kiya jata hai. Awais's answer ---"
  }
];

export default coursesFaq;
