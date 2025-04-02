document.addEventListener("DOMContentLoaded", function () {
    let submitQuiz1 = document.querySelector("#submitQuiz1");
    let submitQuiz2 = document.querySelector("#submitQuiz2");
    if (submitQuiz1) {
        submitQuiz1.addEventListener("click", checkQuiz1Answers);
    }
    if (submitQuiz2) {
        submitQuiz2.addEventListener("click", checkQuiz2Answers);
    }
});

//QUIZ 1
function checkQuiz1Answers() {
    let score = 0;
    let result = "";

    // Get the form elements
    let quiz1 = document.forms["quiz1"];

    // Ensure a selection is made for each question
    if (![...quiz1.colour].some(r => r.checked) || 
    ![...quiz1.animal].some(r => r.checked) || 
    ![...quiz1.music].some(r => r.checked) || 
    ![...quiz1.hobby].some(r => r.checked)) {
    alert("Please answer all the questions.");
    return;
}

    }

    // Calculate the score based on answers
    let answer1 = quiz1.colour.value;
    if (answer1 === "pink") score += 1;
    else if (answer1 === "yellow") score += 2;
    else if (answer1 === "green") score += 3;
    else score += 4;

    let answer2 = quiz1.animal.value;
    if (answer2 === "red-panda") score += 1;
    else if (answer2 === "giraffe") score += 2;
    else if (answer2 === "jaguar") score += 3;
    else score += 4;

    let answer3 = quiz1.music.value;
    if (answer3 === "pop") score += 1;
    else if (answer3 === "hip-hop") score += 2;
    else if (answer3 === "rock") score += 3;
    else score += 4;

    let answer4 = quiz1.hobby.value;
    if (answer4 === "read") score += 1;
    else if (answer4 === "music") score += 2;
    else if (answer4 === "walk") score += 3;
    else score += 4;

    // Determine result based on the score
    if (score < 6) result = "Laundry";
    else if (score < 10) result = "Dishes";
    else if (score < 13) result = "Vacuuming";
    else result = "Dusting";

    // Show the result
    alert(`The chore you should do today is ${result}`);


//QUIZ 2

function checkQuiz2Answers() {
    let score = 0;
    let result = "";

    // Get the form elements
    let quiz2 = document.forms["quiz2"];

    // Ensure a selection is made for each question
    if (!quiz2.clothing.value || !quiz2.relax.value || !quiz2.hobby.value || !quiz2.figure.value) {
        alert("Please answer all the questions.");
        return;
    }

    // Calculate the score based on answers
    let answer1 = quiz2.clothing.value;
    if (answer1 === "trousers") score += 1;
    else if (answer1 === "hoodie") score += 2;
    else if (answer1 === "tshirt") score += 3;
    else score += 4;

    let answer2 = quiz2.relax.value;
    if (answer2 === "sofa") score += 1;
    else if (answer2 === "bed") score += 2;
    else if (answer2 === "outside") score += 3;
    else score += 4;

    let answer3 = quiz2.hobby.value;
    if (answer3 === "videogame") score += 1;
    else if (answer3 === "reading") score += 2;
    else if (answer3 === "movies") score += 3;
    else score += 4;

    let answer4 = quiz2.figure.value;
    if (answer4 === "jesus") score += 1;
    else if (answer4 === "cleopatra") score += 2;
    else if (answer4 === "einstein") score += 3;
    else score += 4;

    // Determine result based on the score
    if (score < 6) result = "Puzzle";
    else if (score < 10) result = "Nature Walk";
    else if (score < 13) result = "Meditate";
    else result = "Write a short story";

    // Show the result
    alert(`The chore you should do today is ${result}`);
}


