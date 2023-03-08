# Building the Concentration app

## I. Make a working draft

I create a React app called 'concentration' with the following line.

`$ npx create-react-app concentration`


### 1. Create components.

Directly in my App, I put the three big components of my app: 

- The top banner (displays the title of the game)
- The game board (displays the deck of cards)
- The footer (displays the author's name and the date)

After adding these three components, my (*oh so bare*) App.JS consists of the 16 following lines.

```
import './App.css';
import TopBanner from './TopBanner';
import GameBoard from './GameBoard';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <TopBanner />
      <GameBoard />
      <Footer />
    </div>
  );
}
export default App;
```

And each of the three component JS files looks something like this:

```
import React from 'react';

function ComponentName() {
    return(
        <div className='onlyOneElementAllowedHere'>
        </div>
    )
}

export default ComponentName;
```

Now is a good time for a first commit. 

`$ git add .`

`$ git commit -m "add three main components"`