import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// Importing puppyList array
import { puppyList } from "./data.js";
// Import use State Hook
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);
  // adding FeatPupID
  const [featPupId, setFeatPupId] = useState(null);
  // adding featuredPop arry
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log('FeaturePup:', featuredPup)
  return (
    <>
      <div className="App">

        {puppies.map((puppy) => {
          return (
            <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>
              {puppy.name}
            </p>
          );
        })} 
       {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
           )}
      </div>
    </>
  );
}

export default App;
