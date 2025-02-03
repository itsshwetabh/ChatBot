


import { GoogleGenerativeAI } from "@google/generative-ai";

async function get() {
    const genAI = new GoogleGenerativeAI("");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Explain how AI works give your answer wrapped inside an div tag , and give the text wrapped under a single div tag, do not give any css";

    try {
        const result = await model.generateContent(prompt);
        const final_resp = result.response.text().replace(/```html|```/g, "");

        // Update the content in the HTML
        const contentDiv = document.getElementById('Content');
        if (contentDiv) {
            contentDiv.innerHTML = final_resp;
        } else {
            console.error("Content div not found!");
        }
    } catch (error) {
        console.error("Error fetching AI response:", error);
    }
}

// Run the function when the page loads
window.onload = get;
