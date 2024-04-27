const questionContainer = document.getElementById('question-container');
const submitButton = document.getElementById('submit-btn');
const quizForm = document.getElementById('quiz-form');

// Array of open-ended quiz questions
const quizData = [

  // Add more open-ended questions here
  //If we were to date, what would you be most excited about?
];

// Function to create a question element
function createQuestionElement(question) {
  const questionElement = document.createElement('div');
  questionElement.classList.add('question');

  const questionText = document.createElement('p');
  questionText.textContent = question;
  questionElement.appendChild(questionText);

  const answerInput = document.createElement('textarea');
  answerInput.placeholder = 'Enter your answer';
  questionElement.appendChild(answerInput);

  return questionElement;
}

// Function to display the quiz questions
function displayQuizQuestions() {
  quizData.forEach(question => {
    const questionElement = createQuestionElement(question);
    questionContainer.appendChild(questionElement);
  });
}

// Event listener for form submission
quizForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  window.location.href = 'message.html'; // Navigate to the message page
});

// Display the quiz questions
displayQuizQuestions();


return (
  <form
    data-netlify="true"
    name="Star Quiz"
    action="/message"
    method="post"
    onSubmit="submit"
  >
    <input type="hidden" name="form-name" value="Star Quiz" />
    <label>
      What order did the pizza give to the pineapple?
      <input name="order" type="text" onChange={handleChange} />
    </label>
    <input type="submit" />
  </form>
);



//confetti

// Assume you have a button for submitting the form with an ID "submit-button"

const form = document.getElementById('quiz-form');

// Event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  // Trigger the confetti effect on form submission
  confetti.start();

  // Redirect to the next page after 3 seconds (adjust the duration as needed)
  setTimeout(function() {
    window.location.href = 'message.html'; // Replace 'next-page.html' with the actual URL of the next page
  }, 3000); // 3 seconds
});

// Function to show confetti
function showConfetti() {
  const confettiSettings = {
    target: 'confetti-canvas',
    respawn: true,
    colors: ['#ff0000', '#00ff00', '#0000ff'], 
  };

  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
  setTimeout(() => {
    confetti.clear();
  }, 5000);
}

