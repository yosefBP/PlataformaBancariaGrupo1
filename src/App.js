<<<<<<< HEAD
import logo from './logo.svg';
import team from './dt.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div><img src={team} alt="team" /></div>
    </div>
  );
}
=======
import express from "express";

const app = express()
const port = 5500
>>>>>>> 035405fe0f9d79e86e8bf34c2c9a594208406a8c

app.get("/",(req, res)=>{
    res.send("Helloword")
})

app.listen(port, () => {
    console.log('Server connect on localhost:${port}')
})