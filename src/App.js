import './App.css';

import Sidebar from "./components/Sidebar/Sidebar"
import Cards from "./components/Cards/Cards"
import Mail from "./components/Mail/Mail"

function App() {
  return (
    <div className="App">
      <section className={"h-screen grid grid-flow-col grid-cols-10"}>
        <Sidebar />
        <Cards />
        <Mail />
      </section>
    </div>
  );
}

export default App;
