//helper function to generate various randon numbers
const randomiser = (num) => {
    return Math.floor(Math.random() * num);
}


// Arrays to store topics, questions and answers (first answer in nested array is always the correct one)
const topics = ["History", "Sport", "Geography", "Science"];

const historyQ = ["Who was the first Roman Emperor?", "When was Magna Carta signed?", ];

const sportQ = ["How many nations have won the football world cup", "In which Olympics were medals introduced?"];

const geographyQ = ["What is the capital of Jordan?", "In which continent is the Great Rift Valley", ];

const scienceQ = ["How far is an Atronomical Unit in millions of km?", "Which is the only planet with a clockwise orbit?", ];

const historyA = [["Augustus", "Tiberius", "Claudius", "Julius Caesar"], ["1215","1066", "1125", "1337" ]];

const sportA = [["8", "6", "7", "9"], ["1904", "1896", "1908", "1924"]];

const geographyA = [["Amman", "Riyadh", "Ankara", "Damascus"], ["Africa", "Europe", "Asia", "Antarctica"]];

const scienceA = [["150", "120", "180", "200"], ["Venus", "Mars", "Mercury", "Saturn"]];

// function to generate messages

const messages = () => {
    //variable for number of potential answers for each question
    const numAns = 4;
    //randomly generate a number for the answer arrays
    let answer = randomiser(numAns)
    // first generate topic and associated message
    let topic = topics[randomiser(topics.length)];
    console.log(`The topic chosen is: ${topic}`);
    
    //generate question from topic and potential answer
    switch (topic) {
        case "History":
            let questionH = randomiser(historyQ.length);
            console.log(`The question is: ${historyQ[questionH]}`);
            console.log(`Is the answer?: ${historyA[questionH][answer]}`);
            break;
        case "Sport":
            let questionS = randomiser(sportQ.length);
            console.log(`The question is: ${sportQ[questionS]}`);
            console.log(`Is the answer?: ${sportA[questionS][answer]}`);
            break;
        case "Geography":
            let questionG = randomiser(sportQ.length);
            console.log(`The question is: ${geographyQ[questionG]}`);
            console.log(`Is the answer?: ${geographyA[questionG][answer]}`);
            break;
        case "Science":
            let questionT = randomiser(scienceQ.length);
            console.log(`The question is: ${scienceQ[questionT]}`);
            console.log(`Is the answer?: ${scienceA[questionT][answer]}`);
            break;  
        default:
            console.log("No such question")         
    }
}


messages();