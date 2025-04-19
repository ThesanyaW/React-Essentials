import { useState } from 'react';
import './App.css'
import chef from "./images/chef.jpg";

function Header({name, year}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const items = [
  "Macaroni & Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Minestrone Soupe"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

console.log(dishObjects);

function Main({dishes}){
  return (
    <>
    <div>
      <h2>Welcome to this beautiful restaurant!</h2>
    </div>
    <main>
      <img 
      src={chef} 
      height={200} 
      alt="A photo of a smiling chef owner" 
      />
    <ul>
      {dishes.map((dish) => (
        <li key = {dish.id} style = {{listStyleType: "none"}}>
          {dish.title}</li>
      ))}
    </ul>
  </main>
  </>
);
}

function App() {
  const [status, setStatus] = useState(true);
  return (
    <div>
      <h1>The restuarant is currently {status ? "open" : "Closed"}.</h1>
      <button onClick = {() => setStatus (! status)}> 
        {status ? "Close" : "Open"} Restuarant 
      </button>
      <Header name="Alex" year={new Date().getFullYear()} />
      <h2>We serve the most delicious food around</h2>
    <Main dishes={dishObjects} />
    </div>
  )
}

export default App
