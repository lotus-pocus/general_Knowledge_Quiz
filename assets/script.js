var data = {
    response_code: 0,
    results: [
      {
        category: "Mythology",
        correct_answer: "Centaur",
        difficulty: "easy",
        incorrect_answers: ["Minotaur", "Pegasus", "Gorgon"],
        question:
          "Which of these mythological creatures is said to be half-man and half-horse?",
        type: "multiple",
      },
      {
        category: "Mythology",
        correct_answer: "True",
        difficulty: "easy",
        incorrect_answers: ["False"],
        question: "According to Greek Mythology, Zeus can control lightning.",
        type: "boolean",
      },
      {
        category: "Mythology",
        correct_answer: "True",
        difficulty: "easy",
        incorrect_answers: ["False"],
        question: "In Norse mythology, Thor once dressed as a woman.",
        type: "boolean",
      },
      {
        category: "Mythology",
        correct_answer: "Apollo",
        difficulty: "easy",
        incorrect_answers: ["Demeter", "Zeus", "Athena"],
        question:
          "Who was the only god from Greece who did not get a name change in Rome?",
        type: "multiple",
      },
      {
        category: "Mythology",
        correct_answer: "Eris",
        difficulty: "easy",
        incorrect_answers: ["Charon", "Ceres", "Dysnomia"],
        question:
          "This Greek goddess&#039;s name was chosen for the dwarf planet responsible for discord on Pluto&#039;s classification amongst astronomers.",
        type: "multiple",
      },
      {
        category: "Mythology",
        correct_answer: "False",
        difficulty: "easy",
        incorrect_answers: ["True"],
        question: "According to Greek Mythology, Atlas was an Olympian God.",
        type: "boolean",
      },
      {
        category: "Mythology",
        correct_answer: "The Sea",
        difficulty: "easy",
        incorrect_answers: ["War", "Sun", "Fire"],
        question: "The greek god Poseidon was the god of what?",
        type: "multiple",
      },
      {
        category: "Mythology",
        correct_answer: "Mars",
        difficulty: "easy",
        incorrect_answers: ["Jupiter", "Juno", "Ares"],
        question:
          "The ancient Roman god of war was commonly known as which of the following?",
        type: "multiple",
      },
      {
        category: "Mythology",
        correct_answer: "Zeus",
        difficulty: "easy",
        incorrect_answers: ["Apollo", "Hermes", "Poseidon"],
        question: "Who was the King of Gods in Ancient Greek mythology?",
        type: "multiple",
      },
      {
        category: "Mythology",
        correct_answer: "Hera",
        difficulty: "easy",
        incorrect_answers: ["Aphrodite", "Athena", "Hestia"],
        question: "In most traditions, who was the wife of Zeus?",
        type: "multiple",
      },
    ],
  };
  
var results = data.results;

for (var resultsIndex=0; resultsIndex < results.length; resultsIndex++) {
var questionData = results[resultsIndex];
var type = questionData.type;

console.log(questionData)

// if (type.length <8) {
//     for (var types of type) {
//         console.log(`${types}`);
//     }
// }

// if (type ==="boolean") {
//     for (var types of type) {
//         console.log(`${types}`);
//     }
// }
}
