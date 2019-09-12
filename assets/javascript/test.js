var appendArea = $("#quiz-area");

// Question set
var questions = [
  {
      question: "Normal adult dogs have how many teeth?",
      answers: ["24", "38", "42", "32"],
      correctAnswer: "42"
  }, 

  {
      question: "What part of the body do dogs sweat?",
      answers: ["Mouth", "Ears", "Nose", "Paws"],
      correctAnswer: "Paws"
  }, 

  {
      question: "What is a dog’s most highly developed sense?",
      answers: ["Taste", "Smell", "Sight", "Touch"],
      correctAnswer: "Smell"
  }, 

  {
      question: "Which dog breed is the smallest of them all?",
      answers: ["Dachshund", "Shih tzu", "Pomeranian", "Chihuahua"],
      correctAnswer: "Chihuahua"
  }, 

  {
      question: "Which dog breed has a black tongue?",
      answers: ["Husky", "Labrador", "Chow Chow", "Weimaraner"],
      correctAnswer: "Chow Chow"
  }, 

  {
      question: "What is the most popular breed of dog, according to the American Kennel Club’s registrations?",
      answers: ["Golden Retriever", "Beagle", "German Shepherd", "Labrador"],
      correctAnswer: "Labrador"
      
  }


];

// Variable that will hold the setInterval
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  //counterfunction
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
    game.done();
    }
  },

  //timer function to fire once the start button is pressed
  start: function() {
    timer = setInterval(game.countdown, 1000);

    //will put the counter into the HTML
    $("#counter-div").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    //once clicked on, the start button is removed 
    $("#start").remove();

    //appending the questions on to the HTML via the appendArea variable and the JQuery link
    for (var i = 0; i < questions.length; i++) {
      appendArea.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        appendArea.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    appendArea.append("<button id='done'>Done</button>");
  },

  //done function with else if statement to confirm if user one or loss 
  done: function() {
    var inputs = appendArea.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  //clear the timer, once the game is done
  result: function() {
    clearInterval(timer);

  //remove the timer once game is done
    $("#counter-div h2").remove();
    //appending the quiz results to the appendArea variable
    appendArea.html("<h2>Quiz Complete</h2>");
    appendArea.append("<h3>Correct Answers: " + this.correct + "</h3>");
    appendArea.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});






