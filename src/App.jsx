import "./App.css";
import Navbar from "./NavBar";

function App() {
  return (
    <>
      <header className="Header">
        <h1>Trevor Bercher's Tenacious Bear | ITIS3135</h1>
        <hr />
        <Navbar></Navbar>
        <p>My external links will go here</p>
      </header>
      <main>
        <h2>Welcome</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          molestie turpis volutpat sollicitudin porta. Fusce et eros malesuada,
          eleifend leo sit amet, pharetra augue. Mauris efficitur ante in
          accumsan facilisis. Mauris sit amet lectus massa. Nullam elementum
          commodo metus eu eleifend. Nullam neque velit, ultricies sed diam nec,
          fringilla congue leo. Nullam a purus lorem. Cras vitae neque molestie,
          sollicitudin metus sed, finibus dui. Pellentesque lacinia augue leo,
          ut imperdiet justo lobortis eu. Phasellus maximus, massa a blandit
          porttitor, metus leo porttitor lacus, sed varius ex nisi et mauris.
        </p>
      </main>
      <footer className="footer">
        <hr />
        <p>My personal links will go here</p>
      </footer>
    </>
  );
}

export default App;
