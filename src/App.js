import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className={"h-screen grid grid-flow-col grid-cols-8"}>
        <div className={"bg-red-400"}>1</div>
        <div className={"bg-yellow-400 col-span-3"}>2</div>
        <div className={"bg-green-400 col-span-4"}>3</div>
      </section>
    </div>
  );
}

export default App;
