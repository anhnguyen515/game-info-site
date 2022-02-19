import GameList from "./components/GameList";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <h2>New and trending</h2>
        <p>Based on player count and release date</p>
        <GameList />
      </Layout>
    </div>
  );
}

export default App;
