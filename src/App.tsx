import React from "react";
import AdDesigner from "./components/AdDesigner";
import "./App.css";
import Header from "./components/Header";
import Votes from "./components/Votes";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <AdDesigner />
        <Votes />
        <Counter />
      </div>
      {/* <table>
        <tr>
          <td >
            <AdDesigner />
          </td>
          <td>
            <Votes />
          </td>
        </tr>
      </table> */}
    </div>
  );
}

export default App;
