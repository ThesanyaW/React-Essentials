import './App.css'

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
  <ul>
    {dishes.map((dish) => (
      <li key = {dish.id} style = {{listStyleType: "none"}}>
        {dish.title}</li>
    ))}
  </ul>
);
}

function App() {
  return (
    <div>
    <Header name="Alex" year={new Date().getFullYear()} />
      <h2>We serve the most delicious food around</h2>
    <Main dishes={dishObjects} />
    </div>
  )
}

export default App
