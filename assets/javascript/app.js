console.log("page loaded");

//Div box to input the JS into the HTML
var box =$("#quiz-Stuff");

//Set of questions
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

//variable for the setInterval
var timer;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function () {
    game.counter --;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
        console.log("Time's up");
        game.done();
    }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
    }
}