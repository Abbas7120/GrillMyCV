import React, { useState } from "react";
import { UserButton,useUser } from "@clerk/clerk-react";

import axios from "axios";
const FileUploader = () => {

 const [roast, setRoast] = useState("");
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState("")

  const {user}=useUser();

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);
      setError("")
      setRoast("")

      const res = await axios.post("https://grillmycv.onrender.com/api/resume/upload", formData);
      setRoast(res.data.roast);
    } catch (err) {
      console.error(err);
      if(err.response && err.response.data && err.response.data.error){
        setError(err.response.data.error)
      }
      else {
        setError("Somehting went wrong . Please try again!")
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white flex flex-col items-center justify-center px-4 py-10">
     <nav className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-gray-700 shadow-sm">
  <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
    <h1 className="text-white font-bold text-xl  px-4 py-2 rounded-lg">
     GrillMyCV
    </h1>
      <UserButton afterSignOutUrl="/"/>
  </div>
</nav>
{/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">👀 Welcome to the World of Roasting Resumes</h1>
        <p className="text-lg text-gray-200 mb-10">
       Think your resume is perfect? Think again. Our AI-powered HR has zero chill and a sharp eye for detail. Upload your resume and get a hilarious yet brutally honest roast — because feedback is easier to swallow with a side of humor. </p>
      </div>

      {/* Upload Section */}
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg text-gray-900 text-center">
        <h2 className="text-2xl font-semibold mb-4">📄 Upload Your Resume</h2>
   <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          className="mb-4 w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 cursor-pointer flex "
        />
        {loading && <p className="text-indigo-700 font-medium">Uploading and roasting your resume...</p>}
      </div>
      {/*errorsection*/}
{
    error && (
      <div className="mt-10 w-full max-w-4xl bg-gray-100 text-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Error</h3>
          <pre className="whitespace-pre-wrap font-mono text-sm bg-white p-4 rounded-xl border border-gray-300 overflow-auto max-h-[400px]">
            {error}
          </pre>
        </div>    
    )
}
      {/* Roast Result Section */}
      {roast && (
        <div className="mt-10 w-full max-w-4xl bg-gray-100 text-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">🔥 AI Roast of Your Resume</h3>
          <pre className="whitespace-pre-wrap font-mono text-sm bg-white p-4 rounded-xl border border-gray-300 overflow-auto max-h-[400px]">
            {roast}
          </pre>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
