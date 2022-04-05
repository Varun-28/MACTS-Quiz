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
  {
    quizId: uuid(),
    quizName: "MCU",
    categoryValue: "mcu",
    quiz: [
      {
        question: "What is Captain America’s shield made of?",
        options: [
          { answer: "Adamantium", isCorrect: false},
          { answer: "Vibranium", isCorrect: true},
          { answer: "Promethium", isCorrect: false},
          { answer: "Carbonadium", isCorrect: false},
        ],
      },
      {
        question: "What is the alien race Loki sends to invade Earth in The Avengers?",
        options: [
          { answer: "The Chitauri", isCorrect: true},
          { answer: "The Skrulls", isCorrect: false},
          { answer: "The Kree", isCorrect: false},
          { answer: "The Flerkens", isCorrect: false},
        ],
      },
      {
        question: "What fake name does Natasha use when she first meets Tony?",
        options: [
          { answer: "Natalie Rushman", isCorrect: true},
          { answer: "Natalia Romanoff", isCorrect: false},
          { answer: "Nicole Rohan", isCorrect: false},
          { answer: "Naya Rabe", isCorrect: false},
        ],
      },
      {
        question: "About which city do Hawkeye and Black Widow often reminisce?",
        options: [
          { answer: "Budapest", isCorrect: true},
          { answer: "Prague", isCorrect: false},
          { answer: "Istanbul", isCorrect: false},
          { answer: "Sokovia", isCorrect: false},
        ],
      },
      {
        question: "What were the three items Rocket claims he needs in order to escape the prison?",
        options: [
          { answer: "A security card, a fork, and an ankle monitor", isCorrect: false},
          { answer: "A security band, a battery, and a prosthetic leg", isCorrect: true},
          { answer: "A pair of binoculars, a detonator, and a prosthetic leg", isCorrect: false},
          { answer: "A knife, cable wires, and Peter’s mixtape", isCorrect: false},
        ],
      },
    ],
  },
  {
    quizId: uuid(),
    quizName: "Naruto",
    categoryValue: "naruto",
    quiz: [
      {
        question: "Which of Gamabunta's sons does Naruto accidentally summon during his fight against Gaara?",
        options: [
          { answer: "Gamakichi", isCorrect: true},
          { answer: "Gamamoro", isCorrect: false},
          { answer: "Gamatatsu", isCorrect: false},
          { answer: "Gamaken", isCorrect: false},
        ],
      },
      {
        question: "Who are Itachi and Kisame looking for when they first arrive in Konoha together?",
        options: [
          { answer: "Kakashi", isCorrect: false},
          { answer: "Nobody", isCorrect: false},
          { answer: "Sasuke", isCorrect: false},
          { answer: "Naruto", isCorrect: true},
        ],
      },
      {
        question: "Which of the Eight Gates does Rock Lee stop at against Gaara in the Chunin Exams?",
        options: [
          { answer: "5th Gate: The Gate of Closing", isCorrect: true},
          { answer: "4th Gate: The Gate of Pain", isCorrect: false},
          { answer: "6th Gate: The Gate of Joy", isCorrect: false},
          { answer: "3rd Gate: The Gate of Life", isCorrect: false},
        ],
      },
      {
        question: "The red spiral on the back of Konoha vests symbolizes a friendship with which clan?",
        options: [
          { answer: "Senju", isCorrect: false},
          { answer: "Uzumaki", isCorrect: true},
          { answer: "Namikaze", isCorrect: false},
          { answer: "Uchiha", isCorrect: false},
        ],
      },
      {
        question: "What is the name of Madara Uchiha's grand plan?",
        options: [
          { answer: "Project Tsukuyomi", isCorrect: false},
          { answer: "Project Tsukigakure", isCorrect: false},
          { answer: "Project Tsuki no Me", isCorrect: true},
          { answer: "Infinite Tsukuyomi", isCorrect: false},
        ],
      },
    ],
  },
  {
    quizId: uuid(),
    quizName: "Twilight",
    categoryValue: "twilight",
    quiz: [
      {
        question: "How many films are there in The Twilight Saga series?",
        options: [
          { answer: "5", isCorrect: true},
          { answer: "2", isCorrect: false},
          { answer: "6", isCorrect: false},
          { answer: "3", isCorrect: false},
        ],
      },
      {
        question: "Who does Jasper refer to when he says They'll fight like children in Twilight Saga: Eclipse?",
        options: [
          { answer: "Volturi", isCorrect: false},
          { answer: "Wolves", isCorrect: false},
          { answer: "Newborns", isCorrect: true},
          { answer: "Other Vampires", isCorrect: false},
        ],
      },
      {
        question: "What is the name of the main character in the movie Twilight?",
        options: [
          { answer: "Allice Cullen", isCorrect: false},
          { answer: "Esme Cullen", isCorrect: false},
          { answer: "Isabella Swan", isCorrect: true},
          { answer: "Rosalie", isCorrect: false},
        ],
      },
      {
        question: "What does Bella receive from Jacob on her birthday?",
        options: [
          { answer: "A Cake", isCorrect: false},
          { answer: "A Dream Catcher", isCorrect: true},
          { answer: "A Ring", isCorrect: false},
          { answer: "A Music Player", isCorrect: false},
        ],
      },
      {
        question: "Where do Bella and Edward get married?",
        options: [
          { answer: "Outside the Cullens house", isCorrect: true},
          { answer: "In a Church", isCorrect: false},
          { answer: "Chalie", isCorrect: false},
          { answer: "At Museum", isCorrect: false},
        ],
      },
    ],
  },
];




