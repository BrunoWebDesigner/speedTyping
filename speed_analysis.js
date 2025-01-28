let testTexts = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "It does not matter how slowly you go as long as you do not stop.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "Life is what happens when you're busy making other plans.",
    "Do not take life too seriously. You will never get out of it alive.",
    "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    "In the middle of every difficulty lies opportunity.",
    "Whether you think you can or you think you can’t, you’re right.",
    "Life is really simple, but we insist on making it complicated.",
    "You miss 100 percent of the shots you don’t take.",
    "Some people dream of success, while other people get up every morning and make it happen.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do.",
    "Do what you can, with what you have, where you are.",
    "Life isn’t about waiting for the storm to pass. It’s about learning to dance in the rain.",
    "Every moment is a fresh beginning.",
    "Believe you can and you’re halfway there.",
    "What we achieve inwardly will change outer reality.",
    "Act as if what you do makes a difference. It does.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "If you tell the truth, you don’t have to remember anything.",
    "When you have a dream, you’ve got to grab it and never let go.",
    "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "No matter what you’re going through, there’s a light at the end of the tunnel.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "There is nothing permanent except change.",
    "All our dreams can come true, if we have the courage to pursue them.",
    "Opportunities don’t happen. You create them.",
    "A room without books is like a body without a soul.",
    "The best way to predict your future is to create it.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Life is either a daring adventure or nothing at all.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Difficulties in life are intended to make us better, not bitter.",
    "Courage is resistance to fear, mastery of fear, not absence of fear.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Don't watch the clock; do what it does. Keep going.",
    "I find that the harder I work, the more luck I seem to have.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "I never dreamed about success, I worked for it."
    // Add additional sentences as needed
];

let startTime, endTime;

function startTest() {
    // Select a random sentence
    const randomIndex = Math.floor(Math.random() * testTexts.length);
    const testText = testTexts[randomIndex];
    
    // Set the test text
    document.getElementById("inputText").value = testText;
    
    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").readOnly = false;
    startTime = new Date().getTime();
    
    // Update the button text and functionality
    const button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    const timeElapsed = (endTime - startTime) / 1000; // in seconds
    const userTypedText = document.getElementById("userInput").value;

    const testText = document.getElementById("inputText").value;
    const typedWords = userTypedText.split(/\s+/).filter(word => word !== "");
    const testWords = testText.split(/\s+/);

    const correctWordsCount = calculateCorrectWords(typedWords, testWords);
    const totalWords = testWords.length;

    const accuracyPercentage = totalWords > 0 ? Math.round((correctWordsCount / totalWords) * 100) : 0;

    const wpm = timeElapsed > 0 ? Math.round((typedWords.length / timeElapsed) * 60) : 0;

    // Display the results
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h2>Typing Test Results:</h2>
        <p>Words Typed: ${typedWords.length}</p>
        <p>Correct Words: ${correctWordsCount} / ${totalWords}</p>
        <p>Accuracy: ${accuracyPercentage}%</p>
        <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
        <p>Words Per Minute (WPM): ${wpm}</p>
    `;

    // Reset the button
    const button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}

function calculateCorrectWords(typedWords, testWords) {
    let correctCount = 0;
    for (let i = 0; i < Math.min(typedWords.length, testWords.length); i++) {
        if (typedWords[i] === testWords[i]) {
            correctCount++;
        }
    }
    return correctCount;
}
