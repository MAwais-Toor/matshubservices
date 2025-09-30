const servicesFaq = [
  // Services FAQ Starts Here
  // 1. Price / Cost related
  {
    question: "Aapki services ki price range kya hai?",
    keywords: [
      "services price", "services cost", "services charges",
      "price range", "cost range", "budget range"
    ],
    answer: "Hamari services ki price range project ke type aur complexity par depend karti hai. Exact range ke liye Awais's answer ---"
  },
  {
    question: "Development aur marketing services ka budget kitna banta hai?",
    keywords: [
      "development budget", "marketing budget", "services budget",
      "development cost", "marketing cost", "marketing charges", "development charges"
    ],
    answer: "Development aur marketing ka budget alag hota hai. Custom quotation ke liye Awais's answer ---"
  },
  {
    question: "Charges fixed hain ya project ke hisaab se change hote hain?",
    keywords: [
      "fixed charges", "fixed cost", "project cost", "project based charges",
      "services fixed charges", "project charges"
    ],
    answer: "Charges project ke scope, features aur requirements ke mutabiq change hote hain."
  },
  {
    question: "Mujhe ek basic website banwane ki cost bata dein?",
    keywords: [
      "basic website cost", "simple website cost", "starter website price",
      "basic site charges", "website banane ki cost", "cheap website price"
    ],
    answer: "Basic website ki cost simple features aur design par depend karti hai. Exact cost ke liye Awais's answer ---"
  },
  {
    question: "Shopify/WordPress website ka package price kya hai?",
    keywords: [
      "shopify website price", "wordpress website price", "shopify package cost",
      "wordpress package charges", "shopify price plan", "wordpress price plan"
    ],
    answer: "Shopify aur WordPress ke packages alag alag hote hain. Detail pricing ke liye Awais's answer ---"
  },
  {
    question: "Small business ke liye affordable packages available hain?",
    keywords: [
      "small business packages", "affordable packages", "cheap business website",
      "low cost packages", "budget friendly services", "startup packages"
    ],
    answer: "Haan, small businesses ke liye affordable packages available hain jo unke budget ke mutabiq hote hain."
  },
  {
    question: "Aap log custom quotation dete ho ya standard packages?",
    keywords: [
      "custom quotation", "standard packages", "customized packages",
      "tailored quotation", "ready made packages", "services quotation"
    ],
    answer: "Dono options available hain. Client ki requirement ke mutabiq custom quotation bhi dete hain."
  },
  {
    question: "Development aur ads ek sath lene par discount milta hai?",
    keywords: [
      "development discount", "ads discount", "multiple services discount",
      "package discount", "combo services discount"
    ],
    answer: "Haan, multiple services ek sath lene par discount provide kiya jata hai."
  },
  {
    question: "Service charges monthly hain ya one-time?",
    keywords: [
      "monthly charges", "one time charges", "subscription charges",
      "service charges monthly", "service cost one time"
    ],
    answer: "Kuch services one-time hoti hain aur kuch (maintenance/ads) monthly basis par hoti hain."
  },
  {
    question: "Consultation free hota hai ya paid?",
    keywords: [
      "free consultation", "paid consultation", "consultation charges",
      "consultation cost", "consultation price"
    ],
    answer: "Basic consultation free hota hai, detailed strategy consultation paid hota hai."
  },

  // 2. Delivery / Timeline related
  {
    question: "Website banane mein kitna time lagta hai?",
    keywords: [
      "website banane ka time", "site banane ka time", "website development time",
      "website delivery duration", "website banane ki timeline"
    ],
    answer: "Website ka time uske features aur complexity par depend karta hai. Awais's answer ---"
  },
  {
    question: "Project complete karne ka average duration kya hai?",
    keywords: [
      "project duration", "project completion time", "average project time",
      "project completion duration"
    ],
    answer: "Average duration project ke scope par depend karta hai, usually kuch din se kuch hafte."
  },
  {
    question: "Shopify site launch karne mein minimum kitne din lagenge?",
    keywords: [
      "shopify site launch time", "shopify launch duration", "shopify launch minimum days",
      "shopify setup time"
    ],
    answer: "Shopify site minimum kuch dinon me launch ki ja sakti hai. Exact timeline Awais's answer ---"
  },
  {
    question: "Aap log fast delivery option dete ho?",
    keywords: [
      "fast delivery", "quick delivery", "urgent delivery",
      "express delivery option"
    ],
    answer: "Haan, urgent projects ke liye fast delivery option available hai."
  },
  {
    question: "Timelines fixed hoti hain ya client ki requirements par depend karti hain?",
    keywords: [
      "project timelines", "fixed timelines", "delivery timelines",
      "timeline flexibility"
    ],
    answer: "Timelines mostly client ki requirements aur project scope par depend karti hain."
  },
  {
    question: "Small website ka delivery time kitna hota hai?",
    keywords: [
      "small website time", "small website delivery", "simple website timeline",
      "small site duration"
    ],
    answer: "Small websites usually kuch dinon me deliver ki ja sakti hain. Awais's answer ---"
  },
  {
    question: "Agar urgent project ho to aap manage karte ho?",
    keywords: [
      "urgent project delivery", "urgent project management", "fast project handling"
    ],
    answer: "Haan, urgent projects priority basis par handle kiye jate hain."
  },
  {
    question: "Ads setup karne mein kitna time lagta hai?",
    keywords: [
      "ads setup time", "facebook ads setup time", "google ads setup time",
      "ad campaign setup duration"
    ],
    answer: "Ads setup usually 1–2 dinon me ho jata hai, depending on requirements."
  },
  {
    question: "Kya website banane ke saath saath testing bhi hoti hai?",
    keywords: [
      "website testing", "site testing process", "website qa testing",
      "website test karna"
    ],
    answer: "Haan, website banane ke saath proper testing aur QA process hota hai."
  },
  {
    question: "Maintenance ke liye extra time charge hota hai?",
    keywords: [
      "maintenance extra charges", "maintenance extra cost", "maintenance time charges"
    ],
    answer: "Maintenance ke liye alag se cost aur time charges hote hain."
  },

  // 3. Support / Maintenance related
  {
    question: "Kya website launch ke baad support milti hai?",
    keywords: [
      "website support", "post launch support", "after launch help",
      "website assistance"
    ],
    answer: "Haan, website launch ke baad limited free support milti hai. Extended support Awais's answer ---"
  },
  {
    question: "Maintenance monthly hoti hai ya yearly?",
    keywords: [
      "monthly maintenance", "yearly maintenance", "maintenance plan",
      "maintenance duration"
    ],
    answer: "Maintenance dono options (monthly aur yearly) me available hai."
  },
  {
    question: "Agar site mein bug aajaye to aap fix karte ho?",
    keywords: [
      "bug fixing", "site error fix", "website issue fix", "website bug repair"
    ],
    answer: "Haan, site bugs fix kiye jate hain maintenance ke dauran."
  },
  {
    question: "Aap AMC (Annual Maintenance Contract) dete ho?",
    keywords: [
      "amc contract", "annual maintenance", "maintenance contract", "amc services"
    ],
    answer: "Haan, Annual Maintenance Contract (AMC) available hai clients ke liye."
  },
  {
    question: "Hosting aur domain ka support aapke through milta hai?",
    keywords: [
      "hosting support", "domain support", "website hosting help", "domain setup help"
    ],
    answer: "Haan, hosting aur domain ka setup aur support provide kiya jata hai."
  },
  {
    question: "Agar main apna server use karun to aap support karoge?",
    keywords: [
      "server support", "own server help", "client server support"
    ],
    answer: "Haan, agar client apna server use karna chahe to support diya jata hai."
  },
  {
    question: "Backup aur updates aapke zimmedari hoti hai?",
    keywords: [
      "backup responsibility", "updates responsibility", "website backup", "site updates"
    ],
    answer: "Backup aur updates contract ke mutabiq cover kiye jate hain."
  },
  {
    question: "Maintenance ka alag se cost hota hai?",
    keywords: [
      "maintenance cost", "maintenance charges", "extra maintenance charges"
    ],
    answer: "Haan, maintenance ke liye alag se cost hota hai."
  },
  {
    question: "Website update karne ka process kya hota hai?",
    keywords: [
      "website update process", "site update method", "website updating steps"
    ],
    answer: "Website update ka process request aur approval ke sath follow kiya jata hai."
  },
  {
    question: "24/7 customer support available hai ya working hours mein?",
    keywords: [
      "24/7 support", "customer support hours", "always available support",
      "round the clock support"
    ],
    answer: "Support mostly working hours me hota hai. 24/7 support ke liye Awais's answer ---"
  },

  // 4. Ads / Marketing related
  {
    question: "Facebook ads ki strategy aap kis tarah banate ho?",
    keywords: [
      "facebook ads strategy", "fb ads plan", "facebook campaign planning"
    ],
    answer: "Facebook ads ki strategy client ke goals aur target audience ke hisaab se banayi jati hai."
  },
  {
    question: "Ads ka result guarantee karte ho?",
    keywords: [
      "ads result guarantee", "ad performance guarantee", "campaign guarantee"
    ],
    answer: "Ads ka result guarantee nahi hota, lekin optimization aur testing ke through best results aim kiya jata hai."
  },
  {
    question: "Google business listing setup mein kya shamil hota hai?",
    keywords: [
      "google listing setup", "business listing setup", "google business profile"
    ],
    answer: "Google business listing setup mein profile creation, info update aur optimization shamil hai."
  },
  {
    question: "Ads ke liye creatives aur content aap banate ho ya client provide karta hai?",
    keywords: [
      "ads creatives", "ad content creation", "ad design", "creative ads"
    ],
    answer: "Dono options available hain. Hum creatives aur content provide karte hain ya client apna de sakta hai."
  },
  {
    question: "Ad spend aur service charges alag hote hain?",
    keywords: [
      "ad spend", "ad spend charges", "ad spend cost", "ad budget"
    ],
    answer: "Haan, ad spend aur service charges alag hote hain."
  },
  {
    question: "Campaign ki performance kaise track hoti hai?",
    keywords: [
      "campaign performance", "ad performance tracking", "campaign analytics",
      "ad tracking"
    ],
    answer: "Campaign ki performance analytics tools ke zariye track hoti hai."
  },
  {
    question: "Kya aap reporting monthly dete ho ya weekly?",
    keywords: [
      "monthly reporting", "weekly reporting", "ads report", "campaign reports"
    ],
    answer: "Reporting client ki preference ke mutabiq monthly ya weekly provide ki jati hai."
  },
  {
    question: "Ads ke liye target audience aap suggest karte ho ya client decide karta hai?",
    keywords: [
      "ads target audience", "ad audience selection", "targeting suggestion"
    ],
    answer: "Target audience client ke input aur market research ke basis par suggest ki jati hai."
  },
  {
    question: "Agar ads ka result na aaye to kya refund hota hai?",
    keywords: [
      "ads refund", "no result refund", "campaign refund policy"
    ],
    answer: "Refund policy depend karti hai. Exact terms ke liye Awais's answer ---"
  },
  {
    question: "Marketing ke packages alag hain ya web dev ke sath hi milte hain?",
    keywords: [
      "marketing packages", "web dev with marketing", "separate marketing package"
    ],
    answer: "Marketing ke packages independent bhi available hain aur web dev ke sath combine bhi."
  },

  // 5. General Service Questions
  {
    question: "Aapki company ka kaam quality kaise ensure karte ho?",
    keywords: [
      "quality assurance", "quality check", "work quality", "project quality"
    ],
    answer: "Quality ensure karne ke liye testing, reviews aur QA process follow kiya jata hai."
  },
  {
    question: "Aap projects portfolio ya samples dikhate ho?",
    keywords: [
      "project portfolio", "work samples", "portfolio showcase", "sample projects"
    ],
    answer: "Haan, projects ka portfolio aur samples available hain."
  },
  {
    question: "Agar mujhe sirf logo design chahiye ho to milega?",
    keywords: [
      "logo design only", "logo service", "sirf logo design", "branding logo design"
    ],
    answer: "Haan, sirf logo design service bhi available hai."
  },
  {
    question: "Aap sirf development karte ho ya branding bhi?",
    keywords: [
      "development only", "branding services", "development aur branding"
    ],
    answer: "Hum dono services provide karte hain: development aur branding."
  },
  {
    question: "Freelance platforms par bhi aap services dete ho?",
    keywords: [
      "freelance services", "fiverr services", "upwork services", "freelance platforms"
    ],
    answer: "Haan, freelance platforms par bhi services available hain."
  },
  {
    question: "Company registered hai ya individual basis pe kaam hota hai?",
    keywords: [
      "company registered", "company legal", "individual work", "company registration"
    ],
    answer: "Company proper registered hai. Details ke liye Awais's answer ---"
  },
  {
    question: "Payment process kaisa hota hai (advance / milestone / full)?",
    keywords: [
      "payment process", "advance payment", "milestone payment", "full payment"
    ],
    answer: "Payment process client ki requirement aur agreement ke hisaab se hota hai. Commonly advance + milestone."
  },
  {
    question: "Kya NDA sign karte ho agar client chahte ho?",
    keywords: [
      "nda signing", "confidentiality agreement", "nda contract"
    ],
    answer: "Haan, NDA sign kiya jata hai agar client request kare."
  },
  {
    question: "International clients ke liye bhi services available hain?",
    keywords: [
      "international services", "global clients", "foreign clients", "international projects"
    ],
    answer: "Haan, international clients ke liye bhi full services available hain."
  },
  {
    question: "Custom requirements ke liye flexibility hoti hai?",
    keywords: [
      "custom requirements", "custom services", "project flexibility", "custom work"
    ],
    answer: "Haan, custom requirements ke liye full flexibility hoti hai."
  },
];

export default servicesFaq;
