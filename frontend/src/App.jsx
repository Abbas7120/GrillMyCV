

import React from 'react'
import { SignedIn,SignedOut,RedirectToSignIn } from '@clerk/clerk-react'
import FileUploader from './FileUploader'
const App = () => {
  return (
  <>
  <SignedIn>
    <FileUploader/>
  </SignedIn>
  <SignedOut>
    <RedirectToSignIn/>
  </SignedOut>
  </>
  )
}

export default App

 