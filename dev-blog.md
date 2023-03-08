# Building the Concentration app

## Make a working draft

Create a React app.

`$ npx create-react-app concentration`

1. Create components.

Directly in my App, I put the three big components of my app: TopBanner, 

So, my (*oh so bare*) App.JS consists of the 16 following lines.

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

