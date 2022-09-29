import React from "react";
import AdDesigner from "./AdDesigner";
import "./App.css";
import Header from "./Header";
import Votes from "./Votes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <AdDesigner />
        <Votes />
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
