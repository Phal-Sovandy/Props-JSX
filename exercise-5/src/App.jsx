import Card from "./components/Card.jsx"
import {CARD_DATA} from "./data.js"

function App() {
  return (
    <>
      <header>
        <h1>The Grand Tour</h1>
        <h3>Broadcasters</h3>
      </header>

      <div class="cards-grid">
        {CARD_DATA.map(card => <Card key={card.id} card={card}/>)}
      </div>
    </>
  );
}

export default App;
