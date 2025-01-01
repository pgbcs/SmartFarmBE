const express = require("express");
const OpenAI = require("openai");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 5000;

// OpenAI configuration
const openai = new OpenAI({
  apiKey: "xai-TqHhDPBHn7BArdQaY79jszcdKhUJvQM3qVIRSNzwEe6fijiWQF0jXOmhS0ty8ZmAsQTeAEjJ4fMjHv8x", // Replace with your actual API key
  baseURL: "https://api.x.ai/v1",
});

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Define a route to interact with OpenAI
app.post("/api/chat", async (req, res) => {
  try {
    // Extract user message from the request body
    const { userMessage } = req.body;

    if (!userMessage) {
      return res.status(400).json({ error: "User message is required" });
    }

    // Create a completion using OpenAI
    const completion = await openai.chat.completions.create({
      model: "grok-2-1212",
      messages: [
        { role: "system", content: "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy." },
        { role: "user", content: userMessage },
      ],
    });
    console.log(completion.choices[0].message)
    // Send the response back to the client
    const assistantMessage = completion.choices[0].message.content;
    res.json({ reply: assistantMessage });
  } catch (error) {
    console.error("Error creating completion:", error.message);
    res.status(500).json({ error: "Failed to generate a response" });
  }
});

const route = require("./routes/index");
route(app);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
