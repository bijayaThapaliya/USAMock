var questions = [
    "Why are you going to the USA",
    "Why this university? ",
    "How did you know about this university?",
    "How many universities have you applied to?",
    "How many backlogs? ",
    "In case of a low GPA or percentage, why the low percentage of marks?",
    "This course is already available in Nepal, why are you planning to go to the USA and spend so much money when you can study here in Nepal?",
    "Why only the USA when there are other countries for good study? What do you know about the US education system?",
    "Tell me something about your university,  where you are going now?",
    "Tell me something about the City, where you are going now?",
    "In case of a GAP, what were you doing? Why are you leaving for what you are doing now? ",
    "Will you come back during the summer holiday?",
    "Do you have any relatives in USA? ",
    "Did you get any scholarships? ",
    "What are your future Plans?",
    "Why do you want to major in this course",
    "How will this course help you in your future goals?",
    "Why did you take GAP after high school?",
    "What is the scope of your course in the future?",
    "Explain your current job roles and responsibilities. ",
    "Do you have siblings?  What are they doing?",
    "What are your sponsors doing? / What is your father's and what is your mother's occupation? / Briefly explain your family income source. / What does your father do? How much does your father earn annually? /What does your mother do? How much does she earn annually?\n" +
    "Are there any other income sources? ",
    "What are your hobbies?",
    "What is your course fee?",
    "How much are your living expenses per year throughout your course?",
    "How do you plan to repay all your expenses in the USA?",
    "What are your plans after completing your study in the USA?",
    "Do you intend to work in the USA after completing your studies?",
    "What type of job and salary will you get after completing your studies?"
];

function generateRandomQuestion() {
    var randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById("question").textContent = randomQuestion;
}
