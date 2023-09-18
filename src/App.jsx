import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-red-300">Vite + React</h1>

      <span className="countdown font-mono text-2xl">
        <span style={{ "--value": 9 }}></span>h
        <span style={{ "--value": 12 }}></span>m
        <span style={{ "--value": 30 }}></span>s
      </span>
    </>
  );
}

export default App;
