import { v4 as uuid } from "uuid";

export const quizData = [
  {
    quizId: uuid(),
    quizName: "Harry Potter",
    categoryValue: "harry-potter",
    quiz: [
      {
        question: "From which platform at Kings Cross does the Hogwarts Express train depart?",
        options: [
          { answer: "Gringotts", isCorrect: false},
          { answer: "Wand", isCorrect: false},
          { answer: "Nine and three-quarters", isCorrect: true},
          { answer: "The trolls club", isCorrect: false},
        ],
      },
      {
        question: "Harry has a scar on his forehead. What shape is it?",
        options: [
          { answer: "Like a pigs tail", isCorrect: false},
          { answer: "Like a lightning bolt", isCorrect: true},
          { answer: "Like a shining star", isCorrect: false},
          { answer: "Like an egg", isCorrect: false},
        ],
      },
      {
        question: "Harrys uncle and aunt, the Dursleys, live at what address?",
        options: [
          { answer: "Number 4, Privet Drive", isCorrect: true},
          { answer: "Nine and three-quarters", isCorrect: false},
          { answer: "The trolls club", isCorrect: false},
          { answer: "Gringotts", isCorrect: false},
        ],
      },
      {
        question: "Hermiones parents are not wizards. What non-wizard jobs do they do?",
        options: [
          { answer: "Physician", isCorrect: false},
          { answer: "Tailor", isCorrect: false},
          { answer: "Dentists", isCorrect: true},
          { answer: "Mechanic", isCorrect: false},
        ],
      },
      {
        question: "How do the Dursleys say that Harrys parents died?",
        options: [
          { answer: "In a car crash", isCorrect: true},
          { answer: "In an aeroplane crash", isCorrect: false},
          { answer: "By Cancer", isCorrect: false},
          { answer: "By Heart attack", isCorrect: false},
        ],
      },
    ],
  },
  {
    quizId: uuid(),
    quizName: "Attack On Titan",
    categoryValue: "aot",
    quiz: [
      {
        question: "What was the name of Levi's mother?",
        options: [
          { answer: "Carmen", isCorrect: false},
          { answer: "Kuchel", isCorrect: true},
          { answer: "Karla", isCorrect: false},
          { answer: "Kim", isCorrect: false},
        ],
      },
      {
        question: "For how many years did Ymir wander outside of the Walls as a Titan?",
        options: [
          { answer: "For 60 Years", isCorrect: true},
          { answer: "For 50 Years", isCorrect: false},
          { answer: "For 40 Years", isCorrect: false},
          { answer: "For 70 Years", isCorrect: false},
        ],
      },
      {
        question: "What nickname was given to Erwin when he was a child?",
        options: [
          { answer: "Blondie", isCorrect: false},
          { answer: "Idiot", isCorrect: false},
          { answer: "Eyebrows", isCorrect: true},
          { answer: "Smartass", isCorrect: false},
        ],
      },
      {
        question: "How did Eren find out that he was the one who killed Grisha?",
        options: [
          { answer: "Grisha appered in his memory and told him the truth", isCorrect: false},
          { answer: "Keith Shadis told him", isCorrect: false},
          { answer: "Rod Reiss and Historia triggered the memories", isCorrect: true},
          { answer: "Frieda Reiss helped him remember", isCorrect: false},
        ],
      },
      {
        question: "What is the only thing that protects the Colossal Titan?",
        options: [
          { answer: "Speed", isCorrect: false},
          { answer: "Hardening ability", isCorrect: false},
          { answer: "The size of body", isCorrect: false},
          { answer: "The steam releases from his body", isCorrect: true},
        ],
      },
    ],
  },
];




