// responses.js
const responses = [
    {
        question: "assalam o alaikum",
        keywords: ["assalam o alaikum", "salam", "السلام علیکم", "کیا حال ہے"],
        answer: "Wa Alaikum Assalam! 👋 I am here to help you. How are you?"
    },
    {
        question: "hi",
        keywords: ["hi", "hello", "hey", "ہیلو", "کیا حال ہے"],
        answer: "Hi! 👋 I am here to help you. How are you?"
    },
    {
        question: "MATsHub ka matlab kya hai?",
        keywords: ["MATsHub means", "MATsHub ka mutlab", "MATsHub definition", "MATsHub meaning", "MATsHub kya hai"],
        answer: "“MATsHub” stands for <i>Muhammad Awais Toor’s Hub</i>. It’s a central space that represents his ideas, activities, and professional journey — a hub of creativity, innovation, and growth."
    },
    {
    question: "MATsHub ki professional services kya hain?",
    keywords: ["MATsHub services", "services", "service", "MATsHub kya karta hai", "MATsHub offerings", "services by MATsHub", "MATsHub business services"],
    answer: `<ol>
                <li>E-commerce setup</li>
                <li>Facebook Page Creation</li>
                <li>Facebook Ads & Marketing</li>
                <li>Digital Marketing</li>
                <li>Posters & Logo Design</li>
                <li>Google Ads</li>
             </ol>`
},

    {
        question: "hub ka matlab kia hai?",
        keywords: ["hub ka matlab", "hub meaning", "hub ka mutlab", "what is hub", "hub"],
        answer: "‘Hub’ ka matlab hai ek <i>central place</i> ya <i>markazi jagah</i>, jahan ideas aur activities ikathey hotay hain."
    },
    {
        question: "User says ok or yes",
        keywords: ["ok", "okay", "haan", "yes", "جی ہاں", "ٹھیک ہے"],
        answer: "Great 👍, let’s continue!"
    },
    {
        question: "User asks about bot identity",
        keywords: ["tum insaan ho", "are you human", "kya tum robot ho", "tum ai ho", "کیا تم انسان ہو", "کیا تم روبوٹ ہو"],
        answer: "No 😊, I am an AI chatbot built to assist you."
    },
    {
        question: "User asks about creator",
        keywords: ["kisne banaya", "who made you", "tum ko kis ne banaya", "کس نے بنایا"],
        answer: "I was created by a developer to answer your questions and help you."
    },
    {
        question: "User asks about location/company",
        keywords: ["kahaan se ho", "location", "office kahan hai", "آپ کہاں سے ہو", "تمہارا دفتر کہاں ہے"],
        answer: "I am an online AI 🌍. My team operates from Pakistan."
    },
    {
        question: "User asks for help",
        keywords: ["help", "madad", "guide", "support", "مدد چاہیے", "رہنمائی کرو"],
        answer: "Of course 👍 Please tell me your question in detail, I will guide you."
    },
    {
        question: "User asks for job",
        keywords: ["job", "nokri", "work", "rozgar", "نوکری", "کام"],
        answer: "Currently, I cannot provide jobs directly, but I can guide you on where to search online 💼."
    },
    {
        question: "User asks for time",
        keywords: ["time kya hai", "time", "waqt", "waqat", "what is the time", "waqt kya hai", "کتنا وقت ہوا ہے", "کیا وقت ہوا ہے"],
        answer: `The current time is ${new Date().toLocaleTimeString()} ⏰`
    },
    {
        question: "User asks for date",
        keywords: ["date kya hai", "date", "tareekh", "what is the date", "aaj ki tareekh", "آج کی تاریخ", "تاریخ بتاؤ"],
        answer: `Today's date is ${new Date().toLocaleDateString()} 📅`
    },
    {
        question: "User asks for day",
        keywords: ["aaj ka din", "day", "din", "what day is today", "din kya hai", "آج کون سا دن ہے"],
        answer: `Today is ${new Date().toLocaleDateString("en-US", { weekday: "long" })} 📆`
    },
    {
        question: "User asks for joke",
        keywords: ["joke", "mazak", "funny", "joke sunao", "مزاق سناؤ"],
        answer: "Here’s a joke 😄: Teacher: Why are you late? Student: Because of a sign. Teacher: What sign? Student: School Ahead, Go Slow!"
    },
    {
        question: "User asks for shayari",
        keywords: ["shayari", "poetry", "poem", "شاعری سناؤ", "شاعری"],
        answer: "🌹 'Zindagi ek kitab hai, har din ek naya safha... Kuch khushi, kuch gham, aur kuch seekhne ka waqfa.' 🌹"
    },
    {
        question: "Fallback",
        keywords: [],
        answer: "Sorry 🤔, I didn’t understand that. Can you rephrase your question?"
    }
];

export default responses;
