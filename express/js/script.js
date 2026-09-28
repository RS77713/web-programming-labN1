"use strict";

// Effect 1: Random idea generator
const ideas = [
    "Design a website that changes personality every hour.",
    "Create a digital museum for forgotten everyday objects.",
    "Build a button that becomes more suspicious after every click.",
    "Make a weather page for an imaginary planet.",
    "Create a diary written from the viewpoint of your computer."
];

const ideaButton = document.querySelector("#ideaButton");
const ideaOutput = document.querySelector("#ideaOutput");

ideaButton.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * ideas.length);

    ideaOutput.textContent = ideas[randomNumber];

    // Restart the CSS animation after every click
    ideaOutput.classList.remove("idea-reveal");
    void ideaOutput.offsetWidth;
    ideaOutput.classList.add("idea-reveal");
});

// Effect 2: Colour reactor
const colourButton = document.querySelector("#colourButton");
let reactorActive = false;

colourButton.addEventListener("click", function () {
    reactorActive = !reactorActive;
    document.body.classList.toggle("reactor-mode");

    if (reactorActive) {
        colourButton.textContent = "Restore midnight colours";
    } else {
        colourButton.textContent = "Change colours";
    }
});

// Effect 3: Curiosity counter with a condition
const counterButton = document.querySelector("#counterButton");
const counterOutput = document.querySelector("#counterOutput");

let curiosityLevel = 0;

counterButton.addEventListener("click", function () {
    curiosityLevel++;
    counterOutput.textContent = `Curiosity level: ${curiosityLevel}`;

    // Event condition required by the laboratory task
    if (curiosityLevel >= 5) {
        counterOutput.textContent =
            `Curiosity level: ${curiosityLevel} — Secret laboratory status unlocked!`;

        counterOutput.classList.add("unlocked");
        counterButton.textContent = "Keep experimenting!";
    }
});