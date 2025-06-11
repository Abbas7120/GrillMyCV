
# 🔥 Resume Roast App

An AI-powered web application that lets users upload their resume and receive a humorous yet constructive roast of their resume using Google's Gemini API. Built with the MERN stack and integrated with Clerk for authentication.

---

## Images :
![image](https://github.com/user-attachments/assets/46d09a8d-7f11-4009-ae52-f3d824e3fec3)
![image](https://github.com/user-attachments/assets/721a3605-86b9-4ce0-9f81-fb9a128d0df8)
![image](https://github.com/user-attachments/assets/fbf8620a-3322-40c5-b688-5bc98bc746ca)
![image](https://github.com/user-attachments/assets/728cbe1c-5b78-40e1-a6bf-06b2280bb2b7)
![image](https://github.com/user-attachments/assets/4d1bcfdf-48b7-4038-b2b4-a981ad5e7ebc)



## 🚀 Tech Stack

- **Frontend**: React.js + TailwindCSS 
- **Backend**: Node.js, Express.js
- **AI Integration**: Gemini API (Google GenAI)
- **Authentication**: Clerk
- **File Parsing**: pdf-parse (Node)
- **Deployment**:
  - Frontend: Vercel
  - Backend: Render

---

## 🛠️ Features

- 📄 Upload `.pdf` resume files
- 🔐 Secure login via Clerk (used only on login page)
- 🤖 Roast generated using Gemini API with humorous Gen-Z tone & HR-style feedback
- ⛔ Prevents non-resume files from being roasted
- ✨ Cool UI and animations powered by  Tailwind

---

## 📦 Project Structure

---

## ⚠️ Challenges Faced

### 1. Clerk Authentication
- **Problem**: Clerk keys exposed in frontend
- **Solution**: Used public Clerk key safely with login page only; logout/profile shown after login

### 2. PDF Parsing & Validation
- **Problem**: Users uploaded non-resume PDFs
- **Solution**: Added `isProbablyResume()` to check content format before sending to Gemini

### 3. Gemini API Handling
- **Problem**: Prompt size & content tuning was tricky
- **Solution**: Limited parsed text + formatted prompts for creative but concise responses

### 4. Deployment Issues
- **Backend on Render**: Had to set root directory and fix missing `package.json` issues
- **Frontend on Vercel**: 404 errors fixed with proper routing and SPA config using `vercel.json`

---

## 📊 Impact

- Encourages better resume building in a fun way 🎯
- Gives users HR-style feedback instantly using AI 🤖
- Prevents misuse by validating only resume-type uploads ✅

---


---

## 🧠 Learning Outcome

> Building this project strengthened our understanding of file handling, AI API integration, secure authentication, and full-stack deployment practices.

---



