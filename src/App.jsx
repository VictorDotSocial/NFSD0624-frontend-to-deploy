import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [apiMessage, setApiMessage] = useState("No ha cargado");

  useEffect(() => {
    console.log(
      "RUTA VARIABLE ENTORNO",
      process.env.REACT_APP_API_BASE_URL || "NO EXISTE"
    );

    const getApiInfo = async () => {
      const response = await fetch(
        `https://nfsd0624-backend-to-deploy.onrender.com/test`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
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
