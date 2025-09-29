// services_faq_keywords.js
// Array of FAQ objects with question, keywords (2–3), and answer fields.

const chatQA = [
  // Services FAQ Starts Here
  // 1. Price / Cost related
  {
    question: "Aapki services ki price range kya hai?",
    keywords: ["services", "price", "range"],
    answer: "Hamari services ki price range project ke type aur complexity par depend karti hai. Exact range ke liye Awais's answer ---"
  },
  {
    question: "Development aur marketing services ka budget kitna banta hai?",
    keywords: ["development", "marketing", "budget"],
    answer: "Development aur marketing ka budget alag hota hai. Custom quotation ke liye Awais's answer ---"
  },
  {
    question: "Charges fixed hain ya project ke hisaab se change hote hain?",
    keywords: ["charges", "fixed", "project"],
    answer: "Charges project ke scope, features aur requirements ke mutabiq change hote hain."
  },
  {
    question: "Mujhe ek basic website banwane ki cost bata dein?",
    keywords: ["basic", "website", "cost"],
    answer: "Basic website ki cost simple features aur design par depend karti hai. Exact cost ke liye Awais's answer ---"
  },
  {
    question: "Shopify/WordPress website ka package price kya hai?",
    keywords: ["shopify", "wordpress", "price"],
    answer: "Shopify aur WordPress ke packages alag alag hote hain. Detail pricing ke liye Awais's answer ---"
  },
  {
    question: "Small business ke liye affordable packages available hain?",
    keywords: ["small", "business", "packages"],
    answer: "Haan, small businesses ke liye affordable packages available hain jo unke budget ke mutabiq hote hain."
  },
  {
    question: "Aap log custom quotation dete ho ya standard packages?",
    keywords: ["custom", "quotation", "packages"],
    answer: "Dono options available hain. Client ki requirement ke mutabiq custom quotation bhi dete hain."
  },
  {
    question: "Development aur ads ek sath lene par discount milta hai?",
    keywords: ["development", "ads", "discount"],
    answer: "Haan, multiple services ek sath lene par discount provide kiya jata hai."
  },
  {
    question: "Service charges monthly hain ya one-time?",
    keywords: ["service", "charges", "monthly"],
    answer: "Kuch services one-time hoti hain aur kuch (maintenance/ads) monthly basis par hoti hain."
  },
  {
    question: "Consultation free hota hai ya paid?",
    keywords: ["consultation", "free", "paid"],
    answer: "Basic consultation free hota hai, detailed strategy consultation paid hota hai."
  },

  // 2. Delivery / Timeline related
  {
    question: "Website banane mein kitna time lagta hai?",
    keywords: ["website", "time", "banane"],
    answer: "Website ka time uske features aur complexity par depend karta hai. Awais's answer ---"
  },
  {
    question: "Project complete karne ka average duration kya hai?",
    keywords: ["project", "complete", "duration"],
    answer: "Average duration project ke scope par depend karta hai, usually kuch din se kuch hafte."
  },
  {
    question: "Shopify site launch karne mein minimum kitne din lagenge?",
    keywords: ["shopify", "site", "launch"],
    answer: "Shopify site minimum kuch dinon me launch ki ja sakti hai. Exact timeline Awais's answer ---"
  },
  {
    question: "Aap log fast delivery option dete ho?",
    keywords: ["fast", "delivery", "option"],
    answer: "Haan, urgent projects ke liye fast delivery option available hai."
  },
  {
    question: "Timelines fixed hoti hain ya client ki requirements par depend karti hain?",
    keywords: ["timelines", "fixed", "requirements"],
    answer: "Timelines mostly client ki requirements aur project scope par depend karti hain."
  },
  {
    question: "Small website ka delivery time kitna hota hai?",
    keywords: ["small", "website", "delivery"],
    answer: "Small websites usually kuch dinon me deliver ki ja sakti hain. Awais's answer ---"
  },
  {
    question: "Agar urgent project ho to aap manage karte ho?",
    keywords: ["urgent", "project", "manage"],
    answer: "Haan, urgent projects priority basis par handle kiye jate hain."
  },
  {
    question: "Ads setup karne mein kitna time lagta hai?",
    keywords: ["ads", "setup", "time"],
    answer: "Ads setup usually 1–2 dinon me ho jata hai, depending on requirements."
  },
  {
    question: "Kya website banane ke saath saath testing bhi hoti hai?",
    keywords: ["website", "testing", "banane"],
    answer: "Haan, website banane ke saath proper testing aur QA process hota hai."
  },
  {
    question: "Maintenance ke liye extra time charge hota hai?",
    keywords: ["maintenance", "extra", "time"],
    answer: "Maintenance ke liye alag se cost aur time charges hote hain."
  },

  // 3. Support / Maintenance related
  {
    question: "Kya website launch ke baad support milti hai?",
    keywords: ["website", "launch", "support"],
    answer: "Haan, website launch ke baad limited free support milti hai. Extended support Awais's answer ---"
  },
  {
    question: "Maintenance monthly hoti hai ya yearly?",
    keywords: ["maintenance", "monthly", "yearly"],
    answer: "Maintenance dono options (monthly aur yearly) me available hai."
  },
  {
    question: "Agar site mein bug aajaye to aap fix karte ho?",
    keywords: ["site", "bug", "fix"],
    answer: "Haan, site bugs fix kiye jate hain maintenance ke dauran."
  },
  {
    question: "Aap AMC (Annual Maintenance Contract) dete ho?",
    keywords: ["amc", "annual", "maintenance"],
    answer: "Haan, Annual Maintenance Contract (AMC) available hai clients ke liye."
  },
  {
    question: "Hosting aur domain ka support aapke through milta hai?",
    keywords: ["hosting", "domain", "support"],
    answer: "Haan, hosting aur domain ka setup aur support provide kiya jata hai."
  },
  {
    question: "Agar main apna server use karun to aap support karoge?",
    keywords: ["server", "use", "support"],
    answer: "Haan, agar client apna server use karna chahe to support diya jata hai."
  },
  {
    question: "Backup aur updates aapke zimmedari hoti hai?",
    keywords: ["backup", "updates", "zimmedari"],
    answer: "Backup aur updates contract ke mutabiq cover kiye jate hain."
  },
  {
    question: "Maintenance ka alag se cost hota hai?",
    keywords: ["maintenance", "alag", "cost"],
    answer: "Haan, maintenance ke liye alag se cost hota hai."
  },
  {
    question: "Website update karne ka process kya hota hai?",
    keywords: ["website", "update", "process"],
    answer: "Website update ka process request aur approval ke sath follow kiya jata hai."
  },
  {
    question: "24/7 customer support available hai ya working hours mein?",
    keywords: ["support", "24/7", "hours"],
    answer: "Support mostly working hours me hota hai. 24/7 support ke liye Awais's answer ---"
  },

  // 4. Ads / Marketing related
  {
    question: "Facebook ads ki strategy aap kis tarah banate ho?",
    keywords: ["facebook", "ads", "strategy"],
    answer: "Facebook ads ki strategy client ke goals aur target audience ke hisaab se banayi jati hai."
  },
  {
    question: "Ads ka result guarantee karte ho?",
    keywords: ["ads", "result", "guarantee"],
    answer: "Ads ka result guarantee nahi hota, lekin optimization aur testing ke through best results aim kiya jata hai."
  },
  {
    question: "Google business listing setup mein kya shamil hota hai?",
    keywords: ["google", "listing", "setup"],
    answer: "Google business listing setup mein profile creation, info update aur optimization shamil hai."
  },
  {
    question: "Ads ke liye creatives aur content aap banate ho ya client provide karta hai?",
    keywords: ["ads", "creatives", "content"],
    answer: "Dono options available hain. Hum creatives aur content provide karte hain ya client apna de sakta hai."
  },
  {
    question: "Ad spend aur service charges alag hote hain?",
    keywords: ["ad", "spend", "charges"],
    answer: "Haan, ad spend aur service charges alag hote hain."
  },
  {
    question: "Campaign ki performance kaise track hoti hai?",
    keywords: ["campaign", "performance", "track"],
    answer: "Campaign ki performance analytics tools ke zariye track hoti hai."
  },
  {
    question: "Kya aap reporting monthly dete ho ya weekly?",
    keywords: ["reporting", "monthly", "weekly"],
    answer: "Reporting client ki preference ke mutabiq monthly ya weekly provide ki jati hai."
  },
  {
    question: "Ads ke liye target audience aap suggest karte ho ya client decide karta hai?",
    keywords: ["ads", "audience", "target"],
    answer: "Target audience client ke input aur market research ke basis par suggest ki jati hai."
  },
  {
    question: "Agar ads ka result na aaye to kya refund hota hai?",
    keywords: ["ads", "result", "refund"],
    answer: "Refund policy depend karti hai. Exact terms ke liye Awais's answer ---"
  },
  {
    question: "Marketing ke packages alag hain ya web dev ke sath hi milte hain?",
    keywords: ["marketing", "packages", "webdev"],
    answer: "Marketing ke packages independent bhi available hain aur web dev ke sath combine bhi."
  },

  // 5. General Service Questions
  {
    question: "Aapki company ka kaam quality kaise ensure karte ho?",
    keywords: ["company", "quality", "kaam"],
    answer: "Quality ensure karne ke liye testing, reviews aur QA process follow kiya jata hai."
  },
  {
    question: "Aap projects portfolio ya samples dikhate ho?",
    keywords: ["portfolio", "samples", "projects"],
    answer: "Haan, projects ka portfolio aur samples available hain."
  },
  {
    question: "Agar mujhe sirf logo design chahiye ho to milega?",
    keywords: ["logo", "design", "sirf"],
    answer: "Haan, sirf logo design service bhi available hai."
  },
  {
    question: "Aap sirf development karte ho ya branding bhi?",
    keywords: ["development", "branding", "sirf"],
    answer: "Hum dono services provide karte hain: development aur branding."
  },
  {
    question: "Freelance platforms par bhi aap services dete ho?",
    keywords: ["freelance", "platforms", "services"],
    answer: "Haan, freelance platforms par bhi services available hain."
  },
  {
    question: "Company registered hai ya individual basis pe kaam hota hai?",
    keywords: ["company", "registered", "individual"],
    answer: "Company proper registered hai. Details ke liye Awais's answer ---"
  },
  {
    question: "Payment process kaisa hota hai (advance / milestone / full)?",
    keywords: ["payment", "process", "advance"],
    answer: "Payment process client ki requirement aur agreement ke hisaab se hota hai. Commonly advance + milestone."
  },
  {
    question: "Kya NDA sign karte ho agar client chahte ho?",
    keywords: ["nda", "sign", "client"],
    answer: "Haan, NDA sign kiya jata hai agar client request kare."
  },
  {
    question: "International clients ke liye bhi services available hain?",
    keywords: ["international", "clients", "services"],
    answer: "Haan, international clients ke liye bhi full services available hain."
  },
  {
    question: "Custom requirements ke liye flexibility hoti hai?",
    keywords: ["custom", "requirements", "flexibility"],
    answer: "Haan, custom requirements ke liye full flexibility hoti hai."
  },

  // Services FAQ Ends Here

  // New FAQ Section for Courses
  // Categories: Duration & Fee, Certification, Mode of Classes, Course Content & Skills, Career & Support
  // 1. Duration & Fee
  {
    question: "Course ki duration aur fee structure kya hai?",
    keywords: ["duration", "fee", "structure"],
    answer: "Hamare courses ki duration aur fee structure course type par depend karta hai. Exact details ke liye: Awais's answer ---"
  },
  {
    question: "Yeh course kitne months ka hota hai aur charges kitne hote hain?",
    keywords: ["months", "charges", "course"],
    answer: "Course ki duration aur charges alag-alag hote hain, jo course aap choose karte ho uske hisaab se. Awais's answer ---"
  },
  {
    question: "Aap log short aur long courses ki fee alag rakhte ho?",
    keywords: ["short", "long", "fee"],
    answer: "Haan, short aur long courses ki fee structure alag hota hai kyunki unka content aur duration different hota hai."
  },
  {
    question: "Workshop free hota hai ya uske bhi charges hain?",
    keywords: ["workshop", "free", "charges"],
    answer: "Kuch workshops free hoti hain aur kuch paid, yeh depend karta hai workshop ke type aur duration par. Awais's answer ---"
  },
  {
    question: "Course ke liye installment option available hai?",
    keywords: ["course", "installment", "option"],
    answer: "Haan, students ki asaani ke liye installment option bhi available hota hai."
  },
  {
    question: "Agar student afford na kar sake to discount milta hai?",
    keywords: ["discount", "student", "afford"],
    answer: "Jo students afford nahi kar pate unke liye special discounts ya scholarship options consider kiye jate hain."
  },
  {
    question: "Per month charges kitne bante hain?",
    keywords: ["per month", "charges", "fee"],
    answer: "Per month charges course ki total fee aur duration ke hisaab se calculate hote hain. Awais's answer ---"
  },
  {
    question: "Certificate course aur full course ki fee same hoti hai ya alag?",
    keywords: ["certificate", "full course", "fee"],
    answer: "Certificate aur full course ki fee alag hoti hai kyunki unka content aur duration different hota hai."
  },
  {
    question: "Initial registration fee hoti hai ya direct full payment?",
    keywords: ["registration", "fee", "payment"],
    answer: "Usually ek small registration fee hoti hai, baaki fee installments ya full payment mein adjust hoti hai. Awais's answer ---"
  },
  {
    question: "Hidden charges bhi hote hain ya jo batao wahi final hota hai?",
    keywords: ["hidden", "charges", "final"],
    answer: "Hamare courses mein koi hidden charges nahi hote. Jo fee pehle batayi jati hai wahi final hoti hai."
  },

  // 2. Certification
  {
    question: "Course complete karne ke baad certificate milta hai?",
    keywords: ["certificate", "course", "complete"],
    answer: "Haan, course successfully complete karne ke baad certificate provide kiya jata hai."
  },
  {
    question: "Certificate government approved hota hai ya company ka?",
    keywords: ["certificate", "government", "company"],
    answer: "Certificate officially hamari company ka hota hai, government approval ke liye: Awais's answer ---"
  },
  {
    question: "Certificate online verify ho sakta hai?",
    keywords: ["certificate", "online", "verify"],
    answer: "Haan, certificate online verify karne ka system available hota hai."
  },
  {
    question: "Certification free hai ya alag charges hote hain?",
    keywords: ["certification", "free", "charges"],
    answer: "Course ke andar certification included hota hai. Kabhi kabhi extra charges ho sakte hain for special certificates. Awais's answer ---"
  },
  {
    question: "Workshop attend karne walon ko bhi certificate milega?",
    keywords: ["workshop", "certificate", "attend"],
    answer: "Short workshops ke liye participation certificate provide kiya jata hai."
  },
  {
    question: "Certificate ka value freelancing platforms par hoga?",
    keywords: ["certificate", "freelancing", "value"],
    answer: "Haan, certificate freelancing profiles par value add karta hai aur clients ke trust build karta hai."
  },
  {
    question: "Agar student fail ho jaye to certificate milega?",
    keywords: ["fail", "certificate", "student"],
    answer: "Nahi, certificate sirf successful completion par issue hota hai."
  },
  {
    question: "Course ke saath internship certificate bhi provide karte ho?",
    keywords: ["internship", "certificate", "course"],
    answer: "Kuch specific programs ke saath internship certificates bhi diye jate hain."
  },
  {
    question: "Certificate physical (printed) milta hai ya digital?",
    keywords: ["certificate", "physical", "digital"],
    answer: "Certificate dono formats mein mil sakta hai, digital aur printed. Awais's answer ---"
  },
  {
    question: "Kya certificate international level par valid hai?",
    keywords: ["certificate", "international", "valid"],
    answer: "Certificate international level par recognition rakhta hai lekin validity market aur clients par depend karti hai."
  },

  // 3. Mode of Classes
  {
    question: "Classes online hoti hain ya physical?",
    keywords: ["classes", "online", "physical"],
    answer: "Hamari classes dono modes mein available hoti hain: online aur physical."
  },
  {
    question: "Online courses live hote hain ya recorded lectures?",
    keywords: ["online", "live", "recorded"],
    answer: "Online courses mein live sessions aur recorded lectures dono options available hain."
  },
  {
    question: "Agar class miss ho jaye to recording milti hai?",
    keywords: ["class", "miss", "recording"],
    answer: "Haan, class miss hone par recording provide ki jati hai."
  },
  {
    question: "Offline classes kin cities mein hoti hain?",
    keywords: ["offline", "classes", "cities"],
    answer: "Offline classes kin kin cities mein hoti hain, iske liye: Awais's answer ---"
  },
  {
    question: "Online class ke liye special software chahiye ya normal Zoom/Meet chalega?",
    keywords: ["online", "software", "Zoom"],
    answer: "Normal Zoom/Google Meet software hi kaafi hota hai, special software ki zaroorat nahi."
  },
  {
    question: "Students ke liye flexible timing available hai?",
    keywords: ["students", "timing", "flexible"],
    answer: "Haan, students ki convenience ke liye flexible timings offer kiye jate hain."
  },
  {
    question: "Group classes hoti hain ya one-to-one sessions bhi possible hain?",
    keywords: ["group", "one-to-one", "sessions"],
    answer: "Dono options available hote hain: group classes aur one-to-one sessions."
  },
  {
    question: "Agar student travel kare to class join kar sakta hai?",
    keywords: ["student", "travel", "class"],
    answer: "Online classes ki wajah se student kahin se bhi join kar sakta hai."
  },
  {
    question: "Classes English mein hoti hain ya Urdu mein?",
    keywords: ["classes", "English", "Urdu"],
    answer: "Classes English aur Urdu dono languages mein hoti hain, taake students easily samajh saken."
  },
  {
    question: "Evening batch bhi hota hai ya sirf morning?",
    keywords: ["evening", "batch", "morning"],
    answer: "Haan, evening aur morning dono batches available hote hain."
  },

  // 4. Course Content & Skills
  {
    question: "Course ke andar kya topics cover hote hain?",
    keywords: ["course", "topics", "cover"],
    answer: "Course ke topics relevant industry skills aur practical knowledge cover karte hain. Awais's answer ---"
  },
  {
    question: "Shopify/WordPress course mein sirf basic sikhate ho ya advanced bhi?",
    keywords: ["Shopify", "WordPress", "advanced"],
    answer: "Dono options available hain: basic aur advanced level training."
  },
  {
    question: "Custom coding mein kaunsi languages sikhayi jati hain?",
    keywords: ["custom coding", "languages", "teach"],
    answer: "Coding courses mein HTML, CSS, JavaScript aur frameworks sikhaye jate hain. Awais's answer ---"
  },
  {
    question: "Syllabus fix hai ya time-to-time update hota hai?",
    keywords: ["syllabus", "update", "fix"],
    answer: "Syllabus regularly update hota hai taake latest trends cover kiye ja saken."
  },
  {
    question: "Real-world projects bhi karwaye jate hain?",
    keywords: ["real-world", "projects", "practice"],
    answer: "Haan, students ko real-world projects par practice karwaya jata hai."
  },
  {
    question: "Freelancing sikhate ho ya sirf development?",
    keywords: ["freelancing", "development", "skills"],
    answer: "Freelancing aur development dono training provide ki jati hai."
  },
  {
    question: "Practical assignments hote hain ya sirf theory?",
    keywords: ["practical", "assignments", "theory"],
    answer: "Har course mein practical assignments included hote hain."
  },
  {
    question: "Workshop mein basic introduction hi hota hai ya coding practice bhi?",
    keywords: ["workshop", "basic", "practice"],
    answer: "Workshop mein basic concepts aur coding practice dono shamil hote hain."
  },
  {
    question: "Students ko job preparation bhi karwate ho?",
    keywords: ["students", "job", "preparation"],
    answer: "Haan, job interviews aur preparation ke liye guidance provide ki jati hai."
  },
  {
    question: "Course ke end par final project hota hai ya test?",
    keywords: ["final", "project", "test"],
    answer: "Course ke end par final project aur assessment test hota hai."
  },

  // 5. Career & Support
  {
    question: "Course complete karne ke baad job support milti hai?",
    keywords: ["course", "job", "support"],
    answer: "Haan, students ko job support aur career guidance milta hai."
  },
  {
    question: "Freelancing clients find karne mein help karte ho?",
    keywords: ["freelancing", "clients", "help"],
    answer: "Haan, students ko freelancing clients find karne ke liye tips aur strategy di jati hai."
  },
  {
    question: "Resume/CV banane ka guidance dete ho?",
    keywords: ["resume", "CV", "guidance"],
    answer: "Haan, resume aur CV banane ka proper guidance provide kiya jata hai."
  },
  {
    question: "Internship ka option available hai?",
    keywords: ["internship", "option", "available"],
    answer: "Haan, internship opportunities select students ko provide ki jati hain."
  },
  {
    question: "Alumni group ya community join karne ka chance hota hai?",
    keywords: ["alumni", "community", "join"],
    answer: "Haan, students ko alumni community group join karne ka option milta hai."
  },
  {
    question: "Course complete karne ke baad support kitne months tak milta hai?",
    keywords: ["support", "months", "complete"],
    answer: "Support limited time tak free hoti hai, phir extended support option hota hai. Awais's answer ---"
  },
  {
    question: "Agar student ko samajh na aaye to revision classes hoti hain?",
    keywords: ["revision", "classes", "student"],
    answer: "Haan, students ke liye revision classes bhi hoti hain."
  },
  {
    question: "Kya students ko projects par feedback milta hai?",
    keywords: ["projects", "feedback", "students"],
    answer: "Haan, har project aur assignment par feedback diya jata hai."
  },
  {
    question: "Career counseling sessions included hote hain?",
    keywords: ["career", "counseling", "sessions"],
    answer: "Haan, career counseling sessions courses ka hissa hote hain."
  },
  {
    question: "Kya apne company mein top students ko hire bhi karte ho?",
    keywords: ["company", "hire", "students"],
    answer: "Haan, top performing students ko company mein hire karne ka option consider kiya jata hai. Awais's answer ---"
  },

  // New FAQ Section for Workshops with Schools
  // Categories: Workshop Charges / Free ya Paid, Profit Sharing (50/50 System), Students Related, Management Concerns
  
  // 1. Workshop Charges / Free ya Paid
  {
    question: "Workshop free hai ya uske liye charges hote hain?",
    keywords: ["workshop", "free", "charges"],
    answer: "Kuch workshops free hoti hain aur kuch paid, yeh depend karta hai school ke saath agreement par."
  },
  {
    question: "1–2 din ka workshop complimentary hota hai ya paid?",
    keywords: ["1-2 din", "workshop", "paid"],
    answer: "Short workshops complimentary bhi ho sakti hain aur paid bhi, Awais's answer ---"
  },
  {
    question: "Kya school ko workshop organize karne ke liye kuch invest karna padega?",
    keywords: ["school", "workshop", "invest"],
    answer: "Usually school ko basic facilities provide karni hoti hain, major investment ki zaroorat nahi hoti."
  },
  {
    question: "Students se directly charges liye jate hain ya school se?",
    keywords: ["students", "charges", "school"],
    answer: "Charges dono model par ho sakte hain: directly students se ya school ke through."
  },
  {
    question: "Agar workshop free hai to company ko faida kaise hoga?",
    keywords: ["free", "workshop", "faida"],
    answer: "Free workshops se students ko awareness milti hai aur baad mein courses ke liye enroll karte hain."
  },
  {
    question: "Free workshop ke saath koi hidden cost hoti hai?",
    keywords: ["free", "hidden", "cost"],
    answer: "Nahi, free workshops ke saath hidden cost nahi hoti."
  },
  {
    question: "Demo workshop paid hota hai ya free trial ke taur pe hota hai?",
    keywords: ["demo", "workshop", "trial"],
    answer: "Demo workshops mostly free trial hote hain."
  },
  {
    question: "School ko koi management fee deni hoti hai?",
    keywords: ["school", "management", "fee"],
    answer: "School ko management fee deni hoti hai ya nahi, yeh agreement par depend karta hai. Awais's answer ---"
  },
  {
    question: "Workshop ke liye venue aur equipment ka kharcha kis ka hota hai?",
    keywords: ["venue", "equipment", "kharcha"],
    answer: "Venue aur equipment ka kharcha school provide karta hai, company instructors aur content deti hai."
  },
  {
    question: "Free workshop ke baad paid course mandatory hota hai ya optional?",
    keywords: ["free", "paid course", "optional"],
    answer: "Paid course optional hota hai, student ki marzi hoti hai join kare ya nahi."
  },

  // 2. Profit Sharing (50/50 System)
  {
    question: "50% profit sharing ka system practically kaise kaam karta hai?",
    keywords: ["profit", "sharing", "system"],
    answer: "Jo students enroll karte hain unki fees ka 50% school aur 50% company ko milta hai."
  },
  {
    question: "School ka hissa kis tarah transfer hota hai?",
    keywords: ["school", "hissa", "transfer"],
    answer: "School ka hissa direct transfer ya account ke through diya jata hai. Awais's answer ---"
  },
  {
    question: "Profit sharing monthly hoti hai ya har batch ke baad?",
    keywords: ["profit", "monthly", "batch"],
    answer: "Profit sharing har batch ke baad clear ki jati hai."
  },
  {
    question: "Agar kam students enroll ho to school ka profit kam hoga?",
    keywords: ["students", "enroll", "profit"],
    answer: "Haan, jitne zyada students enroll karte hain utna zyada school ka profit hota hai."
  },
  {
    question: "School ka share fixed hai ya negotiable?",
    keywords: ["school", "share", "negotiable"],
    answer: "School ka share usually fixed hota hai lekin negotiation possible hai."
  },
  {
    question: "Agreement sign hota hai ya sirf verbal understanding hoti hai?",
    keywords: ["agreement", "verbal", "sign"],
    answer: "Formal agreement sign hota hai taake transparency ho."
  },
  {
    question: "Agar students fees na dein to school ka hissa kaise milega?",
    keywords: ["fees", "students", "school hissa"],
    answer: "Profit sharing sirf received payments par hoti hai."
  },
  {
    question: "Profit ke calculation kaise hoti hai (gross ya net)?",
    keywords: ["profit", "calculation", "gross"],
    answer: "Profit calculation net received fees par hoti hai."
  },
  {
    question: "School ko advance kuch diya jata hai ya sirf baad mein?",
    keywords: ["advance", "school", "payment"],
    answer: "School ko advance nahi milta, hamesha students enrollment ke baad hissa diya jata hai."
  },
  {
    question: "School apna hissa track kaise kar sakta hai?",
    keywords: ["school", "hissa", "track"],
    answer: "School ko regular reports aur fee collection ka record share kiya jata hai."
  },

  // 3. Students Related
  {
    question: "Workshop ke liye minimum kitne students required hote hain?",
    keywords: ["minimum", "students", "required"],
    answer: "Workshop organize karne ke liye minimum students requirement hoti hai. Awais's answer ---"
  },
  {
    question: "Maximum students ki limit hoti hai?",
    keywords: ["maximum", "students", "limit"],
    answer: "Haan, quality maintain karne ke liye maximum limit rakhi jati hai."
  },
  {
    question: "Agar kuch students interested na ho to kya unpe force hoga?",
    keywords: ["students", "interested", "force"],
    answer: "Nahi, students ko force nahi kiya jata, sirf interested students hi join karte hain."
  },
  {
    question: "Workshop sirf college students ke liye hai ya school level ke liye bhi?",
    keywords: ["college", "school", "students"],
    answer: "Workshops college aur school dono levels ke students ke liye organize ki ja sakti hain."
  },
  {
    question: "Kya arts/background ke students bhi join kar sakte hain?",
    keywords: ["arts", "background", "students"],
    answer: "Haan, arts ya kisi bhi background ke students join kar sakte hain."
  },
  {
    question: "Workshop ke liye prerequisites hote hain?",
    keywords: ["prerequisites", "workshop", "requirements"],
    answer: "Workshop ke liye basic prerequisites clear kar diye jate hain. Awais's answer ---"
  },
  {
    question: "Attendance compulsory hoti hai ya optional?",
    keywords: ["attendance", "compulsory", "optional"],
    answer: "Attendance compulsory hoti hai taake learning complete ho."
  },
  {
    question: "Students ko workshop ke baad enrollment ke liye motivate kaise karte ho?",
    keywords: ["students", "enrollment", "motivate"],
    answer: "Students ko career benefits aur practical exposure ke zariye motivate kiya jata hai."
  },
  {
    question: "Agar ek student drop kar de to fees ka kya hoga?",
    keywords: ["student", "drop", "fees"],
    answer: "Drop karne par fee refund policy depend karti hai. Awais's answer ---"
  },
  {
    question: "Kya students ko scholarships bhi milti hain?",
    keywords: ["scholarships", "students", "aid"],
    answer: "Haan, students ko scholarships aur discounts diye jate hain."
  },

  // 4. Management Concerns
  {
    question: "Workshop organize karne ke liye school ko kya responsibilities leni hongi?",
    keywords: ["school", "responsibilities", "organize"],
    answer: "School ko sirf venue aur student coordination ki responsibility leni hoti hai."
  },
  {
    question: "Venue aur projector provide karna school ka kaam hai ya company ka?",
    keywords: ["venue", "projector", "school"],
    answer: "Venue aur projector usually school provide karta hai."
  },
  {
    question: "Teachers ko bhi training di jati hai ya sirf students ko?",
    keywords: ["teachers", "training", "students"],
    answer: "Teachers ke liye bhi training sessions arrange kiye ja sakte hain."
  },
  {
    question: "Workshop ki duration fix hai ya flexible?",
    keywords: ["workshop", "duration", "flexible"],
    answer: "Workshop ki duration fix hoti hai lekin school ke schedule ke hisaab se flexible banayi ja sakti hai."
  },
  {
    question: "Agar ek din school mein holiday ho jaye to workshop shift hoga?",
    keywords: ["holiday", "school", "workshop"],
    answer: "Haan, workshop school ki availability ke mutabiq shift ho jata hai."
  },
  {
    question: "Discipline aur student management ka zimma kis ka hoga?",
    keywords: ["discipline", "management", "school"],
    answer: "Discipline aur student management ka zimma school ka hota hai."
  },
  {
    question: "Workshop ke liye special permission chahi hoti hai?",
    keywords: ["special", "permission", "workshop"],
    answer: "School ki policy ke hisaab se special permission chahi ho sakti hai."
  },
  {
    question: "Agar parent complain kare to uska jawab kaun dega?",
    keywords: ["parent", "complain", "jawab"],
    answer: "Parent complaints ka jawab school aur company milkar dete hain."
  },
  {
    question: "Company ke instructors verified hote hain ya fresh graduates?",
    keywords: ["instructors", "verified", "graduates"],
    answer: "Company ke instructors verified aur experienced hote hain. Awais's answer ---"
  },
  {
    question: "Kya workshop ke baad feedback report school ko di jati hai?",
    keywords: ["feedback", "report", "school"],
    answer: "Haan, workshop ke baad feedback report school ko provide ki jati hai."
  },

  // 5. Risk & Benefits
  {
    question: "Agar students enroll na karein to school ka loss to nahi hoga?",
    keywords: ["students", "enroll", "loss"],
    answer: "Nahi, agar students enroll na karein to school ko financial loss nahi hota."
  },
  {
    question: "Is scheme se school ki reputation par kya asar padega?",
    keywords: ["scheme", "reputation", "school"],
    answer: "Yeh scheme school ki reputation enhance karti hai kyunki students ko naye skills milte hain."
  },
  {
    question: "School ke liye is model ka sabse bada faida kya hai?",
    keywords: ["school", "faida", "model"],
    answer: "School ke liye sabse bada faida yeh hai ke students ke liye extra learning opportunities create hoti hain."
  },
  {
    question: "Agar workshop fail ho jaye to backup plan kya hota hai?",
    keywords: ["workshop", "fail", "backup"],
    answer: "Workshop fail hone ki surat mein alternate sessions arrange kiye jate hain."
  },
  {
    question: "Long-term mein school aur company dono ko kya benefits milte hain?",
    keywords: ["long-term", "benefits", "school"],
    answer: "Dono parties ko long-term reputation, revenue aur partnerships ka faida hota hai."
  },
  {
    question: "Parents ko kaise convince kiya jata hai?",
    keywords: ["parents", "convince", "students"],
    answer: "Parents ko benefits aur future career scope samjha kar convince kiya jata hai."
  },
  {
    question: "Company kitne arse tak partnership maintain karti hai?",
    keywords: ["company", "partnership", "time"],
    answer: "Partnership ka duration agreement aur performance par depend karta hai."
  },
  {
    question: "School ko advertisement mein credit milta hai ya sirf company ka naam aata hai?",
    keywords: ["advertisement", "credit", "school"],
    answer: "Advertisement mein school aur company dono ka naam include kiya jata hai."
  },
  {
    question: "Workshop ka record (photos/videos) share kiya jata hai school ke sath?",
    keywords: ["record", "photos", "school"],
    answer: "Haan, workshop ka record school ke sath share kiya jata hai."
  },
  {
    question: "School aur company ke darmiyan relation ek-time ka hota hai ya future mein repeat ho sakta hai?",
    keywords: ["relation", "school", "future"],
    answer: "Relation ek-time ka bhi ho sakta hai aur long-term repeatable partnership bhi."
  },

  // New FAQ Section for Affiliate Program
  // Categories: Commission Structure, Payment Process
  {
    question: "Affiliate ka commission kitna hota hai?",
    keywords: ["affiliate", "commission", "earning"],
    answer: "Hamare affiliate program ka commission percentage fix hota hai. Exact percentage ke liye Awais's answer ---"
  },
  {
    question: "Har student refer karne par mujhe kitni earning hogi?",
    keywords: ["student", "refer", "earning"],
    answer: "Har successful referral par earning commission ke structure ke hisaab se hoti hai. Exact amount ke liye Awais's answer ---"
  },
  {
    question: "Commission fixed hota hai ya course ki fee ke hisaab se?",
    keywords: ["commission", "fixed", "course"],
    answer: "Commission structure kuch cases me fixed hota hai aur kuch me course fee ke hisaab se percentage base hota hai."
  },
  {
    question: "Agar multiple students refer karun to har par commission milega?",
    keywords: ["multiple", "students", "commission"],
    answer: "Haan, har student referral par commission milega, chahe ek ho ya multiple referrals."
  },
  {
    question: "Percentage kitni hoti hai referral par?",
    keywords: ["percentage", "referral", "commission"],
    answer: "Referral percentage fix hoti hai, detail ke liye Awais's answer ---"
  },
  {
    question: "Commission one-time hota hai ya recurring?",
    keywords: ["commission", "one-time", "recurring"],
    answer: "Hamare affiliate commission one-time payment hoti hai per successful referral."
  },
  {
    question: "Mujhe cash milega ya discount ke form mein benefit hoga?",
    keywords: ["cash", "discount", "benefit"],
    answer: "Aapko cash payout milega, discount sirf special campaigns me diya jata hai."
  },
  {
    question: "Agar student chhota package lega to commission kam hoga?",
    keywords: ["student", "package", "commission"],
    answer: "Haan, commission package fee ke hisaab se proportionally calculate hota hai."
  },
  {
    question: "Commission ke rates time ke sath change hote hain?",
    keywords: ["commission", "rates", "change"],
    answer: "Rates policy ke mutabiq change ho sakte hain, lekin affiliates ko pehle inform kiya jata hai."
  },
  {
    question: "Referral ki earning kitni jaldi receive hoti hai?",
    keywords: ["referral", "earning", "receive"],
    answer: "Earning usually 7–15 din me process hoti hai jab student ki payment confirm ho jati hai."
  },

  // 2. Payment Process
  {
    question: "Payment kis tarah milti hai (cash, bank, Easypaisa)?",
    keywords: ["payment", "cash", "bank"],
    answer: "Payment bank transfer, Easypaisa, JazzCash aur international clients ke liye PayPal/wise ke through milti hai. Local option ke liye Awais's answer ---"
  },
  {
    question: "Commission payout monthly hota hai ya per student?",
    keywords: ["commission", "payout", "monthly"],
    answer: "Payout structure per student referral ke sath hota hai, lekin affiliates monthly payout choose kar sakte hain."
  },
  {
    question: "Minimum payout limit kya hai?",
    keywords: ["minimum", "payout", "limit"],
    answer: "Minimum payout limit Awais's answer ---"
  },
  {
    question: "Payment receive karne ke liye account banana parta hai?",
    keywords: ["payment", "account", "receive"],
    answer: "Haan, payment receive karne ke liye simple affiliate account banana zaroori hai."
  },
  {
    question: "Referral proof hone par kitne din mein payment milti hai?",
    keywords: ["referral", "proof", "payment"],
    answer: "Proof confirm hone ke baad 7–10 working days me payment transfer hoti hai."
  },
  {
    question: "Agar student fee installment mein de to commission bhi installment mein milega?",
    keywords: ["student", "installment", "commission"],
    answer: "Haan, commission student ki installment ke hisaab se distribute hota hai."
  },
  {
    question: "Payment automated hoti hai ya manually transfer hoti hai?",
    keywords: ["payment", "automated", "manual"],
    answer: "Payment process mostly manual verification ke sath hoti hai, lekin future me automated system plan hai."
  },
  {
    question: "International affiliates ko payment kaise milti hai?",
    keywords: ["international", "affiliates", "payment"],
    answer: "International affiliates ko Wise/Payoneer/PayPal ke through payment milti hai."
  },
  {
    question: "Agar student refund le le to affiliate ka commission adjust hoga?",
    keywords: ["student", "refund", "commission"],
    answer: "Haan, agar student refund le to affiliate commission bhi adjust ya deduct hota hai."
  },
  {
    question: "Payment late hone ki possibility hoti hai?",
    keywords: ["payment", "late", "possibility"],
    answer: "Rare cases me payment delay ho sakti hai lekin affiliates ko timely update diya jata hai."
  },

  // 3. Tracking / Proof
  {
    question: "Referral track kaise hota hai?",
    keywords: ["referral", "track", "system"],
    answer: "Referral unique ID/link ke through track hota hai jo affiliate ko diya jata hai."
  },
  {
    question: "Mujhe kaise pata chalega ke student mera refer tha?",
    keywords: ["student", "refer", "pata"],
    answer: "Affiliate portal par aap check kar sakte hain ke student aapke referral se aaya ya nahi."
  },
  {
    question: "Referral system online hai ya manual?",
    keywords: ["referral", "system", "manual"],
    answer: "Referral system online automated hai."
  },
  {
    question: "Tracking link milta hai ya sirf name mention karna hota hai?",
    keywords: ["tracking", "link", "name"],
    answer: "Har affiliate ko ek unique tracking link diya jata hai."
  },
  {
    question: "Referral ka data affiliate ke sath share hota hai?",
    keywords: ["referral", "data", "share"],
    answer: "Haan, referral data affiliates ke portal par visible hota hai."
  },
  {
    question: "Agar do log ek hi student refer karen to commission kis ko milega?",
    keywords: ["student", "refer", "commission"],
    answer: "Jo affiliate ka link pehle use hua hoga usko commission milega."
  },
  {
    question: "Student admission form mein referral mention karna zaroori hai?",
    keywords: ["student", "admission", "referral"],
    answer: "Haan, referral ID mention karna zaroori hai for proper tracking."
  },
  {
    question: "Tracking transparent hai ya affiliate ko regularly update milti hai?",
    keywords: ["tracking", "transparent", "update"],
    answer: "Tracking system transparent hai aur affiliate ko regular updates milte hain."
  },
  {
    question: "Referral ka status check karne ka portal hota hai?",
    keywords: ["referral", "status", "portal"],
    answer: "Haan, ek affiliate portal hota hai jahan se status check kiya ja sakta hai."
  },
  {
    question: "Agar galti se referral miss ho jaye to correction hoti hai?",
    keywords: ["referral", "miss", "correction"],
    answer: "Haan, manual verification ke zariye referral correction possible hoti hai."
  },

  // 4. Terms & Conditions
  {
    question: "Affiliate program join karne ke liye koi charges hain?",
    keywords: ["affiliate", "program", "charges"],
    answer: "Affiliate program join karna bilkul free hai."
  },
  {
    question: "Har koi affiliate ban sakta hai ya criteria hota hai?",
    keywords: ["affiliate", "criteria", "ban"],
    answer: "Haan, har interested individual affiliate ban sakta hai. Koi strict criteria nahi hai."
  },
  {
    question: "Kya students bhi affiliate ban sakte hain?",
    keywords: ["students", "affiliate", "ban"],
    answer: "Haan, students bhi affiliate ban kar earning kar sakte hain."
  },
  {
    question: "Minimum age requirement hoti hai affiliate ke liye?",
    keywords: ["minimum", "age", "affiliate"],
    answer: "Affiliate ke liye minimum age requirement 18 years hoti hai."
  },
  {
    question: "Affiliate contract sign karna padta hai ya sirf register karna hota hai?",
    keywords: ["affiliate", "contract", "register"],
    answer: "Sirf online registration karna hota hai, contract optional hai."
  },
  {
    question: "Referral sirf web dev courses ke liye valid hai ya services ke liye bhi?",
    keywords: ["referral", "courses", "services"],
    answer: "Referral both web development courses aur selected services ke liye valid hai."
  },
  {
    question: "Affiliate program permanent hai ya limited time offer?",
    keywords: ["affiliate", "program", "permanent"],
    answer: "Program long-term permanent hai, limited time nahi."
  },
  {
    question: "Agar rules violate ho jayein to account block hota hai?",
    keywords: ["rules", "violate", "account"],
    answer: "Haan, rules violate hone par affiliate account suspend ya block ho sakta hai."
  },
  {
    question: "Referral ka limit hota hai ya unlimited?",
    keywords: ["referral", "limit", "unlimited"],
    answer: "Referral unlimited hota hai, koi limit nahi hai."
  },
  {
    question: "Affiliate ek hi waqt multiple services refer kar sakta hai?",
    keywords: ["affiliate", "multiple", "services"],
    answer: "Haan, affiliate multiple services ek sath refer kar sakta hai."
  },

  // 5. Benefits & Opportunities
  {
    question: "Affiliate banne ka sabse bada benefit kya hai?",
    keywords: ["affiliate", "benefit", "income"],
    answer: "Affiliate banne ka sabse bada benefit ye hai ke aap without investment part-time earning kar sakte ho."
  },
  {
    question: "Commission ke ilawa koi extra rewards hote hain?",
    keywords: ["commission", "extra", "rewards"],
    answer: "Haan, top affiliates ke liye bonuses aur rewards bhi hote hain."
  },
  {
    question: "Referral dene se discount milega ya cash dono options hain?",
    keywords: ["referral", "discount", "cash"],
    answer: "Mostly cash payout hota hai, discount special campaigns me diya jata hai."
  },
  {
    question: "Top affiliates ko bonuses bhi milte hain?",
    keywords: ["top", "affiliates", "bonuses"],
    answer: "Haan, top affiliates ko monthly/quarterly bonuses milte hain."
  },
  {
    question: "Affiliate ke liye training ya guidance provide karte ho?",
    keywords: ["affiliate", "training", "guidance"],
    answer: "Haan, affiliates ke liye training aur marketing guidance provide ki jati hai."
  },
  {
    question: "Referral ke zariye part-time income banayi ja sakti hai?",
    keywords: ["referral", "income", "part-time"],
    answer: "Bilkul, affiliate program se part-time earning easily possible hai."
  },
  {
    question: "Affiliate program long-term earning opportunity hai ya sirf short-term?",
    keywords: ["affiliate", "earning", "opportunity"],
    answer: "Program long-term earning opportunity provide karta hai."
  },
  {
    question: "Affiliate ka profile company ki site par show hota hai?",
    keywords: ["affiliate", "profile", "site"],
    answer: "Affiliate profile site par show nahi hota, lekin records system me maintain hote hain."
  },
  {
    question: "Kya affiliates ko marketing material (posters, content) diya jata hai?",
    keywords: ["affiliates", "marketing", "material"],
    answer: "Haan, affiliates ko ready-made marketing content provide kiya jata hai."
  },
  {
    question: "Affiliate program future mein expand hoga ya abhi limited hai?",
    keywords: ["affiliate", "program", "future"],
    answer: "Program future me aur expand kiya jayega with more services."
  }
];


export default chatQA;

