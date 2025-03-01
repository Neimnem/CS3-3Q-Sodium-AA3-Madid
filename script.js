function verifyMessage() {
    let message = prompt("Enter the message: ");
    let result;

    if (message.includes("FR") && message.includes("AI") ) {
        result = "The message "  + message + "  is legitimate!";
    } else if (message.includes("AI") || message.includes("aI") || message.includes("Ai")) {
        result = "The message "  + message + "  is fake!";
    } else if (message.includes("FR")) {
        result = "The message "  + message + "  is legitimate!";
    } else {
        result = "The message "  + message + "  is not yet encoded!";
    }
    
    document.getElementById("result").innerText = result;
}
