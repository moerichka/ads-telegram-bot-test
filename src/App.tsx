import React, { useEffect } from "react";

import AdSenseAd from "./components/AdSenseAd";

import "./App.css";

function App() {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  const onSendData = () => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData(
        JSON.stringify({ message: "Hello from Web App!" })
      );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Telegram Mini App</h1>
        <p>This is a mini app integrated with Telegram.</p>
        <button onClick={onSendData}>Send Data to Telegram</button>
        <div className="ads-container">
          <AdSenseAd />
        </div>
      </header>
    </div>
  );
}

export default App;
