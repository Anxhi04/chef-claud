const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients...`;

export async function getRecipeFromMistral(ingredientsArr) {
    try {
        const response = await fetch(
            "http://localhost:8080/https://router.huggingface.co/together/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        { role: "user", content: `I have ${ingredientsArr.join(", ")}. Please give me a recipe!` }
                    ],
                    max_tokens: 1024
                })
            }
        );

        const data = await response.json();
        if (!data.choices || !data.choices[0]) {
            console.error("API response invalid:", data);
            return "Sorry, no recipe could be generated.";
        }

        return data.choices[0].message.content;

    } catch (err) {
        console.error("Error fetching recipe:", err);
        return "Sorry, an error occurred.";
    }
}
