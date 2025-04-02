function checkAnswers() {
    let score = 0;
    let result = "";

    // Get the form elements
    let quiz = document.forms["quiz"];

    // Ensure a selection is made for each question
    if (!quiz.colour.value || !quiz.animal.value || !quiz.music.value || !quiz.hobby.value) {
        alert("Please answer all the questions.");
        return;
    }

    // Calculate the score based on answers
    let answer1 = quiz.colour.value;
    if (answer1 === "pink") score += 1;
    else if (answer1 === "yellow") score += 2;
    else if (answer1 === "green") score += 3;
    else score += 4;

    let answer2 = quiz.animal.value;
    if (answer2 === "red-panda") score += 1;
    else if (answer2 === "giraffe") score += 2;
    else if (answer2 === "jaguar") score += 3;
    else score += 4;

    let answer3 = quiz.music.value;
    if (answer3 === "pop") score += 1;
    else if (answer3 === "hip-hop") score += 2;
    else if (answer3 === "rock") score += 3;
    else score += 4;

    let answer4 = quiz.hobby.value;
    if (answer4 === "read") score += 1;
    else if (answer4 === "music") score += 2;
    else if (answer4 === "walk") score += 3;
    else score += 4;

    // Determine result based on the score
    if (score < 6) result = "HTML";
    else if (score < 10) result = "Python";
    else if (score < 13) result = "JavaScript";
    else result = "Java";

    // Show the result
    alert(`The programming language you should learn is ${result}`);
}

// Ensure the function is bound correctly
document.addEventListener("DOMContentLoaded", function () {
    let submitButton = document.querySelector("button");
    if (submitButton) {
        submitButton.addEventListener("click", checkAnswers);
    }
});
