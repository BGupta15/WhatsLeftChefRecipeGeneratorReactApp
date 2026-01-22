Chef Claude is a modern React application that turns your random kitchen ingredients into delicious recipe ideas. Built with React 18, Vite, and powered by the Hugging Face Inference API, it leverages the Mistral-7B Large Language Model to act as your personal digital chef.

Features
Ingredient Management: Add ingredients dynamically to your "pantry" list.

AI-Powered Recipes: Generates creative recipes using the Mistral-7B-Instruct model.

Markdown Rendering: Recipes are formatted beautifully with headers, bold text, and bullet points using react-markdown.

Modern UI/UX: A clean, responsive interface designed for both home cooks and professional foodies.

Tech StackTechnologyPurposeReactUI Library for building the component architecture.ViteLightning-fast build tool and development server.Hugging Face SDKInterface for connecting to AI models.Mistral-7B-v0.3The LLM used to process ingredients and generate text.React MarkdownConverts the AI's raw text response into formatted HTML.


Setup and Installation
1. Prerequisites
Node.js (Latest LTS version recommended)

A Hugging Face account and an Access Token (Available at hf.co/settings/tokens)

2. Clone the Repository
Bash
git clone <your-repository-url>
cd chef-claude
3. Install Dependencies
Bash
npm install
4. Environment Configuration
Create a .env file in the root directory and add your Hugging Face API key:

Code snippet
VITE_HF_ACCESS_TOKEN=your_hugging_face_token_here
5. Start the Development Server
Bash
npm run dev
Open http://localhost:5173 in your browser to start cooking!


Project Architecture
Main.jsx: Manages the global state for ingredients and the generated recipe.

ai.js: Logic for communicating with the Hugging Face Inference API.

IngredientsList.jsx: Handles the display of the current pantry and the "Get Recipe" button logic.

Recipe.jsx: A dedicated component for rendering the AI output via react-markdown.


Usage
Type an ingredient (e.g., "Eggplant") into the input box and click Add Ingredient.

Once you have at least 4 ingredients, the "Get a recipe" section will appear.

Click the button and wait for Chef Claude to generate a custom markdown recipe based on your list.