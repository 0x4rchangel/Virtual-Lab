$(document).ready(function () {
  var myQuestions = [
    {
      question: "1) A computer language that is written in binary codes only is ",
      answers: {
        a: 'Machine Language',
        b: 'C',
        c: 'C#',
        d: 'Pascal'
      },
      correctAnswer: 'a'
    },
    {
      question: "2) The binary equivalent of the decimal number 10 is",
      answers: {
        a: '0010',
        b: '10',
        c: '1010',
        d: '010'
      },
      correctAnswer: 'c'
    },
    {
      question: "3) One hex digit is sometimes referred to as a(n)",
      answers: {
        a: 'Byte',
        b: 'Nibble',
        c: 'Grouping',
        d: 'Instruction'
      },
      correctAnswer: 'b'
    } ,
       {
      question: "4) Which of the following is not a binary number?",
      answers: {
        a: '1111',
        b: '1A1',
        c: '110',
        d: '000'
      },
      correctAnswer: 'b'
    },
        {
      question: "5) Name the number system that uses both alphabets and numerals.",
      answers: {
        a: 'Decimals',
        b: 'Hexadecimals',
        c: 'Octal'
      },
      correctAnswer: 'b'
    },
        {
      question: "6) The base of the octal number system is",
      answers: {
        a: '8',
        b: '7',
        c: '16',
        d: '10'
      },
      correctAnswer: 'a'
    },   
     {
      question: "7) The digital systems usually operates on ",
      answers: {
        a: 'Binary system',
        b: 'Decimal system',
        c: 'Octal system',
        d: 'Hexadecimal system'
      },
      correctAnswer: 'a'
    }
  ];

  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');

  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

  function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
      var output = [];
      var answers;

      for (var i = 0; i < questions.length; i++) {

        answers = [];

        for (letter in questions[i].answers) {

          answers.push(
            '<label>'
            + '<input type="radio" name="question' + i + '" value="' + letter + '">'
            + letter + ': '
            + questions[i].answers[letter]
            + '</label>'
          );
        }

        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }

      quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {

      var answerContainers = quizContainer.querySelectorAll('.answers');

      var userAnswer = '';
      var numCorrect = 0;

      for (var i = 0; i < questions.length; i++) {

        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

        if (userAnswer === questions[i].correctAnswer) {
          numCorrect++;

          answerContainers[i].style.color = 'green';
        }
        else {
          answerContainers[i].style.color = 'red';
        }
      }

      resultsContainer.innerHTML = 'You got '+ numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);
    submitButton.onclick = function () {
      showResults(questions, quizContainer, resultsContainer);
    }
  }
});