const fs=require('fs')
const pdfParse=require('pdf-parse')
const axios=require('axios')
require("dotenv").config()


const GEMINI_API_URL=`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

function isProbablyAResume(text) {
  const mustHaveKeywords = ["education", "experience", "skills", "projects", "work", "contact"];
  const matchCount = mustHaveKeywords.filter((keyword) =>
    text.toLowerCase().includes(keyword)
  ).length;
  return matchCount >= 3; // Adjust this threshold if needed
}


exports.roastResume=async (req,res)=>{
    try{
const fileBuffer=fs.readFileSync(req.file.path)
const pdfData=await pdfParse(fileBuffer)

const parsedText=pdfData.text

if (!isProbablyAResume(parsedText)) {
      fs.unlinkSync(req.file.path); // Clean up file
      return res.status(400).json({
        error: "❌ This doesn't look like a resume. Please upload a proper resume to get roasted.",
      });
    }

const prompt=`Roast this resume in a witty, sarcastic, and slightly cringy tone — include funny metaphors, Gen Z slang, and emojis 😬🔥💼. Make it entertaining yet truthful. After the roast, provide a second section with professional HR-style feedback including strengths, weaknesses, and what to improve. Keep the total output between 150–200 words.\n\n${parsedText}`

const geminiResponse= await axios.post(GEMINI_API_URL,{
    contents:[{
        parts:[{text:prompt}]
    }]
})
   
const roast=geminiResponse.data.candidates[0].content.parts[0].text;
fs.unlinkSync(req.file.path)
res.json({roast})}
    catch(error){
        console.error("Error",error.message)
        res.status(500).json({error:"Something went wrong"})
    }
}