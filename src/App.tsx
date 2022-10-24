import { Gentleman } from "./component/gentleman";

export {};
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <section className="controls">
          <p className="info">0 gentlemen pointing at you</p>
          <button className="button button--select">Select all</button>
        </section>
        <main className="main">
          <ul className="gentlemen">
            <Gentleman></Gentleman>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
