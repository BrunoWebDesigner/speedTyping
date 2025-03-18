let testTexts = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "It does not matter how slowly you go as long as you do not stop.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "In three words I can sum up everything I have learned about life: it goes on.",
    "Life is what happens when you are busy making other plans.",
    "Do not take life too seriously. You will never get out of it alive.",
    "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    "In the middle of every difficulty lies opportunity.",
    "Whether you think you can or you think you cannot, you are right.",
    "Life is really simple, but we insist on making it complicated.",
    "You miss 100 percent of the shots you do not take.",
    "Some people dream of success, while other people get up every morning and make it happen.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Twenty years from now you will be more disappointed by the things you did not do than by the ones you did do.",
    "Do what you can, with what you have, where you are.",
    "Life is not about waiting for the storm to pass. It is about learning to dance in the rain.",
    "Every moment is a fresh beginning.",
    "Believe you can and you are halfway there.",
    "What we achieve inwardly will change outer reality.",
    "Act as if what you do makes a difference. It does.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Everything you have ever wanted is on the other side of fear.",
    "If you tell the truth, you do not have to remember anything.",
    "When you have a dream, you have got to grab it and never let go.",
    "I cannot change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "No matter what you are going through, there is a light at the end of the tunnel.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "There is nothing permanent except change.",
    "All our dreams can come true, if we have the courage to pursue them.",
    "Opportunities do not happen. You create them.",
    "A room without books is like a body without a soul.",
    "The best way to predict your future is to create it.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so do not waste it living someone else's life.",
    "Life is either a daring adventure or nothing at all.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Difficulties in life are intended to make us better, not bitter.",
    "Courage is resistance to fear, mastery of fear, not absence of fear.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Do not watch the clock; do what it does. Keep going.",
    "I find that the harder I work, the more luck I seem to have.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The purpose of our lives is to be happy.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "Success is how high you bounce when you hit bottom.",
    "Do what you feel in your heart to be right, for you will be criticized anyway.",
    "He who opens a school door closes a prison.",
    "Do not let the fear of losing be greater than the excitement of winning.",
    "A person who never made a mistake never tried anything new.",
    "Be yourself; everyone else is already taken.",
    "Happiness depends upon ourselves.",
    "The only way to do great work is to love what you do.",
    "It is not what happens to you, but how you react to it that matters.",
    "If you want to lift yourself up, lift up someone else.",
    "A day without laughter is a day wasted.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "You cannot go back and change the beginning, but you can start where you are and change the ending.",
    "It does not matter how many times you get knocked down, but how many times you get up.",
    "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    "When one door closes, another opens.",
    "Keep your face always toward the sunshine, and the shadows will fall behind you.",
    "The way to get started is to quit talking and begin doing.",
    "It is never too late to be what you might have been.",
    "Your time is limited, so do not waste it living someone else's life.",
    "If life were predictable, it would cease to be life and be without flavor.",
    "You must do the things you think you cannot do.",
    "Live each day as if your life had just begun.",
    "The best way to cheer yourself up is to try to cheer someone else up.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "You do not find the happy life, you make it.",
    "If opportunity does not knock, build a door.",
    "Never regret anything that made you smile.",
    "You get in life what you have the courage to ask for.",
    "Dream big and dare to fail.",
    "The only impossible journey is the one you never begin.",
    "If you want to fly, give up everything that weighs you down.",
    "Happiness is not by chance, but by choice.",
    "Do not wait for opportunity. Create it.",
    "I never dreamed about success, I worked for it."
];


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("startButton").click();
    }
});

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
