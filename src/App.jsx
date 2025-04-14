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
  "Tofu with Vegetables"
];

function Main({dishes}){
  return (
  <ul>
    {dishes.map((dish) => (
      <li Style = {{listStyleType: "none"}}>{dish}</li>
    ))}
  </ul>
);
}

function App() {
  return (
    <div>
    <Header name="Alex" year={new Date().getFullYear()} />
      <h2>We serve the most delicious food around</h2>
    <Main dishes={items} />
    </div>
  )
}

export default App
