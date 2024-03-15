// This is the question funstions that contain questions and the answers. 
var questions = [
    { 
        question: "Question: What keyword is used to declare a variable in JavaScript?", 
        answers: [
            { text: "var", correct: false },
            { text: "let" , correct: false },
            { text: "const", correct: false },
            { text: "all of the above", correct: true }
        ]
    },
    { 
        question: "What does the === operator do in JavaScript?", 
        answers: [
            { text: "Checks if two values are equal in value and type", correct: true },
            { text: "Assigns a value to a variable", correct: false },
            { text: "Compares two values for equality", correct: false },
            { text: "Checks if two values are not equal in value and type", correct: false }
        ]
    },
    { 
        question: "Which built-in method returns the length of a string in JavaScript?", 
        answers: [
            { text: ".length()", correct: false },
            { text: ".count()", correct: false },
            { text: ".size()", correct: false },
            { text: ".length", correct: true }
        ]
    },
    { 
        question: "What does the typeof operator return in JavaScript?", 
        answers: [
            { text: "The type of a variable or expression", correct: true },
            { text: "The value of a variable", correct: false },
            { text: "The size of a variable", correct: false },
            { text: "The length of a string", correct: false }
        ]
    },
    { 
        question: "What does the forEach method do in JavaScript?",
        answers: [
            { text: "Iterates over the elements of an array and executes a callback function for each element", correct: true },
            { text: "Returns the first element of an array", correct: false },
            { text: "Adds a new element to the end of an array", correct: false },
            { text: "Removes the last element from an array", correct: false }
        ]
    },
];