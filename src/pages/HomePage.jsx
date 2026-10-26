import { useState } from "react";

import Button from "../components/button/Button";



export default function HomePage() {
    const [findText, setFindText] = useState('')

  return (
    <div className="main-content">
        
      <div className="head-text">
        <h1>Discover the people behind the code</h1>
      </div>
      <div className="head-subtext">
        <p>
          DevFinder lets you explore GitHub profiles in seconds. Type a username
          to see public repos, activity stats and contact links, all in one
          clean view without digging through GitHub itself.
        </p>
      </div>

    <input type="text"
     name="" 
     id=""
     className="input-finder"
     placeholder="Enter GitHub username..."
     onChange={(e) => setFindText(e.target.value)}
     />

      <div className="head-button">
        <Button 
            buttonName='Find Developer'
            type="button"
            onClick = {() => console.log('clicked')}
            className = 'button-finder'
        />
      </div>
    </div>
  );
}
