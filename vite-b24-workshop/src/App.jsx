import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// Importing puppyList array
import {puppyList} from './data.js'
// Import use State Hook
import { useState } from 'react'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log('useState', useState)
  return (
    <>
      <div></div>
    </>
  );
}

export default App;
