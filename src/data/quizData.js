import { v4 as uuid } from "uuid";

export const quizData = [
  {
    quizId: uuid(),
    quizName: "Harry Potter",
    categoryValue: "harry-potter",
    score: 0,
    quiz: [
      {
        question: "From which platform at Kings Cross does the Hogwarts Express train depart?",
        options: [
          { answer: "Gringotts", isCorrect: false, isClick: false },
          { answer: "Wand", isCorrect: false, isClick: false },
          { answer: "Nine and three-quarters", isCorrect: true, isClick: false },
          { answer: "The trolls club", isCorrect: false, isClick: false },
        ],
      },
      {
        question: "Harry has a scar on his forehead. What shape is it?",
        options: [
          { answer: "Like a pigs tail", isCorrect: false, isClick: false },
          { answer: "Like a lightning bolt", isCorrect: true, isClick: false },
          { answer: "Like a shining star", isCorrect: false, isClick: false },
          { answer: "Like an egg", isCorrect: false, isClick: false },
        ],
      },
      {
        question: "Harrys uncle and aunt, the Dursleys, live at what address?",
        options: [
          { answer: "Number 4, Privet Drive", isCorrect: true, isClick: false },
          { answer: "Nine and three-quarters", isCorrect: false, isClick: false },
          { answer: "The trolls club", isCorrect: false, isClick: false },
          { answer: "Gringotts", isCorrect: false, isClick: false },
        ],
      },
      {
        question: "Hermiones parents are not wizards. What non-wizard jobs do they do?",
        options: [
          { answer: "Physician", isCorrect: false, isClick: false },
          { answer: "Tailor", isCorrect: false, isClick: false },
          { answer: "Dentists", isCorrect: true, isClick: false },
          { answer: "Mechanic", isCorrect: false, isClick: false },
        ],
      },
      {
        question: "How do the Dursleys say that Harrys parents died?",
        options: [
          { answer: "In a car crash", isCorrect: true, isClick: false },
          { answer: "In an aeroplane crash", isCorrect: false, isClick: false },
          { answer: "By Cancer", isCorrect: false, isClick: false },
          { answer: "By Heart attack", isCorrect: false, isClick: false },
        ],
      },
    ],
  },
  {
    quizId: uuid(),
    quizName: "Attack On Titan",
    categoryValue: "aot",
    score: 0,
    quiz: [
      {
        question: "What was the name of Levi's mother?",
        options: [
          { answer: "Carmen", isCorrect: false, isClick: false },
          { answer: "Kuchel", isCorrect: true, isClick: false },
          { answer: "Karla", isCorrect: false, isClick: false },
          { answer: "Kim", isCorrect: false, isClick: false },
        ],
      },
      {
        question: "For how many years did Ymir wander outside of the Walls as a Titan?",
        options: [
          { answer: "For 60 Years", isCorrect: true, isClick: false },
          { answer: "For 50 Years", isCorrect: false, isClick: false },
          { answer: "For 40 Years", isCorrect: false, isClick: false },
          { answer: "For 70 Years", isCorrect: false, isClick: false },
        ],
      },
      {
        question: "What nickname was given to Erwin when he was a child?",
        options: [
          { answer: "Blondie", isCorrect: false, isClick: false },
          { answer: "Idiot", isCorrect: false, isClick: false },
          { answer: "Eyebrows", isCorrect: true, isClick: false },
          { answer: "Smartass", isCorrect: false, isClick: false },
        ],
      },
      {
        question: "How did Eren find out that he was the one who killed Grisha?",
        options: [
          { answer: "Grisha appered in his memory and told him the truth", isCorrect: false, isClick: false },
          { answer: "Keith Shadis told him", isCorrect: false, isClick: false },
          { answer: "Rod Reiss and Historia triggered the memories", isCorrect: true, isClick: false },
          { answer: "Frieda Reiss helped him remember", isCorrect: false, isClick: false },
        ],
      },
      {
        question: "What is the only thing that protects the Colossal Titan?",
        options: [
          { answer: "Speed", isCorrect: false, isClick: false },
          { answer: "Hardening ability", isCorrect: false, isClick: false },
          { answer: "The size of body", isCorrect: false, isClick: false },
          { answer: "The steam releases from his body", isCorrect: true, isClick: false },
        ],
      },
    ],
  },
];




