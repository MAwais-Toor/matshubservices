// index.js
import servicesFaq from "./services_faq.js";
import coursesFaq from "./courses_faq.js";
import workshopsFaq from "./workshops_faq.js";
import affiliateFaq from "./affiliate_faq.js";
import responses from "./response_faq.js";

const chatQA = [...servicesFaq, ...coursesFaq, ...workshopsFaq, ...affiliateFaq, ...responses];

export default chatQA;
