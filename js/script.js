console.log("script.js connected!");

const userAnswers = {};

const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block, index) => {
    const answerButtons = block.querySelectorAll(".answer-btn");
    
    answerButtons.forEach((button) => {
        button.addEventListener("click", () => {

            answerButtons.forEach((btn) => btn.classList.remove("selected"));
            
            button.classList.add("selected");

            const answerValue = button.getAttribute("data-answer");
            const strokeType = button.getAttribute("data-stroke");

            userAnswers[`question-${index + 1}`] = {
                answer: answerValue,
                stroke: strokeType,
            };
            console.log(userAnswers);
        });
    });
});
