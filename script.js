
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function geminiAI() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let response = document.getElementById("aiResponse");

    if (input.includes("engineer")) {
        response.innerHTML = "Jong Kelly is a professional software engineer specializing in modern web systems and AI integration.";
    }
    else if (input.includes("football")) {
        response.innerHTML = "Jong Kelly is an active football player with strong teamwork and leadership skills.";
    }
    else if (input.includes("content")) {
        response.innerHTML = "Jong Kelly creates engaging digital content across social media platforms.";
    }
    else {
        response.innerHTML = "Thank you for your question. Jong Kelly will respond professionally.";
    }
}
