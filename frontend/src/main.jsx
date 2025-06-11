
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from "@clerk/clerk-react";

import { BrowserRouter } from "react-router-dom";

import App from './App.jsx'
const clerkPubKey = "pk_test_aW5ub2NlbnQtcGhlYXNhbnQtNDIuY2xlcmsuYWNjb3VudHMuZGV2JA";
createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkPubKey}>
     <BrowserRouter>
     <App />
     </BrowserRouter>
     
  </ClerkProvider>
 
   
,
)
