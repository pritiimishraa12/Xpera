// Groq AI Integration Services

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const API_URL = "https://api.groq.com/openai/v1/chat/completions";

/**
 * 1. Groq AI (Text Chat)
 * Used for the AI Career Coach or conversational features.
 */
export async function chatWithAI(messages, systemPrompt = "You are a helpful AI Career Coach for students.") {
    if (!GROQ_API_KEY) {
        throw new Error("Missing VITE_GROQ_API_KEY in environment variables.");
    }

    const payload = {
        model: "llama-3.3-70b-versatile", // Powerful active model for general conversational tasks
        messages: [
            { role: "system", content: systemPrompt },
            ...messages
        ],
        temperature: 0.7,
        max_tokens: 1024,
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${GROQ_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || "Failed to communicate with Groq AI.");
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

/**
 * 2. Groq Vision (Image Processing)
 * Used to conditionally analyze documents, certificates, or resumes provided by students as images.
 */
export async function analyzeDocumentVision(dataUrl, prompt = "Analyze this document and extract key professional skills, names, or verification data.") {
    if (!GROQ_API_KEY) {
        throw new Error("Missing VITE_GROQ_API_KEY in environment variables.");
    }

    const payload = {
        model: "meta-llama/llama-4-scout-17b-16e-instruct", // Currently supported Groq Vision multimodal model
        messages: [
            {
                role: "user",
                content: [
                    { type: "text", text: prompt },
                    {
                        type: "image_url",
                        image_url: {
                            url: dataUrl,
                        },
                    },
                ],
            },
        ],
        temperature: 0.2, // Keep temperature low for deterministic data extraction
        max_tokens: 1024,
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${GROQ_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || "Failed to process image via Groq Vision.");
    }

    const data = await response.json();
    return data.choices[0].message.content;
}
