
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{ textAlign: 'center', marginTop: '4rem', fontFamily: 'sans-serif' }}>
    <h1 style={{ fontSize: '2.5rem' }}>Cindy Hsieh</h1>
    <p style={{ fontSize: '1.2rem' }}>Cellist | Performer | Collaborator</p>
    <p style={{ marginTop: '1rem', color: '#555' }}>
      A Taiwanese cellist based in New York, sharing stories and emotions through the voice of the cello.
    </p>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
