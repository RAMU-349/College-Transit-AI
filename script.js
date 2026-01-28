function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();

    if (message === "") return;

    addMessage(message, "user");
    input.value = "";

    setTimeout(() => {
        const reply = getBotReply(message.toLowerCase());
        addMessage(reply, "bot");
    }, 500);
}

function addMessage(text, sender) {
    const chatBox = document.getElementById("chatBox");
    const msgDiv = document.createElement("div");
    msgDiv.className = "message " + sender;
    msgDiv.innerHTML = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(msg) {

    if (msg.includes("route")) {
        return `
        🛣️ <b>Bus Routes:</b><br>
        • Route 1: City Center → College<br>
        • Route 2: Railway Station → College<br>
        • Route 3: Bus Stand → College
        `;
    }

    if (msg.includes("timing") || msg.includes("time")) {
        return `
        ⏰ <b>Bus Timings:</b><br>
        • Morning: 7:30 AM, 8:15 AM, 9:00 AM<br>
        • Evening: 4:30 PM, 5:30 PM, 6:15 PM
        `;
    }

    if (msg.includes("stop")) {
        return `
        🚏 <b>Major Bus Stops:</b><br>
        • City Center<br>
        • Railway Station<br>
        • Main Bus Stand<br>
        • Market Road
        `;
    }

    if (msg.includes("contact")) {
        return "📞 Transport Office Contact: 9876543210";
    }

    if (msg.includes("hello") || msg.includes("hi")) {
        return "Hello! 😊 How can I help you with bus information?";
    }

    return "❓ Sorry, I didn't understand. Please ask about bus routes, timings, or stops.";
}
