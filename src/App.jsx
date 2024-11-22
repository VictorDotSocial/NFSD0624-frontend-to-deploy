import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [apiMessage, setApiMessage] = useState("No ha cargado");

  useEffect(() => {
    console.log("ENDPOINT");

    const getApiInfo = async () => {
      const response = await fetch(`http://localhost:3001/test`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const parsedResponse = await response.json();
      setApiMessage(parsedResponse.message);
    };

    getApiInfo();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>La respuesta de la API es:</p>
        <p>{apiMessage}</p>
      </div>
    </>
  );
}

export default App;
