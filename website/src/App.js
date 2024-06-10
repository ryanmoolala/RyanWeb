import React from 'react';

import Top from './Components/Top';

function App() {
  return (

    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Top />
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
