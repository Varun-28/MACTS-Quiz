import { v4 as uuid } from "uuid";

export const quizData = [
  {
    quizId: uuid(),
    quizName: "Harry Potter",
    categoryValue: "harry-potter",
    quiz: [
      {
        question:
          "From which platform at Kings Cross does the Hogwarts Express train depart?",
        options: [
          { answer: "Gringotts", isCorrect: false, isClick: false },
          { answer: "Wand", isCorrect: false, isClick: false },
          {
            answer: "Nine and three-quarters",
            isCorrect: true,
            isClick: false,
          },
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
          {
            answer: "Nine and three-quarters",
            isCorrect: false,
            isClick: false,
          },
          { answer: "The trolls club", isCorrect: false, isClick: false },
          { answer: "Gringotts", isCorrect: false, isClick: false },
        ],
      },
      {
        question:
          "Hermiones parents are not wizards. What non-wizard jobs do they do?",
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
        question:
          "For how many years did Ymir wander outside of the Walls as a Titan?",
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
        question:
          "How did Eren find out that he was the one who killed Grisha?",
        options: [
          {
            answer: "Grisha appered in his memory and told him the truth",
            isCorrect: false,
            isClick: false,
          },
          { answer: "Keith Shadis told him", isCorrect: false, isClick: false },
          {
            answer: "Rod Reiss and Historia triggered the memories",
            isCorrect: true,
            isClick: false,
          },
          {
            answer: "Frieda Reiss helped him remember",
            isCorrect: false,
            isClick: false,
          },
        ],
      },
      {
        question: "What is the only thing that protects the Colossal Titan?",
        options: [
          { answer: "Speed", isCorrect: false, isClick: false },
          { answer: "Hardening ability", isCorrect: false, isClick: false },
          { answer: "The size of body", isCorrect: false, isClick: false },
          {
            answer: "The steam releases from his body",
            isCorrect: true,
            isClick: false,
          },
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
          { answer: "Adamantium", isCorrect: false, isClick: false },
          { answer: "Vibranium", isCorrect: true, isClick: false },
          { answer: "Promethium", isCorrect: false, isClick: false },
          { answer: "Carbonadium", isCorrect: false, isClick: false },
        ],
      },
      {
        question:
          "What is the alien race Loki sends to invade Earth in The Avengers?",
        options: [
          { answer: "The Chitauri", isCorrect: true, isClick: false },
          { answer: "The Skrulls", isCorrect: false, isClick: false },
          { answer: "The Kree", isCorrect: false, isClick: false },
          { answer: "The Flerkens", isCorrect: false, isClick: false },
        ],
      },
      {
        question: "What fake name does Natasha use when she first meets Tony?",
        options: [
          { answer: "Natalie Rushman", isCorrect: true, isClick: false },
          { answer: "Natalia Romanoff", isCorrect: false, isClick: false },
          { answer: "Nicole Rohan", isCorrect: false, isClick: false },
          { answer: "Naya Rabe", isCorrect: false, isClick: false },
        ],
      },
      {
        question:
          "About which city do Hawkeye and Black Widow often reminisce?",
        options: [
          { answer: "Budapest", isCorrect: true, isClick: false },
          { answer: "Prague", isCorrect: false, isClick: false },
          { answer: "Istanbul", isCorrect: false, isClick: false },
          { answer: "Sokovia", isCorrect: false, isClick: false },
        ],
      },
      {
        question:
          "What were the three items Rocket claims he needs in order to escape the prison?",
        options: [
          {
            answer: "A security card, a fork, and an ankle monitor",
            isCorrect: false,
            isClick: false,
          },
          {
            answer: "A security band, a battery, and a prosthetic leg",
            isCorrect: true,
            isClick: false,
          },
          {
            answer: "A pair of binoculars, a detonator, and a prosthetic leg",
            isCorrect: false,
            isClick: false,
          },
          {
            answer: "A knife, cable wires, and Peter’s mixtape",
            isCorrect: false,
            isClick: false,
          },
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
        question:
          "Which of Gamabunta's sons does Naruto accidentally summon during his fight against Gaara?",
        options: [
          { answer: "Gamakichi", isCorrect: true, isClick: false },
          { answer: "Gamamoro", isCorrect: false, isClick: false },
          { answer: "Gamatatsu", isCorrect: false, isClick: false },
          { answer: "Gamaken", isCorrect: false, isClick: false },
        ],
      },
      {
        question:
          "Who are Itachi and Kisame looking for when they first arrive in Konoha together?",
        options: [
          { answer: "Kakashi", isCorrect: false, isClick: false },
          { answer: "Nobody", isCorrect: false, isClick: false },
          { answer: "Sasuke", isCorrect: false, isClick: false },
          { answer: "Naruto", isCorrect: true, isClick: false },
        ],
      },
      {
        question:
          "Which of the Eight Gates does Rock Lee stop at against Gaara in the Chunin Exams?",
        options: [
          {
            answer: "5th Gate: The Gate of Closing",
            isCorrect: true,
            isClick: false,
          },
          {
            answer: "4th Gate: The Gate of Pain",
            isCorrect: false,
            isClick: false,
          },
          {
            answer: "6th Gate: The Gate of Joy",
            isCorrect: false,
            isClick: false,
          },
          {
            answer: "3rd Gate: The Gate of Life",
            isCorrect: false,
            isClick: false,
          },
        ],
      },
      {
        question:
          "The red spiral on the back of Konoha vests symbolizes a friendship with which clan?",
        options: [
          { answer: "Senju", isCorrect: false, isClick: false },
          { answer: "Uzumaki", isCorrect: true, isClick: false },
          { answer: "Namikaze", isCorrect: false, isClick: false },
          { answer: "Uchiha", isCorrect: false, isClick: false },
        ],
      },
      {
        question: "What is the name of Madara Uchiha's grand plan?",
        options: [
          { answer: "Project Tsukuyomi", isCorrect: false, isClick: false },
          { answer: "Project Tsukigakure", isCorrect: false, isClick: false },
          { answer: "Project Tsuki no Me", isCorrect: true, isClick: false },
          { answer: "Infinite Tsukuyomi", isCorrect: false, isClick: false },
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
          { answer: "5", isCorrect: true, isClick: false },
          { answer: "2", isCorrect: false, isClick: false },
          { answer: "6", isCorrect: false, isClick: false },
          { answer: "3", isCorrect: false, isClick: false },
        ],
      },
      {
        question:
          "Who does Jasper refer to when he says They'll fight like children in Twilight Saga: Eclipse?",
        options: [
          { answer: "Volturi", isCorrect: false, isClick: false },
          { answer: "Wolves", isCorrect: false, isClick: false },
          { answer: "Newborns", isCorrect: true, isClick: false },
          { answer: "Other Vampires", isCorrect: false, isClick: false },
        ],
      },
      {
        question:
          "What is the name of the main character in the movie Twilight?",
        options: [
          { answer: "Allice Cullen", isCorrect: false, isClick: false },
          { answer: "Esme Cullen", isCorrect: false, isClick: false },
          { answer: "Isabella Swan", isCorrect: true, isClick: false },
          { answer: "Rosalie", isCorrect: false, isClick: false },
        ],
      },
      {
        question: "What does Bella receive from Jacob on her birthday?",
        options: [
          { answer: "A Cake", isCorrect: false, isClick: false },
          { answer: "A Dream Catcher", isCorrect: true, isClick: false },
          { answer: "A Ring", isCorrect: false, isClick: false },
          { answer: "A Music Player", isCorrect: false, isClick: false },
        ],
      },
      {
        question: "Where do Bella and Edward get married?",
        options: [
          {
            answer: "Outside the Cullens house",
            isCorrect: true,
            isClick: false,
          },
          { answer: "In a Church", isCorrect: false, isClick: false },
          { answer: "Chalie", isCorrect: false, isClick: false },
          { answer: "At Museum", isCorrect: false, isClick: false },
        ],
      },
    ],
  },
];
