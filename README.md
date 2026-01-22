# 👨‍🍳 What's Left, Chef?

**What's Left, Chef?** is a modern React application that turns your random kitchen ingredients into delicious recipe ideas. Built with **React 18**, **Vite**, and powered by the **Hugging Face Inference API**, it leverages the **Mistral-7B** Large Language Model to act as your personal digital chef.

> This project was developed as part of the **Scrimba - Learn React** course.

---

## ✨ Features

* **Ingredient Management**: Add ingredients dynamically to your "pantry" list.
* **AI-Powered Recipes**: Generates creative recipes using the `Mistral-7B-Instruct-v0.3` model.
* **Markdown Rendering**: Recipes are formatted beautifully with headers, bold text, and bullet points using `react-markdown`.
* **Modern UI/UX**: A clean, responsive interface designed for both home cooks and professional foodies.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React** | UI Library for building the component architecture. |
| **Vite** | Lightning-fast build tool and development server. |
| **Hugging Face SDK** | Interface for connecting to AI models. |
| **Mistral-7B-v0.3** | The LLM used to process ingredients and generate text. |
| **React Markdown** | Converts the AI's raw text response into formatted HTML. |

---

## ⚙️ Setup and Installation

### 1. Prerequisites
* **Node.js**: (Latest LTS version recommended)
* **Hugging Face Account**: An Access Token is required (Available at [hf.co/settings/tokens](https://huggingface.co/settings/tokens))

### 2. Clone the Repository
```bash
git clone <your-repository-url>
cd chef
