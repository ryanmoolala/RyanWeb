import React, { useState } from 'react';

import Top from './Components/Top';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Work from './Components/Work';
import About from './Components/About';

function App() {

  const [bodyNumber, setBodyNumber] = useState(0);

  return (
      <div class="min-h-screen bg-raisin-black">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
        <Top setBodyNumber={setBodyNumber}/>
        {bodyNumber == 0 ? <Home/> : null}
        {bodyNumber == 1 ? <About/> : null}
        {bodyNumber == 2 ? <Skills/> : null}
        {bodyNumber == 3 ? <Work/> : null}
        

      </div>
  );
}

/*upon entering the url

Dashboard page will have
1. Top hub that stays fixed
a. My Name
b. Home section .home()
c. About me section .about()
d. My skills + projects .skills()
e. Work experience .work()
*/

export default App;
