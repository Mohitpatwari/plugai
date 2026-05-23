# PlugAI

An AI-powered embeddable customer support chatbot platform built with Next.js, MongoDB, and Gemini API.

## Live Demo

🌐 [https://plugai-theta.vercel.app](https://plugai-theta.vercel.app)

---

## Overview

PlugAI allows businesses to create and embed AI customer support chatbots into their websites using a simple script tag.

Each chatbot can be configured with:

* Business information
* Support email
* Custom knowledge base

The AI assistant responds to customer queries using only the provided business knowledge.

---

## Features

### AI Customer Support Chatbot

* AI-powered customer support assistant
* Context-aware responses using business knowledge
* Friendly and professional conversational flow
* Prompt-controlled hallucination prevention

### Embeddable Widget

* Floating chat widget
* Simple script integration
* Lightweight client-side chatbot
* Typing indicator
* Responsive UI
* Dynamic owner-based chatbot loading

### Authentication & Session Handling

* Authentication powered by Scalekit
* Session-based access
* User-specific chatbot configuration
* Secure user authentication flow

### Dashboard & Configuration

* Configure business name
* Configure support email
* Add custom knowledge base
* Generate embeddable chatbot script

### Backend Features

* REST API routes using Next.js App Router
* MongoDB database integration
* Error handling and validation
* AI request handling
* Dynamic prompt generation

### Deployment

* Deployed on Vercel
* Environment variable configuration
* Production-ready architecture

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes
* Node.js

### Database

* MongoDB
* Mongoose

### AI Integration

* Google Gemini API

### Deployment

* Vercel

---

## How It Works

1. User creates chatbot configuration.
2. Business knowledge is stored in MongoDB.
3. A unique embed script is generated.
4. Businesses can add the script to their website.
5. Customer messages are sent to the backend API.
6. Gemini AI generates responses using the provided business knowledge.

---

## Example Embed Script

```html
<script
  src="https://your-domain.com/chatBot.js"
  data-owner-id="YOUR_OWNER_ID"
></script>
```

---

## Environment Variables

Create a `.env.local` file and add:

```env
MONGODB_URI=your_mongodb_uri
GEMINI_API_KEY=your_gemini_api_key
NEXTAUTH_SECRET=your_secret
```

---

## Installation

```bash
# Clone repository
npm install

# Run development server
npm run dev
```

---

## Current Limitations

* Gemini API may occasionally face rate limits or temporary overload.
* Retry handling and provider fallback improvements are planned.

---

## Future Improvements

* Streaming AI responses
* Chat history persistence
* Multi-provider AI fallback
* Analytics dashboard
* Lead capture system
* Theme customization
* Markdown support
* RAG-based knowledge retrieval

---

## Author

Mohit Patwari

---

## License

This project is open-source and available under the MIT License.
