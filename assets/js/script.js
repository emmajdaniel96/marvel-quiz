
const question = document.getElementById('question');
const option = Array.from(document.getElementsByClassName('option-content'));
const score = document.getElementById('score');

// variables for the quiz 

let currentQuestion = {};
let correctAnswer = true;
let scoreCounter = 0;
let questionTracker = 0;
let attainableQuestions = [];

// questions and answers for quiz

let questions = [{

    question: 'What film started Phase 1 of the Marvel Cinematic Universe?',
    option1: 'Thor',
    option2: 'Iron Man',
    option3: 'The Incredible Hulk',
    option4: 'Captain America: The First Avenger',
    answer: 2,
},
 {
    question: 'Who was the first ever Marvel superhero?',
    option1: 'Captain America',
    option2: 'Spider-Man',
    option3: 'The Human Torch',
    option4: 'Quicksilver',
    answer: 3,
 },
 {
    question: 'What year was the first ever Marvel comic released?',
    option1: '1938',
    option2: '1939',
    option3: '1940',
    option4: '1941',
    answer: 2,
 },
 {
    question: 'Who says to Peter Parker, "Remember, with great power comes great responsibility."?',
    option1: 'Mary Jane',
    option2: 'Aunt May',
    option3: 'Uncle Ben',
    option4: 'Gwen Stacy',
    answer: 3,
 },
 {
    question: 'Who is known as "The God Of Mischeif"?',
    option1: 'Surtur',
    option2: 'Thor',
    option3: 'Odin',
    option4: 'Loki',
    answer: 4,
 },
 {
    question: 'In Gaurdians Of The Galaxy, which famous actor is the voice of Groot?',
    option1: 'Bradley Cooper',
    option2: 'Vin Diesel',
    option3: 'Dave Bautista',
    option4: 'Lee Pace',
    answer: 2,
 },
 {
    question: 'Where does the rare metallic substance, Vibranium come from?',
    option1: 'New York City',
    option2: 'Asgard',
    option3: 'The Moon',
    option4: 'Wakanda',
    answer: 4,
 },
 {
    question: 'Which Soviet-Russian facility trained Black Widow?',
    option1: 'The Red Room',
    option2: 'The Black Room',
    option3: 'The Green Room',
    option4: 'The White Room',
    answer: 1,
 },
 {
    question: 'What notable alias does Doctor Strange have?',
    option1: 'Master Of The Mystic Arts',
    option2: 'Ancient One',
    option3: 'Winter Soldier',
    option4: 'God Of Thunder',
    answer: 1,
 },
 {
    question: 'Who trained the Scarlet Witch?',
    option1: 'Pietro',
    option2: 'Thanos',
    option3: 'Wanda Maximoff',
    option4: 'Agatha Harkness',
    answer: 4,
 }]


 const correctAnswerPoint = 1;
 const MAX_QUESTIONS = 10;

// Start of the quiz

 runQuiz = () => {
   questionTracker = 0;
   scoreCounter = 0;
   attainableQuestions = [...questions];
   getNewQuestion();
 }

   // calls for a new question to be used after current question has been answered 

   getNewQuestion = () => {
      if(attainableQuestions.length === 0 || questionTracker > MAX_QUESTIONS) {
         localStorage.setItem
      }

      questionTracker++;
      progressText.innerText = `Question ${questionTracker} of ${MAX_QUESTIONS}`
   }